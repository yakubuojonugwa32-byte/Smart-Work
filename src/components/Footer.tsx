import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white py-12 text-slate-500 text-xs relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand signature */}
        <div className="flex items-center gap-2">
          <span className="text-slate-900 font-black tracking-widest uppercase">{PERSONAL_INFO.brandName}</span>
          <span className="text-slate-400">| Civil, Electrical & Informatics</span>
        </div>

        {/* Copyright notice */}
        <p className="text-center text-slate-500">
          © 2024 {PERSONAL_INFO.name}. All rights reserved.
        </p>

        {/* Scroll back to top button */}
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-600 hover:text-blue-600 hover:bg-slate-200 transition-colors text-[11px] cursor-pointer shadow-xs"
        >
          <span>Top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
};
