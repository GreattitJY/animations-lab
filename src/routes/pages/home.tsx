import ClipPath from "@/components/clip-path";
import GradientBorder from "@/components/gradient-border";
import Popover from "@/components/popover";
import MultiStep from "@/components/multi-step";
import TextReveal from "@/components/text-reveal";
import AnimationText from "@/components/animation-text";
import AnimationCounter from "@/components/animation-counter";
import DynamicIsland from "@/components/dynamic-island";

interface HomeProps {}

export default function Home({}: HomeProps) {
  return (
    <article className="flex flex-col gap-10">
      <DynamicIsland />
      <ClipPath />
      <Popover />
      <GradientBorder />
      <MultiStep />
      <TextReveal />
      <AnimationText />
      <AnimationCounter />
    </article>
  );
}
