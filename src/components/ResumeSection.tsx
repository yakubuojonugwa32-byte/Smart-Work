import React, { useState } from 'react';
import { motion } from 'motion/react';
import { EXPERIENCES, EDUCATION } from '../data/portfolioData';
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle } from 'lucide-react';
import { containerStagger, itemFadeUp, ghostWatermarkAnim } from '../utils/animations';

interface ResumeSectionProps {
  onOpenCvModal: () => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({ onOpenCvModal }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'experience' | 'education'>('all');

  return (
    <section
      className="relative py-24 bg-slate-50/70 overflow-hidden"
      id="resume"
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
            Resume
          </motion.span>
          <motion.h2
            variants={itemFadeUp}
            className="relative z-10 text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-3 font-heading"
          >
            My Resume
          </motion.h2>
          <motion.p
            variants={itemFadeUp}
            className="relative z-10 text-slate-600 text-sm max-w-xl mx-auto leading-relaxed"
          >
            Professional trajectory across engineering consulting, software development, and academic research.
          </motion.p>

          {/* Tab Selector */}
          <motion.div
            variants={itemFadeUp}
            className="relative z-10 flex justify-center gap-3 mt-6"
          >
            <button
              onClick={() => setActiveTab('all')}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20'
                  : 'bg-white text-slate-600 hover:text-slate-900 shadow-sm'
              }`}
            >
              All Timeline
            </button>
            <button
              onClick={() => setActiveTab('experience')}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'experience'
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20'
                  : 'bg-white text-slate-600 hover:text-slate-900 shadow-sm'
              }`}
            >
              Experience
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'education'
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20'
                  : 'bg-white text-slate-600 hover:text-slate-900 shadow-sm'
              }`}
            >
              Education
            </button>
          </motion.div>
        </motion.div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Experience Column */}
          {(activeTab === 'all' || activeTab === 'experience') && (
            <motion.div
              className="space-y-8"
              variants={containerStagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
            >
              <motion.div variants={itemFadeUp} className="flex items-center gap-3 pb-3">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shadow-xs">
                  <Briefcase className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 tracking-wide font-heading">Work Experience</h3>
              </motion.div>

              <div className="space-y-6 relative before:absolute before:left-3.5 before:top-2 before:bottom-2 before:w-[2px] before:bg-blue-100">
                {EXPERIENCES.map((exp, index) => (
                  <motion.div
                    key={index}
                    variants={itemFadeUp}
                    className="relative pl-10 group"
                  >
                    {/* Node Dot */}
                    <div className="absolute left-2.5 top-2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-blue-600 shadow-xs group-hover:scale-125 transition-transform"></div>

                    <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="text-xs font-semibold text-blue-700 inline-flex items-center gap-1.5 bg-blue-50 px-3 py-1 rounded-full">
                          <Calendar className="w-3 h-3" />
                          {exp.period}
                        </span>
                        <span className="text-xs text-slate-500 inline-flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {exp.location}
                        </span>
                      </div>

                      <h4 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors font-heading">
                        {exp.title}
                      </h4>
                      <p className="text-xs text-slate-500 font-medium mb-3">{exp.company}</p>
                      <p className="text-xs text-slate-600 leading-relaxed mb-3">{exp.description}</p>

                      <ul className="space-y-1.5 text-xs text-slate-600">
                        {exp.achievements.map((ach, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                            <span>{ach}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Education Column */}
          {(activeTab === 'all' || activeTab === 'education') && (
            <motion.div
              className="space-y-8"
              variants={containerStagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
            >
              <motion.div variants={itemFadeUp} className="flex items-center gap-3 pb-3">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shadow-xs">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 tracking-wide font-heading">Education & Qualifications</h3>
              </motion.div>

              <div className="space-y-6 relative before:absolute before:left-3.5 before:top-2 before:bottom-2 before:w-[2px] before:bg-blue-100">
                {EDUCATION.map((edu, index) => (
                  <motion.div
                    key={index}
                    variants={itemFadeUp}
                    className="relative pl-10 group"
                  >
                    {/* Node Dot */}
                    <div className="absolute left-2.5 top-2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-blue-600 shadow-xs group-hover:scale-125 transition-transform"></div>

                    <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="text-xs font-semibold text-blue-700 inline-flex items-center gap-1.5 bg-blue-50 px-3 py-1 rounded-full">
                          <Calendar className="w-3 h-3" />
                          {edu.period}
                        </span>
                        <span className="text-xs text-slate-500 inline-flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {edu.location}
                        </span>
                      </div>

                      <h4 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors font-heading">
                        {edu.degree}
                      </h4>
                      <p className="text-xs text-slate-500 font-medium mb-3">{edu.institution}</p>
                      <p className="text-xs text-slate-600 leading-relaxed mb-3">{edu.description}</p>

                      <ul className="space-y-1.5 text-xs text-slate-600">
                        {edu.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>

        {/* Quick CV Download Trigger */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={itemFadeUp}
          className="mt-14 text-center"
        >
          <button
            onClick={onOpenCvModal}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold text-xs tracking-wider uppercase transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer"
          >
            Preview & Download Complete Curriculum Vitae
          </button>
        </motion.div>
      </div>
    </section>
  );
};
