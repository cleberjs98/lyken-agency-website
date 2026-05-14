import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { useEffect, useState } from "react"

const loadingDuration = 2600
const reducedLoadingDuration = 900
const logoFontFamily = "Playfair Display, serif"

const meshLines = [
  "M26 82 C70 36 116 92 160 48 C198 12 242 44 278 26",
  "M18 122 C64 84 102 140 150 94 C192 54 230 112 286 78",
  "M44 42 C92 72 128 48 166 28 C202 10 238 22 270 8",
]

const meshNodes = [
  [46, 86],
  [94, 54],
  [142, 94],
  [192, 48],
  [238, 78],
  [276, 30],
]

function LoadingExperience({ language = "en", phrase }) {
  const [isVisible, setIsVisible] = useState(true)
  const shouldReduceMotion = useReducedMotion()
  const resolvedPhrase =
    phrase || (language === "pt" ? "Da ideia a marca viva." : "From idea to living brand.")

  useEffect(() => {
    const timeout = window.setTimeout(
      () => setIsVisible(false),
      shouldReduceMotion ? reducedLoadingDuration : loadingDuration,
    )

    return () => window.clearTimeout(timeout)
  }, [shouldReduceMotion])

  const fastTransition = shouldReduceMotion
    ? { duration: 0.01 }
    : { duration: 0.72, ease: [0.22, 1, 0.36, 1] }

  return (
    <AnimatePresence>
      {isVisible ? (
        <motion.section
          aria-label={resolvedPhrase}
          aria-live="polite"
          className="fixed inset-0 z-[100] grid min-h-dvh place-items-center overflow-hidden bg-lyken-deep text-lyken-text"
          exit={{ opacity: 0 }}
          initial={{ opacity: 1 }}
          role="status"
          transition={{ duration: shouldReduceMotion ? 0.12 : 0.42, ease: "easeOut" }}
        >
          <motion.div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(circle_at_50%_48%,rgb(212_180_122_/_0.16),transparent_26rem),radial-gradient(circle_at_54%_55%,rgb(22_76_63_/_0.2),transparent_32rem),#0B1F1A]"
            initial={{ opacity: 0.72 }}
            animate={shouldReduceMotion ? { opacity: 0.8 } : { opacity: [0.72, 1, 0.78] }}
            transition={{ duration: 2.1, ease: "easeInOut" }}
          />

          <div className="pointer-events-none absolute inset-0 opacity-35 [background-image:repeating-linear-gradient(135deg,rgb(244_239_227_/_0.025)_0,rgb(244_239_227_/_0.025)_1px,transparent_1px,transparent_7px)]" />

          <motion.svg
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 h-[min(74vw,420px)] w-[min(92vw,620px)] -translate-x-1/2 -translate-y-1/2 overflow-visible opacity-80"
            fill="none"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: shouldReduceMotion ? 0.44 : [0, 0.66, 0.36], scale: 1 }}
            transition={{ duration: shouldReduceMotion ? 0.01 : 2.05, ease: "easeInOut" }}
            viewBox="0 0 320 170"
          >
            <defs>
              <linearGradient id="loading-gold-line" x1="0" x2="320" y1="0" y2="170">
                <stop stopColor="#D4B47A" stopOpacity="0" />
                <stop offset="0.5" stopColor="#D4B47A" stopOpacity="0.62" />
                <stop offset="1" stopColor="#B8924F" stopOpacity="0" />
              </linearGradient>
            </defs>

            {meshLines.map((line, index) => (
              <motion.path
                d={line}
                key={line}
                stroke="url(#loading-gold-line)"
                strokeLinecap="round"
                strokeWidth="1.15"
                initial={{ opacity: 0, pathLength: 0 }}
                animate={{
                  opacity: shouldReduceMotion ? 0.22 : [0, 0.48, 0.18],
                  pathLength: shouldReduceMotion ? 1 : [0, 1, 1],
                }}
                transition={{
                  delay: shouldReduceMotion ? 0 : 0.18 + index * 0.12,
                  duration: shouldReduceMotion ? 0.01 : 1.24,
                  ease: "easeInOut",
                }}
              />
            ))}

            {meshNodes.map(([cx, cy], index) => (
              <motion.circle
                cx={cx}
                cy={cy}
                fill="#D4B47A"
                key={`${cx}-${cy}`}
                r="2"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{
                  opacity: shouldReduceMotion ? 0.34 : [0, 0.72, 0.3],
                  scale: shouldReduceMotion ? 1 : [0.5, 1.18, 0.9],
                }}
                transition={{
                  delay: shouldReduceMotion ? 0 : 0.34 + index * 0.08,
                  duration: shouldReduceMotion ? 0.01 : 1.12,
                  ease: "easeOut",
                }}
              />
            ))}
          </motion.svg>

          <motion.div
            className="relative z-10 flex w-full max-w-[92vw] flex-col items-center justify-center text-center"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...fastTransition, delay: shouldReduceMotion ? 0 : 0.38 }}
          >
            <motion.p
              className="font-display text-[clamp(3.25rem,16vw,7.25rem)] font-medium leading-none tracking-normal text-lyken-gold"
              style={{ fontFamily: logoFontFamily }}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ ...fastTransition, delay: shouldReduceMotion ? 0 : 0.56 }}
            >
              LYKEN
            </motion.p>

            <motion.p
              className="mt-1 font-sans text-[clamp(0.72rem,2.4vw,1rem)] font-medium uppercase tracking-[0.32em] text-lyken-text-muted"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...fastTransition, delay: shouldReduceMotion ? 0 : 0.88 }}
            >
              Agency
            </motion.p>

            <motion.div
              aria-hidden="true"
              className="mt-6 h-px w-32 bg-gradient-to-r from-transparent via-lyken-gold/70 to-transparent"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ ...fastTransition, delay: shouldReduceMotion ? 0 : 1.04 }}
            />

            <motion.p
              className="mt-6 max-w-[34rem] text-balance font-display text-[clamp(1.08rem,5vw,1.72rem)] leading-snug tracking-normal text-lyken-text"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...fastTransition, delay: shouldReduceMotion ? 0 : 1.16 }}
            >
              {resolvedPhrase}
            </motion.p>
          </motion.div>
        </motion.section>
      ) : null}
    </AnimatePresence>
  )
}

export default LoadingExperience
