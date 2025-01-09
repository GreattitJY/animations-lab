import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";

const TOTAL_COUNT = 42;
const ORANGE = "rgb(243, 100, 4)";
const GRAY = "rgb(128, 128, 128)";
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
        <div className="translate-x-[-138%]">
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
              ease: "linear",
            }}
          >
            {[...Array(TOTAL_COUNT)].map((_, index) => (
              <li key={index}>
                <motion.span
                  animate={{
                    background:
                      index === count
                        ? `linear-gradient(to right, ${ORANGE}, ${ORANGE}, ${GRAY}) 100% / 800% 100%`
                        : index > count
                        ? GRAY
                        : ORANGE,
                    backgroundPosition: index === count ? ["0% center", "100% center"] : "center",
                  }}
                  transition={{
                    duration: index === count ? 0.3 : 0,
                    ease: "easeOut",
                    backgroundPosition: {
                      duration: 0.3,
                      ease: "linear",
                    },
                  }}
                  style={{ width: ITEM_WIDTH }}
                  className="rounded-md h-10 inline-block"
                />
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
      <div className="mt-4">{count}</div>
    </div>
  );
};

export default Coffee;
