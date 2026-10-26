import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Terminal, Cpu, Building } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { containerStagger, itemFadeUp, scaleUp } from '../utils/animations';

interface HeroSectionProps {
  onOpenHireMe: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenHireMe }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <section
      className="relative min-h-[calc(100vh-80px)] flex items-center overflow-hidden bg-gradient-to-b from-blue-50/60 via-white to-white py-16 lg:py-0"
      id="home"
    >
      {/* Subtle background ambient blue glow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-10 right-0 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-12 items-center gap-12 relative z-10">
        {/* Hero Text Content with sequential staggered animation */}
        <motion.div
          className="lg:col-span-6 z-10 space-y-6 pt-4 lg:pt-0"
          variants={containerStagger}
          initial="hidden"
          animate="visible"
          custom={0.1}
        >
          {/* 1. Sub-headline tag */}
          <motion.div variants={itemFadeUp} className="flex items-center gap-2">
            <span className="inline-block text-blue-600 tracking-[0.25em] text-xs lg:text-sm font-bold uppercase font-heading">
              {PERSONAL_INFO.tagline}
            </span>
            <span className="h-[2px] w-10 bg-blue-600/30 inline-block"></span>
          </motion.div>

          {/* 2. Main Headline */}
          <motion.h1
            variants={itemFadeUp}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-tight font-heading"
          >
            I'm <span className="text-blue-600">{PERSONAL_INFO.name}</span>
          </motion.h1>

          {/* 3. Profession Title */}
          <motion.p
            variants={itemFadeUp}
            className="text-xl sm:text-2xl lg:text-3xl text-slate-700 font-semibold tracking-wide font-heading"
          >
            {PERSONAL_INFO.title}
          </motion.p>

          {/* 4. Multi-discipline sub-pills */}
          <motion.div variants={itemFadeUp} className="flex flex-wrap items-center gap-2 pt-1 text-xs">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-900 font-medium">
              <Building className="w-3.5 h-3.5 text-blue-600" />
              Génie Civil
            </span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-900 font-medium">
              <Cpu className="w-3.5 h-3.5 text-blue-600" />
              Electrical & Automation
            </span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-900 font-medium">
              <Terminal className="w-3.5 h-3.5 text-blue-600" />
              Informatics & Software
            </span>
          </motion.div>

          {/* 5. CTA Buttons */}
          <motion.div variants={itemFadeUp} className="flex flex-wrap items-center gap-4 pt-4">
            <button
              onClick={onOpenHireMe}
              className="px-8 py-3.5 rounded-full bg-blue-600 text-white font-semibold text-xs tracking-wider uppercase transition-all duration-300 hover:bg-blue-700 shadow-lg shadow-blue-500/25 transform hover:-translate-y-0.5 cursor-pointer"
            >
              LET'S TALK
            </button>
            <a
              href="#projects"
              className="px-8 py-3.5 rounded-full bg-slate-100 text-slate-800 hover:bg-slate-200 font-semibold text-xs tracking-wider uppercase transition-all duration-300 hover:text-blue-600 shadow-xs"
            >
              MY WORKS
            </a>
          </motion.div>
        </motion.div>

        {/* Hero Visual / Portrait with smooth fade & scale */}
        <motion.div
          className="lg:col-span-6 flex justify-center lg:justify-end relative"
          initial="hidden"
          animate="visible"
          variants={scaleUp}
          transition={{ delay: 0.25 }}
        >
          <div className="relative w-full max-w-md lg:max-w-lg flex items-center justify-center">
            {/* Ambient blue backlight */}
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-200/60 via-blue-100/40 to-blue-300/50 rounded-2xl blur-xl opacity-75"></div>

            <div className="relative w-full rounded-2xl overflow-hidden bg-white shadow-2xl shadow-blue-950/10">
              {!imageError ? (
                <img
                  alt="Developer workspace and coding environment"
                  className="w-full max-h-[580px] object-cover object-top rounded-2xl transition-all duration-500 hover:scale-[1.02]"
                  src={PERSONAL_INFO.heroImage}
                  onError={() => setImageError(true)}
                  loading="eager"
                />
              ) : (
                <div className="w-full aspect-square sm:aspect-[4/5] bg-blue-50/50 flex flex-col items-center justify-center p-8 text-center text-slate-600">
                  <div className="w-20 h-20 rounded-2xl bg-blue-100 flex items-center justify-center mb-4 text-blue-600">
                    <Sparkles className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 font-heading">{PERSONAL_INFO.name}</h3>
                  <p className="text-sm text-slate-600 max-w-xs">
                    Fullstack Developer & Multi-Disciplinary Engineer
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-xs text-blue-600 font-mono font-medium">
                    <span>CAD / BIM • SOFTWARE • ELECTRICAL</span>
                  </div>
                </div>
              )}

              {/* Floating Engineering Metric Badge */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-xl flex items-center justify-between text-xs shadow-lg"
              >
                <div>
                  <div className="text-slate-500">Current Focus</div>
                  <div className="text-slate-900 font-semibold font-heading">Génie Civil & Smart Systems</div>
                </div>
                <div className="text-right">
                  <div className="text-blue-600 font-bold text-base font-heading">{PERSONAL_INFO.projectsCompleted}</div>
                  <div className="text-slate-500 text-[10px] uppercase tracking-wider">Completed</div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
