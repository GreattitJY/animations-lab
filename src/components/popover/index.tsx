import Badge from "../_common/badge";
import Showcase from "../_common/showcase";
import Example from "./example";

interface PopoverProps {}

export default function Popover({}: PopoverProps) {
  return (
    <section className="flex flex-col gap-2.5">
      <h2 className="text-title">Popover</h2>
      <p>
        버튼과 팝오버 창 사이의 자연스러운 연결감을 위한 애니메이션입니다. 사용자에게 애플리케이션과
        같은 느낌을 줄 수 있습니다. 피드백을 제출해 보세요!
      </p>
      <div className="flex gap-2.5 ml-auto">
        <Badge>Framer motion</Badge>
        <Badge>TailwindCSS</Badge>
      </div>
      <Showcase>
        <Example />
      </Showcase>
    </section>
  );
}
