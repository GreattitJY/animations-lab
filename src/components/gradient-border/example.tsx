import React from "react";

import styles from "./example.module.css";
import { cn } from "@/lib/utils";

interface Example extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Example({ className, children, ...props }: Example) {
  return (
    <div
      style={{ "--radius": "9999px" } as React.CSSProperties}
      className={cn(
        "relative overflow-hidden p-[1px]",
        "transition-transform hover:scale-105 active:scale-95",
        styles.border_effect
      )}
    >
      <button
        {...props}
        style={{ borderRadius: "var(--radius)" }}
        className={cn(
          "relative z-10",
          "inline-flex items-center justify-center",
          "bg-white text-black",
          "border px-4 py-2",
          className
        )}
      >
        {children}
      </button>
    </div>
  );
}
