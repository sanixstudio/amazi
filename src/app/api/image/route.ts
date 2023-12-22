import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { OpenAI } from "openai";
import { ImageCreateVariationParams } from "openai/resources/index.mjs";

const apiKey = process.env.OPENAI_API_KEY;

const openai = new OpenAI({ apiKey });

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { prompt, n, size } = body;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!apiKey) {
      return new NextResponse("OpenAI API key not configured", { status: 401 });
    }

    if (!prompt) {
      return new NextResponse("Messages are required", { status: 400 });
    }

    const response = await openai.images.generate({
      model: "dall-e-3",
      prompt: prompt,
      n: 3,
      size: size,
    });

    return NextResponse.json(response.data.data[0].url);
  } catch (error) {
    console.error("[CODE_ERROR]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
