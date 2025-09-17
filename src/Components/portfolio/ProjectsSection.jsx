import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Code, Database, Shield, Zap } from 'lucide-react';
import { Button } from '../ui/button.jsx';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

const projects = [
  {
    title: 'BlogBase - Full Stack Blog Platform',
    year: '2025',
    category: 'Full Stack',
    description: 'A complete blogging platform with authentication, content management, and cloud integration.',
    longDescription: 'BlogBase is a comprehensive full-stack blogging platform featuring JWT authentication, secure session management, image upload with Cloudinary, email notifications, and a scalable backend architecture.',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=400&fit=crop',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MySQL', 'JWT', 'bcrypt', 'NodeMailer', 'Firebase', 'Render'],
    features: [
      'JWT Authentication & Secure Sessions',
      'Cloudinary Integration for Images',
      'Email Alert System',
      'Responsive Design',
      'Scalable Backend Architecture'
    ],
    github: '#',
    demo: '#'
  },
  {
    title: 'Secure Crypto-Biometric System',
    year: '2024-25',
    category: 'Security & AI',
    description: 'Advanced biometric authentication system with 93% recognition accuracy using AES and ECC encryption.',
    longDescription: 'Led a team to develop a cutting-edge crypto-biometric system combining AES encryption, ECC algorithms, and biometric recognition using TensorFlow and OpenCV. Enhanced data privacy for cloud computing applications.',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=400&fit=crop',
    technologies: ['AES Encryption', 'ECC', 'TensorFlow', 'OpenCV', 'Scikit-Learn', 'Python'],
    features: [
      '93% Biometric Recognition Accuracy',
      'AES & ECC Encryption Integration',
      'Cloud Computing Privacy Enhancement',
      'Machine Learning Models',
      'Team Leadership Role'
    ],
    github: '#',
    demo: '#'
  },
  {
    title: 'Nike Landing Page',
    year: '2024',
    category: 'Frontend',
    description: 'High-performance landing page with optimized load times and responsive design.',
    longDescription: 'A beautifully crafted Nike-inspired landing page showcasing modern web development techniques, featuring 45% improved load times and fully responsive UI design.',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=400&fit=crop',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
    features: [
      '45% Optimized Load Time',
      'Fully Responsive Design',
      'Modern CSS Animations',
      'Performance Optimization',
      'Cross-browser Compatibility'
    ],
    github: '#',
    demo: '#'
  }
];

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Full Stack', 'Security & AI', 'Frontend'];
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-bold text-center mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
        >
          Featured Projects
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center text-gray-400 text-lg mb-16 max-w-2xl mx-auto"
        >
          Showcasing innovative solutions and technical excellence across various domains
        </motion.p>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setFilter(category)}
              variant={filter === category ? "default" : "outline"}
              className={`rounded-full transition-all duration-300 ${
                filter === category
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white'
                  : 'border-gray-600 text-gray-300 hover:border-cyan-400'
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:bg-white/10 transition-all duration-500">
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60" />
                    
                    {/* Overlay Icons */}
                    <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="p-2 bg-white/20 backdrop-blur-sm rounded-full">
                        <ExternalLink className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-semibold text-cyan-400 bg-cyan-500/20 px-3 py-1 rounded-full">
                        {project.category}
                      </span>
                      <span className="text-sm text-gray-400">{project.year}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-2 py-1 bg-purple-500/20 text-purple-300 rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="text-xs px-2 py-1 bg-gray-500/20 text-gray-300 rounded-md">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>

                    <div className="flex gap-3">
                      <Button size="sm" variant="outline" className="flex-1 text-xs">
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Modal */}
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-gray-900 border-gray-700">
            {selectedProject && (
              <div>
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-white mb-4">
                    {selectedProject.title}
                  </DialogTitle>
                </DialogHeader>
                
                <div className="space-y-6">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-lg font-semibold text-cyan-400 mb-3">Project Overview</h3>
                      <p className="text-gray-300 mb-4">{selectedProject.longDescription}</p>
                      
                      <div className="flex gap-4">
                        <Button className="bg-gradient-to-r from-cyan-500 to-purple-500">
                          <Github className="w-4 h-4 mr-2" />
                          View Code
                        </Button>
                        <Button variant="outline">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </Button>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-cyan-400 mb-3">Key Features</h3>
                      <ul className="space-y-2 mb-6">
                        {selectedProject.features.map((feature, index) => (
                          <li key={index} className="text-gray-300 flex items-center gap-2">
                            <Zap className="w-4 h-4 text-green-400 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      
                      <h3 className="text-lg font-semibold text-cyan-400 mb-3">Technologies Used</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-md text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}