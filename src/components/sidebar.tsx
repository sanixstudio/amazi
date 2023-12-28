"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { Montserrat } from "next/font/google";
import {
  Code,
  ImageIcon,
  LayoutDashboard,
  MessageSquare,
  Music2Icon,
  Settings,
  VideoIcon,
} from "lucide-react";
import { usePathname } from "next/navigation";
import FreeCounter from "./free-counter";
import Logo from "./logo";
import Image from "next/image";
import ProdBadge from "./pro-badge";

const montserrat = Montserrat({ weight: "600", subsets: ["latin"] });

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-sky-400",
  },
  {
    label: "Conversation",
    icon: MessageSquare,
    href: "/conversation",
    color: "text-violet-400",
  },
  {
    label: "Image Generation",
    icon: ImageIcon,
    href: "/image",
    color: "text-pink-500",
  },
  {
    label: "Video Generation",
    icon: VideoIcon,
    href: "/video",
    color: "text-orange-500",
  },
  {
    label: "Music Generation",
    icon: Music2Icon,
    href: "/music",
    color: "text-emerald-300",
  },
  {
    label: "Code Generation",
    icon: Code,
    href: "/code",
    color: "text-green-300",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/settings",
  },
];

export type SidebarProps = {
  apiLimitCount: Promise<number | undefined>;
};

const Sidebar = ({ apiLimitCount }: SidebarProps) => {
  const pathName = usePathname();

  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white">
      <div className="px-3 py-2 flex-1 mt-2">
        <Link
          href={"/dashboard"}
          className="flex items-center justify-center w-full mb-14"
        >
          <div className="relative w-full max-w-[150px] flex justify-center">
            <Image
              width={120}
              height={120}
              alt="logo"
              src={"/images/amazi_logo.png"}
            />
          </div>
          <div className={cn("", montserrat.className)}>{/* <Logo /> */}</div>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              href={route.href}
              key={route.href}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                pathName === route.href
                  ? "text-white bg-white/10"
                  : "text-zinc-400"
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
      {/* <FreeCounter apiLimitCount={apiLimitCount} /> */}
      <ProdBadge />
    </div>
  );
};

export default Sidebar;
