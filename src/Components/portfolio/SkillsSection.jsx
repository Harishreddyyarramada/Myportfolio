import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Database, Globe, Settings, Cpu, Cloud } from 'lucide-react';

const skillCategories = {
  Languages: {
    icon: Code,
    color: 'from-cyan-500 to-blue-500',
    skills: [
      { name: 'Python', level: 85 },
      { name: 'JavaScript', level: 90 },
      { name: 'Java', level: 75 },
      { name: 'C', level: 70 },
    ]
  },
  Frontend: {
    icon: Globe,
    color: 'from-purple-500 to-pink-500',
    skills: [
      { name: 'React.js', level: 90 },
      { name: 'HTML5', level: 95 },
      { name: 'CSS3', level: 88 },
      { name: 'Bootstrap', level: 85 },
    ]
  },
  Backend: {
    icon: Database,
    color: 'from-green-500 to-teal-500',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Express.js', level: 88 },
      { name: 'REST APIs', level: 90 },
      { name: 'JWT', level: 85 },
    ]
  },
  Database: {
    icon: Database,
    color: 'from-orange-500 to-red-500',
    skills: [
      { name: 'MySQL', level: 85 },
      { name: 'MongoDB', level: 75 },
    ]
  },
  Tools: {
    icon: Settings,
    color: 'from-indigo-500 to-purple-500',
    skills: [
      { name: 'Git & GitHub', level: 90 },
      { name: 'Postman', level: 85 },
      { name: 'Firebase', level: 80 },
      { name: 'Vercel', level: 85 },
    ]
  }
};

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState('Languages');

  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
        >
          Technical Skills
        </motion.h2>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {Object.keys(skillCategories).map((category) => {
            const { icon: Icon, color } = skillCategories[category];
            return (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full border-2 transition-all duration-300 flex items-center gap-2 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r ' + color + ' text-white border-transparent'
                    : 'border-gray-600 text-gray-300 hover:border-cyan-400'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="w-5 h-5" />
                {category}
              </motion.button>
            );
          })}
        </div>

        {/* Skills Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 gap-8"
          >
            {skillCategories[activeCategory].skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
                  <span className="text-cyan-400 font-bold">{skill.level}%</span>
                </div>
                
                {/* Progress Bar */}
                <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                  <motion.div
                    className={`h-full bg-gradient-to-r ${skillCategories[activeCategory].color} rounded-full`}
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}