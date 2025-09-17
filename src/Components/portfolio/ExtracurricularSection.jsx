import React from 'react';
import { motion } from 'framer-motion';
import { Users, Trophy, Lightbulb, Calendar, MapPin, Code2 } from 'lucide-react';

const activities = [
  {
    icon: Code2,
    title: 'Google Gen AI Jam',
    description: 'Learned Google Cloud Platform, Vertex AI, and cloud-based AI workflows through hands-on workshops',
    date: '2024',
    category: 'Learning',
    skills: ['GCP', 'Vertex AI', 'Cloud Computing', 'AI/ML'],
    color: 'from-blue-400 to-cyan-500'
  },
  {
    icon: Users,
    title: 'Google Developer Student Club (GDSC) Member',
    description: 'Active member gaining practical exposure to cloud computing, SDLC, and collaborative development',
    date: '2023-Present',
    category: 'Community',
    skills: ['Cloud Computing', 'SDLC', 'Team Collaboration', 'Open Source'],
    color: 'from-green-400 to-teal-500'
  },
  {
    icon: Lightbulb,
    title: 'TechKnow 2.0 Hackathon',
    description: 'Developed E-Waste Management Platform with real-time tracking and responsive UI design',
    date: '2024',
    category: 'Competition',
    skills: ['Full-Stack Development', 'Real-time Systems', 'UI/UX', 'Environmental Tech'],
    color: 'from-purple-400 to-pink-500'
  },
  {
    icon: Calendar,
    title: 'TechFest Event Coordinator',
    description: 'Successfully managed 30+ participants across 5+ technical activities and workshops',
    date: '2024',
    category: 'Leadership',
    skills: ['Event Management', 'Leadership', 'Communication', 'Organization'],
    color: 'from-orange-400 to-red-500'
  }
];

export default function ExtracurricularSection() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold text-center mb-6 md:mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
        >
          Extracurricular Activities
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center text-gray-400 text-base md:text-lg mb-12 md:mb-16 max-w-3xl mx-auto px-4"
        >
          Beyond academics, I actively participate in tech communities, hackathons, and leadership opportunities to grow both technically and personally
        </motion.p>

        <div className="relative">
          {/* Timeline Line - Hidden on mobile */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-px h-full w-1 bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500"></div>

          <div className="space-y-8 md:space-y-16">
            {activities.map((activity, index) => (
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
                {/* Timeline Node - Hidden on mobile */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full border-4 border-gray-900 z-10 items-center justify-center">
                  <activity.icon className="w-4 h-4 text-white" />
                </div>

                {/* Content Card */}
                <motion.div
                  className={`w-full md:w-5/12 ${
                    index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                  }`}
                  whileHover={{ scale: 1.02, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-white/10 hover:bg-white/10 transition-all duration-500 relative group">
                    {/* Glow Effect */}
                    <div className={`absolute -inset-1 bg-gradient-to-r ${activity.color} rounded-xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                    
                    <div className="relative z-10">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                        <div className={`p-4 rounded-xl bg-gradient-to-r ${activity.color} w-fit`}>
                          <activity.icon className="w-6 md:w-8 h-6 md:h-8 text-white" />
                        </div>
                        <div className="sm:text-right">
                          <span className="inline-block px-3 py-1 text-xs font-semibold bg-cyan-500/20 text-cyan-400 rounded-full mb-2">
                            {activity.category}
                          </span>
                          <div className="flex items-center gap-1 text-gray-400 text-sm sm:justify-end">
                            <Calendar className="w-4 h-4" />
                            {activity.date}
                          </div>
                        </div>
                      </div>

                      <h3 className="text-xl md:text-2xl font-bold text-white mb-4">{activity.title}</h3>
                      <p className="text-gray-300 mb-6 leading-relaxed text-sm md:text-base">{activity.description}</p>

                      {/* Skills Tags */}
                      <div className="flex flex-wrap gap-2">
                        {activity.skills.map((skill, skillIndex) => (
                          <motion.span
                            key={skill}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: skillIndex * 0.1 }}
                            className="px-3 py-1 text-xs font-semibold bg-white/10 text-purple-300 rounded-full border border-purple-500/30"
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          {[
            { number: '4+', label: 'Activities', suffix: '' },
            { number: '30+', label: 'Participants Managed', suffix: '' },
            { number: '5+', label: 'Technical Events', suffix: '' },
            { number: '2+', label: 'Years Active', suffix: '' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-4 md:p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                {stat.number}
                <span className="text-lg md:text-xl text-gray-400">{stat.suffix}</span>
              </div>
              <div className="text-gray-400 mt-2 text-xs md:text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}