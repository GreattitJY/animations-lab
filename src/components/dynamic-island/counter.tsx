import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

interface CounterProps {
  isPaused: boolean;
  initialCount?: number;
}

export default function Counter({ isPaused, initialCount = 0 }: CounterProps) {
  const [count, setCount] = useState(initialCount);
  const lastTimeRef = useRef<number | null>(null);

  useEffect(() => {
    if (isPaused) return;

    const animate = (currentTime: number) => {
      if (lastTimeRef.current === null) {
        lastTimeRef.current = currentTime;
      }

      const timeOffset = currentTime - lastTimeRef.current;

      if (timeOffset >= 1000) {
        setCount((count) => {
          if (count === 0) {
            return initialCount;
          }
          return count - 1;
        });
        lastTimeRef.current = currentTime;
      }

      rafId = requestAnimationFrame(animate);
    };

    let rafId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafId);
    };
  }, [initialCount, isPaused]);

  const countArray = count.toString().padStart(2, "0").split("");

  return (
    <div className="relatevie w-[64px]  whitespace-nowrap text-3xl font-light">
      0:
      <AnimatePresence initial={false} mode="popLayout">
        {countArray.map((n, i) => (
          <motion.div
            key={n + i}
            className="inline-block tabular-nums"
            initial={{ y: "12px", opacity: 0, filter: "blur(2px)" }}
            animate={{ y: "0px", opacity: 1, filter: "blur(0px)" }}
            exit={{ y: "-12px", opacity: 0, filter: "blur(2px)" }}
            transition={{ type: "spring", bounce: 0.35 }}
          >
            {n}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
