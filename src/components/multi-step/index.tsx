import Badge from "../_common/badge";
import Showcase from "../_common/showcase";
import Example from "./example";

interface MultiStepProps {}

export default function MultiStep({}: MultiStepProps) {
  return (
    <section className="flex flex-col gap-2.5">
      <h2 className="text-title">Multi Step</h2>
      <p>멀티 스텝 폼과 모달에서 자연스러운 화면 전환을 위해 구현한 애니메이션입니다.</p>
      <div className="flex gap-2.5 ml-auto">
        <Badge>Framer motion</Badge>
        <Badge>TailwindCSS</Badge>
      </div>
      <Showcase className="h-[450px]">
        <Example />
      </Showcase>
    </section>
  );
}
