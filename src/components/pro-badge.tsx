import { Crown, Zap } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Progress } from "./ui/progress";
import { Button } from "./ui/button";

const ProdBadge = () => {
  return (
    <div className="px-3">
      <Card className="bg-white/10 border-0">
        <CardContent className="py-4">
          <div className="flex justify-center items-center rounded-md">
            <Crown color="gold" />
            <span className="text-white p-2 rounded-md">
              Pro Account
            </span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProdBadge;
