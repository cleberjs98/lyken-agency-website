function SectionTitle({ children, className = "", as: Component = "h2", ...props }) {
  return (
    <Component
      className={`lyken-text-section-title text-lyken-text ${className}`}
      {...props}
    >
      {children}
    </Component>
  )
}

export default SectionTitle
