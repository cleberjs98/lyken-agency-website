function SectionLabel({ children, className = "", as: Component = "p", ...props }) {
  return (
    <Component
      className={`lyken-text-eyebrow text-lyken-gold ${className}`}
      {...props}
    >
      {children}
    </Component>
  )
}

export default SectionLabel
