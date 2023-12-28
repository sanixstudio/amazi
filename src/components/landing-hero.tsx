"use client";
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import Typewriter from "typewriter-effect";
import { Button } from "./ui/button";

const LandingHero = () => {
  const isSignedIn = useAuth();

  return (
    <div
      className="text-white font-bold py-36 text-center space-y-5"
      style={{
        backgroundImage: "url('/images/ai_bg.png')",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right",
      }}
    >
      <div className="text-4xl sm:text-5xl py-8 rounded-2xl backdrop-blur-lg md:text-6xl lg:text-7xl max-w-[900px] space-y-5 font-extrabold bg-gradient-to-bl from-white/10 border border-white/10 to-transparent">
        <h1>The best AI Too for</h1>
        <div className="text-transparent bg-clip-text bg-gradient-to-t from-purple-400 to-pink-600">
          <Typewriter
            options={{
              strings: [
                "Chatbot",
                "Photo Generation",
                "Music Generation",
                "Code Generation",
                "Video Generation",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <div className="text-sm md:text-xl font-light text-zinc-400">
          Create content using AI 10x faster
        </div>
        <div>
          <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
            <Button
              variant={"premium"}
              className="md:text-lg p-4 md:p-6 rounded-full font-semibold"
            >
              Start Generating for Free
            </Button>
          </Link>
        </div>
        <div className="text-zinc-400 text-xs md:text-sm font-normal">
          No credit card required
        </div>
      </div>
    </div>
  );
};

export default LandingHero;
