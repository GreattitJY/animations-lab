import React, { useState } from "react";
import styles from "./example.module.css";

const WORD = "Animations Lab" as const;

interface ExampleProps {}

export default function Example({}: ExampleProps) {
  const [reset, setReset] = useState(0);

  return (
    <div className="flex flex-col items-center">
      <div key={reset}>
        <p
          className={`text-3xl font-semibold overflow-hidden tracking-tighter whitespace-pre ${styles.mask_image}`}
        >
          {WORD.split("").map((char, idx) => (
            <span
              key={idx}
              style={{ "--index": idx } as React.CSSProperties}
              className={styles.reveal}
            >
              {char}
            </span>
          ))}
        </p>
      </div>
      <button
        type="button"
        onClick={() => setReset(reset + 1)}
        className="rounded-full border bg-white px-4 py-2 translate-y-5"
      >
        Replay animation
      </button>
    </div>
  );
}
