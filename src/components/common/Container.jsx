function Container({ children, className = "", as: Component = "div", ...props }) {
  return (
    <Component
      className={`mx-auto w-full max-w-[1280px] px-5 md:px-8 lg:px-12 ${className}`}
      {...props}
    >
      {children}
    </Component>
  )
}

export default Container
