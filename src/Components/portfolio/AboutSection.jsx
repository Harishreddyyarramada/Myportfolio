import React from "react";
import { motion } from "framer-motion";
import { User, MapPin, Calendar } from "lucide-react";
import assests from '../../Assests/Assests.js'
export default function AboutSection() {
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const highlights = [
    "React.js",
    "Node.js",
    "MySQL",
    "JWT",
    "Secure Solutions",
    "Scalable Applications",
  ];

  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2
            variants={itemVariants}
            className="text-5xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
          >
            About Me
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Avatar/Photo Side */}
            <motion.div variants={itemVariants} className="relative">
              <div className="relative w-80 h-80 mx-auto">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full blur-xl opacity-30 animate-pulse"></div>

                {/* Outer border circle */}
                <div className="relative w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-full border-4 border-cyan-500/30 flex items-center justify-center overflow-hidden">
                  {/* Inner circle with image */}
                  <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-cyan-400">
                    <img
                      src={assests.profile}
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Content Side */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-cyan-400 mb-4">
                  <MapPin className="w-5 h-5" />
                  <span>Hyderabad, Telangana, India</span>
                </div>

                <p className="text-lg text-gray-300 leading-relaxed">
                  Aspiring Software Developer with hands-on experience in
                  building{" "}
                  <motion.span
                    className="text-cyan-400 font-semibold"
                    whileHover={{ scale: 1.05 }}
                  >
                    full-stack web applications
                  </motion.span>{" "}
                  using React.js, Node.js, Express.js, and MySQL.
                </p>

                <p className="text-lg text-gray-300 leading-relaxed">
                  Skilled in{" "}
                  {highlights.map((highlight, index) => (
                    <motion.span
                      key={highlight}
                      className="text-purple-400 font-semibold mx-1"
                      whileHover={{ scale: 1.05, color: "#06b6d4" }}
                      transition={{ duration: 0.2 }}
                    >
                      {highlight}
                      {index < highlights.length - 1 ? "," : ""}
                    </motion.span>
                  ))}
                  . Passionate about scalable, secure, and optimized solutions.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8">
                {[
                  { number: "9.11", label: "CGPA", suffix: "/10" },
                  { number: "5+", label: "Projects", suffix: "" },
                  { number: "2+", label: "Years Learning", suffix: "" },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="text-center p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-2xl font-bold text-cyan-400">
                      {stat.number}
                      <span className="text-lg text-gray-400">
                        {stat.suffix}
                      </span>
                    </div>
                    <div className="text-sm text-gray-400 mt-1">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
