import Showcase from "../_common/showcase";
import Example from "./example";

interface AnimationTextProps {}

export default function AnimationText({}: AnimationTextProps) {
  return (
    <section className="flex flex-col gap-2.5">
      <h2 className="text-title">Animation Text</h2>
      <Showcase isReset>
        <Example />
      </Showcase>
    </section>
  );
}
