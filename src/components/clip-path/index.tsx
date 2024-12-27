import "./styles.css";
import Example from "./example";
import Showcase from "../_common/showcase";
import Badge from "../_common/badge";

export default function ClipPath() {
  return (
    <section className="flex flex-col gap-2.5">
      <h2 className="text-title">Clip Path</h2>
      <p>Clip path를 활용한 애니메이션입니다.</p>
      <div className="ml-auto space-x-2.5">
        <Badge>css</Badge>
        <Badge>key frames</Badge>
      </div>
      <Showcase>
        <Example />
      </Showcase>
    </section>
  );
}
