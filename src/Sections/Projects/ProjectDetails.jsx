import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Github,
  ExternalLink,
  Target,
  Zap,
  Lightbulb,
  ArrowLeft,
  Play,
  Pause,
  ChevronLeft,
  ChevronRight,
  Eye,
  Star,
  Calendar,
  Monitor,
  Smartphone,
  Tablet,
} from "lucide-react";

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  // Back navigation
  const goBack = () => {
    window.history.back();
  };

  // Detect dark mode
  useEffect(() => {
    document.title = "Project Details - Robin Ahmed";
    const checkDarkMode = () =>
      setDarkMode(document.documentElement.classList.contains("dark"));
    checkDarkMode();
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, { attributes: true });
    return () => observer.disconnect();
  }, []);

  // Fetch project data from project.json
  useEffect(() => {
    fetch("/project.json")
      .then((res) => res.json())
      .then((data) => {
        const foundProject = data.find((item) => item.id === parseInt(id, 10));
        setProject(foundProject || null);
      })
      .catch((err) => {
        console.error("Failed to load project data:", err);
        setProject(null);
      });
  }, [id]);

  // Carousel autoplay
  useEffect(() => {
    if (!project || !isPlaying) return;
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [project, isPlaying]);

  const nextImage = () => {
    if (!project) return;
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    if (!project) return;
    setCurrentImageIndex(
      (prev) => (prev - 1 + project.images.length) % project.images.length
    );
  };

  // Development Journey content based on project title (optional)
  const getProjectJourney = () => {
    if (project?.title.includes("Medical Camp")) {
      return {
        challenge:
          "Building a comprehensive medical camp management system was challenging due to complex role-based authentication, payment integration, and real-time data synchronization.",
        solution:
          "Implemented JWT-based authentication with role-specific dashboards, integrated Stripe for secure payments, and used Socket.io for real-time updates. Responsive design ensures accessibility across all devices.",
        learning:
          "Deepened understanding of full-stack architecture, payment gateways, and importance of user experience in healthcare apps.",
      };
    }
    return {
      challenge:
        "Creating a complex web app with multiple user roles and real-time features required careful planning and execution.",
      solution:
        "Used modern development practices and technologies to build a scalable and maintainable solution.",
      learning:
        "Enhanced skills in full-stack development and user experience design.",
    };
  };

  if (!project) {
    return (
      <div
        className={`min-h-screen flex items-center justify-center ${
          darkMode ? "bg-[#0F172A]" : "bg-white"
        }`}
      >
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#DC2626] mx-auto mb-4"></div>
          <p className={darkMode ? "text-[#F8FAFC]" : "text-[#1E293B]"}>
            Loading project details...
          </p>
        </div>
      </div>
    );
  }

  const journey = getProjectJourney();

  return (
    <div
      className={`min-h-screen transition-all duration-500 ${
        darkMode ? "bg-[#0F172A] text-[#F8FAFC]" : "bg-white text-[#1E293B]"
      }`}
    >
      {/* Back Button */}
      <div className="fixed top-6 left-6 z-50" data-aos="fade-right">
        <button
          onClick={goBack}
          className={`flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-md transition-all hover:scale-105 ${
            darkMode
              ? "bg-[#1E293B]/80 text-[#F8FAFC] hover:bg-[#1E293B]"
              : "bg-white/80 text-[#1E293B] hover:bg-white"
          } shadow-lg`}
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="font-medium">Back</span>
        </button>
      </div>

      {/* Hero Section with Carousel */}
      <div className="relative h-screen overflow-hidden" data-aos="fade-in">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/40 to-black/70 z-10"></div>

        {/* Carousel Images */}
        <div className="relative w-full h-full">
          {project.images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-1000 ${
                index === currentImageIndex
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-105"
              }`}
            >
              <img
                src={image}
                alt={`${project.title} screenshot ${index + 1}`}
                className="w-full h-full object-cover"
                onLoad={() => setIsImageLoaded(true)}
              />
            </div>
          ))}
        </div>

        {/* Carousel Controls */}
        <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-20">
          <button
            onClick={prevImage}
            className="p-3 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30 transition-all hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
        </div>

        <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-20">
          <button
            onClick={nextImage}
            className="p-3 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30 transition-all hover:scale-110"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Play/Pause Button */}
        <div className="absolute bottom-20 right-6 z-20">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-3 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30 transition-all hover:scale-110"
          >
            {isPlaying ? (
              <Pause className="w-5 h-5 text-white" />
            ) : (
              <Play className="w-5 h-5 text-white" />
            )}
          </button>
        </div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
          {project.images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`transition-all duration-300 ${
                index === currentImageIndex
                  ? "w-8 h-3 bg-[#DC2626] rounded-full"
                  : "w-3 h-3 bg-white/50 rounded-full hover:bg-white/70"
              }`}
            />
          ))}
        </div>

        {/* Project Title Overlay */}
        <div className="absolute inset-0 z-20 flex items-center justify-center px-6 text-center">
          <div className="max-w-4xl">
            <div className="mb-6" data-aos="fade-up">
              <span className="px-4 py-2 bg-[#DC2626]/20 backdrop-blur-sm rounded-full text-[#DC2626] text-sm font-medium">
                {project.category}
              </span>
            </div>

            <h1
              className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              {project.title}
            </h1>

            <p
              className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {project.description}
            </p>

            {/* Stats */}
            <div
              className="flex flex-wrap justify-center gap-6 mb-8"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="flex items-center gap-2 text-white/80">
                <Calendar className="w-5 h-5" />
                <span>{project.status}</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <Eye className="w-5 h-5" />
                <span>{project.features.length} Features</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <Star className="w-5 h-5" />
                <span>{project.tech.length} Technologies</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div
              className="flex flex-wrap justify-center gap-4"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-4 bg-[#DC2626] text-white rounded-full font-medium hover:bg-[#B91C1C] transition-all hover:scale-105 shadow-lg"
              >
                <ExternalLink className="w-5 h-5" />
                Live Demo
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-md text-white rounded-full font-medium hover:bg-white/20 transition-all hover:scale-105 shadow-lg"
              >
                <Github className="w-5 h-5" />
                View Code
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        {/* Project Overview */}
        <section className="mb-20" data-aos="fade-up">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-[#DC2626]">
              Project Overview
            </h2>
            <div className="w-24 h-1 bg-[#DC2626] mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p
                className={`text-lg leading-relaxed mb-6 ${
                  darkMode ? "text-[#F8FAFC]" : "text-[#1E293B]"
                }`}
              >
                {project.description}
              </p>

              <div className="space-y-6">
                <div
                  className={`p-4 rounded-xl ${
                    darkMode ? "bg-[#1E293B]" : "bg-[#FECACA]"
                  }`}
                >
                  <h4
                    className={`font-semibold mb-2 ${
                      darkMode ? "text-[#FECACA]" : "text-[#1E293B]"
                    }`}
                  >
                    Features
                  </h4>
                  <ul className="list-disc list-inside space-y-2">
                    {project.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className={`${
                          darkMode ? "text-[#F8FAFC]" : "text-[#1E293B]"
                        }`}
                      >
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div
                  className={`p-4 rounded-xl ${
                    darkMode ? "bg-[#1E293B]" : "bg-[#FECACA]"
                  }`}
                >
                  <h4
                    className={`font-semibold mb-2 ${
                      darkMode ? "text-[#FECACA]" : "text-[#1E293B]"
                    }`}
                  >
                    Tech Stack
                  </h4>
                  <ul className="list-disc list-inside space-y-2">
                    {project.tech.map((tech, idx) => (
                      <li
                        key={idx}
                        className={`${
                          darkMode ? "text-[#F8FAFC]" : "text-[#1E293B]"
                        }`}
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {project.images.slice(0, 4).map((image, index) => (
                <div
                  key={index}
                  className="relative group overflow-hidden rounded-xl"
                >
                  <img
                    src={image}
                    alt={`Preview ${index + 1}`}
                    className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-[#DC2626]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Development Journey */}
        <section className="mb-20" data-aos="fade-up">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-[#DC2626]">
              Development Journey
            </h2>
            <div className="w-24 h-1 bg-[#DC2626] mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Challenge",
                content: journey.challenge,
                color: "bg-red-500",
              },
              {
                icon: Zap,
                title: "Solution",
                content: journey.solution,
                color: "bg-blue-500",
              },
              {
                icon: Lightbulb,
                title: "Learning",
                content: journey.learning,
                color: "bg-green-500",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`group relative p-8 rounded-2xl transition-all duration-300 hover:scale-105 ${
                  darkMode ? "bg-[#1E293B]" : "bg-[#FECACA]"
                } hover:shadow-xl`}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div
                  className={`w-16 h-16 ${item.color} rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3
                  className={`text-2xl font-bold mb-4 ${
                    darkMode ? "text-[#FECACA]" : "text-[#1E293B]"
                  }`}
                >
                  {item.title}
                </h3>
                <p
                  className={`leading-relaxed ${
                    darkMode ? "text-[#F8FAFC]" : "text-[#1E293B]"
                  }`}
                >
                  {item.content}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Responsive Design Preview */}
        <section className="mb-20" data-aos="fade-up">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-[#DC2626]">
              Responsive Design
            </h2>
            <div className="w-24 h-1 bg-[#DC2626] mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Monitor,
                title: "Desktop",
                description:
                  "Optimized for large screens with advanced layouts",
              },
              {
                icon: Tablet,
                title: "Tablet",
                description: "Responsive design for medium-sized devices",
              },
              {
                icon: Smartphone,
                title: "Mobile",
                description: "Mobile-first approach for seamless experience",
              },
            ].map((device, index) => (
              <div
                key={index}
                className={`group text-center p-8 rounded-2xl transition-all duration-300 hover:scale-105 ${
                  darkMode ? "bg-[#1E293B]" : "bg-[#FECACA]"
                }`}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="w-16 h-16 bg-[#DC2626] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <device.icon className="w-8 h-8 text-white" />
                </div>
                <h3
                  className={`text-xl font-bold mb-4 ${
                    darkMode ? "text-[#FECACA]" : "text-[#1E293B]"
                  }`}
                >
                  {device.title}
                </h3>
                <p
                  className={`text-sm ${
                    darkMode ? "text-[#F8FAFC]" : "text-[#1E293B]"
                  }`}
                >
                  {device.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="text-center" data-aos="fade-up">
          <div
            className={`relative p-12 rounded-3xl overflow-hidden ${
              darkMode ? "bg-[#1E293B]" : "bg-[#FECACA]"
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#DC2626]/10 to-transparent"></div>
            <div className="relative z-10">
              <h3
                className={`text-3xl font-bold mb-6 ${
                  darkMode ? "text-[#FECACA]" : "text-[#1E293B]"
                }`}
              >
                Ready to Explore?
              </h3>
              <p
                className={`text-lg mb-8 max-w-2xl mx-auto ${
                  darkMode ? "text-[#F8FAFC]" : "text-[#1E293B]"
                }`}
              >
                Experience the live demo to see all features in action, or dive
                into the source code to understand the implementation details.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-8 py-4 bg-[#DC2626] text-white rounded-full font-medium hover:bg-[#B91C1C] transition-all hover:scale-105 shadow-lg"
                >
                  <ExternalLink className="w-5 h-5" />
                  View Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-8 py-4 bg-[#1E293B] text-[#FECACA] rounded-full font-medium hover:bg-[#162231] transition-all hover:scale-105 shadow-lg"
                >
                  <Github className="w-5 h-5" />
                  View Source Code
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProjectDetails;
