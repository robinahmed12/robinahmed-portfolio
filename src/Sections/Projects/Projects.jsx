import React, { useEffect } from "react";
import Container from "../../components/Container/Container";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Freelance Task Platform",
      description:
        "A platform connecting individuals with freelancers for small tasks. Users can post tasks, bid on projects, and connect based on skills, budget, and deadlines.",
      tech: ["React", "Express", "MongoDB", "Tailwind CSS"],
      github: "https://github.com/robinahmed12/freelanzia-client-side",
      demo: "https://freelanzia-auth.web.app/",
      images: [
        "https://i.ibb.co/6cp8MF30/Screenshot-2025-06-29-004117.png",
        "https://i.ibb.co/mrNgTWZ5/Screenshot-2025-06-29-004045.png",

        "https://i.ibb.co/by9PB8h/Screenshot-2025-06-29-004133.png",
      ],
    },
    {
      id: 2,
      title: "Lost & Found Platform",
      description:
        "A platform connecting people who lost items with those who found them. Users can report lost items, browse found items, and interact to recover belongings.",
      tech: ["React", "Express", "MongoDB", "Tailwind CSS"],
      github: "https://github.com/robinahmed12/lostralink-client-side",
      demo: "https://lostralink-auth.web.app/",
      images: [
        "https://i.ibb.co/mVtCjHk0/Screenshot-2025-06-29-004750.png",
        "https://i.ibb.co/1tzhKwcP/Screenshot-2025-06-29-004719.png",

        "https://i.ibb.co/chH8mzX9/Screenshot-2025-06-29-004806.png",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

   useEffect(() => {
      document.title = "Projects";
    })

  return (
    <section id="projects" className="py-20 bg-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-[#DC2626] mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my full-stack
            development capabilities.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-28"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-12 items-center`}
            >
              {/* Content */}
              <div
                className={`lg:w-1/2 ${
                  index % 2 === 0 ? "lg:pr-12" : "lg:pl-12"
                }`}
              >
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                  {project.title}
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1 bg-[#DC2626] bg-opacity-10 text-gray-800 text-sm font-medium rounded-full"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <motion.a
                    href={project.demo}
                    whileHover={{ y: -2 }}
                    className="px-5 py-2.5 bg-[#DC2626] text-white rounded-lg font-medium hover:bg-opacity-90 transition-all shadow-md hover:shadow-lg"
                  >
                    Live Demo
                  </motion.a>
                  <motion.a
                    href={project.github}
                    whileHover={{ y: -2 }}
                    className="px-5 py-2.5 bg-gray-800 text-white rounded-lg font-medium hover:bg-opacity-90 transition-all shadow-md hover:shadow-lg"
                  >
                    GitHub
                  </motion.a>
                </div>
              </div>

              {/* Image Gallery */}
              <div  className="lg:w-1/2 relative h-55  lg:h-70 w-full">
                {project.images.map((img, imgIndex) => (
                  <motion.div
                    key={imgIndex}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + imgIndex * 0.1, duration: 0.5 }}
                    className={`absolute rounded-xl overflow-hidden shadow-xl ${
                      imgIndex === 0
                        ? "w-4/5 left-0 top-0 z-10"
                        : imgIndex === 1
                        ? "w-3/5 right-0 top-8 z-20"
                        : "w-2/5 right-8 bottom-0 z-30"
                    }`}
                    whileHover={{ zIndex: 40 }}
                  >
                    <img
                      src={img}
                      alt={`${project.title} screenshot ${imgIndex + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default Projects;
