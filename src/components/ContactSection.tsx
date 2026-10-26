import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Send, CheckCircle2, Copy, Check, Clock, Globe } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { containerStagger, itemFadeUp, ghostWatermarkAnim } from '../utils/animations';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Fullstack Web App',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: '',
        email: '',
        projectType: 'Fullstack Web App',
        subject: '',
        message: ''
      });
    }, 900);
  };

  return (
    <section
      className="relative py-24 bg-slate-50/70 overflow-hidden"
      id="contact"
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
            Contact
          </motion.span>
          <motion.h2
            variants={itemFadeUp}
            className="relative z-10 text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-3 font-heading"
          >
            Contact Me
          </motion.h2>
          <motion.p
            variants={itemFadeUp}
            className="relative z-10 text-slate-600 text-sm max-w-xl mx-auto leading-relaxed"
          >
            Have an engineering challenge, structural BIM inquiry, or fullstack software project in mind? Let's connect.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
          {/* Direct Details Column */}
          <motion.div
            className="lg:col-span-5 space-y-6"
            variants={containerStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            <div className="bg-white rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
              <motion.h3 variants={itemFadeUp} className="text-xl font-bold text-slate-900 tracking-wide font-heading">
                Get In Touch Directly
              </motion.h3>
              <motion.p variants={itemFadeUp} className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Whether you need technical consulting, structural drafting automation, or an end-to-end fullstack platform, my inbox is open.
              </motion.p>

              {/* Direct Email Card */}
              <motion.div
                variants={itemFadeUp}
                className="p-4 rounded-2xl bg-blue-50/80 flex items-center justify-between gap-3"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] text-blue-700 uppercase tracking-wider font-semibold font-heading">Email Address</div>
                    <div className="text-xs sm:text-sm font-bold text-slate-900 truncate">
                      {PERSONAL_INFO.email}
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-2.5 rounded-xl bg-white hover:bg-blue-100/60 text-slate-700 transition-colors shrink-0 shadow-xs cursor-pointer"
                  title="Copy email address"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
                </button>
              </motion.div>

              {/* Info Badges */}
              <motion.div variants={itemFadeUp} className="space-y-3 pt-2 text-xs">
                <div className="flex items-center gap-3 text-slate-700">
                  <Globe className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>{PERSONAL_INFO.location}</span>
                </div>
                <div className="flex items-center gap-3 text-slate-700">
                  <Clock className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Response time: Usually within 24 hours</span>
                </div>
                <div className="flex items-center gap-3 text-blue-700 font-semibold">
                  <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                  <span>{PERSONAL_INFO.availability}</span>
                </div>
              </motion.div>

              {/* Discipline Summary Pill */}
              <motion.div variants={itemFadeUp} className="pt-4 text-[11px] text-slate-500">
                <span className="font-semibold text-slate-800">Discipline: </span>
                <span>{PERSONAL_INFO.discipline}</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form Column */}
          <motion.div
            className="lg:col-span-7"
            variants={containerStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm">
              {isSuccess ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900 font-heading">Message Sent Successfully!</h4>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    Thank you for reaching out. Enoch Yakubu will review your message and reply promptly.
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="mt-4 px-6 py-2.5 rounded-full bg-blue-600 text-white text-xs font-semibold uppercase tracking-wider hover:bg-blue-700 transition-colors cursor-pointer shadow-md shadow-blue-500/20"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <motion.h3 variants={itemFadeUp} className="text-xl font-bold text-slate-900 mb-2 font-heading">
                    Send a Message
                  </motion.h3>

                  <motion.div variants={itemFadeUp} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700">Your Name *</label>
                      <input
                        required
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full bg-slate-100 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700">Your Email *</label>
                      <input
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full bg-slate-100 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all"
                      />
                    </div>
                  </motion.div>

                  <motion.div variants={itemFadeUp} className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700">Project / Inquiry Domain</label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full bg-slate-100 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all"
                    >
                      <option value="Fullstack Web App">Fullstack Web & Software Application</option>
                      <option value="CAD & BIM Structural Design">CAD, BIM & Génie Civil Design</option>
                      <option value="Embedded Systems & IoT">Embedded Systems & Hardware IoT</option>
                      <option value="Technical Computing & FEA">Technical Computing & Finite Element Analysis</option>
                      <option value="Research & Academic Collaboration">Research & Academic Collaboration</option>
                    </select>
                  </motion.div>

                  <motion.div variants={itemFadeUp} className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700">Subject *</label>
                    <input
                      required
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Project brief or question..."
                      className="w-full bg-slate-100 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all"
                    />
                  </motion.div>

                  <motion.div variants={itemFadeUp} className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700">Message *</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your project, timeline, specifications, or inquiry..."
                      className="w-full bg-slate-100 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all resize-none"
                    ></textarea>
                  </motion.div>

                  <motion.button
                    variants={itemFadeUp}
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-full bg-blue-600 text-white font-bold text-xs tracking-wider uppercase transition-all duration-300 hover:bg-blue-700 shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
