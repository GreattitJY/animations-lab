import Showcase from "../_common/showcase";
import Example from "./example";

interface DynamicIslandProps {}

export default function DynamicIsland({}: DynamicIslandProps) {
  return (
    <section className="flex flex-col gap-2">
      <h2 className="text-title">Dynamic Island</h2>
      <Showcase>
        <Example />
      </Showcase>
    </section>
  );
}
