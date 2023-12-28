"use client";

import { useAuth } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const LandingNavbar = () => {
  const { isSignedIn } = useAuth();

  return (
    <div className="p-4 bg-transparent flex items-center justify-between">
      <Link href={"/"} className="flex items-center">
        <Image
          src={"/images/amazi_logo.png"}
          alt="logo"
          width={100}
          height={100}
        />
      </Link>
      <div className="flex items-center gap-x-2">
        <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
          <Button variant={"outline"} className="rounded-full">
            Get Started
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default LandingNavbar;
