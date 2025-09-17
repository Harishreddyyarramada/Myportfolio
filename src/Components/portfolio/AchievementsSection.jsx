import React from 'react';
import { motion } from 'framer-motion';
import { Award, Trophy, Star, Users, Code } from 'lucide-react';

const achievements = [
  {
    icon: Trophy,
    title: 'Top 3% in Classroom (CSE)',
    description: 'Exceptional academic performance ranking in top 3% among Computer Science students',
    color: 'from-yellow-400 to-orange-500',
    category: 'Academic'
  },
  {
    icon: Star,
    title: 'Consistent Academic Excellence',
    description: 'Maintained 9.11 CGPA throughout academic journey',
    color: 'from-cyan-400 to-blue-500',
    category: 'Academic'
  },
  {
    icon: Users,
    title: 'Google Developer Group Member',
    description: 'Active contributor to hackathons and technical workshops',
    color: 'from-purple-400 to-pink-500',
    category: 'Community'
  }
];

const certificates = [
  {
    icon: Award,
    title: 'Young Python Professional',
    issuer: 'Infosys Springboard',
    year: '2024',
    color: 'from-green-400 to-teal-500',
    link: 'https://drive.google.com/file/d/1Xfs9C0HMkJpu79bYEFYTbSfGgamLjK_K/view'
  },
  {
    icon: Code,
    title: 'Full Stack Web Development',
    issuer: 'Udemy',
    year: '2024',
    color: 'from-blue-400 to-indigo-500',
    link: 'https://www.udemy.com/certificate/UC-9edc1e62-6ed2-4f34-9a57-1de32662b466/'
  },
  {
    icon: Award,
    title: 'SQL & Python Crash Course',
    issuer: 'Coursera',
    year: '2024',
    color: 'from-purple-400 to-violet-500',
    link: 'https://www.coursera.org/account/accomplishments/verify/NQRCFND6W8Q7?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course'
  },
  {
    icon: Star,
    title: 'Introduction to Generative AI',
    issuer: 'Coursera',
    year: '2024',
    color: 'from-pink-400 to-rose-500',
    link: 'https://www.coursera.org/account/accomplishments/verify/9D875Z74D9CV?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course'
  }
];

export default function AchievementsSection() {
  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
        >
          Achievements & Certificates
        </motion.h2>

        {/* Achievements Section */}
        <div className="mb-20">
          <motion.h3 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12 text-cyan-400"
          >
            Key Achievements
          </motion.h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  rotateY: 5,
                }}
                className="relative group"
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-500 h-full">
                  <div className={`absolute -inset-1 bg-gradient-to-r ${achievement.color} rounded-xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                  <div className="relative z-10">
                    <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r ${achievement.color} p-4 flex items-center justify-center`}>
                      <achievement.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-center">
                      <span className="inline-block px-3 py-1 text-xs font-semibold bg-cyan-500/20 text-cyan-400 rounded-full mb-3">
                        {achievement.category}
                      </span>
                      <h4 className="text-xl font-bold text-white mb-4">{achievement.title}</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">{achievement.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certificates Section */}
        <div>
          <motion.h3 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12 text-purple-400"
          >
            Professional Certificates
          </motion.h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certificates.map((cert, index) => (
              <a
                key={cert.title}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ 
                    scale: 1.05, 
                    rotateX: 5,
                  }}
                  className="relative group"
                >
                  <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 h-full">
                    <div className={`absolute -inset-0.5 bg-gradient-to-r ${cert.color} rounded-lg blur opacity-0 group-hover:opacity-30 transition-opacity duration-300`} />
                    <div className="relative z-10 text-center">
                      <div className={`w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-to-r ${cert.color} p-3 flex items-center justify-center`}>
                        <cert.icon className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="text-lg font-semibold text-white mb-2 leading-tight">{cert.title}</h4>
                      <p className="text-cyan-400 text-sm font-medium mb-1">{cert.issuer}</p>
                      <p className="text-gray-400 text-xs">{cert.year}</p>
                    </div>
                  </div>
                </motion.div>
              </a>
            ))}
          </div>
        </div>

        {/* Stats Display */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: '9.11', label: 'CGPA', suffix: '/10' },
            { number: '4+', label: 'Certificates', suffix: '' },
            { number: '3+', label: 'Achievements', suffix: '' },
            { number: '96%', label: 'Intermediate', suffix: '' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                {stat.number}
                <span className="text-xl text-gray-400">{stat.suffix}</span>
              </div>
              <div className="text-gray-400 mt-2">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
