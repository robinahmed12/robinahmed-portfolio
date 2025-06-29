import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaFileDownload, FaCode } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";
import img from "../../assets/aiease_1750841588683.jpg"

const Banner = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [devTools, setDevTools] = useState([
    "React",
    "JavaScript",
    "Tailwind",
    "Node.js",
    "MongoDB",
  ]);

  // Rotate dev tools for animation
  useEffect(() => {
    const interval = setInterval(() => {
      setDevTools((prev) => {
        const [first, ...rest] = prev;
        return [...rest, first];
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white dark:bg-slate-900 py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Text Content */}
        <div className="lg:w-1/2 mt-9 lg:md:mt-0  space-y-6 order-2 lg:order-1">
          <div className="mb-4">
            <span className="bg-red-600/10 dark:bg-red-600/20 text-red-600 dark:text-red-400 text-sm font-medium px-4 py-2 rounded-full inline-flex items-center gap-2">
              <FaCode className="text-xs" />
              Frontend Developer
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 dark:text-gray-50 leading-tight">
            Hi, I'm{" "}
            <span className="text-red-600 dark:text-red-400">Robin Ahmed</span>
            <br />
            <Typewriter
              words={[
                "Building Digital Experiences",
                "Creating Responsive UIs",
                "Crafting Web Solutions",
              ]}
              loop={Infinity}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
              cursorColor="#DC2626"
            />
          </h1>

          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-lg">
            Specializing in React, JavaScript & Responsive Design | MERN Stack
            Familiarity | Passionate about clean code and intuitive user
            interfaces.
          </p>

          {/* Animated Skills */}
          <div className="py-2">
            <span className="text-slate-600 dark:text-slate-300">
              Tech Stack:{" "}
            </span>
            <span className="text-red-600 dark:text-red-400 font-medium">
              <Typewriter
                words={devTools}
                loop={Infinity}
                cursor
                cursorStyle=""
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </span>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="px-6 py-3 bg-red-600 hover:bg-red-700 dark:bg-red-700 dark:hover:bg-red-600 text-white font-medium rounded-md shadow-lg transition-all duration-300 hover:scale-[1.02] flex items-center gap-2 group">
              <FaFileDownload className="group-hover:animate-bounce" />
              Download Resume
            </button>

            <Link
              to="/projects"
              className="px-6 py-3 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 font-medium rounded-md shadow-sm transition-all duration-300 hover:scale-[1.02] hover:bg-slate-50 dark:hover:bg-slate-800/50"
            >
              View Projects
            </Link>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-5 pt-6">
            <a
              href="https://github.com/robinahmed12"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-red-600 dark:text-slate-300 dark:hover:text-red-400 transition-colors duration-300"
              aria-label="GitHub"
            >
              <FaGithub className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/robinahmed12/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-red-600 dark:text-slate-300 dark:hover:text-red-400 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-red-600 dark:text-slate-300 dark:hover:text-red-400 transition-colors duration-300"
              aria-label="Twitter"
            >
              <FaXTwitter className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Image with Dev Tools */}
        <div
          className="lg:w-1/2 mt-9 lg:md:mt-0 relative order-1 lg:order-2 mb-8 lg:mb-0"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Developer Image Container */}
          <div className="relative z-10 w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 mx-auto">
            <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-red-600 dark:border-red-400 shadow-xl hover:shadow-2xl transition-all duration-500">
              <img
                src={img}
                alt="Robin Ahmed"
                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>

          {/* Animated Dev Tools */}
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none">
            {devTools.map((tool, index) => (
              <div
                key={index}
                className={`absolute rounded-full bg-white dark:bg-slate-800 shadow-md dark:shadow-lg flex items-center justify-center transition-all duration-700 ${
                  isHovered ? "opacity-100" : "opacity-90"
                }`}
                style={{
                  width: `clamp(60px, ${60 + index * 15}px, 100px)`,
                  height: `clamp(60px, ${60 + index * 15}px, 100px)`,
                  transform: `rotate(${index * 72}deg) translate(${
                    isHovered
                      ? "clamp(140px, 180px, 200px)"
                      : "clamp(130px, 170px, 190px)"
                  }) rotate(${-index * 72}deg)`,
                  zIndex: 5 - index,
                }}
              >
                <span className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-200 px-1 text-center">
                  {tool}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
