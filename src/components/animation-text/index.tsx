import Badge from "../_common/badge";
import Showcase from "../_common/showcase";
import Example from "./example";

interface AnimationTextProps {}

export default function AnimationText({}: AnimationTextProps) {
  return (
    <section className="flex flex-col gap-2.5">
      <h2 className="text-title">Animation Text</h2>
      <p>
        화면에 글자가 타이핑되듯이 하나씩 나타나면서 자연스럽게 문장이 완성되는 애니메이션입니다.
        마지막 문장은 천천히 나타나 사용자에게 안정감을 전달합니다.
      </p>
      <div className="flex gap-2.5 ml-auto">
        <Badge>Framer motion</Badge>
      </div>
      <Showcase isReset>
        <Example />
      </Showcase>
    </section>
  );
}
