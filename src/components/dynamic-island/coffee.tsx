import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";

const TOTAL_COUNT = 42;
const ORANGE = "rgb(243, 100, 4)";
const GRAY = "rgb(128, 128, 128)";
const BASE_GRADIENT = `linear-gradient(to right, ${ORANGE}, ${ORANGE}, ${GRAY})`;

const ITEM_WIDTH = 10;
const GAP_WIDTH = 6;
const STEP_WIDTH = ITEM_WIDTH + GAP_WIDTH;

const Coffee = () => {
  const [step, setStep] = useState(0);
  const lastUpdateTime = useRef(0);
  const [count, setCount] = useState(TOTAL_COUNT);

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

  return (
    <div className="flex flex-col w-96 pt-5 pb-3 px-4 h-48">
      <div className="overflow-hidden">
        <div className="translate-x-[-142%]">
          <motion.ul
            style={{ gap: GAP_WIDTH }}
            className="flex mt-3"
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
              const isActive = index < count;

              return (
                <li key={index}>
                  <motion.span
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
      <div className="mt-4"></div>
    </div>
  );
};

export default Coffee;
