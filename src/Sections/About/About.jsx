import React, { useEffect } from "react";
import Container from "../../components/Container/Container";
import { motion } from "framer-motion";
import img from "../../assets/aiease_1750841588683.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const About = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const skills = [
    { name: "HTML5", icon: "🚀" },
    { name: "CSS3", icon: "🎨" },
    { name: "JavaScript", icon: "⚡" },
    { name: "React.js", icon: "⚛️" },
    { name: "Tailwind CSS", icon: "💨" },
    { name: "Node.js", icon: "🖥️" },
    { name: "Express.js", icon: "🚂" },
    { name: "MongoDB", icon: "🗄️" },
  ];

  return (
    <section className="py-12 lg:py-16 bg-white dark:bg-slate-900 transition-colors duration-300">
      <Container>
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left Column - Image */}
          <div
            data-aos="fade-right"
            className="w-full lg:w-1/3 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-red-600 dark:border-red-600 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-100 to-red-600 opacity-20 dark:opacity-30"></div>
              <div className="absolute inset-4 rounded-full border-2 border-white opacity-30"></div>
              <img
                src={img}
                alt="Robin Ahmed"
                className="w-full h-full object-cover relative z-10"
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div data-aos="fade-left" className="w-full lg:w-2/3">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-gray-50 mb-6">
              About <span className="text-red-600 dark:text-red-600">Me</span>
            </h2>

            <p className="text-lg text-slate-800 dark:text-gray-50 mb-6 leading-relaxed">
              I'm Robin Ahmed, a passionate Frontend Developer with strong
              skills in crafting responsive, user-friendly, and visually
              appealing web applications. With expertise in modern web
              technologies, I specialize in creating seamless digital
              experiences that combine aesthetic appeal with technical
              excellence.
            </p>

            <p className="text-lg text-slate-800 dark:text-gray-50 mb-8 leading-relaxed">
              My approach focuses on clean UI design, performance optimization,
              and maintainable code. Beyond frontend development, I also have
              hands-on experience with backend technologies, allowing me to
              understand and contribute to full-stack projects effectively.
            </p>

            {/* Skills Section */}
            <div>
              <h3 className="text-xl font-semibold text-slate-800 dark:text-gray-50 mb-4">
                My Skills
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="px-4 py-2 bg-pink-100 dark:bg-slate-800 text-slate-800 dark:text-gray-50 rounded-full flex items-center gap-2 shadow-sm hover:shadow-md transition-all cursor-pointer transform hover:scale-105 active:scale-95"
                  >
                    <span>{skill.icon}</span>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-10">
              <Link
                to="/projects"
                className="inline-block px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg"
              >
                View My Projects
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
