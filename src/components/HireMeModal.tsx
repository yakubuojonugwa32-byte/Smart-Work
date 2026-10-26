import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Send, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HireMeModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export const HireMeModal: React.FC<HireMeModalProps> = ({
  isOpen,
  onClose,
  preselectedService,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: preselectedService || 'Fullstack Web App',
    budget: '$5k - $15k',
    timeline: 'Within 1 month',
    details: '',
  });

  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedService]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDone, setIsDone] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsDone(true);
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden my-8 p-6 sm:p-8">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {isDone ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Inquiry Received!</h3>
            <p className="text-sm text-slate-600 max-w-sm mx-auto">
              Thank you for considering {PERSONAL_INFO.name}. I will review your requirements and reach out within 24 hours to schedule a discovery call.
            </p>
            <button
              onClick={() => {
                setIsDone(false);
                onClose();
              }}
              className="mt-4 px-6 py-2.5 rounded-full bg-blue-600 text-white text-xs font-semibold uppercase tracking-wider hover:bg-blue-700 transition-colors cursor-pointer shadow-md shadow-blue-500/20"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex items-center gap-2 text-blue-600 mb-1">
              <Sparkles className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-widest">
                Let's Talk
              </span>
            </div>

            <h3 className="text-2xl font-extrabold text-slate-900">
              Connect with {PERSONAL_INFO.name}
            </h3>
            <p className="text-xs text-slate-600">
              Tell me about your technical project, timeline, or engineering goals.
            </p>

            <div className="space-y-1.5 pt-2">
              <label className="text-xs font-semibold text-slate-700">Name *</label>
              <input
                required
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Your name or company"
                className="w-full bg-slate-100 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-700">Email *</label>
              <input
                required
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="contact@company.com"
                className="w-full bg-slate-100 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-700">Estimated Budget</label>
                <select
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="w-full bg-slate-100 rounded-xl px-3 py-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all"
                >
                  <option value="<$5k">&lt; $5,000</option>
                  <option value="$5k - $15k">$5,000 - $15,000</option>
                  <option value="$15k - $30k">$15,000 - $30,000</option>
                  <option value="$30k+">$30,000+</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-700">Target Timeline</label>
                <select
                  value={formData.timeline}
                  onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                  className="w-full bg-slate-100 rounded-xl px-3 py-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all"
                >
                  <option value="Urgent (<2 weeks)">Urgent (&lt; 2 weeks)</option>
                  <option value="Within 1 month">Within 1 month</option>
                  <option value="1 - 3 months">1 - 3 months</option>
                  <option value="Flexible / Research">Flexible / Research</option>
                </select>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-700">Project Brief *</label>
              <textarea
                required
                rows={3}
                value={formData.details}
                onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                placeholder="Describe project scope, deliverables, or tech requirements..."
                className="w-full bg-slate-100 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 rounded-full bg-blue-600 text-white font-bold text-xs tracking-wider uppercase transition-all duration-300 hover:bg-blue-700 shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {isSubmitting ? (
                <span>Submitting Proposal...</span>
              ) : (
                <>
                  <span>Send Inquiry</span>
                  <Send className="w-3.5 h-3.5" />
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
