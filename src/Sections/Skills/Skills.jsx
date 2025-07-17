import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress } from "react-icons/si";
import { Code, Lightbulb, Zap, Target } from "lucide-react";
import { Link } from "react-router";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("frontend");

  const skillsData = {
    frontend: [
      {
        name: "HTML5",
        icon: <FaHtml5 className="text-orange-500" />,
        level: 95,
        color: "from-orange-400 to-orange-600",
      },
      {
        name: "CSS3",
        icon: <FaCss3Alt className="text-blue-500" />,
        level: 90,
        color: "from-blue-400 to-blue-600",
      },
      {
        name: "JavaScript",
        icon: <FaJs className="text-yellow-400" />,
        level: 85,
        color: "from-yellow-400 to-yellow-600",
      },
      {
        name: "React.js",
        icon: <FaReact className="text-blue-400" />,
        level: 80,
        color: "from-blue-400 to-cyan-500",
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-cyan-400" />,
        level: 85,
        color: "from-cyan-400 to-teal-500",
      },
    ],
    backend: [
      {
        name: "Node.js",
        icon: <FaNodeJs className="text-green-500" />,
        level: 70,
        color: "from-green-400 to-green-600",
      },
      {
        name: "Express.js",
        icon: <SiExpress className="text-gray-800 dark:text-gray-200" />,
        level: 65,
        color: "from-gray-400 to-gray-600",
      },
      {
        name: "MongoDB",
        icon: <SiMongodb className="text-green-600" />,
        level: 60,
        color: "from-green-500 to-emerald-600",
      },
    ],
  };

  const categories = [
    { id: "frontend", label: "Frontend", icon: <Code className="w-5 h-5" /> },
    { id: "backend", label: "Backend", icon: <Zap className="w-5 h-5" /> },
  ];

  const strengths = [
    {
      icon: <Target className="w-6 h-6 text-red-600" />,
      title: "Pixel-Perfect Design",
      description:
        "Creating responsive, mobile-first designs with attention to detail",
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-red-600" />,
      title: "Clean Architecture",
      description:
        "Writing scalable, maintainable code with proper component structure",
    },
    {
      icon: <Zap className="w-6 h-6 text-red-600" />,
      title: "Performance Focused",
      description:
        "Optimizing applications for speed and smooth user experience",
    },
    {
      icon: <Code className="w-6 h-6 text-red-600" />,
      title: "Interactive UI",
      description:
        "Building engaging interfaces with smooth animations and transitions",
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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  useEffect(() => {
    document.title = "Skills - Robin Ahmed";
  }, []);

  return (
    <section className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-full mb-6">
            <Code className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-gray-50 mb-4">
            Technical <span className="text-red-600">Skills</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Passionate MERN Stack Developer specializing in creating responsive,
            scalable web applications with modern technologies and best
            practices.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="bg-pink-100 dark:bg-slate-800 p-2 rounded-full border border-pink-200 dark:border-slate-700">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-red-600 text-white shadow-lg"
                    : "text-slate-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400"
                }`}
              >
                {category.icon}
                <span className="font-medium">{category.label}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          key={activeCategory}
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {skillsData[activeCategory].map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-pink-100 dark:border-slate-700 relative overflow-hidden"
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-pink-50 dark:from-slate-800 dark:to-slate-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative z-10">
                {/* Icon */}
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-100 to-pink-100 dark:from-slate-700 dark:to-slate-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-3xl">{skill.icon}</div>
                </div>

                {/* Skill Name */}
                <h3 className="text-xl font-bold text-slate-800 dark:text-gray-100 mb-4 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors duration-300">
                  {skill.name}
                </h3>

                {/* Progress Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-600 dark:text-gray-400">
                      Proficiency
                    </span>
                    <span className="text-sm font-semibold text-red-600">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-slate-600 rounded-full h-3 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{
                        duration: 1.5,
                        delay: index * 0.1,
                        ease: "easeOut",
                      }}
                      className={`h-full rounded-full bg-gradient-to-r ${skill.color} shadow-sm`}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Development Approach */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-pink-50 to-red-50 dark:from-slate-800 dark:to-slate-700 rounded-3xl p-8 md:p-12 border border-pink-100 dark:border-slate-600"
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-gray-100 mb-4">
              Development <span className="text-red-600">Approach</span>
            </h3>
            <p className="text-slate-600 dark:text-gray-300 max-w-2xl mx-auto">
              My core principles for creating exceptional web applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {strengths.map((strength, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-pink-100 dark:border-slate-700 group"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-red-100 to-pink-100 dark:from-slate-700 dark:to-slate-600 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {strength.icon}
                </div>
                <h4 className="text-lg font-semibold text-slate-800 dark:text-gray-100 mb-2">
                  {strength.title}
                </h4>
                <p className="text-slate-600 dark:text-gray-300 text-sm leading-relaxed">
                  {strength.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer group">
            <Link to={"/contact"}>Let's Build Something Amazing</Link>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              →
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
