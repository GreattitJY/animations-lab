import Badge from "../_common/badge";
import Showcase from "../_common/showcase";
import Example from "./example";

interface AnimationCounterProps {}

export default function AnimationCounter({}: AnimationCounterProps) {
  return (
    <section className="flex flex-col gap-2.5">
      <h2 className="text-title">Animation Counter</h2>
      <p>
        슬롯 머신처럼 숫자가 빠르게 오르내리는 카운터 애니메이션입니다. 숫자가 오르내리는 방향이
        달라 역동적인 시각 효과가 있습니다.
      </p>
      <div className="flex gap-2.5 ml-auto">
        <Badge>Framer motion</Badge>
      </div>
      <Showcase>
        <Example />
      </Showcase>
    </section>
  );
}
