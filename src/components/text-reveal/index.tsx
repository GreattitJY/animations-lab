import Showcase from "../_common/showcase";
import Example from "./example";

interface TextRevealProps {}

export default function TextReveal({}: TextRevealProps) {
  return (
    <section className="flex flex-col gap-8">
      <h2 className="text-title">Text Reveal</h2>
      <Showcase isReset>
        <Example />
      </Showcase>
    </section>
  );
}
