import { useEffect, useState } from "react";
import { SidebarProps } from "./sidebar";
import { Card, CardContent } from "./ui/card";
import { Progress } from "./ui/progress";
import { MAX_FREE_COUNTS } from "../../constants";
import { Button } from "./ui/button";
import { Zap } from "lucide-react";
import { useProModel } from "@/hooks/useProModel";

const FreeCounter = ({ apiLimitCount }: SidebarProps) => {
  //useState, useEffect and mount is used to handle hydration error if encountered
  const [freeLimitCount, setFreeLimitCount] = useState<number | undefined>(0);
  const [mounted, setMounted] = useState(false);

  const ProModal = useProModel();

  useEffect(() => {
    setMounted(true);
    apiLimitCount?.then((el) => setFreeLimitCount(el));
  }, []);

  if (!mounted) return null;

  const progress = ((freeLimitCount as number) / MAX_FREE_COUNTS) * 100;

  return (
    <div className="px-3">
      <Card className="bg-white/10 border-0">
        <CardContent className="py-6">
          <div className="text-center text-sm text-white mb-4 space-y-2">
            <p>
              {apiLimitCount} / {MAX_FREE_COUNTS}
            </p>
          </div>
          <Progress className="h-3" value={progress} />
          <Button
            onClick={ProModal.onOpen}
            variant={"premium"}
            className="w-full mt-4"
          >
            Upgrade
            <Zap className="w-4 h-4 ml-2 fill-white" />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default FreeCounter;
