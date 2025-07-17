import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaCode, FaEye } from "react-icons/fa";
import {
  HiOutlineDesktopComputer,
  HiOutlineDeviceMobile,
} from "react-icons/hi";

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);
  const [activeImage, setActiveImage] = useState(0);

  const projects = [
    {
      id: 1,
      title: "Medical Camp Management System",
      description:
        "A full-featured MERN stack web application that enables organizers to manage medical camps and participants to register, pay, and provide feedback. Includes secure authentication, dynamic dashboards, and real-time analytics.",
      features: [
        "Role-based dashboard for organizers and participants with secure JWT authentication",
        "Camp registration, Stripe payment integration, confirmation tracking, and feedback system",
        "Responsive UI with searchable & paginated tables, charts using Recharts, and protected route management",
      ],
      tech: [
        "React",
        "Express",
        "MongoDB",
        "Tailwind CSS",
        "Firebase Auth",
        "Stripe",
        "Recharts",
      ],
      github: "https://github.com/robinahmed12/medicamp-client-side", // update if different
      demo: "https://campcare-auth.web.app/",
      images: [
        "https://i.ibb.co/jkCTXM7r/Screenshot-2025-07-17-164605.png",
        "https://i.ibb.co/1YwFwLMs/Screenshot-2025-07-17-164644.png",
        "https://i.ibb.co/bM2QSD0j/Screenshot-2025-07-17-164718.png",
      ],
      category: "Full Stack",
      status: "Completed",
    },
    {
      id: 2,
      title: "Freelance Task Platform",
      description:
        "A comprehensive platform connecting individuals with freelancers for small tasks. Users can post tasks, bid on projects, and connect based on skills, budget, and deadlines.",
      features: [
        "User authentication and role-based authorization",
        "Optimized MongoDB queries (e.g., limit, sort, match by user email)",
        "Task management (Create, Read, Update, Delete) with real-time deadline-based sorting",
      ],
      tech: ["React", "Express", "MongoDB", "Tailwind CSS"],
      github: "https://github.com/robinahmed12/freelanzia-client-side",
      demo: "https://freelanzia-auth.web.app/",
      images: [
        "https://i.ibb.co/JWD1gt0Q/Screenshot-2025-07-17-165927.png",
        "https://i.ibb.co/Cp02fGkv/Screenshot-2025-07-17-165157.png",
        "https://i.ibb.co/p63ymG5B/Screenshot-2025-07-17-165212.png",
      ],
      category: "Full Stack",
      status: "Completed",
    },
    {
      id: 3,
      title: "Lost & Found Platform",
      description:
        "An innovative platform connecting people who lost items with those who found them. Users can report lost items, browse found items, and interact to recover belongings.",
      features: [
        "Image upload and recognition for item matching",
        "User authorization system for security",
        "Real-time status updates and recovery tracking",
      ],
      tech: ["React", "Express", "MongoDB", "Tailwind CSS"],
      github: "https://github.com/robinahmed12/lostralink-client-side",
      demo: "https://lostralink-auth.web.app/",
      images: [
        "https://i.ibb.co/fLcYGMH/Screenshot-2025-07-17-165440.png",
        "https://i.ibb.co/mVms8GRp/Screenshot-2025-07-17-165500.png",
        "https://i.ibb.co/C5R9M1yJ/Screenshot-2025-07-17-165601.png",
      ],
      category: "Full Stack",
      status: "Completed",
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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  useEffect(() => {
    document.title = "Projects - Robin Ahmed";
  }, []);

  const handleImageChange = (projectId, imageIndex) => {
    setActiveImage(imageIndex);
  };

  return (
    <section
      id="projects"
      className="py-20 bg-white dark:bg-slate-900 transition-colors duration-500 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center justify-center w-16 h-16 bg-red-600 bg-opacity-10 dark:bg-opacity-20 rounded-full mb-6"
          >
            <HiOutlineDesktopComputer className="w-8 h-8 text-red-600" />
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-50 mb-4 transition-colors duration-300">
            Featured Projects
          </h2>
          <div className="flex items-center justify-center gap-2 mb-6">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 60 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="h-1 bg-red-600 rounded-full"
            />
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.7, duration: 0.4 }}
              className="w-2 h-2 bg-red-600 rounded-full"
            />
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 60 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="h-1 bg-red-600 rounded-full"
            />
          </div>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed transition-colors duration-300">
            Explore my latest full-stack projects showcasing modern web
            development technologies and innovative solutions.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-32"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-12 lg:gap-20 items-center`}
            >
              {/* Content Side */}
              <div
                className={`lg:w-1/2 space-y-6 ${
                  index % 2 === 0 ? "lg:pr-8" : "lg:pl-8"
                }`}
              >
                {/* Project Badge */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="inline-flex items-center gap-2"
                >
                  <span className="px-3 py-1 bg-red-600 bg-opacity-10 dark:bg-opacity-20 text-red-600 text-sm font-medium rounded-full">
                    {project.category}
                  </span>
                  <span className="px-3 py-1 bg-green-600 bg-opacity-10 dark:bg-opacity-20 text-green-600 text-sm font-medium rounded-full">
                    {project.status}
                  </span>
                </motion.div>

                {/* Title */}
                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-50 transition-colors duration-300"
                >
                  {project.title}
                </motion.h3>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed transition-colors duration-300"
                >
                  {project.description}
                </motion.p>

                {/* Features */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="space-y-3"
                >
                  <h4 className="font-semibold text-gray-800 dark:text-gray-50 text-lg transition-colors duration-300">
                    Key Features:
                  </h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: 0.6 + featureIndex * 0.1,
                          duration: 0.4,
                        }}
                        className="flex items-start gap-3"
                      >
                        <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300 transition-colors duration-300">
                          {feature}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                {/* Tech Stack */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                  className="space-y-3"
                >
                  <h4 className="font-semibold text-gray-800 dark:text-gray-50 text-lg transition-colors duration-300">
                    Technologies:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                          delay: 0.8 + techIndex * 0.1,
                          duration: 0.4,
                        }}
                        whileHover={{ scale: 1.05 }}
                        className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-lg hover:bg-red-50 dark:hover:bg-red-900 hover:text-red-600 transition-all duration-300 cursor-default"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="flex flex-wrap gap-4 pt-4"
                >
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <FaExternalLinkAlt className="w-4 h-4" />
                    Live Demo
                  </motion.a>

                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 dark:bg-gray-700 text-white rounded-lg font-medium hover:bg-gray-900 dark:hover:bg-gray-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <FaGithub className="w-4 h-4" />
                    View Code
                  </motion.a>

                  <motion.button
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() =>
                      setActiveProject(
                        activeProject === project.id ? null : project.id
                      )
                    }
                    className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:border-red-600 hover:text-red-600 transition-all duration-300"
                  >
                    <FaEye className="w-4 h-4" />
                    Details
                  </motion.button>
                </motion.div>
              </div>

              {/* Image Gallery Side */}
              <div className="lg:w-1/2 relative">
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="relative"
                >
                  {/* Main Image Display */}
                  <div className="relative bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl">
                    <div className="aspect-video relative">
                      <img
                        src={project.images[activeImage]}
                        alt={`${project.title} screenshot`}
                        className="w-full h-full object-cover transition-all duration-500"
                      />

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

                      {/* Browser Frame */}
                      <div className="absolute top-0 left-0 right-0 h-10 bg-gray-200 dark:bg-gray-700 flex items-center px-4 gap-2">
                        <div className="flex gap-2">
                          <div className="w-3 h-3 bg-red-500 rounded-full" />
                          <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                          <div className="w-3 h-3 bg-green-500 rounded-full" />
                        </div>
                        <div className="flex-1 mx-4 h-6 bg-white dark:bg-gray-600 rounded text-xs flex items-center px-2 text-gray-500 dark:text-gray-400">
                          {project.demo}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Image Navigation */}
                  <div className="flex gap-2 mt-4 justify-center">
                    {project.images.map((_, imgIndex) => (
                      <motion.button
                        key={imgIndex}
                        onClick={() => handleImageChange(project.id, imgIndex)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          activeImage === imgIndex
                            ? "bg-red-600 scale-110"
                            : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                        }`}
                      />
                    ))}
                  </div>

                  {/* Floating Elements */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    className="absolute -top-6 -right-6 w-20 h-20 bg-red-600 bg-opacity-10 dark:bg-opacity-20 rounded-full flex items-center justify-center"
                  >
                    <HiOutlineDeviceMobile className="w-8 h-8 text-red-600" />
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-center mt-20"
        >
          <p className="text-gray-600 dark:text-gray-300 text-lg mb-6 transition-colors duration-300">
            Want to see more projects or discuss a collaboration?
          </p>
          <motion.button
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-8 py-3 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <FaCode className="w-4 h-4" />
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
