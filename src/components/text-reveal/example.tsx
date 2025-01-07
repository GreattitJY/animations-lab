import React from "react";
import styles from "./example.module.css";

const WORD = "Animations Lab" as const;

interface ExampleProps {}

export default function Example({}: ExampleProps) {
  return (
    <p
      className={`text-3xl font-semibold overflow-hidden tracking-tighter whitespace-pre ${styles.mask_image}`}
    >
      {WORD.split("").map((char, idx) => (
        <span key={idx} style={{ "--index": idx } as React.CSSProperties} className={styles.reveal}>
          {char}
        </span>
      ))}
    </p>
  );
}
