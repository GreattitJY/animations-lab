import Showcase from "../_common/showcase";
import Example from "./example";

interface MultiStepProps {}

export default function MultiStep({}: MultiStepProps) {
  return (
    <section className="flex flex-col gap-2.5">
      <h2 className="text-title">Multi Step</h2>
      <Showcase className="h-[450px]">
        <Example />
      </Showcase>
    </section>
  );
}
