import { createBrowserRouter } from "react-router";
import Layout from "../Layout/Layout";
import Home from "../pages/Home/Home";
import About from "../Sections/About/About";
import Skills from "../Sections/Skills/Skills";
import Projects from "../Sections/Projects/Projects";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
        {
            index: true,
            element: <Home/>
        },
        {
          path:"/about",
          element: <About/>
        },
        {
          path: "/skills",
          element:<Skills/>
        },
        {
          path: "/projects",
          element: <Projects/>
        },

    ]
  },
]);