import React, { useState } from 'react';
import { motion } from 'motion/react';
import { SKILLS } from '../data/portfolioData';
import { Layers } from 'lucide-react';
import { containerStagger, itemFadeUp, ghostWatermarkAnim, easeSmooth } from '../utils/animations';

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'electrical' | 'software' | 'civil' | 'computing'>('all');
  const [activeSkillHover, setActiveSkillHover] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'All Disciplines' },
    { id: 'electrical', label: 'Electrical & IoT' },
    { id: 'civil', label: 'Génie Civil & CAD' },
    { id: 'software', label: 'Informatics & Web' },
    { id: 'computing', label: 'Analysis & Computing' },
  ] as const;

  const filteredSkills = selectedCategory === 'all'
    ? SKILLS
    : SKILLS.filter((s) => s.category === selectedCategory);

  return (
    <section
      className="relative py-24 bg-white overflow-hidden"
      id="skills"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Skills Header with Centered Ghost Watermark */}
        <motion.div
          className="text-center relative mb-12"
          variants={containerStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <motion.span variants={ghostWatermarkAnim} className="ghost-text">
            Skills
          </motion.span>
          <motion.h2
            variants={itemFadeUp}
            className="relative z-10 text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-3 font-heading"
          >
            My Skills
          </motion.h2>
          <motion.p
            variants={itemFadeUp}
            className="relative z-10 text-slate-600 text-sm max-w-xl mx-auto leading-relaxed"
          >
            Core competencies spanning electrical design, software & informatics, and civil engineering fundamentals.
          </motion.p>

          {/* Interactive Discipline Filters */}
          <motion.div
            variants={itemFadeUp}
            className="relative z-10 flex flex-wrap justify-center items-center gap-2 mt-8"
          >
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-blue-600 text-white font-semibold shadow-md shadow-blue-500/20'
                    : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </motion.div>
        </motion.div>

        {/* Skills 2-Column Progress Grid */}
        <motion.div
          key={selectedCategory}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-9 max-w-5xl mx-auto"
          data-purpose="skills-progress-bars"
          variants={containerStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {filteredSkills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={itemFadeUp}
              className="space-y-2.5 p-5 rounded-2xl transition-all duration-300 bg-slate-50/80 hover:bg-blue-50/40 shadow-sm"
              onMouseEnter={() => setActiveSkillHover(skill.name)}
              onMouseLeave={() => setActiveSkillHover(null)}
            >
              <div className="flex justify-between items-center text-sm font-bold text-slate-900">
                <span className="tracking-wide flex items-center gap-2 font-heading">
                  <span>{skill.name}</span>
                  {activeSkillHover === skill.name && (
                    <span className="text-[10px] text-blue-600 font-normal px-2 py-0.5 rounded bg-blue-100 font-sans">
                      Hovered
                    </span>
                  )}
                </span>
                <span className="text-blue-600 font-bold font-heading">{skill.percentage}%</span>
              </div>

              {/* Progress bar line with smooth width animation */}
              <div className="w-full bg-slate-200/90 h-2.5 rounded-full overflow-hidden p-[1px]">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.percentage}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.1, ease: easeSmooth, delay: 0.15 }}
                  className="bg-blue-600 h-full rounded-full shadow-[0_0_12px_rgba(37,99,235,0.4)]"
                />
              </div>

              {/* Associated Tools & Tech Tags */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {skill.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] px-2.5 py-1 rounded-lg bg-white text-slate-600 hover:text-blue-700 transition-colors shadow-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Multi-disciplinary Integration Callout Box */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={itemFadeUp}
          className="mt-16 max-w-4xl mx-auto bg-blue-50/70 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6 shadow-sm"
        >
          <div className="w-14 h-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-blue-500/25">
            <Layers className="w-7 h-7" />
          </div>
          <div className="text-center sm:text-left">
            <h4 className="text-slate-900 font-bold text-base mb-1 font-heading">
              The Intersection Advantage: Engineering + Code
            </h4>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Most developers do not understand civil load calculations or electrical circuitry; most engineers do not build high-performance fullstack cloud software. I unify both worlds to deliver smart sensors, automated BIM scripts, and modern software architectures.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
