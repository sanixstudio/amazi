"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
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

const Sidebar = () => {
  const pathName = usePathname();

  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white">
      <div className="px-3 py-2 flex-1">
        <Link href={"/dashboard"} className="flex items-center pl-3 mb-14">
          <div className={cn("", montserrat.className)}>
            <div className="flex gap-2">
              <span className="text-2xl sm:text-3xl font-bold flex justify-center items-center flex-1 w-10 h-10 shadow-lg shadow-violet-500 rotate-12 hover:rotate-0 transition-transform rounded-md bg-gradient-to-br from-violet-500 to-violet-900 text-center border  border-violet-500/60 bg-violet-500/30">
                A
              </span>
              <span className="text-2xl sm:text-3xl font-bold flex justify-center items-center flex-1 w-10 h-10 shadow-lg shadow-pink-700 -rotate-6 hover:rotate-0 transition-transform rounded-md bg-gradient-to-br from-pink-500 to-pink-900 text-center border  border-pink-700/60 bg-pink-700/30">
                M
              </span>
              <span className="text-2xl sm:text-3xl font-bold flex justify-center items-center flex-1 w-10 h-10 shadow-lg shadow-orange-700 -rotate-45 hover:rotate-0 transition-transform rounded-md bg-gradient-to-br from-orange-500 to-orange-900 text-center border  border-orange-700/60 bg-orange-700/30">
                A
              </span>
              <span className="text-2xl sm:text-3xl font-bold flex justify-center items-center flex-1 w-10 h-10 shadow-lg shadow-green-500 rotate-12 hover:rotate-0 transition-transform rounded-md bg-gradient-to-br from-green-500 to-green-900 text-center border  border-green-500/60 bg-green-500/30">
                Z
              </span>
              <span className="text-2xl sm:text-3xl font-bold flex justify-center items-center flex-1 w-10 h-10 shadow-lg shadow-emerald-500 -rotate-12 hover:rotate-0 transition-transform rounded-md bg-gradient-to-br from-emerald-500 to-emerald-900 text-center border  border-emerald-500/60 bg-emerald-500/30">
                I
              </span>
            </div>
          </div>
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
    </div>
  );
};

export default Sidebar;
