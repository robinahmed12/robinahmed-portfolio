import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaUser,
  FaCode,
  FaProjectDiagram,
  FaServer,
  FaFileDownload,
  FaTimes,
  FaBars,
} from "react-icons/fa";
import { MdContactPhone } from "react-icons/md";
import PortfolioLogo from "../PortfolioLogo/PortfolioLogo";
import DarkModeBtn from "../DarkModeBtn/DarkModeBtn";
import useTheme from "../../Context/theme";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { darkMode: isDarkMode } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const navItems = [
    { to: "/", icon: <FaHome className="text-lg" />, text: "Home" },
    { to: "/about", icon: <FaUser className="text-lg" />, text: "About" },
    { to: "/skills", icon: <FaCode className="text-lg" />, text: "Skills" },
    {
      to: "/projects",
      icon: <FaProjectDiagram className="text-lg" />,
      text: "Projects",
    },
    {
      to: "/services",
      icon: <FaServer className="text-lg" />,
      text: "Services",
    },
    {
      to: "/contact",
      icon: <MdContactPhone className="text-lg" />,
      text: "Contact",
    },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled ? "py-3 shadow-2xl" : "py-4"
        } ${
          isDarkMode
            ? "bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50"
            : "bg-white border-b border-gray-200"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo with glow effect */}
            <NavLink
              to="/"
              className={`flex items-center space-x-2 p-2 rounded-xl transition-all duration-300 hover:scale-105 ${
                isDarkMode
                  ? "hover:bg-slate-800/50 hover:shadow-lg hover:shadow-red-500/20"
                  : "hover:bg-red-50/80 hover:shadow-lg hover:shadow-red-500/20"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              <PortfolioLogo />
            </NavLink>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-2">
              {navItems.map((item, index) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `group relative px-5 py-3 rounded-full text-sm font-semibold flex items-center transition-all duration-300 overflow-hidden ${
                      isActive
                        ? "bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg shadow-red-500/30 scale-105"
                        : isDarkMode
                        ? "hover:bg-slate-800/60 hover:text-gray-100 hover:shadow-lg hover:shadow-slate-700/30"
                        : "hover:bg-red-50/80 hover:text-slate-800 hover:shadow-lg hover:shadow-red-100/50"
                    }`
                  }
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="relative z-10 mr-2 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </span>
                  <span className="relative z-10 tracking-wide">{item.text}</span>

                  {/* Animated background */}
                  <div
                    className={`absolute inset-0 w-0 group-hover:w-full transition-all duration-300 ${
                      isDarkMode
                        ? "bg-gradient-to-r from-slate-800/50 to-slate-700/50"
                        : "bg-gradient-to-r from-red-50/50 to-pink-50/50"
                    } rounded-full`}
                  ></div>
                </NavLink>
              ))}
            </div>

            {/* Right side buttons */}
            <div className="flex items-center space-x-4">
              {/* Resume button */}
              <a
                href="https://drive.google.com/file/d/12m8HRwKFczoJz7PsryYhSBOkeyGVEkW1/view?usp=sharing"
                download
                className={`hidden sm:flex px-6 py-3 rounded-full text-sm font-semibold items-center transition-all duration-300 transform hover:scale-105 bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg shadow-red-500/30 hover:shadow-xl hover:shadow-red-500/40 ${
                  isDarkMode
                    ? "hover:from-red-600 hover:to-red-700"
                    : "hover:from-red-600 hover:to-red-700"
                }`}
              >
                <FaFileDownload className="mr-2 animate-pulse" />
                <span className="tracking-wide">Resume</span>
              </a>

              <DarkModeBtn />

              {/* Mobile Menu Toggle */}
              <button
                onClick={toggleMobileMenu}
                className={`md:hidden p-3 rounded-full transition-all duration-300 transform hover:scale-110 ${
                  isDarkMode
                    ? "hover:bg-slate-800/60 text-gray-100 hover:shadow-lg hover:shadow-slate-700/30"
                    : "hover:bg-red-50/80 text-slate-800 hover:shadow-lg hover:shadow-red-100/50"
                }`}
                aria-label="Toggle Menu"
              >
                <div className="relative">
                  {mobileMenuOpen ? (
                    <FaTimes size={20} className="animate-spin" />
                  ) : (
                    <FaBars size={20} />
                  )}
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={`fixed top-20 w-full z-40 md:hidden transition-all duration-500 ease-in-out overflow-hidden ${
          mobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } ${
          isDarkMode
            ? "bg-slate-900/95 backdrop-blur-md shadow-2xl border-b border-slate-700/50"
            : "bg-white/95 backdrop-blur-md shadow-2xl border-b border-gray-200/50"
        }`}
      >
        <div className="px-4 pt-4 pb-6 space-y-3">
          {navItems.map((item, index) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={toggleMobileMenu}
              className={({ isActive }) =>
                `group flex items-center px-5 py-4 rounded-2xl text-base font-semibold transition-all duration-300 transform hover:scale-105 ${
                  isActive
                    ? "bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg shadow-red-500/30"
                    : isDarkMode
                    ? "hover:bg-slate-800/60 hover:text-gray-100 hover:shadow-lg hover:shadow-slate-700/30"
                    : "hover:bg-red-50/80 hover:text-slate-800 hover:shadow-lg hover:shadow-red-100/50"
                }`
              }
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="mr-4 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </span>
              <span className="tracking-wide">{item.text}</span>

              {/* Animated line */}
              <div
                className={`ml-auto w-0 h-0.5 group-hover:w-6 transition-all duration-300 ${
                  isDarkMode ? "bg-gray-300" : "bg-red-500"
                } rounded-full`}
              ></div>
            </NavLink>
          ))}

          {/* Mobile Resume Button */}
          <a
            href="/resume.pdf"
            download
            onClick={toggleMobileMenu}
            className="flex items-center px-5 py-4 rounded-2xl text-base font-semibold transition-all duration-300 transform hover:scale-105 bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg shadow-red-500/30 hover:shadow-xl hover:shadow-red-500/40 mt-4"
          >
            <FaFileDownload className="mr-4 animate-pulse" />
            <span className="tracking-wide">Download Resume</span>
          </a>
        </div>
      </div>

      {/* Spacer with gradient border */}
      <div className="pt-20">
        <div
          className={`h-px bg-gradient-to-r ${
            isDarkMode
              ? "from-slate-800 via-red-500/20 to-slate-800"
              : "from-gray-200 via-red-500/20 to-gray-200"
          }`}
        ></div>
      </div>
    </>
  );
};

export default Navbar;
