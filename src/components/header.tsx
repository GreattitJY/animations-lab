interface HeaderProps {}

export default function Header({}: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 w-full border-b z-[100]">
      <h1 className="h-header max-w-layout mx-auto flex items-center">Header</h1>
    </header>
  );
}
