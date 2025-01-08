import { isNumber } from "@/utils/helper";
import { RotateCcw } from "lucide-react";
import { motion, MotionValue } from "motion/react";
import { useSpring, useTransform } from "motion/react";
import { useEffect, useState } from "react";

const fontSize = 30;
const padding = 15;
const height = fontSize + padding;
const NUMBERS = [23459, 3653192, 714984, 12590812, 23219];

interface ExampleProps {}

export default function Example({}: ExampleProps) {
  const [number, setNumber] = useState(NUMBERS[NUMBERS.length - 1]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const formatter = new Intl.NumberFormat();
  const formattedNumber = formatter.format(number);

  const handleReset = () => {
    setCurrentIndex((prev) => (prev + 1) % NUMBERS.length);
    setNumber(NUMBERS[currentIndex]);
  };
  return (
    <div>
      <div style={{ fontSize }} className="flex gap-3.5 px-2 overflow-hidden ">
        {formattedNumber.split("").map((char, idx) => {
          if (isNumber(char)) {
            return <Digit key={idx} value={Number(char)} />;
          } else {
            return <span className="-mx-1.5">{char}</span>;
          }
        })}
      </div>
      <button
        className="absolute top-2.5 right-2.5 hover:text-gray-600 transition-colors"
        type="button"
        onClick={handleReset}
      >
        <RotateCcw className="size-5" />
      </button>
    </div>
  );
}

interface DigitProps {
  value: number;
}

function Digit({ value }: DigitProps) {
  const initialValue = 9 - value;

  const animatedValue = useSpring(initialValue, {
    stiffness: 250,
    damping: 25,
    mass: 0.5,
  });

  useEffect(() => {
    animatedValue.set(value);
  }, [animatedValue, value]);

  return (
    <div style={{ height }} className="tabular-nums w-1 relative">
      {[...Array(10).keys()].map((i) => (
        <NumberComp key={i} mv={animatedValue} number={i} />
      ))}
    </div>
  );
}

interface NumberProps {
  mv: MotionValue;
  number: number;
}

function NumberComp({ mv, number }: NumberProps) {
  const y = useTransform(mv, (latest: number) => {
    const placeValue = latest % 10;
    const offset = (10 + number - placeValue) % 10;

    let memo = offset * height;

    if (offset > 5) {
      memo -= 10 * height;
    }

    return memo;
  });

  return (
    <motion.span style={{ y }} className="absolute inset-0 flex items-center justify-center">
      {number}
    </motion.span>
  );
}
