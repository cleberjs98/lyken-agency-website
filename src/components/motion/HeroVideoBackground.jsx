import { useState } from "react"
import { useReducedMotion } from "framer-motion"

const posterSrc = "/images/hero-mesh-poster.webp"
const webmSrc = "/videos/hero-mesh-desktop.webm"
const mp4Src = "/videos/hero-mesh-desktop.mp4"

function HeroVideoBackground() {
  const shouldReduceMotion = useReducedMotion()
  const [isReady, setIsReady] = useState(false)

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <img
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-[62%_50%]"
        decoding="async"
        height="720"
        src={posterSrc}
        width="1280"
      />

      {!shouldReduceMotion ? (
        <video
          autoPlay
          className={`absolute inset-0 h-full w-full object-cover object-[62%_50%] transition-opacity duration-700 ${
            isReady ? "opacity-100" : "opacity-0"
          }`}
          loop
          muted
          onCanPlay={() => setIsReady(true)}
          playsInline
          poster={posterSrc}
          preload="auto"
        >
          <source src={webmSrc} type="video/webm" />
          <source src={mp4Src} type="video/mp4" />
        </video>
      ) : null}
    </div>
  )
}

export default HeroVideoBackground
