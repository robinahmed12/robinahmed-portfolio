import React, { useEffect } from "react";
import Container from "../../components/Container/Container";
import { motion } from "framer-motion";
import img from "../../assets/aiease_1750841588683.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { Code, Database, Globe, Zap, Users, Award } from "lucide-react";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    document.title = "About";
  }, []);

  const skills = [
    { name: "HTML5", icon: "🚀", level: "Advanced" },
    { name: "CSS3", icon: "🎨", level: "Advanced" },
    { name: "JavaScript", icon: "⚡", level: "Advanced" },
    { name: "React.js", icon: "⚛️", level: "Advanced" },
    { name: "Tailwind CSS", icon: "💨", level: "Advanced" },
    { name: "Node.js", icon: "🖥️", level: "Intermediate" },
    { name: "Express.js", icon: "🚂", level: "Intermediate" },
    { name: "MongoDB", icon: "🗄️", level: "Intermediate" },
  ];

  const stats = [
    {
      icon: <Code className="w-6 h-6" />,
      number: "15+",
      label: "Projects Completed",
    },
    {
      icon: <Database className="w-6 h-6" />,
      number: "Fresher",
      label: "Eager to Learn & Grow",
    },

    {
      icon: <Globe className="w-6 h-6" />,
      number: "100%",
      label: "Client Satisfaction",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      number: "24/7",
      label: "Available Support",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-16 lg:py-24 bg-white dark:bg-slate-900 transition-colors duration-300 overflow-hidden">
      <Container>
        {/* Header */}
        <motion.div
          data-aos="fade-down"
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 dark:text-gray-50 mb-4"
            variants={itemVariants}
          >
            About{" "}
            <span className="text-red-600 dark:text-red-500 relative">
              Me
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-red-600 to-pink-600 rounded-full"></div>
            </span>
          </motion.h2>
          <motion.p
            className="text-lg text-slate-600 dark:text-gray-300 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Crafting digital experiences with passion and precision
          </motion.p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Column - Image & Stats */}
          <motion.div
            data-aos="fade-right"
            className="relative"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Profile Image */}
            <div className="relative mx-auto w-80 h-80 lg:w-96 lg:h-96 mb-8">
              {/* Animated background circles */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-red-500/20 to-pink-500/20 dark:from-red-500/30 dark:to-pink-500/30 animate-pulse"></div>
              <div
                className="absolute inset-4 rounded-full border-2 border-red-600/30 dark:border-red-500/30 animate-spin"
                style={{ animationDuration: "10s" }}
              ></div>
              <div
                className="absolute inset-8 rounded-full border border-pink-500/30 dark:border-pink-400/30 animate-ping"
                style={{ animationDuration: "3s" }}
              ></div>

              {/* Main image container */}
              <div className="relative inset-6 w-72 h-72 lg:w-84 lg:h-84 mx-auto rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-pink-600/10 dark:from-red-500/20 dark:to-pink-500/20"></div>
                <img
                  src={img}
                  alt="Robin Ahmed"
                  className="w-full h-full object-cover relative z-10 hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-pink-50 to-red-50 dark:from-slate-800 dark:to-slate-700 p-6 rounded-2xl text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-red-600 dark:text-red-500 mb-3 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-slate-800 dark:text-gray-50 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-slate-600 dark:text-gray-300">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            data-aos="fade-left"
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Introduction */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-slate-800 dark:text-gray-50 flex items-center gap-3">
                  <Users className="w-6 h-6 text-red-600 dark:text-red-500" />
                  Hello, I'm Robin Ahmed
                </h3>
                <p className="text-lg text-slate-700 dark:text-gray-300 leading-relaxed">
                  A passionate{" "}
                  <strong className="text-red-600 dark:text-red-500">
                    MERN Stack Developer
                  </strong>{" "}
                  with a strong focus on building fast, accessible, and visually
                  engaging web applications. I specialize in creating seamless
                  user experiences that blend modern design with robust
                  functionality.
                </p>
              </div>

              <div className="bg-gradient-to-r from-red-50 to-pink-50 dark:from-slate-800 dark:to-slate-700 p-6 rounded-2xl border-l-4 border-red-600 dark:border-red-500">
                <p className="text-slate-700 dark:text-gray-300 leading-relaxed">
                  My expertise spans across <strong>React.js</strong>,{" "}
                  <strong>Tailwind CSS</strong> for frontend development, and{" "}
                  <strong>Node.js</strong>, <strong>Express.js</strong>,
                  <strong>MongoDB</strong> for backend solutions. I'm committed
                  to writing clean, maintainable code and delivering exceptional
                  digital experiences.
                </p>
              </div>
            </motion.div>

            {/* Mission Statement */}
            <motion.div
              variants={itemVariants}
              className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-slate-700"
            >
              <h4 className="text-xl font-semibold text-slate-800 dark:text-gray-50 mb-3 flex items-center gap-2">
                <Award className="w-5 h-5 text-red-600 dark:text-red-500" />
                My Mission
              </h4>
              <p className="text-slate-600 dark:text-gray-300 leading-relaxed">
                To transform innovative ideas into powerful web applications
                that make a real difference. I believe in the perfect balance of
                aesthetics and functionality, creating solutions that not only
                look great but perform exceptionally.
              </p>
            </motion.div>

            {/* CTA Button */}
            <motion.div variants={itemVariants}>
              <Link
                to="/projects"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 group"
              >
                <span>Explore My Work</span>
                <Globe className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          data-aos="fade-up"
          className="bg-gradient-to-r from-gray-50 to-red-50 dark:from-slate-800 dark:to-slate-700 p-8 rounded-3xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h3
            className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-gray-50 mb-8 text-center"
            variants={itemVariants}
          >
            Technical Expertise
          </motion.h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-slate-800 px-6 py-4 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer border border-gray-100 dark:border-slate-600"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-center">
                  <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  <div className="font-semibold text-slate-800 dark:text-gray-50 mb-1">
                    {skill.name}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-gray-400">
                    {skill.level}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default About;
