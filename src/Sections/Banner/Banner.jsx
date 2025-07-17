import { useState, useEffect } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaFileDownload,
  FaCode,
  FaArrowRight,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Typewriter } from "react-simple-typewriter";
// import { Link } from "react-router-dom"; // Uncomment when using with React Router
import { MdEmail } from "react-icons/md";
import img from "../../assets/aiease_1750841588683.jpg"

const Banner = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [devTools, setDevTools] = useState([
    "React",
    "JavaScript",
    "Tailwind",
    "Node.js",
    "MongoDB",
  ]);

  // Track mouse movement for interactive background
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

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
    <section className="relative min-h-screen bg-gradient-to-br from-white via-red-50/30 to-red-100/20 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 py-16 px-4 sm:px-6 lg:px-8 transition-all duration-700 overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated gradient orbs */}
        <div
          className="absolute w-96 h-96 bg-gradient-to-r from-red-400/20 to-red-600/10 dark:from-red-500/10 dark:to-red-700/5 rounded-full blur-3xl opacity-60 animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${
              mousePosition.y * 0.02
            }px)`,
            top: "10%",
            left: "70%",
          }}
        />
        <div
          className="absolute w-80 h-80 bg-gradient-to-r from-red-500/10 to-red-300/20 dark:from-red-600/5 dark:to-red-400/10 rounded-full blur-2xl opacity-40 animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * -0.03}px, ${
              mousePosition.y * -0.03
            }px)`,
            top: "60%",
            left: "10%",
            animationDelay: "1s",
          }}
        />

        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-red-500/40 dark:bg-red-400/30 rounded-full animate-ping" />
        <div
          className="absolute top-40 right-32 w-1 h-1 bg-red-600/50 dark:bg-red-500/40 rounded-full animate-ping"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-32 left-40 w-1.5 h-1.5 bg-red-400/40 dark:bg-red-300/30 rounded-full animate-ping"
          style={{ animationDelay: "3s" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Text Content */}
        <div className="lg:w-1/2 mt-9 lg:mt-0 space-y-8 order-2 lg:order-1">
          {/* Animated Role Tag */}
          <div className="mb-6 group">
            <span className="bg-gradient-to-r from-red-600/10 to-red-500/20 dark:from-red-600/20 dark:to-red-500/30 text-red-700 dark:text-red-300 text-sm font-semibold px-6 py-3 rounded-full inline-flex items-center gap-3 shadow-lg hover:shadow-xl transition-all duration-300 border border-red-200/50 dark:border-red-700/30 backdrop-blur-sm">
              <FaCode className="text-sm animate-pulse" />
              MERN Stack Developer
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            </span>
          </div>

          {/* Enhanced Heading */}
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-slate-800 to-slate-600 dark:from-gray-50 dark:to-gray-200 bg-clip-text text-transparent">
                Hi, I'm{" "}
              </span>
              <span className="bg-gradient-to-r from-red-600 to-red-700 dark:from-red-400 dark:to-red-500 bg-clip-text text-transparent animate-pulse">
                Robin Ahmed
              </span>
            </h1>

            <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-700 dark:text-slate-200 min-h-[60px] flex items-center">
              <Typewriter
                words={[
                  "Building Digital Experiences",
                  "Creating Responsive UIs",
                  "Crafting Full-Stack Solutions",
                ]}
                loop={Infinity}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={2000}
                cursorColor="#DC2626"
              />
            </div>
          </div>

          {/* Enhanced Description */}
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
            I specialize in{" "}
            <span className="text-red-600 dark:text-red-400 font-semibold">
              React.js
            </span>
            ,{" "}
            <span className="text-red-600 dark:text-red-400 font-semibold">
              Tailwind CSS
            </span>
            , and responsive design — with hands-on experience in building
            full-stack web applications using the{" "}
            <span className="text-red-600 dark:text-red-400 font-semibold">
              MERN stack
            </span>
            .
          </p>

          {/* Animated Tech Stack */}
          <div className="py-4">
            <div className="flex flex-wrap items-center gap-2 text-lg">
              <span className="text-slate-600 dark:text-slate-300 font-medium">
                Tech Stack:
              </span>
              <div className="flex items-center gap-1">
                <span className="text-red-600 dark:text-red-400 font-bold text-xl">
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
                <FaArrowRight className="text-red-500 dark:text-red-400 animate-pulse ml-2" />
              </div>
            </div>
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <a
              href="/resume.pdf"
              download
              className="group px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 dark:from-red-600 dark:to-red-700 dark:hover:from-red-500 dark:hover:to-red-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <FaFileDownload className="group-hover:animate-bounce z-10" />
              <span className="z-10">Download CV</span>
            </a>

            <a
              href="/projects" // Replace with Link component when using React Router
              className="group px-8 py-4 border-2 border-red-600 dark:border-red-500 text-red-600 dark:text-red-400 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-red-50 dark:hover:bg-red-950/30 flex items-center justify-center gap-3 relative overflow-hidden"
            >
              <span className="group-hover:translate-x-1 transition-transform duration-300">
                View Projects
              </span>
              <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>

          {/* Enhanced Social Icons */}
          <div className="flex space-x-6 pt-8">
            {[
              {
                icon: FaGithub,
                href: "https://github.com/robinahmed12",
                label: "GitHub",
              },
              {
                icon: FaLinkedin,
                href: "https://www.linkedin.com/in/robinahmed12/",
                label: "LinkedIn",
              },
              {
                icon: MdEmail,
                href: "mailto:shawonahmed0294@gmail.com",
                label: "Email",
              },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={label !== "Email" ? "_blank" : undefined}
                rel={label !== "Email" ? "noopener noreferrer" : undefined}
                className="group p-3 bg-white dark:bg-slate-800 rounded-full shadow-lg hover:shadow-xl text-slate-600 hover:text-red-600 dark:text-slate-300 dark:hover:text-red-400 transition-all duration-300 hover:scale-110 border border-slate-200 dark:border-slate-700"
                aria-label={label}
              >
                <Icon className="w-6 h-6 group-hover:animate-pulse" />
              </a>
            ))}
          </div>
        </div>

        {/* Enhanced Image with Floating Dev Tools */}
        <div
          className="lg:w-1/2 mt-9 lg:mt-0 relative order-1 lg:order-2 mb-8 lg:mb-60"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Glowing Background */}
          <div className="absolute  inset-0 rounded-full bg-gradient-to-r from-red-400/20 to-red-600/30 dark:from-red-500/20 dark:to-red-700/30 blur-2xl animate-pulse" />

          {/* Developer Image Container */}
          <div className="relative z-10 w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 mx-auto">
            <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-gradient-to-r from-red-500 to-red-700 dark:from-red-400 dark:to-red-600 shadow-2xl hover:shadow-3xl transition-all duration-500 bg-gradient-to-r from-red-500 to-red-700 dark:from-red-400 dark:to-red-600 p-1">
              <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-slate-800">
                <img
                  src={img}
                  alt="Robin Ahmed"
                  className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500 hover:scale-110"
                />
              </div>
            </div>
          </div>

          {/* Enhanced Animated Dev Tools */}
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none">
            {devTools.map((tool, index) => (
              <div
                key={index}
                className={`absolute rounded-2xl bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm shadow-xl dark:shadow-2xl flex items-center justify-center transition-all duration-700 border border-white/50 dark:border-slate-700/50 hover:border-red-200 dark:hover:border-red-700/50 ${
                  isHovered ? "opacity-100 scale-110" : "opacity-90 scale-100"
                }`}
                style={{
                  width: `clamp(70px, ${70 + index * 10}px, 110px)`,
                  height: `clamp(70px, ${70 + index * 10}px, 110px)`,
                  transform: `rotate(${index * 72}deg) translate(${
                    isHovered
                      ? "clamp(160px, 200px, 220px)"
                      : "clamp(150px, 190px, 210px)"
                  }) rotate(${-index * 72}deg)`,
                  zIndex: 5 - index,
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <span className="text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-200 px-2 text-center">
                  {tool}
                </span>
              </div>
            ))}
          </div>

          {/* Floating Code Snippets */}
          <div className="absolute top-10 -right-10 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-lg p-3 shadow-lg border border-slate-200 dark:border-slate-700 animate-bounce">
            <code className="text-xs text-slate-600 dark:text-slate-300 font-mono">
              const dev = "Robin";
            </code>
          </div>
          <div
            className="absolute bottom-10 -left-10 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-lg p-3 shadow-lg border border-slate-200 dark:border-slate-700 animate-bounce"
            style={{ animationDelay: "1s" }}
          >
            <code className="text-xs text-slate-600 dark:text-slate-300 font-mono">
              {"{ MERN Stack }"}
            </code>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
