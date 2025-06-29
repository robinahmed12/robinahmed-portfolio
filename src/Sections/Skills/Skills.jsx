import React, { useEffect } from "react";
import Container from "../../components/Container/Container";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress } from "react-icons/si";

const Skills = () => {
  const skills = [
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" />, level: 95 },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" />, level: 90 },
    {
      name: "JavaScript",
      icon: <FaJs className="text-yellow-400" />,
      level: 85,
    },
    {
      name: "React.js",
      icon: <FaReact className="text-blue-400" />,
      level: 80,
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-cyan-400" />,
      level: 85,
    },
    {
      name: "Node.js",
      icon: <FaNodeJs className="text-green-500" />,
      level: 70,
    },
    {
      name: "Express.js",
      icon: <SiExpress className="text-gray-800 dark:text-gray-200" />,
      level: 65,
    },
    {
      name: "MongoDB",
      icon: <SiMongodb className="text-green-600" />,
      level: 60,
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  useEffect(() => {
    document.title = "Skills";
  });

  return (
    <section
      data-aos="fade-up"
      data-aos-duration="3000"
      className="py-12 bg-white dark:bg-slate-900 transition-colors duration-300"
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-gray-50 mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-slate-800 dark:text-gray-300 max-w-2xl mx-auto">
            Here are the technologies I work with to create responsive,
            performant, and user-friendly web applications.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -5 }}
              className="bg-gray-50 dark:bg-slate-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-pink-100 dark:border-slate-700"
            >
              <div className="flex items-center justify-center text-4xl mb-4">
                {skill.icon}
              </div>
              <h3 className="text-lg font-semibold text-slate-800 dark:text-gray-100 text-center mb-2">
                {skill.name}
              </h3>
              <div className="w-full bg-pink-100 dark:bg-slate-700 rounded-full h-2.5">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  className="h-2.5 rounded-full bg-red-600"
                ></motion.div>
              </div>
              <p className="text-right text-sm text-slate-800 dark:text-gray-300 mt-1">
                {skill.level}%
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 bg-pink-100 dark:bg-slate-800 p-6 rounded-lg border border-pink-100 dark:border-slate-700"
        >
          <h3 className="text-xl font-semibold text-slate-800 dark:text-gray-100 mb-4">
            Development Approach
          </h3>
          <ul className="space-y-2 text-slate-800 dark:text-gray-300">
            <li className="flex items-start">
              <span className="text-red-600 mr-2">•</span>
              <span>
                Pixel-perfect, responsive designs with mobile-first approach
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 mr-2">•</span>
              <span>
                Clean, scalable code with proper component architecture
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 mr-2">•</span>
              <span>Performance-focused implementation</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 mr-2">•</span>
              <span>Interactive UI with smooth animations</span>
            </li>
          </ul>
        </motion.div>
      </Container>
    </section>
  );
};

export default Skills;
