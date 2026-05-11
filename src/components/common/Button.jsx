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
  const classes = [
    "lyken-text-button inline-flex min-h-11 items-center justify-center rounded-none border px-6 py-4 transition-colors duration-200 active:translate-y-px active:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lyken-gold disabled:pointer-events-none disabled:cursor-not-allowed disabled:border-lyken-gold-line-20 disabled:text-lyken-text-soft disabled:opacity-55",
    variants[variant] ?? variants.primary,
    disabled && href ? "pointer-events-none cursor-not-allowed opacity-55" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ")

  if (href) {
    return (
      <a
        aria-disabled={disabled ? "true" : undefined}
        className={classes}
        href={disabled ? undefined : href}
        {...props}
      >
        {children}
      </a>
    )
  }

  return (
    <button className={classes} disabled={disabled} type={type} {...props}>
      {children}
    </button>
  )
}

export default Button
