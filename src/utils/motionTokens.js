export const motionDurations = {
  short: 0.24,
  hover: 0.26,
  medium: 0.68,
  long: 1.12,
  line: 1.05,
  mesh: 12,
}

export const motionEasings = {
  easeOut: [0.22, 1, 0.36, 1],
  easeInOut: [0.65, 0, 0.35, 1],
  premium: [0.16, 1, 0.3, 1],
}

export const hoverTransitions = {
  button: {
    duration: motionDurations.hover,
    ease: motionEasings.premium,
  },
  card: {
    duration: motionDurations.hover,
    ease: motionEasings.premium,
  },
}

export const lineDrawVariants = {
  hidden: ({ orientation = "horizontal" } = {}) =>
    orientation === "vertical" ? { opacity: 0, scaleY: 0 } : { opacity: 0, scaleX: 0 },
  visible: ({ delay = 0, duration = motionDurations.line } = {}) => ({
    opacity: 1,
    scaleX: 1,
    scaleY: 1,
    transition: {
      delay,
      duration,
      ease: motionEasings.easeInOut,
    },
  }),
}

export const reducedLineDrawVariants = {
  hidden: {
    opacity: 1,
    scaleX: 1,
    scaleY: 1,
  },
  visible: {
    opacity: 1,
    scaleX: 1,
    scaleY: 1,
    transition: {
      duration: 0.01,
    },
  },
}

export const revealVariants = {
  hidden: ({ y = 20 } = {}) => ({
    opacity: 0,
    y,
  }),
  visible: ({ delay = 0, duration = motionDurations.medium } = {}) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration,
      ease: motionEasings.easeOut,
    },
  }),
}

export const reducedRevealVariants = {
  hidden: {
    opacity: 1,
    y: 0,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.01,
    },
  },
}

export const staggerContainerVariants = {
  hidden: {},
  visible: ({ delay = 0, stagger = 0.08 } = {}) => ({
    transition: {
      delayChildren: delay,
      staggerChildren: stagger,
    },
  }),
}

export const staggerItemVariants = {
  hidden: ({ y = 18 } = {}) => ({
    opacity: 0,
    y,
  }),
  visible: ({ duration = motionDurations.medium } = {}) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration,
      ease: motionEasings.easeOut,
    },
  }),
}
