import React, { useEffect, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { easeSmooth } from '../utils/animations';

/**
 * Kinetic Word Flipper: Dynamically flips through multiple titles with 3D kinetic transition
 */
export const KineticWordFlipper: React.FC<{
  words: string[];
  intervalMs?: number;
  className?: string;
}> = ({ words, intervalMs = 2800, className = '' }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, intervalMs);
    return () => clearInterval(timer);
  }, [words.length, intervalMs]);

  return (
    <span className={`inline-block relative overflow-hidden align-middle ${className}`}>
      <motion.span
        key={index}
        initial={{ y: 28, opacity: 0, rotateX: -40, filter: 'blur(4px)' }}
        animate={{ y: 0, opacity: 1, rotateX: 0, filter: 'blur(0px)' }}
        exit={{ y: -28, opacity: 0, rotateX: 40, filter: 'blur(4px)' }}
        transition={{ duration: 0.75, ease: easeSmooth }}
        className="inline-block"
      >
        {words[index]}
      </motion.span>
    </span>
  );
};

/**
 * Kinetic Letter Reveal: Animates individual characters sequentially with elastic kinetic drift
 */
export const KineticCharacters: React.FC<{
  text: string;
  className?: string;
  delay?: number;
}> = ({ text, className = '', delay = 0 }) => {
  const letters = Array.from(text);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.035,
        delayChildren: delay,
      },
    },
  };

  const child = {
    hidden: { opacity: 0, y: 18, rotateZ: 2 },
    visible: {
      opacity: 1,
      y: 0,
      rotateZ: 0,
      transition: {
        duration: 0.8,
        ease: easeSmooth,
      },
    },
  };

  return (
    <motion.span
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={`inline-block ${className}`}
    >
      {letters.map((char, i) => (
        <motion.span
          key={i}
          variants={child}
          className="inline-block whitespace-pre"
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
};

/**
 * Kinetic Counter: Counts up smoothly from 0 to target value when scrolled into view
 */
export const KineticCounter: React.FC<{
  target: number;
  suffix?: string;
  duration?: number;
  className?: string;
}> = ({ target, suffix = '', duration = 1.6, className = '' }) => {
  const [count, setCount] = useState(0);
  const ref = React.useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = target;
    const totalFrames = Math.round(duration * 60);
    let frame = 0;

    const counter = setInterval(() => {
      frame++;
      // easeOutExpo for energetic kinetic curve
      const progress = 1 - Math.pow(2, -10 * (frame / totalFrames));
      const current = Math.min(Math.round(start + (end - start) * progress), end);
      setCount(current);

      if (frame >= totalFrames) {
        clearInterval(counter);
        setCount(end);
      }
    }, 1000 / 60);

    return () => clearInterval(counter);
  }, [isInView, target, duration]);

  return (
    <span ref={ref} className={className}>
      {count}
      {suffix}
    </span>
  );
};

/**
 * Kinetic Marquee: Infinite flowing typography ribbon
 */
export const KineticMarquee: React.FC<{
  items: string[];
  speedSeconds?: number;
  reverse?: boolean;
}> = ({ items, speedSeconds = 30, reverse = false }) => {
  const content = [...items, ...items, ...items];

  return (
    <div className="w-full overflow-hidden py-4 select-none relative bg-gradient-to-r from-blue-50/40 via-white to-blue-50/40">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      <motion.div
        animate={{
          x: reverse ? ['0%', '-50%'] : ['-50%', '0%'],
        }}
        transition={{
          duration: speedSeconds,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="flex whitespace-nowrap gap-8 items-center"
      >
        {content.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-6 text-xs sm:text-sm font-heading font-semibold text-slate-500 uppercase tracking-widest hover:text-blue-600 transition-colors"
          >
            <span>{item}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500/40 inline-block" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};
