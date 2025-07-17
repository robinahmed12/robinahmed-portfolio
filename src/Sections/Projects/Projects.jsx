import React, { useEffect, useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaCode, FaEye } from "react-icons/fa";
import {
  HiOutlineDesktopComputer,
  HiOutlineDeviceMobile,
} from "react-icons/hi";
import { Link } from "react-router-dom";

const Projects = () => {
  const [activeImage, setActiveImage] = useState(0);
  const [projects, setProjects] = useState([]);
  console.log(projects);

  useEffect(() => {
    fetch("/project.json")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error("Failed to load project data:", err));
  }, []);

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
        <div
          data-aos="fade-up"
          data-aos-duration="800"
          className="text-center mb-20"
        >
          <div
            data-aos="zoom-in"
            data-aos-delay="200"
            data-aos-duration="600"
            className="inline-flex items-center justify-center w-16 h-16 bg-red-600 bg-opacity-10 dark:bg-opacity-20 rounded-full mb-6"
          >
            <HiOutlineDesktopComputer className="w-8 h-8 text-red-600" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-50 mb-4 transition-colors duration-300">
            Featured Projects
          </h2>
          <div className="flex items-center justify-center gap-2 mb-6">
            <div
              data-aos="width"
              data-aos-duration="800"
              data-aos-delay="500"
              className="h-1 bg-red-600 rounded-full w-16"
            />
            <div
              data-aos="zoom-in"
              data-aos-delay="700"
              data-aos-duration="400"
              className="w-2 h-2 bg-red-600 rounded-full"
            />
            <div
              data-aos="width"
              data-aos-duration="800"
              data-aos-delay="500"
              className="h-1 bg-red-600 rounded-full w-16"
            />
          </div>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed transition-colors duration-300">
            Explore my latest full-stack projects showcasing modern web
            development technologies and innovative solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-32">
          {projects.map((project, index) => (
            <div
              key={project.id}
              data-aos="fade-up"
              data-aos-delay={index * 200}
              data-aos-duration="800"
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
                <div
                  data-aos="fade-right"
                  data-aos-duration="600"
                  className="inline-flex items-center gap-2"
                >
                  <span className="px-3 py-1 bg-red-600 bg-opacity-10 dark:bg-opacity-20 text-red-600 text-sm font-medium rounded-full">
                    {project.category}
                  </span>
                  <span className="px-3 py-1 bg-green-600 bg-opacity-10 dark:bg-opacity-20 text-green-600 text-sm font-medium rounded-full">
                    {project.status}
                  </span>
                </div>

                {/* Title */}
                <h3
                  data-aos="fade-right"
                  data-aos-delay="100"
                  data-aos-duration="600"
                  className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-50 transition-colors duration-300"
                >
                  {project.title}
                </h3>

                {/* Description */}
                <p
                  data-aos="fade-right"
                  data-aos-delay="200"
                  data-aos-duration="600"
                  className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed transition-colors duration-300"
                >
                  {project.description}
                </p>

                {/* Features */}
                <div
                  data-aos="fade-right"
                  data-aos-delay="300"
                  data-aos-duration="600"
                  className="space-y-3"
                >
                  <h4 className="font-semibold text-gray-800 dark:text-gray-50 text-lg transition-colors duration-300">
                    Key Features:
                  </h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        data-aos="fade-right"
                        data-aos-delay={400 + featureIndex * 100}
                        data-aos-duration="400"
                        className="flex items-start gap-3"
                      >
                        <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300 transition-colors duration-300">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div
                  data-aos="fade-right"
                  data-aos-delay="600"
                  data-aos-duration="600"
                  className="space-y-3"
                >
                  <h4 className="font-semibold text-gray-800 dark:text-gray-50 text-lg transition-colors duration-300">
                    Technologies:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        data-aos="zoom-in"
                        data-aos-delay={700 + techIndex * 100}
                        data-aos-duration="400"
                        className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-lg hover:bg-red-50 dark:hover:bg-red-900 hover:text-red-600 transition-all duration-300 cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div
                  data-aos="fade-right"
                  data-aos-delay="800"
                  data-aos-duration="600"
                  className="flex flex-wrap gap-4 pt-4"
                >
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 hover:scale-105 active:scale-95"
                  >
                    <FaExternalLinkAlt className="w-4 h-4" />
                    Live Demo
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 dark:bg-gray-700 text-white rounded-lg font-medium hover:bg-gray-900 dark:hover:bg-gray-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 hover:scale-105 active:scale-95"
                  >
                    <FaGithub className="w-4 h-4" />
                    View Code
                  </a>

                  <Link
                    to={`/details/${project.id}`}
                    className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:border-red-600 hover:text-red-600 transition-all duration-300 transform hover:-translate-y-0.5 hover:scale-105 active:scale-95"
                  >
                    <FaEye className="w-4 h-4" />
                    Details
                  </Link>
                </div>
              </div>

              {/* Image Gallery Side */}
              <div className="lg:w-1/2 relative">
                <div
                  data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
                  data-aos-delay="400"
                  data-aos-duration="800"
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
                        <div className="flex-1 mx-4 h-6 bg-white dark:bg-gray-600 rounded text-xs flex items-center px-2 text-gray-500 dark:text-gray-400 truncate">
                          {project.demo}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Image Navigation */}
                  <div className="flex gap-2 mt-4 justify-center">
                    {project.images.map((_, imgIndex) => (
                      <button
                        key={imgIndex}
                        onClick={() => handleImageChange(project.id, imgIndex)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          activeImage === imgIndex
                            ? "bg-red-600 scale-110"
                            : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                        }`}
                      />
                    ))}
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute -top-6 -right-6 w-20 h-20 bg-red-600 bg-opacity-10 dark:bg-opacity-20 rounded-full flex items-center justify-center">
                    <HiOutlineDeviceMobile className="w-8 h-8 text-red-600" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="800"
          className="text-center mt-20"
        >
          <p className="text-gray-600 dark:text-gray-300 text-lg mb-6 transition-colors duration-300">
            Want to see more projects or discuss a collaboration?
          </p>
          <Link
            to={"/projects"}
            className="inline-flex items-center gap-2 px-8 py-3 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 hover:scale-105 active:scale-95"
          >
            <FaCode className="w-4 h-4" />
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
