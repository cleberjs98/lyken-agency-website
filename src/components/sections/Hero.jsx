import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion"
import { useEffect, useState } from "react"

import Button from "../common/Button"
import Container from "../common/Container"
import SectionLabel from "../common/SectionLabel"
import AnimatedLine from "../motion/AnimatedLine"

const neuralNodes = [
  { id: "n1", x: 566, y: 122, r: 1.15, delay: 0.1 },
  { id: "n2", x: 642, y: 82, r: 1.35, delay: 0.45 },
  { id: "n3", x: 724, y: 126, r: 1.2, delay: 0.8 },
  { id: "n4", x: 812, y: 86, r: 1.5, delay: 1.15 },
  { id: "n5", x: 914, y: 142, r: 1.35, delay: 1.5 },
  { id: "n6", x: 612, y: 226, r: 1.25, delay: 1.85 },
  { id: "n7", x: 704, y: 244, r: 1.65, delay: 2.2 },
  { id: "n8", x: 792, y: 214, r: 1.25, delay: 2.55 },
  { id: "n9", x: 884, y: 260, r: 1.7, delay: 2.9 },
  { id: "n10", x: 968, y: 222, r: 1.15, delay: 3.25 },
  { id: "n11", x: 552, y: 348, r: 1.05, delay: 3.6 },
  { id: "n12", x: 652, y: 330, r: 1.55, delay: 3.95 },
  { id: "n13", x: 746, y: 374, r: 1.25, delay: 4.3 },
  { id: "n14", x: 840, y: 334, r: 1.55, delay: 4.65 },
  { id: "n15", x: 940, y: 386, r: 1.3, delay: 5 },
  { id: "n16", x: 594, y: 488, r: 1.25, delay: 5.35 },
  { id: "n17", x: 690, y: 454, r: 1.5, delay: 5.7 },
  { id: "n18", x: 790, y: 504, r: 1.35, delay: 6.05 },
  { id: "n19", x: 894, y: 468, r: 1.65, delay: 6.4 },
  { id: "n20", x: 982, y: 530, r: 1.15, delay: 6.75 },
]

const neuralConnections = [
  { id: "c1", d: "M566 122 C594 94 614 96 642 82", delay: 0.2 },
  { id: "c2", d: "M642 82 C676 96 696 116 724 126", delay: 0.55 },
  { id: "c3", d: "M724 126 C756 94 782 90 812 86", delay: 0.9 },
  { id: "c4", d: "M812 86 C850 106 878 126 914 142", delay: 1.25 },
  { id: "c5", d: "M566 122 C590 164 600 190 612 226", delay: 1.6 },
  { id: "c6", d: "M642 82 C664 144 684 194 704 244", delay: 1.95 },
  { id: "c7", d: "M724 126 C744 162 766 190 792 214", delay: 2.3 },
  { id: "c8", d: "M812 86 C836 150 860 206 884 260", delay: 2.65 },
  { id: "c9", d: "M914 142 C940 164 956 192 968 222", delay: 3 },
  { id: "c10", d: "M612 226 C642 236 674 238 704 244", delay: 3.35 },
  { id: "c11", d: "M704 244 C736 226 762 218 792 214", delay: 3.7 },
  { id: "c12", d: "M792 214 C824 224 852 242 884 260", delay: 4.05 },
  { id: "c13", d: "M884 260 C910 244 940 230 968 222", delay: 4.4 },
  { id: "c14", d: "M612 226 C590 274 570 318 552 348", delay: 4.75 },
  { id: "c15", d: "M704 244 C682 276 666 304 652 330", delay: 5.1 },
  { id: "c16", d: "M792 214 C772 270 758 326 746 374", delay: 5.45 },
  { id: "c17", d: "M884 260 C864 292 852 316 840 334", delay: 5.8 },
  { id: "c18", d: "M968 222 C958 284 948 336 940 386", delay: 6.15 },
  { id: "c19", d: "M552 348 C586 334 618 330 652 330", delay: 6.5 },
  { id: "c20", d: "M652 330 C684 348 716 366 746 374", delay: 6.85 },
  { id: "c21", d: "M746 374 C776 350 808 340 840 334", delay: 7.2 },
  { id: "c22", d: "M840 334 C872 354 906 374 940 386", delay: 7.55 },
  { id: "c23", d: "M552 348 C568 402 582 454 594 488", delay: 7.9 },
  { id: "c24", d: "M652 330 C664 382 676 424 690 454", delay: 8.25 },
  { id: "c25", d: "M746 374 C760 420 776 470 790 504", delay: 8.6 },
  { id: "c26", d: "M840 334 C856 386 876 430 894 468", delay: 8.95 },
  { id: "c27", d: "M940 386 C952 440 968 494 982 530", delay: 9.3 },
  { id: "c28", d: "M594 488 C626 468 658 460 690 454", delay: 9.65 },
  { id: "c29", d: "M690 454 C724 476 756 494 790 504", delay: 10 },
  { id: "c30", d: "M790 504 C828 480 860 470 894 468", delay: 10.35 },
  { id: "c31", d: "M894 468 C926 486 956 512 982 530", delay: 10.7 },
  { id: "c32", d: "M652 330 C708 286 772 256 840 334", delay: 11.05 },
  { id: "c33", d: "M612 226 C674 170 754 150 884 260", delay: 11.4 },
  { id: "c34", d: "M594 488 C668 400 756 366 894 468", delay: 11.75 },
  { id: "c35", d: "M704 244 C772 330 836 390 982 530", delay: 12.1 },
  { id: "c36", d: "M566 122 C626 176 646 244 652 330", delay: 0.7 },
  { id: "c37", d: "M642 82 C720 170 794 218 940 386", delay: 2.15 },
  { id: "c38", d: "M724 126 C694 210 642 276 594 488", delay: 3.65 },
  { id: "c39", d: "M812 86 C790 182 766 286 746 374", delay: 1.35 },
  { id: "c40", d: "M914 142 C858 214 804 278 746 374", delay: 4.25 },
  { id: "c41", d: "M612 226 C690 290 760 330 840 334", delay: 0.25 },
  { id: "c42", d: "M704 244 C650 318 626 396 690 454", delay: 5.45 },
  { id: "c43", d: "M792 214 C846 302 886 386 894 468", delay: 2.8 },
  { id: "c44", d: "M884 260 C802 318 728 384 690 454", delay: 6.35 },
  { id: "c45", d: "M968 222 C886 292 832 374 790 504", delay: 3.2 },
  { id: "c46", d: "M552 348 C632 392 716 434 790 504", delay: 1.85 },
  { id: "c47", d: "M652 330 C744 366 834 414 982 530", delay: 4.75 },
  { id: "c48", d: "M746 374 C680 388 632 426 594 488", delay: 6.9 },
  { id: "c49", d: "M840 334 C774 402 738 444 690 454", delay: 0.95 },
  { id: "c50", d: "M940 386 C872 398 826 442 790 504", delay: 5.95 },
  { id: "c51", d: "M594 488 C686 520 818 524 982 530", delay: 2.45 },
  { id: "c52", d: "M690 454 C750 392 814 344 884 260", delay: 7.25 },
  { id: "c53", d: "M790 504 C748 430 724 340 704 244", delay: 3.95 },
  { id: "c54", d: "M894 468 C854 374 826 286 812 86", delay: 1.55 },
  { id: "c55", d: "M982 530 C944 420 932 282 914 142", delay: 6.65 },
  { id: "c56", d: "M566 122 C706 88 834 114 968 222", delay: 4.55 },
]

const heroDust = [
  { id: "h1", x: 518, y: 118, r: 0.8, delay: 0.4 },
  { id: "h2", x: 628, y: 68, r: 0.6, delay: 1.2 },
  { id: "h3", x: 718, y: 188, r: 0.9, delay: 1.9 },
  { id: "h4", x: 870, y: 96, r: 0.7, delay: 2.6 },
  { id: "h5", x: 940, y: 272, r: 0.8, delay: 3.3 },
  { id: "h6", x: 616, y: 438, r: 0.7, delay: 4 },
  { id: "h7", x: 760, y: 410, r: 0.95, delay: 4.8 },
  { id: "h8", x: 902, y: 522, r: 0.65, delay: 5.5 },
  { id: "h9", x: 452, y: 296, r: 0.55, delay: 6.2 },
  { id: "h10", x: 690, y: 324, r: 0.75, delay: 6.9 },
]

function supportsFinePointer() {
  if (typeof window === "undefined") {
    return false
  }

  return window.matchMedia("(hover: hover) and (pointer: fine)").matches
}

function useCompactViewport() {
  const [isCompactViewport, setIsCompactViewport] = useState(false)

  useEffect(() => {
    if (typeof window === "undefined") {
      return undefined
    }

    const mediaQuery = window.matchMedia("(max-width: 767px)")
    const updateViewport = () => {
      setIsCompactViewport(mediaQuery.matches)
    }

    updateViewport()
    mediaQuery.addEventListener("change", updateViewport)

    return () => {
      mediaQuery.removeEventListener("change", updateViewport)
    }
  }, [])

  return isCompactViewport
}

function Hero({ content }) {
  const hero = content.hero
  const shouldReduceMotion = useReducedMotion()
  const [hasMouseInteraction, setHasMouseInteraction] = useState(supportsFinePointer)
  const isCompactViewport = useCompactViewport()
  const pointerX = useMotionValue(0)
  const pointerY = useMotionValue(0)
  const canUseMouseInteraction = hasMouseInteraction && !shouldReduceMotion
  const canUseAmbientMotion = !shouldReduceMotion && !isCompactViewport

  const glowX = useSpring(useTransform(pointerX, [-0.5, 0.5], [-36, 36]), {
    damping: 34,
    stiffness: 80,
  })
  const glowY = useSpring(useTransform(pointerY, [-0.5, 0.5], [-28, 28]), {
    damping: 34,
    stiffness: 80,
  })
  const neuralX = useSpring(useTransform(pointerX, [-0.5, 0.5], [6, -6]), {
    damping: 32,
    stiffness: 70,
  })
  const neuralY = useSpring(useTransform(pointerY, [-0.5, 0.5], [-5, 5]), {
    damping: 32,
    stiffness: 70,
  })

  const revealTransition = shouldReduceMotion
    ? { duration: 0.01 }
    : { duration: 0.92, ease: [0.22, 1, 0.36, 1] }

  useEffect(() => {
    if (shouldReduceMotion || typeof window === "undefined") {
      return undefined
    }

    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)")
    const updateInteractionState = () => {
      setHasMouseInteraction(mediaQuery.matches)
    }

    mediaQuery.addEventListener("change", updateInteractionState)

    return () => {
      mediaQuery.removeEventListener("change", updateInteractionState)
    }
  }, [shouldReduceMotion])

  const handlePointerMove = (event) => {
    if (!canUseMouseInteraction) {
      return
    }

    const bounds = event.currentTarget.getBoundingClientRect()
    pointerX.set((event.clientX - bounds.left) / bounds.width - 0.5)
    pointerY.set((event.clientY - bounds.top) / bounds.height - 0.5)
  }

  const resetPointer = () => {
    pointerX.set(0)
    pointerY.set(0)
  }

  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate min-h-[calc(100vh-5rem)] min-h-[calc(100svh-5rem)] overflow-hidden bg-[#0B1F1A] text-lyken-text"
      id="hero"
      onPointerLeave={canUseMouseInteraction ? resetPointer : undefined}
      onPointerMove={canUseMouseInteraction ? handlePointerMove : undefined}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_24%,rgb(212_180_122_/_0.12),transparent_23rem),radial-gradient(circle_at_86%_34%,rgb(22_76_63_/_0.34),transparent_30rem),linear-gradient(145deg,rgb(16_54_46_/_0.26),transparent_38%),linear-gradient(180deg,rgb(11_31_26_/_0.72),#0B1F1A_78%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-45 [background-image:repeating-linear-gradient(135deg,rgb(244_239_227_/_0.02)_0,rgb(244_239_227_/_0.02)_1px,transparent_1px,transparent_6px)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#0B1F1A]/55 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgb(4_12_10_/_0.5),rgb(11_31_26_/_0.26)_42%,transparent_74%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0,rgb(4_12_10_/_0.18)_54%,rgb(4_12_10_/_0.7)_100%)]"
      />

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[42%] h-[min(72vw,520px)] w-[min(72vw,520px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgb(212_180_122_/_0.16),rgb(184_146_79_/_0.07)_34%,transparent_70%)] blur-3xl"
        animate={
          !canUseAmbientMotion
            ? { opacity: 0.2 }
            : { opacity: [0.18, 0.34, 0.22], scale: [1, 1.08, 1] }
        }
        style={{
          x: canUseMouseInteraction ? glowX : 0,
          y: canUseMouseInteraction ? glowY : 0,
        }}
        transition={{ duration: 12, ease: "easeInOut", repeat: Infinity }}
      />

      <motion.svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1] h-full w-full max-w-full opacity-30 [mask-image:linear-gradient(90deg,transparent_0%,transparent_44%,rgb(0_0_0_/_0.13)_66%,black_90%,black_100%)] sm:opacity-65 md:opacity-80 md:[mask-image:linear-gradient(90deg,transparent_0%,transparent_26%,rgb(0_0_0_/_0.18)_44%,black_66%,black_100%)]"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 1024 640"
        style={{
          x: canUseMouseInteraction ? neuralX : 0,
          y: canUseMouseInteraction ? neuralY : 0,
        }}
      >
        <defs>
          <linearGradient id="hero-neural-gold" x1="450" x2="980" y1="90" y2="520">
            <stop stopColor="#D4B47A" stopOpacity="0" />
            <stop offset="0.38" stopColor="#F0D8A4" stopOpacity="0.24" />
            <stop offset="0.72" stopColor="#D4B47A" stopOpacity="0.16" />
            <stop offset="1" stopColor="#B8924F" stopOpacity="0" />
          </linearGradient>
          <filter id="hero-neural-glow" x="-18%" y="-60%" width="136%" height="220%">
            <feGaussianBlur stdDeviation="0.8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {neuralConnections.map((connection, index) => (
          <motion.path
            d={connection.d}
            key={connection.id}
            stroke="url(#hero-neural-gold)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.58"
            initial={{
              opacity: shouldReduceMotion ? 0.13 : 0,
              pathLength: shouldReduceMotion ? 1 : 0,
            }}
            animate={
              !canUseAmbientMotion
                ? { opacity: 0.13, pathLength: 1 }
                : {
                    opacity: [0, 0.12, 0.24, 0.2, 0],
                    pathLength: [0, 0.34, 0.88, 1, 1],
                  }
            }
            transition={{
              delay: canUseAmbientMotion ? connection.delay % 5.2 : 0,
              duration: canUseAmbientMotion ? 8.4 + (index % 4) * 0.85 : 0.01,
              ease: "easeInOut",
              repeat: canUseAmbientMotion ? Infinity : 0,
              repeatDelay: 1.2 + (index % 6) * 0.55,
              times: [0, 0.18, 0.46, 0.74, 1],
            }}
          />
        ))}

        {neuralConnections
          .filter((_, index) => index % 3 === 1)
          .map((connection, index) => (
            <motion.path
              d={connection.d}
              filter="url(#hero-neural-glow)"
              key={`${connection.id}-active`}
              stroke="#F0D8A4"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="0.82"
              initial={{
                opacity: 0,
                pathLength: shouldReduceMotion ? 1 : 0,
              }}
              animate={
                !canUseAmbientMotion
                  ? { opacity: 0, pathLength: 1 }
                  : {
                      opacity: [0, 0.24, 0.16, 0],
                      pathLength: [0, 0.72, 1, 1],
                    }
              }
              transition={{
                delay: canUseAmbientMotion ? (connection.delay % 5.2) + 0.65 : 0,
                duration: canUseAmbientMotion ? 5.8 + (index % 3) * 0.8 : 0.01,
                ease: "easeInOut",
                repeat: canUseAmbientMotion ? Infinity : 0,
                repeatDelay: 4.6 + (index % 5) * 0.7,
                times: [0, 0.44, 0.7, 1],
              }}
            />
          ))}

        {neuralNodes.map((node, index) => (
          <motion.circle
            cx={node.x}
            cy={node.y}
            fill="#F0D8A4"
            filter="url(#hero-neural-glow)"
            key={node.id}
            r={node.r}
            initial={{ opacity: shouldReduceMotion ? 0.18 : 0, scale: 0.7 }}
            animate={
              !canUseAmbientMotion
                ? { opacity: 0.18, scale: 1 }
                : {
                    opacity: [0, 0.28, 0.44, 0.24, 0],
                    scale: [0.7, 1, 1.18, 0.96, 0.72],
                  }
            }
            transition={{
              delay: canUseAmbientMotion ? node.delay % 5.2 : 0,
              duration: canUseAmbientMotion ? 8.8 + (index % 4) * 0.75 : 0.01,
              ease: "easeInOut",
              repeat: canUseAmbientMotion ? Infinity : 0,
              repeatDelay: 1.4 + (index % 5) * 0.6,
              times: [0, 0.18, 0.42, 0.72, 1],
            }}
          />
        ))}

        {heroDust.map((particle) => (
          <motion.circle
            className="hidden sm:block"
            cx={particle.x}
            cy={particle.y}
            fill="#D4B47A"
            key={particle.id}
            r={particle.r}
            initial={{ opacity: shouldReduceMotion ? 0.14 : 0, scale: 0.7 }}
            animate={
              !canUseAmbientMotion
                ? { opacity: 0.12, scale: 1 }
                : {
                    opacity: [0, 0.34, 0.14, 0],
                    scale: [0.7, 1.35, 0.95, 0.7],
                    y: [0, -5, 2, 0],
                  }
            }
            transition={{
              delay: canUseAmbientMotion ? particle.delay : 0,
              duration: canUseAmbientMotion ? 7.6 : 0.01,
              ease: "easeInOut",
              repeat: canUseAmbientMotion ? Infinity : 0,
              repeatDelay: 2.4,
            }}
          />
        ))}
      </motion.svg>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[2] bg-[linear-gradient(90deg,rgb(11_31_26_/_0.72),rgb(11_31_26_/_0.48)_34%,transparent_64%)]"
      />

      <Container className="relative z-10 flex min-h-[calc(100vh-5rem)] min-h-[calc(100svh-5rem)] flex-col justify-center py-12 pb-9 pt-16 sm:py-20 md:py-24 lg:py-28">
        <div className="lyken-editorial-grid items-center lg:min-h-[58vh]">
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="min-w-0 md:col-span-6 lg:col-span-8 xl:col-span-7"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
            transition={revealTransition}
          >
            <SectionLabel>{hero.concept}</SectionLabel>
            <h1
              className="mt-5 max-w-full text-wrap font-display text-[clamp(2.25rem,10.5vw,4.35rem)] font-medium leading-[1.04] tracking-normal text-lyken-text drop-shadow-[0_8px_32px_rgb(0_0_0_/_0.24)] [overflow-wrap:break-word] sm:max-w-5xl sm:text-[clamp(4rem,10vw,6.2rem)] sm:leading-[0.98] lg:text-[clamp(5.4rem,8.4vw,7.35rem)] xl:max-w-[62rem]"
              id="hero-title"
            >
              {hero.headline}
            </h1>
          </motion.div>

          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="min-w-0 md:col-span-5 lg:col-span-4 lg:col-start-9 lg:pt-32 xl:col-start-8 xl:col-span-5"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            transition={{ ...revealTransition, delay: shouldReduceMotion ? 0 : 0.16 }}
          >
            <p className="max-w-[35rem] font-sans text-base leading-7 text-lyken-text-muted drop-shadow-[0_6px_24px_rgb(0_0_0_/_0.22)] sm:text-[clamp(1rem,1.35vw,1.14rem)] sm:leading-8">
              {hero.subheadline}
            </p>
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              className="mt-7 flex max-w-full flex-col gap-3 sm:mt-8 sm:flex-row lg:flex-col xl:flex-row"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
              transition={{ ...revealTransition, delay: shouldReduceMotion ? 0 : 0.3 }}
            >
              <Button className="w-full sm:w-auto" href={hero.primaryCta.href}>
                {hero.primaryCta.label}
              </Button>
              <Button
                className="w-full sm:w-auto"
                href={hero.secondaryCta.href}
                variant="secondary"
              >
                {hero.secondaryCta.label}
              </Button>
            </motion.div>
          </motion.div>
        </div>

        <AnimatedLine className="mt-12 md:mt-16" delay={shouldReduceMotion ? 0 : 0.42} />

        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col gap-5 pt-5 md:flex-row md:items-end md:justify-between"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
          transition={{ ...revealTransition, delay: shouldReduceMotion ? 0 : 0.48 }}
        >
          <p className="lyken-text-button text-lyken-gold">{hero.tagline}</p>
          <div className="flex flex-col gap-4 md:items-end">
            <p className="max-w-xl text-xs leading-6 text-lyken-text-soft/60 md:text-right">
              {hero.narrative}
            </p>
            <motion.div
              aria-hidden="true"
              className="hidden items-center gap-3 text-lyken-gold/70 md:flex"
              initial={shouldReduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ...revealTransition, delay: shouldReduceMotion ? 0 : 0.62 }}
            >
              <span className="h-12 w-px overflow-hidden bg-lyken-gold-line-20">
                <motion.span
                  className="block h-4 w-px bg-lyken-gold"
                  animate={shouldReduceMotion ? undefined : { y: [0, 32, 0] }}
                  transition={{ duration: 2.4, ease: "easeInOut", repeat: Infinity }}
                />
              </span>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}

export default Hero
