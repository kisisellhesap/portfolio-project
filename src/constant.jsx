import { useParams } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import MyProjects from "./pages/MyProjects";

export const constant = [
  { path: "about", element: <About /> },
  { path: "contact", element: <Contact /> },
  { path: "projects", element: <MyProjects /> },
];
