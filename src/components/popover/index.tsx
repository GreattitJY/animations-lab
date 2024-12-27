import Showcase from "../_common/showcase";
import Example from "./example";

interface PopoverProps {}

export default function Popover({}: PopoverProps) {
  return (
    <section className="flex flex-col gap-2.5">
      <h2 className="text-title">Popover</h2>
      <Showcase>
        <Example />
      </Showcase>
    </section>
  );
}
