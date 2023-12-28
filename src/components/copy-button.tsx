import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Clipboard } from "lucide-react";
import CopyToClipboard from "react-copy-to-clipboard";
import { ChatCompletionContentPart } from "openai/resources/index.mjs";
import { Button } from "./ui/button";

export const CopyButton = ({
  content,
  bgColor,
}: {
  content: string | ChatCompletionContentPart[];
  bgColor: string;
}) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (copied) {
      // Reset the "Copied" state after a brief delay (e.g., 3 seconds)
      const timeout = setTimeout(() => {
        setCopied(false);
      }, 3000);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [copied]);

  return (
    <CopyToClipboard text={content as string} onCopy={() => setCopied(true)}>
      <Button
        className={cn(
          "flex gap-2 text-white p-2 py-1 text-xs mr-2 rounded-md hover:underline cursor-pointer",
          bgColor
        )}
      >
        {copied ? (
          <>
            <Clipboard size={16} />
            Copied!
          </>
        ) : (
          <>
            <Clipboard size={16} />
            Copy
          </>
        )}
      </Button>
    </CopyToClipboard>
  );
};
