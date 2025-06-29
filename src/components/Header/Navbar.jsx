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

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);

    // Check for dark mode preference
    const darkModeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );
    setIsDarkMode(darkModeMediaQuery.matches);

    const handleDarkModeChange = (e) => setIsDarkMode(e.matches);
    darkModeMediaQuery.addListener(handleDarkModeChange);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      darkModeMediaQuery.removeListener(handleDarkModeChange);
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
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "py-2 shadow-lg backdrop-blur-sm" : "py-4"
        } ${
          isDarkMode
            ? "bg-slate-900/90 text-gray-50 border-b border-slate-800"
            : "bg-white/90 text-slate-800 border-b border-gray-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <NavLink
              to="/"
              className="flex items-center space-x-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <PortfolioLogo />
            </NavLink>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-lg text-sm font-medium flex items-center transition-all duration-200 ${
                      isActive
                        ? `bg-red-600 text-white shadow-md`
                        : `${
                            isDarkMode
                              ? "hover:bg-slate-800 hover:text-gray-50"
                              : "hover:bg-pink-100 hover:text-slate-800"
                          }`
                    }`
                  }
                >
                  <span className="mr-2">{item.icon}</span>
                  {item.text}
                </NavLink>
              ))}
            </div>

            {/* Right side buttons */}
            <div className="flex items-center space-x-3">
              {/* Resume button (hidden on mobile) */}
              <a
                href="/resume.pdf"
                download
                className={`hidden sm:flex px-4 py-2 rounded-lg text-sm font-medium items-center transition-all duration-300 ${
                  isDarkMode
                    ? "bg-red-600 text-gray-50 hover:bg-red-700 shadow-md"
                    : "bg-red-600 text-white hover:bg-red-700 shadow-md"
                }`}
              >
                <FaFileDownload className="mr-2" />
                Resume
              </a>

              <DarkModeBtn
                isDarkMode={isDarkMode}
                setIsDarkMode={setIsDarkMode}
              />

              {/* Mobile Menu Toggle */}
              <button
                onClick={toggleMobileMenu}
                className={`md:hidden p-2 rounded-lg transition-colors ${
                  isDarkMode
                    ? "hover:bg-slate-800 text-gray-50"
                    : "hover:bg-pink-100 text-slate-800"
                }`}
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={`fixed top-24 w-full z-40 md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          mobileMenuOpen ? "max-h-screen" : "max-h-0"
        } ${
          isDarkMode
            ? "bg-slate-900 shadow-lg border-b border-slate-800"
            : "bg-white/90 shadow-lg border-b border-gray-100"
        }`}
      >
        <div className="px-2 pt-2 pb-4 bg-white dark:bg-slate-900 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={toggleMobileMenu}
              className={({ isActive }) =>
                `block px-4 py-3 rounded-lg text-base font-medium flex items-center mx-1 ${
                  isActive
                    ? `bg-red-600 text-white shadow-md`
                    : `${
                        isDarkMode
                          ? "hover:bg-slate-800 hover:text-gray-50"
                          : "hover:bg-pink-100 hover:text-slate-800"
                      }`
                }`
              }
            >
              <span className="mr-3">{item.icon}</span>
              {item.text}
            </NavLink>
          ))}

          <a
            href="/resume.pdf"
            download
            onClick={toggleMobileMenu}
            className={`block px-4 py-3 rounded-lg text-base font-medium flex items-center mx-1 ${
              isDarkMode
                ? "bg-red-600 text-gray-50 hover:bg-red-700 shadow-md"
                : "bg-red-600 text-white hover:bg-red-700 shadow-md"
            }`}
          >
            <FaFileDownload className="mr-3" />
            Download Resume
          </a>
        </div>
      </div>

      {/* Spacer to prevent content overlap */}
      <div className="pt-20"></div>
    </>
  );
};

export default Navbar;
