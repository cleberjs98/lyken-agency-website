import { motion, useReducedMotion } from "framer-motion"

import { hoverTransitions } from "../../utils/motionTokens"

const variants = {
  primary:
    "border-lyken-gold bg-lyken-gold text-lyken-deep hover:border-lyken-gold-warm hover:bg-lyken-gold-warm active:border-lyken-gold active:bg-lyken-gold",
  secondary:
    "border-lyken-gold-line-45 bg-transparent text-lyken-gold hover:border-lyken-gold hover:bg-lyken-gold/10 hover:text-lyken-text active:bg-lyken-gold/15",
  ghost:
    "border-transparent bg-transparent text-lyken-text-muted hover:border-lyken-gold-line-30 hover:text-lyken-text active:text-lyken-gold",
}

function Button({
  children,
  className = "",
  disabled = false,
  variant = "primary",
  href,
  type = "button",
  ...props
}) {
  const shouldReduceMotion = useReducedMotion()
  const classes = [
    "lyken-button lyken-text-button relative inline-flex min-h-11 max-w-full items-center justify-center overflow-hidden rounded-none border px-4 py-4 text-center leading-tight transition-colors duration-200 active:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lyken-gold disabled:pointer-events-none disabled:cursor-not-allowed disabled:border-lyken-gold-line-20 disabled:text-lyken-text-soft disabled:opacity-55 sm:px-6",
    variants[variant] ?? variants.primary,
    disabled && href ? "pointer-events-none cursor-not-allowed opacity-55" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ")

  if (href) {
    return (
      <motion.a
        aria-disabled={disabled ? "true" : undefined}
        className={classes}
        href={disabled ? undefined : href}
        transition={hoverTransitions.button}
        whileHover={disabled || shouldReduceMotion ? undefined : { y: -2 }}
        whileTap={disabled || shouldReduceMotion ? undefined : { y: 0 }}
        {...props}
      >
        <span className="relative z-10 max-w-full whitespace-normal break-words">{children}</span>
        <span aria-hidden="true" className="lyken-button-line" />
      </motion.a>
    )
  }

  return (
    <motion.button
      className={classes}
      disabled={disabled}
      transition={hoverTransitions.button}
      type={type}
      whileHover={disabled || shouldReduceMotion ? undefined : { y: -2 }}
      whileTap={disabled || shouldReduceMotion ? undefined : { y: 0 }}
      {...props}
    >
      <span className="relative z-10 max-w-full whitespace-normal break-words">{children}</span>
      <span aria-hidden="true" className="lyken-button-line" />
    </motion.button>
  )
}

export default Button
