import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import GlobalLayout from "./layouts/global";

const router = createBrowserRouter([
  {
    element: <GlobalLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
