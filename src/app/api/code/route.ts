import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { OpenAI } from "openai";
import { ChatCompletionSystemMessageParam } from "openai/resources/index.mjs";
import { checkApiLimit, increaseApiLimit } from "../../../lib/api-limit";
import { checkSubscription } from "@/lib/subscription";

const apiKey = process.env.OPENAI_API_KEY;

const openai = new OpenAI({ apiKey });

const instructions: ChatCompletionSystemMessageParam = {
  role: "system",
  content:
    "You are a code generator. You must answer only in markdown code snippets. Use code comments for explanations.",
};

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { messages } = body;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!apiKey) {
      return new NextResponse("OpenAI API key not configured", { status: 401 });
    }

    if (!messages) {
      return new NextResponse("Messages are required", { status: 400 });
    }

    const freeTrial = await checkApiLimit();
    const isPro = await checkSubscription();

    if (!freeTrial && !isPro) {
      return new NextResponse("Free trial has expired.", { status: 403 });
    }

    if (!isPro) {
      await increaseApiLimit();
    }

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [instructions, ...messages],
    });

    return NextResponse.json(response.choices[0].message);
  } catch (error) {
    console.error("[CODE_ERROR]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
