import { motion } from "motion/react";
import { useMemo, useState } from "react";
import Timer from "./timer";
import Coffee from "./coffee";

interface ExampleProps {}

export default function Example({}: ExampleProps) {
  const [view, setView] = useState("idle");

  const content = useMemo(() => {
    switch (view) {
      case "timer":
        return <Timer setView={setView} />;
      case "coffee":
        return <Coffee setView={setView} />;
      case "idle":
        return <div className="h-7" />;
    }
  }, [view]);

  const handleViewClick = (view: string) => {
    setView(view);
  };

  return (
    <section className="h-[270px]">
      <div className="w-full h-full flex flex-col justify-between">
        <motion.div
          layout
          transition={{
            type: "spring",
            bounce: 0.3,
          }}
          style={{ borderRadius: 32 }}
          className="mx-auto w-fit min-w-[100px] overflow-hidden rounded-full bg-black text-white"
        >
          <motion.div
            key={view}
            transition={{ type: "spring", bounce: 0.3 }}
            initial={{ scale: 0.5, opacity: 0, filter: "blur(5px)", originX: 0.5, originY: 0.5 }}
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
