import Header from "@/components/header";
import { Outlet, ScrollRestoration } from "react-router-dom";

interface GlobalLayoutProps {}

export default function GlobalLayout({}: GlobalLayoutProps) {
  return (
    <main className="w-full h-dvh flex flex-col">
      <Header />
      <div className="max-w-layout mx-auto bg-sky-100 w-full h-full mt-14">
        <Outlet />
      </div>
      <ScrollRestoration />
    </main>
  );
}
