import { motion, useReducedMotion } from "framer-motion"
import { createElement } from "react"

import {
  motionDurations,
  reducedRevealVariants,
  revealVariants,
  staggerContainerVariants,
  staggerItemVariants,
} from "../../utils/motionTokens"

const motionElements = {
  article: motion.article,
  div: motion.div,
  form: motion.form,
  h2: motion.h2,
  li: motion.li,
  p: motion.p,
  section: motion.section,
  span: motion.span,
  ul: motion.ul,
}

function getMotionElement(as) {
  return motionElements[as] ?? motion.div
}

function MotionReveal({
  amount = 0.22,
  as = "div",
  children,
  className = "",
  delay = 0,
  duration = motionDurations.medium,
  margin = "0px 0px -80px 0px",
  once = true,
  y = 20,
  ...props
}) {
  const shouldReduceMotion = useReducedMotion()
  const MotionComponent = getMotionElement(as)

  return createElement(
    MotionComponent,
    {
      className,
      custom: shouldReduceMotion ? undefined : { delay, duration, y },
      initial: "hidden",
      variants: shouldReduceMotion ? reducedRevealVariants : revealVariants,
      viewport: { once, amount, margin },
      whileInView: "visible",
      ...props,
    },
    children,
  )
}

export function MotionStagger({
  amount = 0.18,
  as = "div",
  children,
  className = "",
  delay = 0,
  margin = "0px 0px -80px 0px",
  once = true,
  stagger = 0.08,
  ...props
}) {
  const shouldReduceMotion = useReducedMotion()
  const MotionComponent = getMotionElement(as)

  return createElement(
    MotionComponent,
    {
      className,
      custom: shouldReduceMotion ? undefined : { delay, stagger },
      initial: "hidden",
      variants: shouldReduceMotion ? reducedRevealVariants : staggerContainerVariants,
      viewport: { once, amount, margin },
      whileInView: "visible",
      ...props,
    },
    children,
  )
}

export function MotionStaggerItem({
  as = "div",
  children,
  className = "",
  duration = motionDurations.medium,
  y = 18,
  ...props
}) {
  const shouldReduceMotion = useReducedMotion()
  const MotionComponent = getMotionElement(as)

  return createElement(
    MotionComponent,
    {
      className,
      custom: shouldReduceMotion ? undefined : { duration, y },
      variants: shouldReduceMotion ? reducedRevealVariants : staggerItemVariants,
      ...props,
    },
    children,
  )
}

export default MotionReveal
