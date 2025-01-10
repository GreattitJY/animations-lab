import "./styles.css";
import Example from "./example";
import Showcase from "../_common/showcase";
import Badge from "../_common/badge";

export default function ClipPath() {
  return (
    <section className="flex flex-col gap-2.5">
      <h2 className="text-title">Clip Path</h2>
      <p>
        다크 테마가 화면을 위아래로 자연스럽게 채우는 애니메이션입니다. 버튼을 눌러 확인해보세요!
      </p>
      <div className="ml-auto space-x-2.5">
        <Badge>Module CSS</Badge>
        <Badge>key frames</Badge>
      </div>
      <Showcase>
        <Example />
      </Showcase>
    </section>
  );
}
