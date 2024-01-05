import { Crown } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const ProBadge = () => {
  const router = useRouter();

  return (
    <div className="px-3">
      <Card className="bg-transparent border-0">
        <CardContent className="py-4 flex justify-center items-center">
          <Button
            onClick={() => router.push("/settings")}
            className="bg-violet-700"
          >
            <div className="flex justify-center items-center rounded-md">
              <Crown color="gold" />
              <span className="text-white p-2 rounded-md">Pro Account</span>
            </div>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProBadge;
