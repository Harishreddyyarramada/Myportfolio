import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HeroSection from '../Components/portfolio/HeroSection.jsx';
import AboutSection from '../Components/portfolio/AboutSection.jsx';
import SkillsSection from '../Components/portfolio/SkillsSection.jsx';
import EducationSection from '../Components/portfolio/EducationSection.jsx';
import ProjectsSection from '../Components/portfolio/ProjectsSection.jsx';
import AchievementsSection from '../Components/portfolio/AchievementsSection.jsx';
import ExtracurricularSection from '../Components/portfolio/ExtracurricularSection.jsx';
import InterestsSection from '../Components/portfolio/InterestsSection.jsx';
import ContactSection from '../Components/portfolio/ContactSection.jsx';
import ScrollProgress from '../Components/portfolio/ScrollProgress.jsx';
import BackToTop from '../Components/portfolio/BackToTop.jsx';

export default function Portfolio() {
  const [scrollY, setScrollY] = useState(0);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <div className="bg-gray-900 text-white min-h-screen overflow-x-hidden">
        <ScrollProgress />
        
        {/* Background Elements */}
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/20 to-cyan-900/20" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-cyan-500/10" />
        </div>

        {/* Content */}
        <div className="relative z-10">
          <HeroSection scrollY={scrollY} />
          <AboutSection />
          <SkillsSection />
          <EducationSection />
          <ProjectsSection />
          <AchievementsSection />
          <ExtracurricularSection />
          <InterestsSection />
          <ContactSection />
        </div>

        <BackToTop />
      </div>
    </div>
  );
}