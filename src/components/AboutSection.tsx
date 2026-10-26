import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Download, CheckCircle2, User } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { containerStagger, itemFadeUp, scaleUp, ghostWatermarkAnim } from '../utils/animations';

interface AboutSectionProps {
  onOpenCvModal: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenCvModal }) => {
  const [imageError, setImageError] = useState(false);

  const personalDetails = [
    { label: 'Name:', value: PERSONAL_INFO.name, highlight: false },
    { label: 'Discipline:', value: PERSONAL_INFO.discipline, highlight: false },
    { label: 'Specialization:', value: PERSONAL_INFO.specialization, highlight: false },
    { label: 'Email:', value: PERSONAL_INFO.email, highlight: false, isEmail: true },
    { label: 'Availability:', value: PERSONAL_INFO.availability, highlight: true },
  ];

  return (
    <section
      className="relative py-24 bg-slate-50/70 overflow-hidden"
      id="about"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Developer Image in About section */}
          <motion.div
            className="lg:col-span-5 flex justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={scaleUp}
          >
            <div className="relative w-full max-w-sm rounded-2xl overflow-hidden group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-300/40 to-blue-500/20 rounded-2xl blur-sm group-hover:opacity-100 transition duration-500"></div>

              <div className="relative w-full h-auto rounded-2xl overflow-hidden bg-white shadow-xl">
                {!imageError ? (
                  <img
                    alt="Enoch Yakubu portrait"
                    className="w-full h-auto object-cover rounded-2xl filter brightness-100 contrast-100 transition-all duration-500 group-hover:scale-105"
                    src={PERSONAL_INFO.aboutImage}
                    onError={() => setImageError(true)}
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full aspect-[3/4] bg-blue-50 flex flex-col items-center justify-center p-6 text-center">
                    <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-4">
                      <User className="w-8 h-8" />
                    </div>
                    <div className="text-slate-900 font-bold text-lg mb-1 font-heading">{PERSONAL_INFO.name}</div>
                    <div className="text-xs text-slate-500">{PERSONAL_INFO.specialization}</div>
                  </div>
                )}
                {/* Blue corner accent */}
                <div className="absolute top-0 right-0 w-8 h-8 overflow-hidden">
                  <div className="absolute top-0 right-0 w-12 h-12 bg-blue-600 transform rotate-45 translate-x-6 -translate-y-6"></div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* About Information Content */}
          <motion.div
            className="lg:col-span-7 space-y-7 relative"
            variants={containerStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {/* Section Heading with Background Watermark */}
            <div className="relative pb-2">
              <motion.span
                variants={ghostWatermarkAnim}
                className="ghost-text-left"
              >
                About
              </motion.span>
              <motion.h2
                variants={itemFadeUp}
                className="relative z-10 text-4xl lg:text-5xl font-black text-slate-900 tracking-tight font-heading"
              >
                About Me
              </motion.h2>
            </div>

            {/* Intro Paragraph */}
            <motion.p
              variants={itemFadeUp}
              className="text-slate-600 text-sm lg:text-base leading-relaxed max-w-xl"
            >
              {PERSONAL_INFO.subtitle}
            </motion.p>

            {/* Personal Metadata List */}
            <motion.div
              variants={itemFadeUp}
              className="space-y-3.5 text-sm pt-2"
              data-purpose="personal-details"
            >
              {personalDetails.map((item, index) => (
                <div key={index} className="grid grid-cols-12 gap-2 items-center">
                  <span className="col-span-4 sm:col-span-3 font-bold text-slate-900 tracking-wide font-heading">
                    {item.label}
                  </span>
                  <span
                    className={`col-span-8 sm:col-span-9 ${
                      item.highlight
                        ? 'text-blue-600 font-semibold flex items-center gap-1.5'
                        : 'text-slate-600'
                    }`}
                  >
                    {item.highlight && <CheckCircle2 className="w-4 h-4 inline text-blue-600" />}
                    {item.isEmail ? (
                      <a
                        href={`mailto:${item.value}`}
                        className="hover:text-blue-600 transition-colors underline decoration-slate-300 underline-offset-4"
                      >
                        {item.value}
                      </a>
                    ) : (
                      item.value
                    )}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* Project Stats Counter */}
            <motion.div variants={itemFadeUp} className="pt-2">
              <p className="text-xl font-bold tracking-wide text-slate-900 flex items-center font-heading">
                <span className="text-blue-600 mr-2 font-extrabold text-3xl font-heading">
                  {PERSONAL_INFO.projectsCompleted}
                </span>{' '}
                Engineering & Tech Projects Completed
              </p>
            </motion.div>

            {/* Action Button: Download CV */}
            <motion.div variants={itemFadeUp} className="pt-2">
              <button
                onClick={onOpenCvModal}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-blue-600 text-white font-bold text-xs tracking-wider uppercase transition-all duration-300 hover:bg-blue-700 shadow-lg shadow-blue-500/25 transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>DOWNLOAD CV</span>
                <Download className="w-3.5 h-3.5" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
