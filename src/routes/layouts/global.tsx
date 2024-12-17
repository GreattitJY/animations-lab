import Header from "@/components/header";
import { Outlet, ScrollRestoration } from "react-router-dom";

interface GlobalLayoutProps {}

export default function GlobalLayout({}: GlobalLayoutProps) {
  return (
    <main className="w-full h-dvh flex flex-col">
      <Header />
      <div className="max-w-layout mx-auto w-full h-full mt-header py-10">
        <Outlet />
      </div>
      <ScrollRestoration />
    </main>
  );
}
