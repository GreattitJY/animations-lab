import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "motion/react";

const TOTAL_COUNT = 42;
const ORANGE = "rgb(243, 100, 4)";
const GRAY = "rgb(128, 128, 128)";
const BASE_GRADIENT = `linear-gradient(to right, ${ORANGE}, ${ORANGE}, ${GRAY})`;

const ITEM_WIDTH = 10;
const GAP_WIDTH = 6;
const STEP_WIDTH = ITEM_WIDTH + GAP_WIDTH;

interface CoffeeProps {
  setView: React.Dispatch<React.SetStateAction<string>>;
}

export default function Coffee({ setView }: CoffeeProps) {
  const [step, setStep] = useState(0);
  const lastUpdateTime = useRef(0);
  const [count, setCount] = useState(TOTAL_COUNT);

  const handleExit = () => {
    setView("idle");
  };

  useEffect(() => {
    const animate = (currentTime: number) => {
      if (!lastUpdateTime.current) lastUpdateTime.current = currentTime;
      const timeOffset = currentTime - lastUpdateTime.current;

      if (timeOffset >= 1000) {
        setStep((prev) => (prev + 1) % TOTAL_COUNT);
        setCount((count) => {
          if (count === 1) {
            return TOTAL_COUNT;
          }
          return count - 1;
        });
        lastUpdateTime.current = currentTime;
      }
      rafId = requestAnimationFrame(animate);
    };

    let rafId = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(rafId);
    };
  }, []);

  const countArray = count.toString().padStart(2, "0").split("");

  return (
    <div className="flex flex-col w-96 pt-5 pb-3 px-4 h-48">
      <div className="overflow-hidden">
        <div className="translate-x-[-138%]">
          <motion.ul
            style={{ gap: GAP_WIDTH }}
            className="flex mt-10"
            initial={{ opacity: 0, filter: "blur(2px)" }}
            animate={{
              opacity: 1,
              filter: "blur(0px)",
              x: `${step * STEP_WIDTH}px`,
            }}
            transition={{
              type: "spring",
              duration: 1,
              bounce: 0,
            }}
          >
            {[...Array(TOTAL_COUNT)].map((_, index) => {
              const isActive = count > index;
              return (
                <li key={index} className="relative">
                  {(index + 1) % 10 === 0 && (
                    <motion.p
                      key={count + "digit"}
                      style={{ color: isActive ? ORANGE : GRAY }}
                      className="absolute -translate-y-7 -translate-x-1"
                      animate={{ opacity: [1, 0.9] }}
                    >
                      {index + 1}
                    </motion.p>
                  )}
                  {index === 1 && (
                    <motion.p
                      key={count + "one"}
                      style={{ color: isActive ? ORANGE : GRAY }}
                      className="absolute -translate-y-7 -translate-x-1"
                      animate={{ opacity: [1, 0.9] }}
                    >
                      {index}
                    </motion.p>
                  )}
                  <motion.div
                    initial={{
                      backgroundImage: BASE_GRADIENT,
                      backgroundPosition: "0%",
                      backgroundSize: "800% 100%",
                    }}
                    animate={{
                      backgroundPosition: isActive ? "0%" : "100%",
                    }}
                    transition={{
                      duration: 1.5,
                      ease: [0.19, 1, 0.22, 1],
                    }}
                    style={{
                      width: ITEM_WIDTH,
                    }}
                    className="rounded-md h-[36px] inline-block"
                  />
                </li>
              );
            })}
          </motion.ul>
        </div>
      </div>
      <div className="mt-4 flex justify-between items-center mx-4">
        <p style={{ color: ORANGE }} className="text-5xl">
          <AnimatePresence initial={false} mode="popLayout">
            {countArray.map((digit, i) => (
              <motion.span
                key={digit + i}
                className="tabular-nums"
                initial={{ y: "8px", opacity: 0, filter: "blur(2px)" }}
                animate={{ y: "0px", opacity: 1, filter: "blur(0px)" }}
                exit={{ y: "-8px", opacity: 0, filter: "blur(2px)" }}
                transition={{ type: "spring", bounce: 0.35 }}
              >
                {digit}
              </motion.span>
            ))}
          </AnimatePresence>
          <span>s</span>
        </p>
        <motion.button
          type="button"
          className="bg-orange-900/85 p-3.5 rounded-full"
          whileTap={{ scale: 0.95 }}
          onClick={handleExit}
        >
          <span style={{ backgroundColor: ORANGE }} className="rounded-md size-5 block"></span>
        </motion.button>
        <motion.p
          key={count}
          style={{ color: GRAY }}
          className="text-xl font-light"
          animate={{ opacity: [1, 0.9] }}
        >
          Espresso
        </motion.p>
      </div>
    </div>
  );
}
