import Badge from "../_common/badge";
import Showcase from "../_common/showcase";
import Example from "./example";

interface TextRevealProps {}

export default function TextReveal({}: TextRevealProps) {
  return (
    <section className="flex flex-col gap-2.5">
      <h2 className="text-title">Text Reveal</h2>
      <p>텍스트가 아래에서 위로 부드럽게 이동하며 점차 선명해지는 애니메이션입니다.</p>
      <div className="flex gap-2.5 ml-auto">
        <Badge>Module CSS</Badge>
        <Badge>key frames</Badge>
      </div>
      <Showcase isReset>
        <Example />
      </Showcase>
    </section>
  );
}
