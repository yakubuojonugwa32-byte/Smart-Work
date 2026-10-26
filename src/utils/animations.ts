/**
 * Slower, elegant and cinematic animation variants inspired by Linear, Stripe & Apple.
 * Relaxed stagger intervals with silky deceleration curves for smooth, deliberate reveals.
 */

export const easeSmooth = [0.16, 1, 0.3, 1] as const;

export const containerStagger = {
  hidden: { opacity: 0 },
  visible: (customDelay = 0) => ({
    opacity: 1,
    transition: {
      delayChildren: customDelay,
      staggerChildren: 0.18,
    },
  }),
};

export const containerStaggerFast = {
  hidden: { opacity: 0 },
  visible: (customDelay = 0) => ({
    opacity: 1,
    transition: {
      delayChildren: customDelay,
      staggerChildren: 0.12,
    },
  }),
};

export const itemFadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.0,
      ease: easeSmooth,
    },
  },
};

export const itemFadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1.0,
      ease: easeSmooth,
    },
  },
};

export const scaleUp = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.15,
      ease: easeSmooth,
    },
  },
};

export const ghostWatermarkAnim = {
  hidden: { opacity: 0, scale: 0.93, y: 18 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 1.7,
      ease: easeSmooth,
    },
  },
};
