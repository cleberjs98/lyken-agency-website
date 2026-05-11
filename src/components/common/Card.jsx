const variants = {
  default: "border-lyken-gold-line-20 bg-lyken-emerald/55",
  deep: "border-lyken-gold-line-20 bg-lyken-deep/80",
  elevated: "border-lyken-gold-line-30 bg-lyken-emerald/70",
}

function Card({
  children,
  className = "",
  icon,
  title,
  variant = "default",
  as: Component = "article",
  ...props
}) {
  return (
    <Component
      className={`lyken-card group ${variants[variant] ?? variants.default} ${className}`}
      {...props}
    >
      {icon ? <div className="mb-6">{icon}</div> : null}
      {title ? <h3 className="lyken-text-card-title text-lyken-text">{title}</h3> : null}
      {children ? <div className={title ? "mt-4" : ""}>{children}</div> : null}
    </Component>
  )
}

export default Card
