import Showcase from "../_common/showcase";
import Example from "./example";

interface GradientBorderProps {}

export default function GradientBorder({}: GradientBorderProps) {
  return (
    <section className="flex flex-col gap-2.5">
      <h2 className="text-title">Gradient Border</h2>
      <Showcase>
        <Example>Button</Example>
      </Showcase>
    </section>
  );
}
