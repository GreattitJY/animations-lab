import { AnimatePresence, motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import Spinner from "./spinner";
import { useOnClickOutside } from "usehooks-ts";
import { CircleCheck } from "lucide-react";

interface ExampleProps {}

export default function Example({}: ExampleProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [formState, setFormState] = useState("idle");
  const ref = useRef(null);
  useOnClickOutside(ref, () => setIsOpen(false));

  const handleOpen = () => {
    setIsOpen(true);
    setFormState("idle");
    setFeedback("");
  };

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();

    setFormState("loading");
    setTimeout(() => {
      setFormState("success");
    }, 1500);

    setTimeout(() => {
      setIsOpen(false);
    }, 3300);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }

      if (
        (event.ctrlKey || event.metaKey) &&
        event.key === "Enter" &&
        isOpen &&
        formState === "idle"
      ) {
        handleSubmit();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, formState]);

  return (
    <div className="h-[250px] flex items-center justify-center">
      <motion.button
        layoutId="wrapper"
        className="border flex items-center justify-center px-2 py-1 rounded-md relative bg-white"
        onClick={handleOpen}
        key="button"
      >
        <motion.span layoutId="title">feedback</motion.span>
      </motion.button>
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            ref={ref}
            layoutId="wrapper"
            className="w-[364px] h-[192px] absolute shadow rounded-lg bg-gray-100 overflow-hidden p-1"
          >
            <motion.span
              aria-hidden
              layoutId="title"
              className={`absolute top-3 left-4 text-gray-500 ${feedback && "!opacity-0"} ${
                formState === "success" && "!opacity-0"
              }`}
            >
              feedback
            </motion.span>
            <AnimatePresence mode="popLayout">
              {formState === "success" ? (
                <motion.div
                  initial={{ y: -32, opacity: 0, filter: "blur(4px)" }}
                  animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                  transition={{ type: "spring", duration: 0.4, bounce: 0 }}
                  key={"success"}
                  className="flex h-full flex-col items-center justify-center gap-0.5"
                >
                  <CircleCheck className="text-blue-500" />
                  <h3>Feedback received!</h3>
                </motion.div>
              ) : (
                <motion.form
                  key={"form"}
                  className="h-full flex flex-col"
                  exit={{ opacity: 0, filter: "blur(4px)" }}
                  onSubmit={handleSubmit}
                >
                  <textarea
                    autoFocus
                    className="w-full h-full resize-none outline-none bg-white rounded-t-md rounded-b-lg px-3 py-2"
                    onChange={(e) => setFeedback(e.target.value)}
                  />
                  <div className="relative bg-white flex flex-col h-12 rounded-b-md rounded-t-lg px-2">
                    <DotLine />
                    <button className="w-[74px] overflow-hidden ml-auto bg-blue-500 text-white text-xs shadow-md h-[24px] rounded-lg my-auto focus:outline-none hover:opacity-85 transition-colors">
                      <AnimatePresence mode="popLayout" initial={false}>
                        <motion.span
                          key={formState}
                          transition={{ type: "spring", duration: 0.3, bounce: 0 }}
                          initial={{ opacity: 0, y: -25 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 25 }}
                          className="flex items-center justify-center"
                        >
                          {formState === "loading" ? <Spinner color="white" size={16} /> : "Submit"}
                        </motion.span>
                      </AnimatePresence>
                    </button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

function DotLine() {
  return (
    <svg
      className="absolute left-0 right-0"
      width="352"
      height="2"
      viewBox="0 0 352 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 1H352" stroke="#E6E7E8" strokeDasharray="4 4" />
    </svg>
  );
}
