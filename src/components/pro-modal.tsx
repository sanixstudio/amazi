import { useProModel } from "@/hooks/useProModel";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Badge } from "./ui/badge";
import { DialogDescription } from "@radix-ui/react-dialog";
import {
  Check,
  Code,
  ImageIcon,
  MessageSquare,
  Music2Icon,
  VideoIcon,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { Card } from "./ui/card";
import { Router } from "next/router";
import { Button } from "./ui/button";

const tools = [
  {
    label: "Conversation",
    icon: MessageSquare,
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
  },
  {
    label: "Image Generation",
    icon: ImageIcon,
    color: "text-pink-700",
    bgColor: "bg-pink-700/10",
  },
  {
    label: "Video Generation",
    icon: VideoIcon,
    color: "text-orange-700",
    bgColor: "bg-orange-700/10",
  },
  {
    label: "Music Generation",
    icon: Music2Icon,
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
  },
  {
    label: "Code Generation",
    icon: Code,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
];

const ProModal = ({}) => {
  const proModal = useProModel();

  return (
    <Dialog open={proModal.isOpen} onOpenChange={proModal.onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex justify-center items-center flex-col gap-y-4 pb-2">
            <div className="flex justify-center items-center gap-x-2 font-bold py-1">
              Upgrade to Amazi Pro
              <Badge variant={"premium"} className="uppercase text-sm py-1">
                Pro
              </Badge>
            </div>
          </DialogTitle>
          <DialogDescription className="text-center pt-2 space-y-2 text-zinc-900 font-medium">
            {tools.map((tool) => (
              <Card
                key={tool.label}
                className="p-3 border-black/5 flex items-center justify-between"
              >
                <div className="flex items-center gap-x-4">
                  <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                    <tool.icon className={cn("w-8 h-8", tool.color)} />
                  </div>
                  <div className="font-semibold">{tool.label}</div>
                </div>
                <Check />
              </Card>
            ))}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button className="w-full" size={"lg"} variant={"premium"}>
            Upgrade
            <Zap className="w-4 h-4 ml-2 fill-white" />
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ProModal;
