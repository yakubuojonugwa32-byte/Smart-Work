import React from 'react';
import { motion } from 'motion/react';
import { SERVICES } from '../data/portfolioData';
import { Code2, Building2, Cpu, BarChart3, ArrowRight, Check } from 'lucide-react';
import { containerStagger, itemFadeUp, ghostWatermarkAnim } from '../utils/animations';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-7 h-7" />;
      case 'Building2':
        return <Building2 className="w-7 h-7" />;
      case 'Cpu':
        return <Cpu className="w-7 h-7" />;
      case 'BarChart3':
      default:
        return <BarChart3 className="w-7 h-7" />;
    }
  };

  return (
    <section
      className="relative py-24 bg-white overflow-hidden"
      id="services"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Header with Ghost Text */}
        <motion.div
          className="text-center relative mb-16"
          variants={containerStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <motion.span variants={ghostWatermarkAnim} className="ghost-text">
            Services
          </motion.span>
          <motion.h2
            variants={itemFadeUp}
            className="relative z-10 text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-3 font-heading"
          >
            Services
          </motion.h2>
          <motion.p
            variants={itemFadeUp}
            className="relative z-10 text-slate-600 text-sm max-w-xl mx-auto leading-relaxed"
          >
            End-to-end technical solutions spanning modern web applications, structural BIM modeling, and smart hardware telemetry.
          </motion.p>
        </motion.div>

        {/* Services Grid with Staggered Fade-Up */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
          variants={containerStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {SERVICES.map((service) => (
            <motion.div
              key={service.id}
              variants={itemFadeUp}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              className="bg-slate-50/80 rounded-3xl p-8 hover:bg-white transition-colors duration-300 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 flex flex-col justify-between group"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-xs">
                  {getIcon(service.icon)}
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors font-heading">
                  {service.title}
                </h3>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Deliverables */}
                <div className="space-y-2 mb-6">
                  <div className="text-xs font-semibold text-slate-800 uppercase tracking-wider font-heading">
                    Key Deliverables:
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    {service.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-4 mb-6">
                  {service.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] px-3 py-1 rounded-lg bg-white text-slate-600 shadow-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Request Button */}
                <button
                  onClick={() => onSelectService(service.title)}
                  className="w-full py-3 rounded-full bg-slate-100 hover:bg-blue-600 text-slate-800 hover:text-white text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs hover:shadow-md"
                >
                  <span>Inquire About This Service</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
