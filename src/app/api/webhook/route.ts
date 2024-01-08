import { stripe } from "../../../lib/stripe";
import { NextResponse } from "next/server";
import Stripe from "stripe";
import prismadb from "../../../lib/prismadb";

export async function POST(req: Request) {
  const body = await req.text();
  const signature = req.headers.get("stripe-signature") as string;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );

    const session = event.data.object as Stripe.Checkout.Session;

    if (event.type === "checkout.session.completed") {
      const subscription = await stripe.subscriptions.retrieve(
        session.subscription as string
      );

      if (!session?.metadata?.userId) {
        return new NextResponse("User id is required", { status: 400 });
      }

      await prismadb.userSubscription.create({
        data: {
          userId: session?.metadata?.userId,
          stripeSubscriptionId: subscription.id,
          stripeCustomerId: subscription.customer as string,
          stripePriceId: subscription.items.data[0].price.id,
          stripeCurrentPeriodEnd: new Date(
            subscription.current_period_end * 1000
          ),
        },
      });
    }

    if (event.type === "invoice.payment_succeeded") {
      const subscription = await stripe.subscriptions.retrieve(
        session.subscription as string
      );

      await prismadb.userSubscription.update({
        where: {
          stripeSubscriptionId: subscription.id,
          userId: session?.metadata?.userId,
        },
        data: {
          stripePriceId: subscription.items.data[0].price.id,
          stripeCurrentPeriodEnd: new Date(
            subscription.current_period_end * 1000
          ),
        },
      });
    }

    // TODO: Fix this
    if (event.type === "customer.subscription.updated") {
      const subscription = event.data.object;

      if (
        subscription.cancellation_details?.reason === "cancellation_requested"
      ) {
        const userId = session?.metadata?.userId; // Extract userId from session metadata

        if (!userId) {
          console.error("Missing userId in session metadata");
          // Handle the missing userId case, for example:
          return new NextResponse("Missing userId in session metadata", {
            status: 400,
          });
        } else {
          try {
            await prismadb.userSubscription.update({
              where: { userId: userId },
              data: { stripeSubscriptionId: undefined },
            });
          } catch (error) {
            console.error("Error updating subscription:", error);
            // Handle the update error, potentially logging more details
            return new NextResponse("Error updating subscription", {
              status: 500,
            });
          }
        }
      }
    }

    return new NextResponse(null, { status: 200 });
  } catch (error: any) {
    return new NextResponse(`Webhook Error: ${error.message}`, { status: 400 });
  }
}
