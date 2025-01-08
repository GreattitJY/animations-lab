import ClipPath from "@/components/clip-path";
import GradientBorder from "@/components/gradient-border";
import Popover from "@/components/popover";
import MultiStep from "@/components/multi-step";
import TextReveal from "@/components/text-reveal";
import AnimationText from "@/components/animation-text";
import AnimationCounter from "@/components/animation-counter";

interface HomeProps {}

export default function Home({}: HomeProps) {
  return (
    <article className="flex flex-col gap-10">
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
