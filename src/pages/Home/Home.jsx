import React, { useState, useEffect } from "react";
import Banner from "../../Sections/Banner/Banner";
import About from "../../Sections/About/About";
import Skills from "../../Sections/Skills/Skills";
import Projects from "../../Sections/Projects/Projects";
import Services from "../../Sections/Services/Services";
import Contact from "../../Sections/Contact/Contact";
import { motion, AnimatePresence } from "framer-motion"; // For smooth animations

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.title = "Home";
    
    // Simulate loading (replace with your actual loading logic)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // 1.5 seconds for demo, adjust as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-gray-900"
          >
            <div className="flex flex-col items-center">
              {/* Customize your loader here - example with animated logo */}
              <motion.div
                animate={{
                  rotate: 360,
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="w-16 h-16 border-4 border-red-600 border-t-transparent rounded-full mb-4"
              />
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-slate-800 dark:text-slate-200 font-medium"
              >
                Loading Portfolio...
              </motion.p>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Banner />
            <About />
            <Skills />
            <Projects />
            <Services />
            <Contact />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Home;