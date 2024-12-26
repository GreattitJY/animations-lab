import { cn } from "@/lib/utils";
import Slot, { AsChildProps } from "./slot";

type BadgeProps = AsChildProps<React.HTMLAttributes<HTMLDivElement>> & {
  style?: React.CSSProperties;
  className?: string;
};

export default function Badge({ asChild, children, className, ...props }: BadgeProps) {
  const Comp = asChild ? Slot : "div";

  return (
    <Comp
      className={cn(
        "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold",
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  );
}
