/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ResumeSection } from './components/ResumeSection';
import { ServicesSection } from './components/ServicesSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { BlogSection } from './components/BlogSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CvModal } from './components/CvModal';
import { HireMeModal } from './components/HireMeModal';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { BlogModal } from './components/BlogModal';
import { BlogPost, Project } from './types/portfolio';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isCvOpen, setIsCvOpen] = useState(false);
  const [isHireMeOpen, setIsHireMeOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  // Scroll spy to highlight active section in navigation
  useEffect(() => {
    const sectionIds = ['home', 'about', 'resume', 'services', 'skills', 'projects', 'blog', 'contact'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sectionIds) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenHireMe = (serviceName?: string) => {
    setSelectedService(serviceName);
    setIsHireMeOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-600 selection:text-white">
      {/* Navigation Header */}
      <Header
        activeSection={activeSection}
        onOpenHireMe={() => handleOpenHireMe()}
      />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section */}
        <HeroSection onOpenHireMe={() => handleOpenHireMe()} />

        {/* 2. About Me Section */}
        <AboutSection onOpenCvModal={() => setIsCvOpen(true)} />

        {/* 3. Resume & Experience Section */}
        <ResumeSection onOpenCvModal={() => setIsCvOpen(true)} />

        {/* 4. Services Section */}
        <ServicesSection onSelectService={(service) => handleOpenHireMe(service)} />

        {/* 5. Skills Section */}
        <SkillsSection />

        {/* 6. Projects Section */}
        <ProjectsSection onSelectProject={(project) => setSelectedProject(project)} />

        {/* 7. My Blog Section */}
        <BlogSection onSelectPost={(post) => setSelectedPost(post)} />

        {/* 8. Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals */}
      <CvModal
        isOpen={isCvOpen}
        onClose={() => setIsCvOpen(false)}
      />

      <HireMeModal
        isOpen={isHireMeOpen}
        onClose={() => setIsHireMeOpen(false)}
        preselectedService={selectedService}
      />

      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onInquire={() => {
          setSelectedProject(null);
          handleOpenHireMe(selectedProject ? selectedProject.title : undefined);
        }}
      />

      <BlogModal
        post={selectedPost}
        onClose={() => setSelectedPost(null)}
      />
    </div>
  );
}
