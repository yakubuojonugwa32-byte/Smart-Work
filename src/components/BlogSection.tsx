import React from 'react';
import { motion } from 'motion/react';
import { BLOG_POSTS } from '../data/portfolioData';
import { BlogPost } from '../types/portfolio';
import { Clock, Calendar, ArrowRight } from 'lucide-react';
import { containerStagger, itemFadeUp, ghostWatermarkAnim } from '../utils/animations';

interface BlogSectionProps {
  onSelectPost: (post: BlogPost) => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ onSelectPost }) => {
  return (
    <section
      className="relative py-24 bg-white overflow-hidden"
      id="blog"
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
            Blog
          </motion.span>
          <motion.h2
            variants={itemFadeUp}
            className="relative z-10 text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-3 font-heading"
          >
            My Blog
          </motion.h2>
          <motion.p
            variants={itemFadeUp}
            className="relative z-10 text-slate-600 text-sm max-w-xl mx-auto leading-relaxed"
          >
            Technical writing on structural automation, smart sensors, and software systems engineering.
          </motion.p>
        </motion.div>

        {/* Blog Posts Grid with Staggered Reveal */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={containerStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {BLOG_POSTS.map((post) => (
            <motion.article
              key={post.id}
              variants={itemFadeUp}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              onClick={() => onSelectPost(post)}
              className="bg-slate-50/80 rounded-3xl p-7 hover:bg-white transition-colors duration-300 group cursor-pointer flex flex-col justify-between shadow-sm hover:shadow-xl hover:shadow-blue-500/10"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-500 mb-4 pb-3">
                  <span className="text-blue-600 font-bold uppercase tracking-wider text-[10px] font-heading">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3 h-3 text-slate-400" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <div className="text-xs text-slate-500 mb-2 flex items-center gap-1.5">
                  <Calendar className="w-3 h-3 text-slate-400" />
                  <span>{post.date}</span>
                </div>

                <h3 className="text-base font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors leading-snug font-heading">
                  {post.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-6">
                  {post.excerpt}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] px-2.5 py-1 rounded-md bg-white text-slate-600 font-medium shadow-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 group-hover:gap-2.5 transition-all">
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
