import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, MotionConfig } from "motion/react";
import Skeleton from "../_common/skeleton";

export default function MultiStepComponent() {
  const [currentStep, setCurrentStep] = useState(0);
  const [direction, setDirection] = useState<-1 | 1>(1);

  const [height, setHeight] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const { height } = ref.current.getBoundingClientRect();
    setHeight(height);
  }, [ref, currentStep]);

  const content = useMemo(() => {
    switch (currentStep) {
      case 0:
        return (
          <>
            <h2 className="mb-2 font-semibold">This is step one</h2>
            <p>
              Usually in this step we would explain why this thing exists and what it does. Also, we
              would show a button to go to the next step.
            </p>
            <div className="mt-5 flex flex-col gap-2">
              <Skeleton className="w-[256px]" />
              <Skeleton className="w-[192px]" />
              <Skeleton />
              <Skeleton className="w-[384px]" />
            </div>
          </>
        );
      case 1:
        return (
          <>
            <h2 className="mb-2 font-semibold">This is step two</h2>
            <p>
              Usually in this step we would explain why this thing exists and what it does. Also, we
              would show a button to go to the next step.
            </p>
            <div className="mt-5 flex flex-col gap-2">
              <Skeleton className="w-[256px]" />
              <Skeleton className="w-[192px]" />
              <Skeleton className="w-[384px]" />
            </div>
          </>
        );
      case 2:
        return (
          <>
            <h2 className="mb-2 font-semibold">This is step three</h2>
            <p>
              Usually in this step we would explain why this thing exists and what it does. Also, we
              would show a button to go to the next step.
            </p>
            <div className="mt-5 flex flex-col gap-2">
              <Skeleton className="w-[256px]" />
              <Skeleton className="w-[192px]" />
              <Skeleton className="w-[128px]" />
              <Skeleton className="w-[384px]" />
            </div>
          </>
        );
    }
  }, [currentStep]);

  return (
    <MotionConfig transition={{ duration: 0.5, type: "spring", bounce: 0 }}>
      <motion.div
        animate={{ height }}
        className="relative w-[550px] overflow-hidden rounded-xl shadow-lg bg-white"
      >
        <div className="p-6" ref={ref}>
          <AnimatePresence mode="popLayout" initial={false} custom={direction}>
            <motion.div
              key={currentStep}
              initial="initial"
              animate="animate"
              exit="exit"
              variants={variants}
              custom={direction}
            >
              {content}
            </motion.div>
          </AnimatePresence>
          <motion.div layout className="mt-8 flex justify-between">
            <button
              className="rounded-full border px-4 py-2 text-sm disabled:cursor-not-allowed disabled:opacity-50"
              disabled={currentStep === 0}
              onClick={() => {
                if (currentStep === 0) {
                  return;
                }
                setDirection(-1);
                setCurrentStep((prev) => prev - 1);
              }}
            >
              Back
            </button>
            <button
              className="rounded-full border bg-black text-white px-4 py-2 text-sm disabled:cursor-not-allowed disabled:opacity-50"
              disabled={currentStep === 2}
              onClick={() => {
                if (currentStep === 2) {
                  setCurrentStep(0);
                  return;
                }
                setDirection(1);
                setCurrentStep((prev) => prev + 1);
              }}
            >
              Continue
            </button>
          </motion.div>
        </div>
      </motion.div>
    </MotionConfig>
  );
}

const variants = {
  initial: (direction: number) => {
    return { x: `${110 * direction}%`, opacity: 0 };
  },
  animate: { x: "0%", opacity: 1 },
  exit: (direction: number) => {
    return { x: `${-110 * direction}%`, opacity: 0 };
  },
};
