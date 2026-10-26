import React from 'react';
import { X, CheckCircle, Calendar } from 'lucide-react';
import { Project } from '../types/portfolio';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
  onInquire: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onInquire,
}) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col">
        {/* Header Image & Close Button */}
        <div className="relative h-64 w-full bg-slate-100 shrink-0">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>

          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2.5 rounded-xl bg-black/60 backdrop-blur-md text-white hover:text-blue-300 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3.5 py-1 rounded-full bg-blue-600 text-white text-[10px] font-bold uppercase tracking-wider shadow-xs">
                {project.categoryLabel}
              </span>
              <span className="text-xs text-slate-300 font-mono flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {project.date}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {project.title}
            </h2>
          </div>
        </div>

        {/* Modal Scroll Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 bg-white text-slate-700">
          <div>
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">
              Project Overview
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Key Metrics */}
          <div className="p-5 rounded-2xl bg-blue-50/80">
            <h4 className="text-xs font-bold text-blue-700 uppercase tracking-wider mb-2.5">
              Engineering Outcomes & Performance
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {project.metrics.map((metric, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-800 font-medium">{metric}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2.5">
              Technologies & Methodologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-lg bg-slate-100 text-xs text-slate-700 font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="pt-4 flex flex-wrap items-center justify-between gap-4">
            <button
              onClick={() => {
                onClose();
                onInquire();
              }}
              className="px-6 py-2.5 rounded-full bg-blue-600 text-white font-semibold text-xs tracking-wider uppercase hover:bg-blue-700 transition-colors cursor-pointer shadow-md shadow-blue-500/20"
            >
              Discuss Similar Project
            </button>

            <div className="flex items-center gap-3">
              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs cursor-pointer transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
