import { motion, useReducedMotion } from "framer-motion"

import {
  lineDrawVariants,
  motionDurations,
  reducedLineDrawVariants,
} from "../../utils/motionTokens"

function AnimatedLine({
  amount = 0.35,
  className = "",
  delay = 0,
  duration = motionDurations.line,
  once = true,
  orientation = "horizontal",
}) {
  const shouldReduceMotion = useReducedMotion()
  const isVertical = orientation === "vertical"

  return (
    <motion.span
      aria-hidden="true"
      className={`pointer-events-none block overflow-hidden ${
        isVertical
          ? "h-full w-px origin-top bg-gradient-to-b from-transparent via-lyken-gold/55 to-transparent"
          : "h-px origin-left bg-gradient-to-r from-transparent via-lyken-gold/55 to-transparent"
      } ${className}`}
      custom={shouldReduceMotion ? undefined : { delay, duration, orientation }}
      initial="hidden"
      variants={shouldReduceMotion ? reducedLineDrawVariants : lineDrawVariants}
      viewport={{ once, amount }}
      whileInView="visible"
    />
  )
}

export default AnimatedLine
