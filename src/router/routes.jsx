import { createBrowserRouter } from "react-router";
import Layout from "../Layout/Layout";
import Home from "../pages/Home/Home";
import About from "../Sections/About/About";

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
        }
    ]
  },
]);