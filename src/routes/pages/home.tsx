import ClipPath from "@/components/clip-path";

interface HomeProps {}

export default function Home({}: HomeProps) {
  return (
    <article className="flex flex-col gap-2.5">
      <ClipPath />
    </article>
  );
}
