import React from "react";
import Container from "../../components/Container/Container";
import { motion } from "framer-motion";
import img from "../../assets/aiease_1750841588683.jpg"

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
    <section className="py-12 lg:py-16 bg-white">
      <Container size="xl">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="flex flex-col lg:flex-row gap-12 items-center"
        >
          {/* Left Column - Image */}
          <div className="w-full lg:w-1/3 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[#DC2626] shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-[#FECACA] to-[#DC2626] opacity-20"></div>
              <div className="absolute inset-4 rounded-full border-2 border-white opacity-30"></div>
              <img
                src={img}
                alt="Robin Ahmed"
                className="w-full h-full object-cover relative z-10"
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="w-full lg:w-2/3">
            <motion.h2
              variants={fadeIn}
              className="text-3xl md:text-4xl font-bold text-[#1E293B] mb-6"
            >
              About <span className="text-[#DC2626]">Me</span>
            </motion.h2>

            <motion.p
              variants={fadeIn}
              className="text-lg text-[#1E293B] mb-6 leading-relaxed"
            >
              I'm Robin Ahmed, a passionate Frontend Developer with strong
              skills in crafting responsive, user-friendly, and visually
              appealing web applications. With expertise in modern web
              technologies, I specialize in creating seamless digital
              experiences that combine aesthetic appeal with technical
              excellence.
            </motion.p>

            <motion.p
              variants={fadeIn}
              className="text-lg text-[#1E293B] mb-8 leading-relaxed"
            >
              My approach focuses on clean UI design, performance optimization,
              and maintainable code. Beyond frontend development, I also have
              hands-on experience with backend technologies, allowing me to
              understand and contribute to full-stack projects effectively.
            </motion.p>

            {/* Skills Section */}
            <motion.div variants={fadeIn}>
              <h3 className="text-xl font-semibold text-[#1E293B] mb-4">
                My Skills
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-[#FECACA] text-[#1E293B] rounded-full flex items-center gap-2 shadow-sm hover:shadow-md transition-all"
                  >
                    <span>{skill.icon}</span>
                    <span>{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div variants={fadeIn} className="mt-10">
              <a
                href="/projects"
                className="inline-block px-8 py-3 bg-[#DC2626] text-white font-medium rounded-lg hover:bg-[#B91C1C] transition-colors duration-300 shadow-md hover:shadow-lg"
              >
                View My Projects
              </a>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default About;
