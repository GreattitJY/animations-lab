import Badge from "../_common/badge";
import Showcase from "../_common/showcase";
import Example from "./example";

interface DynamicIslandProps {}

export default function DynamicIsland({}: DynamicIslandProps) {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-title">Dynamic Island</h2>
      <div className="flex">
        <p className="mr-1">애플의</p>
        <a
          href="https://youtu.be/m6WMwSj_EbA?t=8"
          target="_"
          className="underline hover:text-gray-500"
        >
          Design Dynamic Live Activites
        </a>
        <p>
          를 참고하여 구현한 상태 전환 애니메이션입니다. 버튼을 눌러 Dynamic Island를 경험해보세요!
        </p>
      </div>
      <div className="flex gap-1.5 ml-auto">
        <Badge>Framer-motion</Badge>
        <Badge>TailwindCSS</Badge>
      </div>
      <Showcase>
        <Example />
      </Showcase>
    </section>
  );
}
