import { useState, useEffect } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaFileDownload,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import img from "../../assets/aiease_1750841588683.jpg";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router";

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

  const handleDone = () => {
    console.log(`Done after 5 loops!`);
  };

  return (
    <section className="bg-white dark:bg-gray-900  py-20 px-4 sm:px-6 lg:px-8">
      <div className=" flex flex-col max-w-7xl mx-auto  md:flex-row items-center justify-between gap-8 md:gap-32">
        {/* Left Side - Text Content */}
        <div className="md:w-1/2 space-y-6 order-2 md:order-1">
          <div className="mb-2">
            <span className="bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400 text-sm font-medium px-3 py-1 rounded-full">
              Frontend Developer
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 dark:text-slate-100 leading-tight">
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
              onLoopDone={handleDone}
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
            <span className="text-red-600 font-medium">
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
            <button className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-md shadow-lg transition-all duration-300 hover:scale-[1.02] flex items-center gap-2">
              <FaFileDownload />
              Download Resume
            </button>

            <Link to={"/projects"} className="px-6 py-3 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-medium rounded-md shadow-sm transition-all duration-300 hover:scale-[1.02] hover:bg-slate-50 dark:hover:bg-slate-800">
              View Projects
            </Link>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-5 pt-4">
            <a
              href="https://github.com/robinahmed12"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 dark:text-slate-400 hover:text-red-600 dark:hover:text-red-400 transition-colors duration-300"
              aria-label="GitHub"
            >
              <FaGithub className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/robinahmed12/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 dark:text-slate-400 hover:text-red-600 dark:hover:text-red-400 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 dark:text-slate-400 hover:text-red-600 dark:hover:text-red-400 transition-colors duration-300"
              aria-label="Twitter"
            >
              <FaXTwitter className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Right Side - Image with Dev Tools */}
        <div
          className="md:w-1/2 relative order-1 md:order-2 mb-12 md:mb-0"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Developer Image - Increased size with adjusted z-index */}
          <div className="relative z-10 w-64 h-64 sm:w-80 sm:h-80 lg:w-80 lg:h-80 mx-auto">
            <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-red-600 shadow-2xl dark:border-red-500">
              <img
                src={img}
                alt="Robin Ahmed"
                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>

          {/* Animated Dev Tools - Adjusted container size and positioning */}
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none">
            {devTools.map((tool, index) => (
              <div
                key={index}
                className={`absolute rounded-full bg-white dark:bg-slate-800 shadow-md flex items-center justify-center transition-all duration-700 ${
                  isHovered ? "opacity-100" : "opacity-90"
                }`}
                style={{
                  width: `${70 + index * 15}px`, // Slightly increased size
                  height: `${70 + index * 15}px`,
                  transform: `rotate(${index * 72}deg) translate(${
                    isHovered ? "180px" : "160px" // Increased translate distance
                  }) rotate(${-index * 72}deg)`,
                  zIndex: 5 - index,
                }}
              >
                <span className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-300 px-1 text-center">
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
