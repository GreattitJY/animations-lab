import ClipPath from "@/components/clip-path";
import GradientBorder from "@/components/gradient-border";
import Popover from "@/components/popover";
import MultiStep from "@/components/multi-step";
import TextReveal from "@/components/text-reveal";

interface HomeProps {}

export default function Home({}: HomeProps) {
  return (
    <article className="flex flex-col gap-10">
      <ClipPath />
      <Popover />
      <GradientBorder />
      <MultiStep />
      <TextReveal />
    </article>
  );
}
