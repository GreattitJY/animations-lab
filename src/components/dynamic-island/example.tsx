import { AnimatePresence, motion } from "motion/react";
import { useCallback, useMemo, useState } from "react";
import Timer from "./timer";
import Coffee from "./coffee";

interface ExampleProps {}

export default function Example({}: ExampleProps) {
  const [view, setView] = useState("idle");
  const [variantKey, setVariantKey] = useState("idle");

  const handleViewClick = useCallback(
    (value: string) => {
      setView(value);
      setVariantKey(`${view}-${value}`);
    },
    [view]
  );

  const content = useMemo(() => {
    switch (view) {
      case "timer":
        return <Timer handleViewClick={handleViewClick} />;
      case "coffee":
        return <Coffee handleViewClick={handleViewClick} />;
      case "idle":
        return <div className="h-7" />;
    }
  }, [handleViewClick, view]);

  console.log("BOUNCE_VARIANTS[variantKey]", BOUNCE_VARIANTS[variantKey]);

  return (
    <section className="h-[270px] relative">
      <div className="w-full h-full flex flex-col justify-between">
        <motion.div
          layout
          transition={{
            type: "spring",
            bounce: BOUNCE_VARIANTS[variantKey],
          }}
          style={{ borderRadius: 32 }}
          className="mx-auto w-fit min-w-[100px] overflow-hidden rounded-full bg-black text-white"
        >
          <motion.div
            key={view}
            transition={{ type: "spring", bounce: BOUNCE_VARIANTS[variantKey] }}
            initial={{ scale: 0.9, opacity: 0, filter: "blur(5px)", originX: 0.5, originY: 0.5 }}
            animate={{
              scale: 1,
              opacity: 1,
              filter: "blur(0px)",
              originX: 0.5,
              originY: 0.5,
              transition: { delay: 0.05 },
            }}
          >
            {content}
          </motion.div>
        </motion.div>
        <div className="pointer-events-none absolute left-1/2 top-0 flex h-[200px] w-[300px] -translate-x-1/2 items-start justify-center">
          <AnimatePresence mode="popLayout" custom={ANIMATION_VARIANTS[variantKey]}>
            <motion.div initial={{ opacity: 0 }} exit="exit" variants={variants} key={view}>
              {content}
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="flex w-full justify-center gap-4">
          {["idle", "timer", "coffee"].map((view) => (
            <button
              key={view}
              type="button"
              className="rounded-full capitalize w-32 h-10 bg-white px-2.5 py-1.5 text-sm text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300/50 hover:bg-gray-50"
              onClick={() => handleViewClick(view)}
            >
              {view}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

const BOUNCE_VARIANTS: Record<string, number> = {
  idle: 0.5,
  "idle-timer": 0.2,
  "idle-coffee": 0.25,
  "timer-idle": 0.3,
  "timer-coffee": 0.25,
  "coffee-idle": 0.2,
  "coffee-timer": 0.2,
};

const variants = {
  exit: (transition: object) => {
    return {
      ...transition,
      opacity: [1, 0],
      filter: "blur(5px)",
    };
  },
};

const ANIMATION_VARIANTS: Record<string, object> = {
  "timer-idle": {
    scale: 0.7,
    y: -7.5,
    bounce: 0.3,
  },
  "timer-coffee": {
    scale: 1.2,
    y: 0,
    bounce: 0.25,
  },
  "coffee-timer": {
    scale: 0.7,
    y: -35,
    bounce: 0.2,
  },
  "coffee-idle": {
    scale: 0.7,
    y: -35,
    bounce: 0.2,
  },
};
