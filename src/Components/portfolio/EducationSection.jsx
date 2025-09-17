import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const education = [
  {
    degree: 'B.Tech in Computer Science & Engineering (Data Science)',
    institution: 'Malla Reddy College of Engineering & Technology',
    duration: '2022 - 2026',
    grade: 'CGPA: 9.11/10 (up to 3-2 semester)',
    status: 'current',
    description: 'Specializing in Data Science with focus on Machine Learning, AI, and Software Development'
  },
  {
    degree: 'Intermediate - MPC (Mathematics, Physics, Chemistry)',
    institution: 'Telangana Social Welfare Junior College',
    duration: '2020 - 2022',
    grade: '96%',
    status: 'completed',
    description: 'Excellent performance in Mathematics, Physics, and Chemistry'
  },
  {
    degree: 'High School (SSC)',
    institution: 'Navodaya Vidyalaya',
    duration: '2019 - 2020',
    grade: '9.7 CGPA',
    status: 'completed',
    description: 'Strong foundation in science and mathematics'
  }
];

export default function EducationSection() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold text-center mb-12 md:mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
        >
          Education
        </motion.h2>

        <div className="relative">
          {/* Timeline Line - Hidden on mobile, visible on larger screens */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-px h-full w-1 bg-gradient-to-b from-cyan-500 to-purple-500"></div>

          <div className="space-y-8 md:space-y-12">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row md:items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Node - Only visible on larger screens */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full border-4 border-gray-900 z-10">
                  <motion.div
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>

                {/* Content Card */}
                <motion.div
                  className={`w-full md:w-5/12 ${
                    index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                  }`}
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-4">
                      <div className={`p-3 rounded-lg flex-shrink-0 ${
                        edu.status === 'current' 
                          ? 'bg-gradient-to-r from-cyan-500 to-blue-500' 
                          : 'bg-gradient-to-r from-purple-500 to-pink-500'
                      }`}>
                        <GraduationCap className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg md:text-xl font-bold text-white mb-2 leading-tight">{edu.degree}</h3>
                        <p className="text-cyan-400 font-semibold mb-3 text-sm md:text-base">{edu.institution}</p>
                        
                        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-4 mb-3">
                          <div className="flex items-center gap-1 text-gray-300">
                            <Calendar className="w-4 h-4 flex-shrink-0" />
                            <span className="text-sm">{edu.duration}</span>
                          </div>
                          <div className="flex items-center gap-1 text-green-400">
                            <Award className="w-4 h-4 flex-shrink-0" />
                            <span className="text-sm font-semibold">{edu.grade}</span>
                          </div>
                        </div>
                        
                        <p className="text-gray-400 text-sm leading-relaxed">{edu.description}</p>
                      </div>
                    </div>

                    {edu.status === 'current' && (
                      <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400 border border-cyan-500/30">
                        Currently Pursuing
                      </div>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}