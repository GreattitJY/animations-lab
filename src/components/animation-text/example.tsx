import { useAnimateText } from "./use-animate-text";

interface ExampleProps {}

export default function Example({}: ExampleProps) {
  const text = useAnimateText(dummy);

  return (
    <div className="max-w-[750px] h-[80px]">
      <p>{text}</p>
    </div>
  );
}

const dummy =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus rem recusandae, cumque facere accusantium aspernatur unde. Sit maxime quas itaque fuga, accusantium voluptatem ex iste ad eaque beatae mollitia iure?";
