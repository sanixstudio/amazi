import { cn } from "@/lib/utils";
import { Clipboard } from "lucide-react";

const CopyButton = ({ bgColor }: { bgColor: string }) => {
  return (
    <button
      className={cn(
        "flex gap-2 text-white p-2 py-1 text-xs mr-2 rounded-md hover:underline cursor-pointer",
        bgColor
      )}
    >
      <Clipboard size={16} />
      Copy code
    </button>
  );
};

export default CopyButton;
