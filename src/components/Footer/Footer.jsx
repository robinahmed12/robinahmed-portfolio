import React from "react";
import {
  Home,
  User,
  Code,
  FolderOpen,
  Server,
  Github,
  Linkedin,
  Heart,
  ArrowUp,
  Phone,
  Mail,
  MapPin,
  Twitter,
} from "lucide-react";
import { FaArrowUp, FaHeart } from "react-icons/fa";
import { BiCodeAlt } from "react-icons/bi";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { Link } from "react-router";

const Footer = () => {
  const navItems = [
    { to: "/", icon: <Home />, text: "Home" },
    { to: "/about", icon: <User />, text: "About" },
    { to: "/skills", icon: <Code />, text: "Skills" },
    { to: "/projects", icon: <FolderOpen />, text: "Projects" },
    { to: "/services", icon: <Server />, text: "Services" },
    { to: "/contact", icon: <Phone />, text: "Contact" },
  ];

  const socialLinks = [
    {
      icon: <Github />,
      url: "https://github.com/robinahmed12",
      label: "GitHub",
      color: "hover:text-gray-400",
    },
    {
      icon: <Linkedin />,
      url: "https://linkedin.com/in/robinahmed12",
      label: "LinkedIn",
      color: "hover:text-blue-400",
    },
    {
      icon: <Twitter />,
      url: "https://twitter.com/yourusername",
      label: "Twitter",
      color: "hover:text-blue-300",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gradient-to-br from-[#1E293B] via-[#334155] to-[#1E293B] dark:from-[#0F172A] dark:via-[#1E293B] dark:to-[#0F172A] text-[#F8FAFC] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="grid grid-cols-12 gap-4 h-full">
            {[...Array(60)].map((_, i) => (
              <div
                key={i}
                className="bg-[#DC2626] rounded-full animate-pulse"
                style={{
                  width: Math.random() * 4 + 2 + "px",
                  height: Math.random() * 4 + 2 + "px",
                  animationDelay: Math.random() * 3 + "s",
                  animationDuration: Math.random() * 2 + 2 + "s",
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute top-4 right-4 bg-[#DC2626] hover:bg-red-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10"
        aria-label="Scroll to top"
      >
        <FaArrowUp className="w-4 h-4" />
      </button>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        {/* Main Content */}
        <div
          data-aos="fade-up"
          data-aos-duration="800"
          className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12"
        >
          {/* Brand Section */}
          <div className="lg:col-span-1 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start mb-6">
              <div className="relative">
                <div className="bg-gradient-to-r from-[#DC2626] to-red-500 p-4 rounded-2xl shadow-lg">
                  <BiCodeAlt className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#FECACA] rounded-full animate-ping"></div>
              </div>
              <div className="ml-4">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-[#DC2626] to-red-400 bg-clip-text text-transparent">
                  Robin Ahmed
                </h3>
                <p className="text-sm text-gray-300">MERN Stack Developer</p>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed mb-6">
              Passionate MERN Stack Developer crafting responsive, user-friendly
              web applications with modern technologies and best practices.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center justify-center lg:justify-start gap-3 text-sm">
                <MdEmail className="w-4 h-4 text-[#DC2626]" />
                <span>contact@robinahmed.dev</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-3 text-sm">
                <MdLocationOn className="w-4 h-4 text-[#DC2626]" />
                <span>Dhaka, Bangladesh</span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-1">
            <h4 className="text-xl font-semibold mb-6 text-center lg:text-left">
              <span className="relative">
                Quick Links
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#DC2626] to-transparent"></div>
              </span>
            </h4>
            <nav className="grid grid-cols-2 gap-3">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.to}
                  className="group flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-all duration-300 hover:translate-x-1"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <span className="text-[#DC2626] group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </span>
                  <span className="text-sm group-hover:text-white transition-colors duration-300">
                    {item.text}
                  </span>
                </Link>
              ))}
            </nav>
          </div>

          {/* Social & CTA Section */}
          <div className="lg:col-span-1 text-center lg:text-left">
            <h4 className="text-xl font-semibold mb-6">
              <span className="relative">
                Let's Connect
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#DC2626] to-transparent"></div>
              </span>
            </h4>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start gap-4 mb-8">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 hover:scale-110 ${social.color}`}
                  data-aos="zoom-in"
                  data-aos-delay={index * 150}
                >
                  <span className="text-xl transition-transform duration-300 group-hover:scale-125">
                    {social.icon}
                  </span>
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-[#DC2626] to-red-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div data-aos="fade-up" data-aos-delay="600">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#DC2626] to-red-500 hover:from-red-600 hover:to-red-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <span>Start a Project</span>
                <FaArrowUp className="w-4 h-4 rotate-45" />
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="relative mb-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/10"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="bg-gradient-to-r from-[#1E293B] to-[#334155] dark:from-[#0F172A] dark:to-[#1E293B] px-6">
              <div className="w-3 h-3 bg-[#DC2626] rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div
          data-aos="fade-up"
          data-aos-delay="800"
          className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400"
        >
          <div className="flex items-center gap-2">
            <span>
              &copy; {new Date().getFullYear()} Robin Ahmed. All rights
              reserved.
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span>Built with</span>
            <FaHeart className="w-4 h-4 text-red-500 animate-pulse" />
            <span>using React & Tailwind CSS</span>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#DC2626] via-red-500 to-[#DC2626]"></div>
    </footer>
  );
};

export default Footer;
