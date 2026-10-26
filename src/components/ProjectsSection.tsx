import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types/portfolio';
import { ArrowUpRight } from 'lucide-react';
import { containerStagger, itemFadeUp, ghostWatermarkAnim } from '../utils/animations';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const [filter, setFilter] = useState<'all' | 'web' | 'civil' | 'embedded'>('all');

  const filteredProjects = filter === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === filter);

  return (
    <section
      className="relative py-24 bg-slate-50/70 overflow-hidden"
      id="projects"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Header with Ghost Text */}
        <motion.div
          className="text-center relative mb-14"
          variants={containerStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <motion.span variants={ghostWatermarkAnim} className="ghost-text">
            Projects
          </motion.span>
          <motion.h2
            variants={itemFadeUp}
            className="relative z-10 text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-3 font-heading"
          >
            Projects
          </motion.h2>
          <motion.p
            variants={itemFadeUp}
            className="relative z-10 text-slate-600 text-sm max-w-xl mx-auto leading-relaxed"
          >
            Featured engineering blueprints, fullstack web platforms, and IoT sensor systems.
          </motion.p>

          {/* Filter Pills */}
          <motion.div
            variants={itemFadeUp}
            className="relative z-10 flex flex-wrap justify-center items-center gap-2.5 mt-8"
          >
            <button
              onClick={() => setFilter('all')}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                filter === 'all'
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20'
                  : 'bg-white text-slate-600 hover:text-slate-900 shadow-sm'
              }`}
            >
              All Projects ({PROJECTS.length})
            </button>
            <button
              onClick={() => setFilter('web')}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                filter === 'web'
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20'
                  : 'bg-white text-slate-600 hover:text-slate-900 shadow-sm'
              }`}
            >
              Web & Software
            </button>
            <button
              onClick={() => setFilter('civil')}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                filter === 'civil'
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20'
                  : 'bg-white text-slate-600 hover:text-slate-900 shadow-sm'
              }`}
            >
              Civil & CAD
            </button>
            <button
              onClick={() => setFilter('embedded')}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                filter === 'embedded'
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20'
                  : 'bg-white text-slate-600 hover:text-slate-900 shadow-sm'
              }`}
            >
              Embedded & IoT
            </button>
          </motion.div>
        </motion.div>

        {/* Project Cards Grid with Staggered Fade-Up */}
        <motion.div
          key={filter}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemFadeUp}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              onClick={() => onSelectProject(project)}
              className="bg-white rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-blue-500/10 transition-shadow duration-300 group cursor-pointer flex flex-col justify-between shadow-sm"
            >
              <div>
                {/* Project Image banner */}
                <div className="relative aspect-video w-full overflow-hidden bg-slate-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-60"></div>

                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[10px] font-bold text-blue-700 uppercase tracking-wider shadow-sm font-heading">
                    {project.categoryLabel}
                  </span>
                  <span className="absolute top-3 right-3 px-2.5 py-0.5 rounded bg-slate-900/80 text-[10px] text-white font-mono shadow-xs">
                    {project.date}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors flex items-center justify-between gap-2 font-heading">
                    <span>{project.title}</span>
                    <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 shrink-0 transition-colors" />
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-2">
                    {project.summary}
                  </p>

                  {/* Highlights/metrics */}
                  <div className="space-y-1 mb-4">
                    {project.metrics.slice(0, 2).map((m, i) => (
                      <div key={i} className="text-[11px] text-slate-700 flex items-center gap-1.5 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                        <span>{m}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Tags */}
              <div className="p-6 pt-0">
                <div className="flex flex-wrap gap-1.5 pt-4">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] px-2.5 py-1 rounded-md bg-slate-100 text-slate-600 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="text-[10px] px-1.5 py-1 text-slate-400">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
