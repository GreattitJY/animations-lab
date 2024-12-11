import { Outlet, ScrollRestoration } from "react-router-dom";

interface GlobalLayoutProps {}

export default function GlobalLayout({}: GlobalLayoutProps) {
  return (
    <div className="w-full h-dvh">
      <Outlet />
      <ScrollRestoration />
    </div>
  );
}
