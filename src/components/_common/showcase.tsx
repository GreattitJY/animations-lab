import { cn } from "@/lib/utils";
import { RotateCcw } from "lucide-react";
import { PropsWithChildren, useState } from "react";

interface ShowcaseProps extends PropsWithChildren {
  isReset?: boolean;
  className?: string;
}

export default function Showcase({ className, isReset = false, children }: ShowcaseProps) {
  const [key, setKey] = useState(0);

  return (
    <div
      className={cn(
        "relative border-2 rounded-lg border-dashed flex items-center justify-center py-10 bg-gray-50",
        className
      )}
    >
      {isReset && (
        <button
          className="absolute top-2.5 right-2.5 hover:text-gray-600 transition-colors"
          type="button"
          onClick={() => setKey((prev) => prev + 1)}
        >
          <RotateCcw className="size-5" />
        </button>
      )}
      <div key={key}>{children}</div>
    </div>
  );
}
