import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { useEffect, useMemo, useState } from "react"

const loadingDuration = 14400
const reducedLoadingDuration = 3600
const revealStartDelay = 12900
const logoFontFamily = "Playfair Display, serif"
const backgroundSettle = [0, 0.22, 0.34, 0.58, 0.86, 1]

const loadingStages = {
  en: [
    { id: "idea", text: "Every brand begins with an idea.", start: 1, end: 3.65 },
    { id: "structure", text: "With direction, it takes shape.", start: 4.45, end: 7.55 },
    { id: "brand", text: "From idea to branding.", start: 12, end: 13.9 },
  ],
  pt: [
    { id: "idea", text: "Toda marca começa com uma ideia.", start: 1, end: 3.65 },
    { id: "structure", text: "Com direção, ela ganha forma.", start: 4.45, end: 7.55 },
    { id: "brand", text: "Da ideia ao branding.", start: 12, end: 13.9 },
  ],
}

const particles = [
  { id: "p1", x: 82, y: 74, r: 1.1, delay: 2.4, dx: 16, dy: 10 },
  { id: "p2", x: 130, y: 54, r: 0.9, delay: 2.85, dx: -18, dy: 18 },
  { id: "p3", x: 56, y: 138, r: 0.85, delay: 3.2, dx: 26, dy: -12 },
  { id: "p4", x: 170, y: 124, r: 1, delay: 3.45, dx: -28, dy: -8 },
  { id: "p5", x: 36, y: 84, r: 0.7, delay: 5.2, dx: 44, dy: 12 },
  { id: "p6", x: 196, y: 82, r: 0.8, delay: 5.55, dx: -46, dy: 8 },
  { id: "p7", x: 112, y: 24, r: 0.75, delay: 6.05, dx: -2, dy: 34 },
  { id: "p8", x: 112, y: 168, r: 0.75, delay: 6.35, dx: 4, dy: -36 },
]

const dustParticles = [
  { id: "d1", x: 26, y: 30, r: 0.34, delay: 1.1 },
  { id: "d2", x: 44, y: 118, r: 0.42, delay: 2.4 },
  { id: "d3", x: 72, y: 28, r: 0.28, delay: 1.8 },
  { id: "d4", x: 96, y: 148, r: 0.46, delay: 3.4 },
  { id: "d5", x: 126, y: 34, r: 0.38, delay: 2.1 },
  { id: "d6", x: 142, y: 122, r: 0.32, delay: 3.8 },
  { id: "d7", x: 168, y: 54, r: 0.48, delay: 2.7 },
  { id: "d8", x: 188, y: 140, r: 0.36, delay: 4.5 },
  { id: "d9", x: 204, y: 80, r: 0.44, delay: 5.1 },
  { id: "d10", x: 228, y: 28, r: 0.3, delay: 5.7 },
  { id: "d11", x: 240, y: 132, r: 0.4, delay: 6.2 },
  { id: "d12", x: 52, y: 168, r: 0.3, delay: 6.8 },
]

const links = [
  "M-16 120 C30 74 78 94 126 62 C166 36 198 48 226 22",
  "M-10 68 C42 100 86 42 138 78 C174 104 204 88 224 66",
  "M10 160 C58 124 98 170 146 122 C176 92 206 112 230 96",
  "M34 28 C82 60 108 46 146 24 C172 10 198 18 218 0",
  "M20 188 C62 128 114 152 146 96 C168 56 190 44 224 34",
]

const signalPaths = [
  "M-22 112 C36 52 88 112 142 58 C180 20 218 42 260 2",
  "M-24 44 C36 104 76 20 132 66 C176 104 214 52 260 82",
  "M-18 172 C38 128 86 184 142 126 C182 84 222 120 262 98",
  "M18 206 C48 124 104 146 122 78 C140 18 182 0 236 -24",
]

const energyStreaks = [
  {
    id: "streak-1",
    d: "M-42 48 C-10 28 18 38 42 24 C58 14 72 18 88 8 C104 -2 122 8 134 2",
    delay: 3.35,
    width: 1.45,
  },
  {
    id: "streak-3",
    d: "M-36 140 C-4 118 28 134 58 112 C82 94 110 112 136 92 C154 78 178 82 198 68",
    delay: 3.9,
    width: 1.35,
  },
  {
    id: "streak-5",
    d: "M-24 82 C10 72 32 86 62 82 C88 78 102 92 130 88 C154 84 170 98 198 88",
    delay: 4.5,
    width: 1.25,
  },
]

const logoSweeps = [
  {
    id: "logo-sweep-1",
    d: "M112 54 C178 22 226 76 288 46 C350 16 402 92 470 58 C534 26 600 68 676 44 C724 28 760 42 804 24",
    delay: 4.45,
    width: 1.75,
  },
  {
    id: "logo-sweep-3",
    d: "M138 72 C196 112 244 48 308 98 C364 142 422 76 486 124 C548 170 614 88 684 130 C730 156 768 118 810 136",
    delay: 5.85,
    width: 1.4,
  },
  {
    id: "logo-sweep-4",
    d: "M118 152 C186 98 250 164 320 96 C386 32 452 136 520 72 C590 6 668 88 790 28",
    delay: 7.75,
    width: 1.95,
  },
]

const logoLetters = [
  { char: "L", x: 230, delay: 3.65 },
  { char: "Y", x: 338, delay: 4.2 },
  { char: "K", x: 452, delay: 4.78 },
  { char: "E", x: 566, delay: 5.36 },
  { char: "N", x: 682, delay: 5.94 },
]

const letterEnergy = [
  { id: "l-energy", path: "M204 146 C214 118 202 76 222 44 C228 34 242 34 252 42", delay: 3.55 },
  { id: "y-energy", path: "M300 44 C322 70 334 88 340 112 C344 88 372 62 392 42", delay: 4.1 },
  {
    id: "k-energy",
    path: "M420 146 C430 112 428 76 436 42 M438 98 C466 78 484 58 508 42 M440 100 C470 112 490 132 514 146",
    delay: 4.68,
  },
  {
    id: "e-energy",
    path: "M612 44 C590 42 566 42 544 44 C538 78 538 112 544 146 C570 148 596 146 624 144 M548 96 C570 94 588 94 610 96",
    delay: 5.26,
  },
  {
    id: "n-energy",
    path: "M650 148 C654 112 654 76 650 42 C684 86 710 116 744 148 C740 112 740 76 744 42",
    delay: 5.84,
  },
]

const activationNodes = [
  { id: "node-y", x: 338, y: 96, delay: 8.1 },
  { id: "node-k", x: 452, y: 100, delay: 8.35 },
  { id: "node-n", x: 686, y: 62, delay: 8.85 },
]

const electricFilaments = [
  { id: "filament-l", d: "M202 132 C216 116 205 84 222 62 C230 50 238 48 248 38", delay: 4.05 },
  { id: "filament-y", d: "M306 50 C322 72 332 84 340 104 C350 84 368 66 388 48", delay: 4.58 },
  { id: "filament-k", d: "M430 142 C438 112 436 74 444 44 M448 98 C470 78 486 62 512 44", delay: 5.1 },
  {
    id: "filament-e",
    d: "M540 52 C568 42 596 46 626 48 M548 98 C572 92 594 96 614 94 M542 142 C572 150 604 144 634 142",
    delay: 5.62,
  },
  {
    id: "filament-n",
    d: "M648 144 C656 110 654 76 650 44 C680 78 714 116 746 146 M746 146 C738 112 742 76 746 44",
    delay: 6.12,
  },
]

function LoadingExperience({ language = "en", onComplete, onRevealStart, phrase }) {
  const [isVisible, setIsVisible] = useState(true)
  const shouldReduceMotion = useReducedMotion()
  const stages = loadingStages[language] ?? loadingStages.en
  const resolvedStages = stages.map((stage) =>
    stage.id === "brand" ? { ...stage, text: phrase || stage.text } : stage,
  )

  useEffect(() => {
    const revealTimeout = window.setTimeout(
      () => {
        onRevealStart?.()
      },
      shouldReduceMotion ? 0 : revealStartDelay,
    )
    const completeTimeout = window.setTimeout(
      () => {
        setIsVisible(false)
        onComplete?.()
      },
      shouldReduceMotion ? reducedLoadingDuration : loadingDuration,
    )

    return () => {
      window.clearTimeout(revealTimeout)
      window.clearTimeout(completeTimeout)
    }
  }, [onComplete, onRevealStart, shouldReduceMotion])

  const transition = useMemo(
    () =>
      shouldReduceMotion
        ? { duration: 0.01 }
        : { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
    [shouldReduceMotion],
  )

  return (
    <AnimatePresence>
      {isVisible ? (
        <motion.section
          aria-label={resolvedStages.map((stage) => stage.text).join(" ")}
          aria-live="polite"
          animate={
            shouldReduceMotion
              ? { backgroundColor: "rgba(11, 31, 26, 0)" }
              : {
                  backgroundColor: [
                    "rgba(11, 31, 26, 1)",
                    "rgba(11, 31, 26, 1)",
                    "rgba(11, 31, 26, 0.62)",
                    "rgba(11, 31, 26, 0)",
                  ],
                }
          }
          className="fixed inset-0 z-[100] grid min-h-dvh transform-gpu place-items-center overflow-hidden bg-lyken-deep text-lyken-text will-change-opacity [contain:layout_paint_style]"
          exit={{
            opacity: 0,
          }}
          initial={{ opacity: 1 }}
          role="status"
          transition={{
            backgroundColor: {
              delay: shouldReduceMotion ? 0 : 13.05,
              duration: shouldReduceMotion ? 0.01 : 1.25,
              ease: "easeInOut",
              times: [0, 0.32, 0.72, 1],
            },
            opacity: { duration: shouldReduceMotion ? 0.1 : 0.55, ease: "easeOut" },
          }}
        >
          <motion.div
            className="pointer-events-none absolute inset-0 transform-gpu bg-[#0B1F1A] will-change-opacity"
            animate={shouldReduceMotion ? { opacity: 0 } : { opacity: [1, 1, 0.42, 0] }}
            transition={{
              delay: shouldReduceMotion ? 0 : 13.05,
              duration: shouldReduceMotion ? 0.01 : 1.25,
              ease: "easeInOut",
              times: [0, 0.32, 0.72, 1],
            }}
          />
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 transform-gpu bg-[radial-gradient(ellipse_at_46%_52%,rgb(212_180_122_/_0.24),rgb(184_146_79_/_0.11)_22%,transparent_46%),radial-gradient(ellipse_at_58%_58%,rgb(22_76_63_/_0.34),transparent_54%),radial-gradient(circle_at_30%_32%,rgb(16_54_46_/_0.24),transparent_30rem),radial-gradient(circle_at_center,transparent_0,rgb(4_12_10_/_0.66)_80%)] will-change-transform"
            animate={
              shouldReduceMotion
                ? { opacity: 1 }
                : {
                    opacity: [0.5, 0.56, 0.88, 0.74, 0.96, 0.58],
                    scale: [1, 1.015, 1.055, 1.035, 1.07, 1.04],
                  }
            }
            transition={{ duration: 13.8, ease: "easeInOut", times: backgroundSettle }}
          />
          <div className="pointer-events-none absolute inset-0 opacity-45 [background-image:repeating-linear-gradient(135deg,rgb(244_239_227_/_0.025)_0,rgb(244_239_227_/_0.025)_1px,transparent_1px,transparent_6px)]" />

          <motion.div
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 h-[min(86vw,720px)] w-[min(102vw,820px)] -translate-x-1/2 -translate-y-1/2 transform-gpu rounded-full bg-[radial-gradient(ellipse,rgb(212_180_122_/_0.3),rgb(184_146_79_/_0.12)_28%,rgb(22_76_63_/_0.16)_52%,transparent_74%)] blur-3xl will-change-transform sm:h-[min(98vw,720px)] sm:w-[min(108vw,820px)]"
            initial={{ opacity: 0, scale: 0.42 }}
            animate={
              shouldReduceMotion
                ? { opacity: 0.28, scale: 1 }
                : {
                    opacity: [0, 0.08, 0.34, 0.54, 0.24, 0.08],
                    scale: [0.34, 0.48, 0.82, 1.08, 1.38, 1.52],
                    x: ["-50%", "-47%", "-53%", "-50%"],
                    y: ["-50%", "-53%", "-47%", "-50%"],
                  }
            }
            transition={{
              delay: 0.15,
              duration: 13.2,
              ease: "easeInOut",
              times: [0, 0.22, 0.34, 0.52, 0.78, 1],
            }}
          />

          <motion.div
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 h-[min(88vw,560px)] w-[min(112vw,840px)] -translate-x-1/2 -translate-y-1/2 transform-gpu will-change-transform sm:h-[min(92vw,680px)] sm:w-[min(122vw,980px)]"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{
              opacity: shouldReduceMotion ? 0.42 : [0, 0.06, 0.38, 0.72, 0.44, 0.18],
              scale: shouldReduceMotion ? 1 : [0.84, 0.9, 1.02, 1.16, 1.34, 1.42],
              rotate: shouldReduceMotion ? 0 : [-3, -1, 1.5, 0, -0.8],
            }}
            transition={{ delay: shouldReduceMotion ? 0 : 2.4, duration: shouldReduceMotion ? 0.01 : 10.5, ease: "easeInOut" }}
          >
            <svg className="h-full w-full" viewBox="0 0 200 180" fill="none">
              <defs>
                <linearGradient id="loading-line-gold" x1="-20" x2="260" y1="32" y2="150">
                  <stop stopColor="#D4B47A" stopOpacity="0" />
                  <stop offset="0.42" stopColor="#F0D8A4" stopOpacity="0.58" />
                  <stop offset="0.62" stopColor="#D4B47A" stopOpacity="0.34" />
                  <stop offset="1" stopColor="#B8924F" stopOpacity="0" />
                </linearGradient>
                <filter id="loading-line-blur">
                  <feGaussianBlur stdDeviation="0.7" />
                </filter>
                <filter id="loading-streak-glow" x="-40%" y="-80%" width="180%" height="260%">
                  <feGaussianBlur stdDeviation="1.15" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              {energyStreaks.map((streak) => (
                <motion.path
                  d={streak.d}
                  fill="none"
                  filter="url(#loading-streak-glow)"
                  key={streak.id}
                  stroke="#F0D8A4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={streak.width}
                  initial={{ opacity: 0, pathLength: 0, pathOffset: 0 }}
                  animate={{
                    opacity: shouldReduceMotion ? 0 : [0, 0.68, 0.48, 0.12, 0],
                    pathLength: shouldReduceMotion ? 0 : [0, 0.28, 0.16, 0.08, 0],
                    pathOffset: shouldReduceMotion ? 0 : [0, 0.06, 0.36, 0.74, 1],
                  }}
                  transition={{
                    delay: shouldReduceMotion ? 0 : streak.delay,
                    duration: shouldReduceMotion ? 0.01 : 1.55,
                    ease: "easeInOut",
                    times: [0, 0.18, 0.46, 0.76, 1],
                  }}
                />
              ))}
              {signalPaths.map((path, index) => (
                <motion.path
                  key={path}
                  d={path}
                  filter="url(#loading-line-blur)"
                  stroke={index === 1 ? "#164C3F" : "#D4B47A"}
                  strokeLinecap="round"
                  strokeWidth={index === 1 ? "1.8" : "1.4"}
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{
                    pathLength: shouldReduceMotion ? 1 : [0, 0.72, 1, 1],
                    opacity: shouldReduceMotion ? 0.18 : [0, index === 1 ? 0.2 : 0.36, 0.1],
                  }}
                  transition={{
                    duration: shouldReduceMotion ? 0.01 : 4.35,
                    delay: shouldReduceMotion ? 0 : 3.55 + index * 0.72,
                    ease: "easeInOut",
                    times: [0, 0.36, 0.66, 1],
                  }}
                />
              ))}
              {links.map((path, index) => (
                <motion.path
                  key={path}
                  d={path}
                  stroke="url(#loading-line-gold)"
                  strokeLinecap="round"
                  strokeWidth="1.05"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: shouldReduceMotion ? 0.24 : [0, 0.22, 0.34, 0.12, 0] }}
                  transition={{
                    duration: shouldReduceMotion ? 0.01 : 4.25,
                    delay: shouldReduceMotion ? 0 : 3.75 + index * 0.46,
                    ease: "easeInOut",
                    times: [0, 0.28, 0.58, 0.82, 1],
                  }}
                />
              ))}
              {particles.map((particle) => (
                <motion.circle
                  cx={particle.x}
                  cy={particle.y}
                  fill="#F0D58A"
                  key={particle.id}
                  r={particle.r}
                  initial={{ opacity: 0, scale: 0.35 }}
                  animate={{
                    opacity: shouldReduceMotion ? 0.25 : [0, 0.34, 0.74, 0.7, 0.3, 0],
                    scale: shouldReduceMotion ? 1 : [0.35, 0.82, 1.22, 0.98, 0.62, 0.34],
                    x: shouldReduceMotion
                      ? 0
                      : [0, particle.dx * 0.18, particle.dx * 0.1, 100 - particle.x, 100 - particle.x, 100 - particle.x],
                    y: shouldReduceMotion
                      ? 0
                      : [0, particle.dy * 0.18, particle.dy * 0.1, 90 - particle.y, 90 - particle.y, 90 - particle.y],
                  }}
                  transition={{
                    delay: shouldReduceMotion ? 0 : particle.delay + 0.25,
                    duration: shouldReduceMotion ? 0.01 : 4.25,
                    ease: "easeInOut",
                    times: [0, 0.18, 0.36, 0.58, 0.78, 1],
                  }}
                />
              ))}
              {dustParticles.map((particle) => (
                <motion.circle
                  cx={particle.x}
                  cy={particle.y}
                  fill="#F0D58A"
                  key={particle.id}
                  r={particle.r}
                  initial={{ opacity: 0, scale: 0.4 }}
                  animate={{
                    opacity: shouldReduceMotion ? 0.16 : [0, 0.16, 0.42, 0.28, 0.08],
                    scale: shouldReduceMotion ? 1 : [0.4, 0.8, 1.3, 1, 0.6],
                    x: shouldReduceMotion ? 0 : [0, 6, -4, 10],
                    y: shouldReduceMotion ? 0 : [0, -4, 5, -8],
                  }}
                  transition={{
                    delay: shouldReduceMotion ? 0 : particle.delay,
                    duration: shouldReduceMotion ? 0.01 : 6.2,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </svg>
          </motion.div>

          <motion.div
            className="relative z-10 flex w-full max-w-[92vw] flex-col items-center justify-center text-center"
            animate={
              shouldReduceMotion
                ? { opacity: 0 }
                : {
                    opacity: [1, 0.9, 0],
                    y: [0, -3, -9],
                  }
            }
            transition={{
              delay: shouldReduceMotion ? 0 : 13.05,
              duration: shouldReduceMotion ? 0.01 : 0.7,
              ease: "easeInOut",
              times: [0, 0.4, 1],
            }}
          >
            <div className="relative flex min-h-32 w-full flex-col items-center justify-center sm:min-h-40">
              <motion.div
                aria-hidden="true"
                className="absolute top-1/2 h-px w-[min(76vw,520px)] -translate-y-1/2 bg-gradient-to-r from-transparent via-lyken-gold/50 to-transparent"
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{
                  opacity: shouldReduceMotion ? 0.35 : [0, 0.34, 0.72, 0.22, 0],
                  scaleX: shouldReduceMotion ? 1 : [0, 0.28, 1.08, 0.96, 0.88],
                }}
                transition={{
                  delay: shouldReduceMotion ? 0 : 3.65,
                  duration: shouldReduceMotion ? 0.01 : 5.9,
                  ease: "easeInOut",
                  times: [0, 0.2, 0.46, 0.78, 1],
                }}
              />
              <motion.div
                aria-hidden="true"
                className="absolute top-1/2 h-16 w-[min(78vw,620px)] -translate-y-1/2 bg-gradient-to-r from-transparent via-lyken-gold/18 to-transparent blur-lg sm:h-20 sm:w-[min(82vw,620px)] sm:blur-xl"
                initial={{ opacity: 0, x: "-36%" }}
                animate={
                  shouldReduceMotion
                    ? { opacity: 0.16, x: "0%" }
                    : { opacity: [0, 0.18, 0.5, 0.2, 0], x: ["-36%", "-16%", "8%", "28%", "34%"] }
                }
                transition={{
                  delay: shouldReduceMotion ? 0 : 3.9,
                  duration: shouldReduceMotion ? 0.01 : 6.8,
                  ease: "easeInOut",
                  times: [0, 0.24, 0.58, 0.82, 1],
                }}
              />

              <svg
                aria-label="Lyken Agency"
                className="relative h-auto w-[min(92vw,760px)] overflow-visible sm:w-[min(88vw,760px)]"
                role="img"
                viewBox="0 0 900 220"
              >
                <defs>
                  <linearGradient id="brand-fill-gold" x1="165" x2="790" y1="44" y2="150">
                    <stop stopColor="#B8924F" />
                    <stop offset="0.48" stopColor="#D4B47A" />
                    <stop offset="1" stopColor="#9F7836" />
                  </linearGradient>
                  <filter id="brand-soft-glow" x="-20%" y="-40%" width="140%" height="180%">
                    <feGaussianBlur stdDeviation="2.2" result="blur" />
                    <feColorMatrix
                      in="blur"
                      type="matrix"
                      values="1 0 0 0 0.72 0 1 0 0 0.57 0 0 1 0 0.3 0 0 0 0.18 0"
                    />
                    <feMerge>
                      <feMergeNode />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                  <filter id="brand-sweep-glow" x="-30%" y="-80%" width="160%" height="260%">
                    <feGaussianBlur stdDeviation="2.1" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                <g filter="url(#brand-soft-glow)">
                  {letterEnergy.map((energy) => (
                    <motion.path
                      aria-hidden="true"
                      d={energy.path}
                      fill="none"
                      filter="url(#brand-sweep-glow)"
                      key={energy.id}
                      stroke="#F0D8A4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.45"
                      initial={{ opacity: 0, pathLength: 0 }}
                      animate={{
                        opacity: shouldReduceMotion ? 0 : [0, 0.88, 0.78, 0.18, 0],
                        pathLength: shouldReduceMotion ? 0 : [0, 0.74, 1, 1, 1],
                      }}
                      transition={{
                        delay: shouldReduceMotion ? 0 : energy.delay,
                        duration: shouldReduceMotion ? 0.01 : 4.4,
                        ease: "easeInOut",
                        times: [0, 0.38, 0.62, 0.86, 1],
                      }}
                    />
                  ))}
                  {logoSweeps.map((sweep) => (
                    <motion.path
                      aria-hidden="true"
                      d={sweep.d}
                      fill="none"
                      filter="url(#brand-sweep-glow)"
                      key={sweep.id}
                      stroke="#F0D8A4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={sweep.width}
                      initial={{ opacity: 0, pathLength: 0, pathOffset: 0 }}
                      animate={{
                        opacity: shouldReduceMotion ? 0 : [0, 0.7, 0.48, 0.12, 0],
                        pathLength: shouldReduceMotion ? 0 : [0, 0.22, 0.14, 0.08, 0],
                        pathOffset: shouldReduceMotion ? 0 : [0, 0.08, 0.4, 0.72, 1],
                      }}
                      transition={{
                        delay: shouldReduceMotion ? 0 : sweep.delay,
                        duration: shouldReduceMotion ? 0.01 : 1.45,
                        ease: "easeInOut",
                        times: [0, 0.22, 0.5, 0.78, 1],
                      }}
                    />
                  ))}
                  {electricFilaments.map((filament) => (
                    <motion.path
                      aria-hidden="true"
                      d={filament.d}
                      fill="none"
                      filter="url(#brand-sweep-glow)"
                      key={filament.id}
                      stroke="#FFE2A2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="0.9"
                      initial={{ opacity: 0, pathLength: 0 }}
                      animate={{
                        opacity: shouldReduceMotion ? 0 : [0, 0.9, 0.55, 0.12, 0],
                        pathLength: shouldReduceMotion ? 0 : [0, 0.86, 1, 1, 1],
                      }}
                      transition={{
                        delay: shouldReduceMotion ? 0 : filament.delay,
                        duration: shouldReduceMotion ? 0.01 : 3.3,
                        ease: "easeInOut",
                        times: [0, 0.42, 0.66, 0.88, 1],
                      }}
                    />
                  ))}
                  {activationNodes.map((node) => (
                    <motion.circle
                      aria-hidden="true"
                      cx={node.x}
                      cy={node.y}
                      fill="#F0D8A4"
                      filter="url(#brand-sweep-glow)"
                      key={node.id}
                      initial={{ opacity: 0, r: 2 }}
                      animate={{
                        opacity: shouldReduceMotion ? 0 : [0, 0.72, 0.2, 0],
                        r: shouldReduceMotion ? 1.4 : [1.4, 4.8, 7.5, 9],
                      }}
                      transition={{
                        delay: shouldReduceMotion ? 0 : node.delay,
                        duration: shouldReduceMotion ? 0.01 : 0.85,
                        ease: "easeOut",
                        times: [0, 0.24, 0.62, 1],
                      }}
                    />
                  ))}
                  {logoLetters.map((letter) => (
                    <motion.text
                      dominantBaseline="middle"
                      fill="url(#brand-fill-gold)"
                      fillOpacity="0"
                      fontFamily={logoFontFamily}
                      fontSize="126"
                      fontWeight="500"
                      initial={{ fillOpacity: 0, opacity: 0, strokeDashoffset: 520, strokeOpacity: 0 }}
                      key={letter.char}
                      letterSpacing="0"
                      stroke="#9F7836"
                      strokeDasharray="520"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeOpacity="0"
                      strokeWidth="1.45"
                      textAnchor="middle"
                      x={letter.x}
                      y="102"
                      animate={
                        shouldReduceMotion
                          ? { fillOpacity: 1, opacity: 1, strokeDashoffset: 0, strokeOpacity: 0 }
                          : {
                              fillOpacity: [0, 0, 0.08, 0.46, 1],
                              opacity: [0, 0.74, 0.92, 1, 1],
                              strokeDashoffset: [520, 230, 44, 0, 0],
                              strokeOpacity: [0, 0.58, 0.42, 0.12, 0],
                            }
                      }
                      transition={{
                        delay: shouldReduceMotion ? 0 : letter.delay,
                        duration: shouldReduceMotion ? 0.01 : 4.7,
                        ease: "easeInOut",
                        times: [0, 0.34, 0.62, 0.84, 1],
                      }}
                    >
                      {letter.char}
                    </motion.text>
                  ))}
                </g>
              </svg>

              <motion.span
                className="-mt-1 font-sans text-[clamp(0.78rem,2.4vw,1.05rem)] font-medium uppercase tracking-[0.36em] text-lyken-text-muted"
                initial={{ opacity: 0, y: 12, scale: 0.985 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ ...transition, delay: shouldReduceMotion ? 0 : 9.75, duration: 0.75 }}
              >
                Agency
              </motion.span>
            </div>

            <div className="relative mt-7 h-20 w-full max-w-[36rem] overflow-hidden px-3 sm:mt-8 sm:h-14 sm:px-0">
              {resolvedStages.map((stage) => (
                <motion.p
                  className="absolute inset-x-0 top-0 text-balance font-display text-[clamp(1.08rem,5.2vw,1.8rem)] leading-snug tracking-normal text-lyken-text drop-shadow-[0_0_18px_rgb(212_180_122_/_0.16)]"
                  key={stage.id}
                  initial={{ opacity: 0, y: 14 }}
                  animate={
                    shouldReduceMotion
                      ? { opacity: stage.id === "brand" ? 1 : 0, y: 0 }
                      : stage.id === "brand"
                        ? {
                            opacity: [0, 1, 1],
                            y: [14, 0, 0],
                          }
                        : {
                            opacity: [0, 1, 1, 0],
                            y: [14, 0, 0, -10],
                          }
                  }
                  transition={{
                    delay: shouldReduceMotion ? 0 : stage.start,
                    duration: shouldReduceMotion ? 0.01 : stage.end - stage.start,
                    ease: "easeInOut",
                    times: stage.id === "brand" ? [0, 0.18, 1] : [0, 0.18, 0.82, 1],
                  }}
                >
                  {stage.text}
                </motion.p>
              ))}
            </div>

            <motion.div
              aria-hidden="true"
              className="mt-5 h-px w-28 bg-gradient-to-r from-transparent via-lyken-gold/60 to-transparent"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ ...transition, delay: shouldReduceMotion ? 0 : 12.12, duration: 0.75 }}
            />
          </motion.div>

          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 z-30 h-px w-[min(92vw,980px)] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-[#FFE2A2] to-transparent shadow-[0_0_48px_rgb(240_216_164_/_0.86)]"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={
              shouldReduceMotion
                ? { opacity: 0, scaleX: 0 }
                : {
                    opacity: [0, 1, 0.95, 0],
                    scaleX: [0, 0.34, 1, 1],
                  }
            }
            transition={{
              delay: shouldReduceMotion ? 0 : 13.05,
              duration: shouldReduceMotion ? 0.01 : 1.45,
              ease: [0.76, 0, 0.24, 1],
              times: [0, 0.24, 0.68, 1],
            }}
          />
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 z-20 h-28 w-[min(96vw,1080px)] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(ellipse,rgb(240_216_164_/_0.38),rgb(212_180_122_/_0.17)_34%,transparent_72%)] blur-2xl"
            initial={{ opacity: 0, scaleX: 0.1 }}
            animate={
              shouldReduceMotion
                ? { opacity: 0, scaleX: 0.1 }
                : {
                    opacity: [0, 0.82, 0.3, 0],
                    scaleX: [0.1, 0.78, 1.12, 1.22],
                  }
            }
            transition={{
              delay: shouldReduceMotion ? 0 : 13,
              duration: shouldReduceMotion ? 0.01 : 1.5,
              ease: [0.76, 0, 0.24, 1],
              times: [0, 0.28, 0.7, 1],
            }}
          />
        </motion.section>
      ) : null}
    </AnimatePresence>
  )
}

export default LoadingExperience
