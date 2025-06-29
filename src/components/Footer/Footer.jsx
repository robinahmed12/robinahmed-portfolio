import React from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaUser,
  FaCode,
  FaProjectDiagram,
  FaServer,
} from "react-icons/fa";
import { MdContactPhone } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const navItems = [
    { to: "/", icon: <FaHome />, text: "Home" },
    { to: "/about", icon: <FaUser />, text: "About" },
    { to: "/skills", icon: <FaCode />, text: "Skills" },
    { to: "/projects", icon: <FaProjectDiagram />, text: "Projects" },
    { to: "/services", icon: <FaServer />, text: "Services" },
    { to: "/contact", icon: <MdContactPhone />, text: "Contact" },
  ];

  const socialLinks = [
    { icon: <FaGithub />, url: "https://www.linkedin.com/in/robinahmed12/" },
    { icon: <FaLinkedin />, url: "https://linkedin.com/in/robinahmed12/" },
    { icon: <FaXTwitter />, url: "https://twitter.com/yourusername" },
  ];

  return (
    <footer className="bg-[#1E293B] text-[#F8FAFC] py-8">
      <div
        data-aos="fade-up"
        data-aos-duration="3000"
        className="flex max-w-7xl mx-auto flex-col md:flex-row justify-between items-center gap-8"
      >
        {/* Portfolio Info */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold mb-2">Robin Ahmed</h2>
          <p className="max-w-md">
            Frontend Developer crafting responsive, user-friendly web
            applications with React.js & Tailwind CSS
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col items-center md:items-end">
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.to}
                className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-[#DC2626] hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105"
              >
                <span className="text-[#DC2626] hover:text-white transition-colors duration-300">
                  {item.icon}
                </span>
                <span>{item.text}</span>
              </Link>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-[#F8FAFC] hover:text-[#DC2626] transition-colors duration-300 transform hover:scale-125"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-[#334155] mt-8 pt-6 text-center">
        <p>
          &copy; {new Date().getFullYear()} Robin Ahmed. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
