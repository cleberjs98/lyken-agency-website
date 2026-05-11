const variants = {
  horizontal: "h-px w-full",
  vertical: "h-full min-h-12 w-px",
}

const strengths = {
  subtle: "bg-lyken-gold-line-20",
  default: "bg-lyken-gold-line-30",
  strong: "bg-lyken-gold-line-45",
}

function GoldDivider({
  className = "",
  orientation = "horizontal",
  strength = "default",
  ...props
}) {
  return (
    <div
      aria-hidden="true"
      className={`${variants[orientation] ?? variants.horizontal} ${strengths[strength] ?? strengths.default} ${className}`}
      {...props}
    />
  )
}

export default GoldDivider
