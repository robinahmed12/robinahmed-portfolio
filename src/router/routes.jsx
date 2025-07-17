import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../pages/Home/Home";
import About from "../Sections/About/About";
import Skills from "../Sections/Skills/Skills";
import Projects from "../Sections/Projects/Projects";
import Services from "../Sections/Services/Services";
import Contact from "../Sections/Contact/Contact";
import ProjectDetails from "../Sections/Projects/ProjectDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/skills",
        element: <Skills />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/details/:id",
        element: <ProjectDetails></ProjectDetails>,
      },
    ],
  },
]);
