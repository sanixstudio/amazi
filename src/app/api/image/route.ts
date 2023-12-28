import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { OpenAI } from "openai";
import { checkApiLimit, increaseApiLimit } from "../../../lib/api-limit";

const apiKey = process.env.OPENAI_API_KEY;

const openai = new OpenAI({ apiKey });

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { prompt, amount = 1, resolution = "512x512" } = body;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!apiKey) {
      return new NextResponse("OpenAI API key not configured", { status: 401 });
    }

    if (!prompt) {
      return new NextResponse("Messages are required", { status: 400 });
    }

    if (!amount) {
      return new NextResponse("Amount is required", { status: 400 });
    }

    if (!resolution) {
      return new NextResponse("Resolution is required", { status: 400 });
    }

    const numAmount = parseInt(amount, 10);
    if (isNaN(numAmount)) {
      return new NextResponse("Invalid amount", { status: 400 });
    }

    const freeTrial = await checkApiLimit();

    if (!freeTrial) {
      return new NextResponse("Free trial has expired.", { status: 403 });
    }

    await increaseApiLimit();

    const response = await openai.images.generate({
      model: "dall-e-2",
      prompt,
      n: numAmount,
      size: resolution,
    });

    return NextResponse.json(response.data);
  } catch (error) {
    console.error("[IMAGE_ERROR]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
