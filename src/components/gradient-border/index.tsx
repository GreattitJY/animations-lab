import Badge from "../_common/badge";
import Showcase from "../_common/showcase";
import Example from "./example";

interface GradientBorderProps {}

export default function GradientBorder({}: GradientBorderProps) {
  return (
    <section className="flex flex-col gap-2.5">
      <h2 className="text-title">Gradient Border</h2>
      <p>
        보더를 따라 그라디언트가 순환하는 애니메이션입니다. 사용자의 행동을 유도하는 CTA 버튼에
        활용하기 좋습니다.
      </p>
      <div className="flex gap-2.5 ml-auto">
        <Badge>Module CSS</Badge>
        <Badge>key frames</Badge>
      </div>
      <Showcase>
        <Example>Button</Example>
      </Showcase>
    </section>
  );
}
