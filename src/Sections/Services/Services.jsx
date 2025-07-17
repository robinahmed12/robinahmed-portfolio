import React, { useEffect, useState,  } from "react";
import { motion } from "framer-motion";
import { 
  FaCode, 
  FaPaintBrush, 
  FaMobile, 
  FaRocket, 
  FaServer, 
  FaTools,
  FaArrowRight,
  FaCheckCircle
} from "react-icons/fa";
import { Link } from "react-router";

const Services = () => {
  const [darkMode, setDarkMode] = useState(false);


  const services = [
    {
      title: "Frontend Development",
      description:
        "Crafting responsive, accessible, and performant user interfaces using React.js, Tailwind CSS, and modern JavaScript with pixel-perfect precision.",
      icon: <FaCode className="h-8 w-8" />,
      features: ["React.js", "Tailwind CSS", "JavaScript ES6+", "Redux"],
      color: "from-blue-500 to-purple-600",
      delay: 0.1
    },
    {
      title: "UI/UX Design",
      description:
        "Creating intuitive user experiences with clean, modern designs that prioritize usability, accessibility, and aesthetic appeal.",
      icon: <FaPaintBrush className="h-8 w-8" />,
      features: ["Figma", "Responsive Design", "User Research", "Prototyping"],
      color: "from-pink-500 to-red-600",
      delay: 0.2
    },
    {
      title: "Responsive Web Apps",
      description:
        "Building applications that work seamlessly across all devices, from mobile to desktop, with adaptive layouts and smooth performance.",
      icon: <FaMobile className="h-8 w-8" />,
      features: ["Mobile-First", "Cross-Browser", "PWA", "Accessibility"],
      color: "from-green-500 to-teal-600",
      delay: 0.3
    },
    {
      title: "Performance Optimization",
      description:
        "Enhancing application speed and efficiency through code optimization, lazy loading, and modern best practices.",
      icon: <FaRocket className="h-8 w-8" />,
      features: ["Code Splitting", "Lazy Loading", "SEO", "Core Web Vitals"],
      color: "from-orange-500 to-yellow-600",
      delay: 0.4
    },
    {
      title: "Full Stack Solutions",
      description:
        "Developing complete web solutions with React frontends and Node.js/Express backends connected to MongoDB for robust applications.",
      icon: <FaServer className="h-8 w-8" />,
      features: ["MERN Stack", "REST APIs", "Authentication", "Database Design"],
      color: "from-indigo-500 to-blue-600",
      delay: 0.5
    },
    {
      title: "Maintenance & Support",
      description:
        "Providing ongoing support, updates, bug fixes, and maintenance for existing web applications with 24/7 availability.",
      icon: <FaTools className="h-8 w-8" />,
      features: ["Bug Fixes", "Updates", "Monitoring", "Support"],
      color: "from-purple-500 to-pink-600",
      delay: 0.6
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const floatingAnimation = {
    y: [-5, 5, -5],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  useEffect(() => {
    document.title = "Services - Robin Ahmed";
    
    // Check for dark mode preference
    const isDark = document.documentElement.classList.contains('dark');
    setDarkMode(isDark);
    
    // Listen for dark mode changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          const isDark = document.documentElement.classList.contains('dark');
          setDarkMode(isDark);
        }
      });
    });
    
    observer.observe(document.documentElement, { attributes: true });
    
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300 relative overflow-hidden"
      id="services"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-red-500 via-transparent to-blue-500"></div>
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-red-600 rounded-full blur-3xl opacity-10"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-blue-600 rounded-full blur-3xl opacity-10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            animate={floatingAnimation}
            className="inline-block"
          >
            <span className="inline-block px-4 py-2 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-full text-sm font-semibold mb-4">
              What I Offer
            </span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 dark:text-gray-50 mb-6">
            My{" "}
            <span className="bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-pink-600 mx-auto mb-8 rounded-full"></div>
          
          <p className="text-lg text-slate-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I offer comprehensive web development services to bring your digital
            ideas to life with clean code, modern design, and cutting-edge technology.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -10, 
                transition: { duration: 0.3 }
              }}
              className="group relative bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-slate-700 hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              {/* Icon */}
              <div className="relative z-10 mb-6">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-slate-800 dark:text-gray-50 mb-4 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-slate-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <FaCheckCircle className="text-green-500 w-4 h-4" />
                      <span className="text-sm text-slate-600 dark:text-gray-400">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Action Button */}
                <motion.button
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 dark:bg-gray-50 text-white dark:text-slate-800 rounded-lg hover:bg-red-600 dark:hover:bg-red-500 hover:text-white transition-all duration-300 group/btn"
                >
                  <span className="font-semibold">Learn More</span>
                  <FaArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </motion.button>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-500/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
            <Link to={"/contact"} className="font-semibold">Ready to Start Your Project?</Link>
            <FaArrowRight className="w-4 h-4" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;