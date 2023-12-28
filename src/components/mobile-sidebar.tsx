"use client";
import { useEffect, useState } from "react";

import { Menu } from "lucide-react";

import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Sidebar from "./sidebar";
import { checkSubscription } from "@/lib/subscription";

const MobileSidebar = ({
  apiLimitCount,
}: {
  apiLimitCount: Promise<number | undefined>;
}) => {
  const [isMounted, setIsMounted] = useState(false);
  const isPro = checkSubscription();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <Sheet>
      <SheetTrigger>
        <Button variant="ghost" size={"icon"} className="md:hidden">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-0 border-r-0">
        <Sidebar apiLimitCount={apiLimitCount} isPro={isPro} />
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
