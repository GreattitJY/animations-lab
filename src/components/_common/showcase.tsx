import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

interface ShowcaseProps extends PropsWithChildren {
  className?: string;
}

export default function Showcase({ className, children }: ShowcaseProps) {
  return (
    <div
      className={cn(
        "border-2 rounded-lg border-dashed flex items-center justify-center",
        className
      )}
    >
      {children}
    </div>
  );
}
