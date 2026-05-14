import { motion, useReducedMotion } from "framer-motion"
import { createElement, useEffect, useState } from "react"

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

function useCompactMotion() {
  const [isCompactMotion, setIsCompactMotion] = useState(false)

  useEffect(() => {
    if (typeof window === "undefined") {
      return undefined
    }

    const mediaQuery = window.matchMedia("(max-width: 767px)")
    const updateMotionMode = () => {
      setIsCompactMotion(mediaQuery.matches)
    }

    updateMotionMode()
    mediaQuery.addEventListener("change", updateMotionMode)

    return () => {
      mediaQuery.removeEventListener("change", updateMotionMode)
    }
  }, [])

  return isCompactMotion
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
  const isCompactMotion = useCompactMotion()
  const MotionComponent = getMotionElement(as)
  const motionCustom = isCompactMotion
    ? { delay: Math.min(delay, 0.04), duration: Math.min(duration, 0.42), y: 0 }
    : { delay, duration, y }

  return createElement(
    MotionComponent,
    {
      className,
      custom: shouldReduceMotion ? undefined : motionCustom,
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
  const isCompactMotion = useCompactMotion()
  const MotionComponent = getMotionElement(as)
  const motionCustom = isCompactMotion
    ? { delay: Math.min(delay, 0.04), stagger: Math.min(stagger, 0.04) }
    : { delay, stagger }

  return createElement(
    MotionComponent,
    {
      className,
      custom: shouldReduceMotion ? undefined : motionCustom,
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
  const isCompactMotion = useCompactMotion()
  const MotionComponent = getMotionElement(as)
  const motionCustom = isCompactMotion
    ? { duration: Math.min(duration, 0.42), y: 0 }
    : { duration, y }

  return createElement(
    MotionComponent,
    {
      className,
      custom: shouldReduceMotion ? undefined : motionCustom,
      variants: shouldReduceMotion ? reducedRevealVariants : staggerItemVariants,
      ...props,
    },
    children,
  )
}

export default MotionReveal
