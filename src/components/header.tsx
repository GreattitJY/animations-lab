interface HeaderProps {}

export default function Header({}: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 w-full bg-rose-100 z-[100]">
      <h1 className="h-14 max-w-layout mx-auto flex items-center">Header</h1>
    </header>
  );
}
