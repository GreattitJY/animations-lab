import { animate } from "motion/react";
import { useEffect, useState } from "react";

export function useAnimateText(text: string, delimiter = "") {
  const [cursor, setCursor] = useState(0);
  const [startingCursor, setStartingCursor] = useState(0);
  const [prevText, setPrevText] = useState(text);

  if (prevText !== text) {
    setPrevText(text);
    setStartingCursor(text.startsWith(prevText) ? cursor : 0);
  }

  useEffect(() => {
    const controls = animate(startingCursor, text.split(delimiter).length, {
      duration: 4,
      ease: [0.25, 0.46, 0.45, 0.94],
      onUpdate(latest) {
        setCursor(Math.floor(latest));
      },
    });

    return () => controls.stop();
  }, [delimiter, startingCursor, text]);

  return text.split(delimiter).slice(0, cursor).join(delimiter);
}
