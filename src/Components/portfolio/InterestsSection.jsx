import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Brain, Shield, Zap, Database, Cpu, Cloud, Palette } from 'lucide-react';

const interests = [
  { name: 'Competitive Programming', icon: Code, color: 'from-blue-400 to-cyan-500', category: 'Development' },
  { name: 'Docker & Containers', icon: Cloud, color: 'from-purple-400 to-pink-500', category: 'DevOps' },
  { name: 'Performance Optimization', icon: Zap, color: 'from-green-400 to-teal-500', category: 'Development' },
  { name: 'Secure Coding', icon: Shield, color: 'from-red-400 to-orange-500', category: 'Security' },
  { name: 'Generative AI', icon: Brain, color: 'from-indigo-400 to-purple-500', category: 'AI/ML' },
  { name: 'Natural Language Processing', icon: Brain, color: 'from-cyan-400 to-blue-500', category: 'AI/ML' },
  { name: 'Machine Learning', icon: Cpu, color: 'from-pink-400 to-rose-500', category: 'AI/ML' },
  { name: 'Big Data Analytics', icon: Database, color: 'from-yellow-400 to-orange-500', category: 'Data' },
  { name: 'System Scalability', icon: Zap, color: 'from-teal-400 to-green-500', category: 'Architecture' },
  { name: 'Design Thinking', icon: Palette, color: 'from-violet-400 to-purple-500', category: 'Design' },
];

const categories = ['All', 'Development', 'AI/ML', 'Security', 'DevOps', 'Data', 'Architecture', 'Design'];

export default function InterestsSection() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredInterest, setHoveredInterest] = useState(null);

  const filteredInterests = selectedCategory === 'All' 
    ? interests 
    : interests.filter(interest => interest.category === selectedCategory);

  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-bold text-center mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
        >
          Areas of Interest
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center text-gray-400 text-lg mb-16 max-w-3xl mx-auto"
        >
          Passionate about exploring cutting-edge technologies and innovative solutions across various domains
        </motion.p>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-cyan-500/25'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Interests Cloud */}
        <motion.div layout className="relative min-h-96">
          <div className="flex flex-wrap justify-center gap-4">
            <AnimatePresence>
              {filteredInterests.map((interest, index) => (
                <motion.div
                  key={interest.name}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ 
                    duration: 0.4, 
                    delay: index * 0.05,
                    layout: { duration: 0.3 }
                  }}
                  whileHover={{ 
                    scale: 1.1, 
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                  onHoverStart={() => setHoveredInterest(interest.name)}
                  onHoverEnd={() => setHoveredInterest(null)}
                  className="relative group"
                >
                  <div className={`
                    px-6 py-4 rounded-full 
                    bg-gradient-to-r ${interest.color}
                    text-white font-semibold text-sm
                    cursor-pointer transform transition-all duration-300
                    shadow-lg hover:shadow-xl
                    flex items-center gap-3
                    ${hoveredInterest === interest.name ? 'shadow-2xl' : ''}
                  `}>
                    {/* Glow Effect */}
                    <div className={`
                      absolute -inset-1 bg-gradient-to-r ${interest.color} 
                      rounded-full blur opacity-0 group-hover:opacity-40 
                      transition-opacity duration-300 -z-10
                    `} />
                    
                    <interest.icon className="w-5 h-5" />
                    <span>{interest.name}</span>
                  </div>

                  {/* Floating category tag */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ 
                      opacity: hoveredInterest === interest.name ? 1 : 0,
                      y: hoveredInterest === interest.name ? -10 : 0
                    }}
                    className="absolute -top-8 left-1/2 transform -translate-x-1/2 
                             px-2 py-1 bg-gray-800 text-xs text-cyan-400 
                             rounded-md border border-cyan-500/30 whitespace-nowrap
                             pointer-events-none z-10"
                  >
                    {interest.category}
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Interactive Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 15 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50],
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 5 + Math.random() * 5,
                repeat: Infinity,
                repeatType: "reverse",
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>

        {/* Category Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-5 gap-4"
        >
          {categories.slice(1).map((category, index) => {
            const count = interests.filter(interest => interest.category === category).length;
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="text-2xl font-bold text-cyan-400">{count}</div>
                <div className="text-gray-400 text-sm">{category}</div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}