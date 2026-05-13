import { motion, useReducedMotion } from "framer-motion"

import { motionDurations, motionEasings } from "../../utils/motionTokens"

const meshPaths = [
  "M10 112 C70 66 126 82 176 42 C236 -4 304 32 366 6",
  "M-18 178 C54 112 122 168 190 104 C246 52 304 72 378 36",
  "M22 250 C88 186 142 238 208 170 C270 106 326 134 398 82",
  "M60 24 C96 86 108 146 126 214 C144 278 190 318 238 354",
  "M190 8 C210 74 212 136 230 206 C248 276 304 314 364 348",
]

const meshNodes = [
  [54, 82],
  [126, 108],
  [190, 104],
  [252, 70],
  [316, 134],
  [96, 206],
  [208, 170],
  [286, 226],
]

function DigitalMesh({ className = "", intensity = "subtle" }) {
  const shouldReduceMotion = useReducedMotion()
  const opacity = intensity === "strong" ? "opacity-35" : "opacity-20"

  return (
    <motion.div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${opacity} ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: shouldReduceMotion ? 0.18 : undefined }}
      whileInView={shouldReduceMotion ? undefined : { opacity: intensity === "strong" ? 0.35 : 0.22 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: motionEasings.easeOut }}
    >
      <motion.svg
        className="absolute -right-24 top-10 h-[34rem] w-[42rem] max-w-none sm:-right-20 lg:right-0"
        fill="none"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 400 360"
        animate={
          shouldReduceMotion
            ? undefined
            : {
                x: [0, -8, 0],
                y: [0, 6, 0],
                scale: [1, 1.025, 1],
              }
        }
        transition={{
          duration: motionDurations.mesh,
          ease: "easeInOut",
          repeat: shouldReduceMotion ? 0 : Infinity,
        }}
      >
        <defs>
          <linearGradient id="digital-mesh-gold" x1="0" x2="400" y1="40" y2="320">
            <stop stopColor="#D4B47A" stopOpacity="0" />
            <stop offset="0.42" stopColor="#D4B47A" stopOpacity="0.48" />
            <stop offset="0.76" stopColor="#164C3F" stopOpacity="0.34" />
            <stop offset="1" stopColor="#B8924F" stopOpacity="0" />
          </linearGradient>
        </defs>

        {meshPaths.map((path, index) => (
          <motion.path
            d={path}
            key={path}
            stroke="url(#digital-mesh-gold)"
            strokeLinecap="round"
            strokeWidth="0.8"
            initial={{ opacity: shouldReduceMotion ? 0.35 : 0, pathLength: shouldReduceMotion ? 1 : 0 }}
            whileInView={{ opacity: 0.42, pathLength: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              delay: shouldReduceMotion ? 0 : index * 0.12,
              duration: shouldReduceMotion ? 0.01 : 1.4,
              ease: motionEasings.easeInOut,
            }}
          />
        ))}

        {meshNodes.map(([cx, cy], index) => (
          <motion.circle
            cx={cx}
            cy={cy}
            fill="#D4B47A"
            key={`${cx}-${cy}`}
            r={index % 3 === 0 ? 2.2 : 1.6}
            animate={
              shouldReduceMotion
                ? { opacity: 0.28, scale: 1 }
                : { opacity: [0.22, 0.58, 0.3], scale: [1, 1.18, 1] }
            }
            transition={{
              delay: index * 0.16,
              duration: 5.8 + index * 0.22,
              ease: "easeInOut",
              repeat: shouldReduceMotion ? 0 : Infinity,
            }}
          />
        ))}
      </motion.svg>
    </motion.div>
  )
}

export default DigitalMesh
