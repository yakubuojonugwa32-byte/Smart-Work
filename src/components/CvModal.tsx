import React, { useRef } from 'react';
import { X, Printer, Download, Mail, MapPin, CheckCircle } from 'lucide-react';
import { PERSONAL_INFO, SKILLS, EXPERIENCES, EDUCATION } from '../data/portfolioData';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose }) => {
  const cvPrintRef = useRef<HTMLDivElement>(null);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    const cvText = `
CURRICULUM VITAE - ${PERSONAL_INFO.name.toUpperCase()}
${PERSONAL_INFO.title}
Discipline: ${PERSONAL_INFO.discipline}
Specialization: ${PERSONAL_INFO.specialization}
Email: ${PERSONAL_INFO.email}
Location: ${PERSONAL_INFO.location}

ABOUT:
${PERSONAL_INFO.subtitle}

CORE COMPETENCIES:
${SKILLS.map((s) => `- ${s.name}: ${s.percentage}% (${s.tags.join(', ')})`).join('\n')}

EXPERIENCE:
${EXPERIENCES.map((e) => `[${e.period}] ${e.title} at ${e.company}\n${e.description}\nKey Achievements:\n${e.achievements.map((a) => `  * ${a}`).join('\n')}`).join('\n\n')}

EDUCATION:
${EDUCATION.map((ed) => `[${ed.period}] ${ed.degree} - ${ed.institution}\n${ed.description}\nHighlights:\n${ed.highlights.map((h) => `  * ${h}`).join('\n')}`).join('\n\n')}
    `.trim();

    const blob = new Blob([cvText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Enoch_Yakubu_Curriculum_Vitae.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col">
        {/* Modal Toolbar */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-50 shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
            <span className="text-slate-900 font-bold text-sm tracking-wide">
              Curriculum Vitae — {PERSONAL_INFO.name}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="p-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-700 transition-colors text-xs flex items-center gap-1.5 cursor-pointer shadow-xs"
              title="Print CV"
            >
              <Printer className="w-4 h-4 text-blue-600" />
              <span className="hidden sm:inline">Print</span>
            </button>
            <button
              onClick={handleDownload}
              className="px-4 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 font-semibold transition-colors text-xs flex items-center gap-1.5 cursor-pointer shadow-xs"
              title="Download text CV"
            >
              <Download className="w-4 h-4" />
              <span>Download</span>
            </button>
            <button
              onClick={onClose}
              className="p-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-500 hover:text-slate-900 transition-colors cursor-pointer shadow-xs"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body - CV Content */}
        <div ref={cvPrintRef} className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-white text-slate-700">
          {/* Header */}
          <div className="pb-6 flex flex-col sm:flex-row justify-between items-start gap-4">
            <div>
              <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                {PERSONAL_INFO.name}
              </h1>
              <p className="text-blue-600 font-semibold text-base mt-1">
                {PERSONAL_INFO.title} • {PERSONAL_INFO.discipline}
              </p>
              <p className="text-xs text-slate-600 mt-2 max-w-xl leading-relaxed">
                {PERSONAL_INFO.subtitle}
              </p>
            </div>

            <div className="text-xs space-y-1.5 text-slate-600 shrink-0">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-blue-600" />
                <span>{PERSONAL_INFO.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-blue-600" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
              <div className="text-blue-600 font-semibold pt-1">
                {PERSONAL_INFO.availability}
              </div>
            </div>
          </div>

          {/* Skills Breakdown */}
          <div>
            <h2 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">
              Core Competencies & Proficiencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {SKILLS.map((skill) => (
                <div key={skill.name} className="p-4 bg-slate-50 rounded-2xl">
                  <div className="flex justify-between text-xs font-bold text-slate-900 mb-1.5">
                    <span>{skill.name}</span>
                    <span className="text-blue-600">{skill.percentage}%</span>
                  </div>
                  <div className="w-full bg-slate-200/90 h-1.5 rounded-full overflow-hidden mb-2">
                    <div
                      className="bg-blue-600 h-full rounded-full"
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                  <div className="text-[10px] text-slate-500">{skill.tags.join(' • ')}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">
              Professional Experience
            </h2>
            <div className="space-y-5">
              {EXPERIENCES.map((exp, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-slate-50">
                  <div className="flex flex-wrap justify-between items-start gap-2 mb-1">
                    <div>
                      <h3 className="text-sm font-bold text-slate-900">{exp.title}</h3>
                      <p className="text-xs text-blue-600 font-medium">{exp.company} — {exp.location}</p>
                    </div>
                    <span className="text-xs text-slate-500 font-mono">{exp.period}</span>
                  </div>
                  <p className="text-xs text-slate-600 mt-2 mb-2 leading-relaxed">{exp.description}</p>
                  <ul className="space-y-1 text-xs text-slate-600">
                    {exp.achievements.map((ach, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle className="w-3 h-3 text-blue-600 shrink-0" />
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">
              Education & Academic Credentials
            </h2>
            <div className="space-y-4">
              {EDUCATION.map((edu, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-slate-50">
                  <div className="flex flex-wrap justify-between items-start gap-2 mb-1">
                    <div>
                      <h3 className="text-sm font-bold text-slate-900">{edu.degree}</h3>
                      <p className="text-xs text-blue-600 font-medium">{edu.institution}</p>
                    </div>
                    <span className="text-xs text-slate-500 font-mono">{edu.period}</span>
                  </div>
                  <p className="text-xs text-slate-600 mt-1 mb-2">{edu.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {edu.highlights.map((h, i) => (
                      <span key={i} className="text-[10px] px-2.5 py-1 rounded-md bg-white text-slate-700 shadow-2xs font-medium">
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
