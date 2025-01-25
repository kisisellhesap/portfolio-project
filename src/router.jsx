import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout";

import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <About />,
      },
      {
        path: "portfolio",
        element: <Portfolio />,
      },
    ],
  },
]);
