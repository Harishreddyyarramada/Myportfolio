import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ChevronDown, Download } from "lucide-react";
import { Button } from "../ui/button.jsx";
import Data from '../../Resume/Data.js'
const roles = [
  "Software Developer",
  "Full-Stack Engineer",
  "Cloud Enthusiast",
  "Data Science Enthusiast",
  "Problem Solver",
];

export default function HeroSection({ scrollY }) {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}

      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
            background: `
              radial-gradient(600px circle at ${50}% ${30}%, rgba(139, 92, 246, 0.3), transparent 40%),
              radial-gradient(400px circle at ${80}% ${70}%, rgba(6, 182, 212, 0.3), transparent 40%),
              radial-gradient(300px circle at ${20}% ${80}%, rgba(236, 72, 153, 0.3), transparent 40%)
            `,
          }}
        />

        {/* Floating Particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="text-center z-10 max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="text-4xl sm:text-5xl my-10 md:text-8xl font-bold mb-6 text-center bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Yarramada
            <br />
            Harish Reddy
          </motion.h1>

          <div className="h-16 mb-8">
            <motion.p
              key={currentRole}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-2xl md:text-3xl text-gray-300 font-light"
            >
              Aspiring{" "}
              <span className="text-cyan-400 font-semibold">
                {roles[currentRole]}
              </span>
            </motion.p>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Building the future with cutting-edge technology and innovative
            solutions
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-8 sm:mb-12 px-4"
          >
            {/* Resume Download */}
            <a href={Data.Resume} download>
              <Button
                className="w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-purple-500 
        hover:from-cyan-600 hover:to-purple-600 
        text-white font-semibold 
        py-3 sm:py-3 md:py-4 
        px-4 sm:px-6 md:px-8 
        rounded-full 
        transform hover:scale-105 
        transition-all duration-300 
        shadow-lg hover:shadow-cyan-500/25 
        flex items-center justify-center"
              >
                <Download className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 mr-2" />
                <span className="text-sm sm:text-base md:text-lg">
                  Download Resume
                </span>
              </Button>
            </a>

            {/* Contact Button */}
            <Button
              variant="outline"
              onClick={scrollToContact}
              className="w-full sm:w-auto border-cyan-400 text-cyan-400 
      hover:bg-cyan-400 hover:text-gray-900 
      font-semibold py-3 sm:py-3 md:py-4 
      px-4 sm:px-6 md:px-8 
      rounded-full 
      transform hover:scale-105 
      transition-all duration-300 
      flex items-center justify-center"
            >
              Contact Me
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex justify-center gap-6 mb-16"
          >
            {[
              {
                icon: Github,
                href: "https://github.com/Harishreddyyarramada",
                label: "GitHub",
              },
              {
                icon: Linkedin,
                href: "https://www.linkedin.com/in/harish-reddy-yarramada-44aaa8287/",
                label: "LinkedIn",
              },
              {
                icon: Mail,
                href: "mailto:yarramadaharishreddy@gmail.com",
                label: "Email",
              },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon className="w-6 h-6 text-gray-300 group-hover:text-cyan-400 transition-colors duration-300" />
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-gray-400"
          >
            <span className="text-sm mb-2">Scroll to explore</span>
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
