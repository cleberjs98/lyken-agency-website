const sizes = {
  sm: "h-10 w-10",
  md: "h-12 w-12",
  lg: "h-14 w-14",
}

function IconWrapper({
  children,
  className = "",
  size = "md",
  label,
  decorative = true,
  ...props
}) {
  const accessibilityProps =
    decorative || !label ? { "aria-hidden": "true" } : { "aria-label": label, role: "img" }

  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center border border-lyken-gold-line-30 bg-lyken-deep/70 text-lyken-gold ${sizes[size] ?? sizes.md} ${className}`}
      {...accessibilityProps}
      {...props}
    >
      {children}
    </span>
  )
}

export default IconWrapper
