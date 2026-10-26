import React from 'react';
import { X, Clock, Calendar } from 'lucide-react';
import { BlogPost } from '../types/portfolio';

interface BlogModalProps {
  post: BlogPost | null;
  onClose: () => void;
}

export const BlogModal: React.FC<BlogModalProps> = ({ post, onClose }) => {
  if (!post) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-50 shrink-0">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
            {post.category}
          </span>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white hover:bg-slate-100 text-slate-500 hover:text-slate-900 transition-colors cursor-pointer shadow-xs"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-6 bg-white text-slate-700">
          <div className="flex items-center gap-4 text-xs text-slate-500">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-blue-600" />
              {post.date}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-blue-600" />
              {post.readTime}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
            {post.title}
          </h2>

          <div className="p-5 rounded-2xl bg-blue-50/70 italic text-sm text-slate-700">
            "{post.excerpt}"
          </div>

          <div className="space-y-4 text-sm text-slate-600 leading-relaxed font-sans pt-2">
            {post.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          <div className="pt-6 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-1.5">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1 rounded-lg bg-slate-100 text-slate-700 font-medium"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-full bg-blue-600 text-white text-xs font-semibold uppercase tracking-wider hover:bg-blue-700 transition-colors cursor-pointer shadow-md shadow-blue-500/20"
            >
              Done Reading
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
