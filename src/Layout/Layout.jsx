import Navbar from "../components/Header/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import { useEffect } from "react";
import Aos from "aos";
import RouteLoader from "../components/Loader/RouteLoader";

const Layout = () => {
  const location = useLocation();
   useEffect(() => {
    Aos.init({
      duration: 600,
      once: true,
    });
  }, []);


  return (
    <>
      <header>
        <nav>
          <Navbar />
        </nav>
      </header>
      <main>
        <RouteLoader/>
        <ScrollToTop/>
        <Outlet key={location.pathname}  />

      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
