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
} from "react-icons/fa";
import { MdContactPhone } from "react-icons/md";
import { FiMoon, FiSun } from "react-icons/fi";

const Navbar = () => {
  // Initialize darkMode from localStorage or default to true
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode ? JSON.parse(savedMode) : true;
  });
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Apply dark mode class to HTML element on initial render and when darkMode changes
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    // Save preference to localStorage
    localStorage.setItem("darkMode", JSON.stringify(darkMode));

    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navItems = [
    { to: "/", icon: <FaHome />, text: "Home" },
    { to: "/about", icon: <FaUser />, text: "About" },
    { to: "/skills", icon: <FaCode />, text: "Skills" },
    { to: "/projects", icon: <FaProjectDiagram />, text: "Projects" },
    { to: "/services", icon: <FaServer />, text: "Services" },
    { to: "/contact", icon: <MdContactPhone />, text: "Contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "py-2 shadow-lg backdrop-blur-sm bg-opacity-90" : "py-4"
        } ${
          darkMode
            ? "bg-[#0F172A]/90 text-[#F8FAFC]"
            : "bg-white/90 text-[#1E293B]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <NavLink
                to="/"
                className={`text-xl font-bold ${
                  darkMode ? "text-[#F8FAFC]" : "text-[#1E293B]"
                }`}
              >
                <span className="text-[#DC2626] text-2xl">Robin</span> Ahmed
              </NavLink>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-2">
                {navItems.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    className={({ isActive }) =>
                      `px-3 py-2 rounded-md text-sm font-medium flex items-center transition-all duration-200
                      ${
                        isActive
                          ? `bg-[#DC2626] text-white`
                          : `${
                              darkMode
                                ? "hover:bg-[#1E293B] hover:text-[#F8FAFC]"
                                : "hover:bg-[#FECACA] hover:text-[#1E293B]"
                            }`
                      }`
                    }
                  >
                    <span className="mr-2">{item.icon}</span>
                    {item.text}
                  </NavLink>
                ))}
              </div>
            </div>

            {/* Right side buttons */}
            <div className="flex items-center space-x-2 md:space-x-4">
              {/* Dark mode toggle */}
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-full transition-colors duration-300 ${
                  darkMode
                    ? "bg-[#1E293B] text-[#F8FAFC] hover:bg-[#334155]"
                    : "bg-[#FECACA] text-[#1E293B] hover:bg-[#fbcbcb]"
                }`}
                aria-label="Toggle dark mode"
              >
                {darkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
              </button>

              {/* Resume button - hidden on mobile */}
              <a
                href="/resume.pdf"
                download
                className={`hidden sm:flex px-4 py-2 rounded-md text-sm font-medium items-center transition-all duration-300
                  ${
                    darkMode
                      ? "bg-[#DC2626] text-[#F8FAFC] hover:bg-[#b91c1c]"
                      : "bg-[#DC2626] text-white hover:bg-[#b91c1c]"
                  }`}
              >
                <FaFileDownload className="mr-2" />
                Resume
              </a>

              {/* Mobile menu button */}
              <div className="md:hidden flex items-center">
                <button
                  onClick={toggleMobileMenu}
                  className={`p-2 rounded-md ${
                    darkMode ? "hover:bg-[#1E293B]" : "hover:bg-[#FECACA]"
                  }`}
                  aria-label="Open menu"
                >
                  {mobileMenuOpen ? (
                    <FaTimes size={20} />
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={`fixed top-16 w-full z-40 md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          mobileMenuOpen ? "max-h-screen" : "max-h-0"
        } ${darkMode ? "bg-[#0F172A]" : "bg-white"} shadow-lg`}
      >
        <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={toggleMobileMenu}
              className={({ isActive }) =>
                `block px-3 py-3 rounded-md text-base font-medium flex items-center mx-2
                ${
                  isActive
                    ? `bg-[#DC2626] text-white`
                    : `${
                        darkMode
                          ? "hover:bg-[#1E293B] hover:text-[#F8FAFC]"
                          : "hover:bg-[#FECACA] hover:text-[#1E293B]"
                      }`
                }`
              }
            >
              <span className="mr-3">{item.icon}</span>
              {item.text}
            </NavLink>
          ))}
          {/* Mobile Resume Button */}
          <a
            href="/resume.pdf"
            download
            onClick={toggleMobileMenu}
            className={`block px-3 py-3 rounded-md text-base font-medium flex items-center mx-2
              ${
                darkMode
                  ? "bg-[#DC2626] text-[#F8FAFC] hover:bg-[#b91c1c]"
                  : "bg-[#DC2626] text-white hover:bg-[#b91c1c]"
              }`}
          >
            <FaFileDownload className="mr-3" />
            Download Resume
          </a>
        </div>
      </div>

      {/* Add padding to the top of your content to prevent navbar overlap */}
      <div className="pt-20"></div>
    </>
  );
};

export default Navbar;
