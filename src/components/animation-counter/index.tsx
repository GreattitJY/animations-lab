import Showcase from "../_common/showcase";
import Example from "./example";

interface AnimationCounterProps {}

export default function AnimationCounter({}: AnimationCounterProps) {
  return (
    <section className="flex flex-col gap-2.5">
      <h2 className="text-title">Animation Counter</h2>
      <Showcase>
        <Example />
      </Showcase>
    </section>
  );
}
