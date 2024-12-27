import ClipPath from "@/components/clip-path";
import Popover from "@/components/popover";

interface HomeProps {}

export default function Home({}: HomeProps) {
  return (
    <article className="flex flex-col gap-10">
      <ClipPath />
      <Popover />
    </article>
  );
}
