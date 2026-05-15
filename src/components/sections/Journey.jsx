import { motion, useReducedMotion } from "framer-motion"
import { useEffect, useState } from "react"

import Container from "../common/Container"
import SectionLabel from "../common/SectionLabel"
import SectionTitle from "../common/SectionTitle"
import goldDigitalMesh from "../../assets/mesh/gold-digital-mesh.svg"
import { motionDurations, motionEasings } from "../../utils/motionTokens"
import AnimatedLine from "../motion/AnimatedLine"

const stageVisuals = {
  spark: SparkVisual,
  structure: StructureVisual,
  identity: IdentityVisual,
  "digital-presence": DigitalPresenceVisual,
  intelligence: IntelligenceVisual,
  growth: GrowthVisual,
}

function getReveal(shouldReduceMotion, delay = 0) {
  if (shouldReduceMotion) {
    return {
      initial: false,
      whileInView: { opacity: 1 },
      transition: { duration: 0.01 },
    }
  }

  return {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    transition: { delay, duration: motionDurations.medium, ease: motionEasings.easeOut },
  }
}

function Journey({ content }) {
  const journey = content.journey
  const shouldReduceMotion = useReducedMotion()
  const isCompactViewport = useCompactViewport()
  const canUseAmbientMotion = !shouldReduceMotion && !isCompactViewport

  return (
    <section
      aria-labelledby="journey-title"
      className="relative isolate overflow-hidden border-t border-lyken-gold-line-20 bg-lyken-deep"
      id="about"
    >
      <span
        aria-hidden="true"
        className="absolute -top-24"
        id={journey.id}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_10%,rgb(212_180_122_/_0.08),transparent_24rem),radial-gradient(circle_at_82%_42%,rgb(22_76_63_/_0.24),transparent_34rem),linear-gradient(180deg,rgb(11_31_26_/_0.42),#0B1F1A_72%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-40 [background-image:repeating-linear-gradient(135deg,rgb(244_239_227_/_0.018)_0,rgb(244_239_227_/_0.018)_1px,transparent_1px,transparent_7px)]"
      />
      <AnimatedLine className="absolute left-5 right-5 top-0 z-10 md:left-8 md:right-8 lg:left-12 lg:right-12" />

      <Container className="lyken-section-space relative z-10">
        <div className="lyken-editorial-grid items-end gap-y-8">
          <motion.div
            className="md:col-span-6 lg:col-span-7"
            viewport={{ once: true, margin: "-80px" }}
            {...getReveal(shouldReduceMotion)}
          >
            <SectionLabel>{journey.sectionLabel}</SectionLabel>
            <SectionTitle className="mt-4" id="journey-title">
              {journey.title}
            </SectionTitle>
          </motion.div>
          <motion.p
            className="lyken-text-body md:col-span-5 lg:col-span-4 lg:col-start-9"
            viewport={{ once: true, margin: "-80px" }}
            {...getReveal(shouldReduceMotion, 0.12)}
          >
            {journey.intro}
          </motion.p>
        </div>

        <div className="relative mt-16 grid max-w-full gap-14 pl-8 sm:pl-10 lg:mt-24 lg:gap-24 lg:pl-0">
          <motion.span
            aria-hidden="true"
            className="absolute bottom-10 left-3 top-0 w-px origin-top bg-gradient-to-b from-lyken-gold/0 via-lyken-gold/45 to-lyken-gold/0 sm:left-4 lg:left-1/2"
            initial={shouldReduceMotion ? false : { scaleY: 0, opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            viewport={{ once: true, margin: "-80px" }}
            whileInView={{ scaleY: 1, opacity: 1 }}
          />

          {journey.stages.map((stage, index) => {
            const Visual = stageVisuals[stage.id] ?? SparkVisual
            const isReversed = index % 2 === 1
            // visualConcept is internal documentation metadata for visual maintenance.
            // It is intentionally not rendered as user-facing copy.

            return (
              <article
                className="relative grid max-w-full items-center gap-8 lg:grid-cols-12 lg:gap-12"
                id={stage.id}
                key={stage.id}
              >
                <span
                  aria-hidden="true"
                  className="absolute -left-[1.9rem] top-3 flex h-7 w-7 items-center justify-center border border-lyken-gold-line-30 bg-lyken-deep text-[0.62rem] font-semibold text-lyken-gold sm:-left-[2.15rem] lg:left-1/2 lg:-translate-x-1/2"
                >
                  {String(stage.order).padStart(2, "0")}
                </span>

                <motion.div
                  className={`lg:col-span-6 ${isReversed ? "lg:order-2 lg:col-start-7" : ""}`}
                  viewport={{ once: true, margin: "-80px" }}
                  {...getReveal(shouldReduceMotion)}
                >
                  <Visual
                    canUseAmbientMotion={canUseAmbientMotion}
                    continueCta={journey.continueCta}
                    shouldReduceMotion={shouldReduceMotion}
                    stage={stage}
                  />
                </motion.div>

                <motion.div
                  className={`lg:col-span-5 ${isReversed ? "lg:order-1 lg:col-start-1" : "lg:col-start-8"}`}
                  viewport={{ once: true, margin: "-80px" }}
                  {...getReveal(shouldReduceMotion, 0.1)}
                >
                  <p className="lyken-text-eyebrow text-lyken-gold">{stage.eyebrow}</p>
                  <h3 className="mt-4 max-w-3xl font-display text-[clamp(2rem,5vw,4rem)] leading-[1.05] tracking-normal text-lyken-text">
                    {stage.title}
                  </h3>
                  <p className="mt-5 max-w-xl text-base leading-8 text-lyken-text-muted">
                    {stage.description}
                  </p>
                  <ul
                    aria-label={stage.label}
                    className="mt-8 flex max-w-full flex-wrap gap-3"
                  >
                    {stage.keywords.slice(0, 3).map((keyword) => (
                      <li
                        className="max-w-full border border-lyken-gold-line-20 bg-lyken-emerald/35 px-3 py-2 text-[0.68rem] font-medium uppercase leading-snug tracking-[0.12em] text-lyken-text-muted sm:px-4 sm:text-xs sm:tracking-[0.16em]"
                        key={keyword}
                      >
                        {keyword}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </article>
            )
          })}
        </div>
      </Container>
    </section>
  )
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

function SparkVisual({ canUseAmbientMotion, shouldReduceMotion }) {
  return (
    <div className="relative min-h-[16rem] overflow-hidden border border-lyken-gold-line-20 bg-[#0B1F1A] sm:min-h-[26rem] lg:min-h-[32rem]">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgb(212_180_122_/_0.06),transparent_13rem),radial-gradient(circle_at_18%_82%,rgb(22_76_63_/_0.18),transparent_18rem)]"
      />
      <motion.span
        aria-hidden="true"
        animate={
          !canUseAmbientMotion
            ? { opacity: 1, scale: 1 }
            : { opacity: [0.62, 1, 0.7], scale: [1, 1.16, 1] }
        }
        className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-lyken-gold shadow-[0_0_34px_rgb(212_180_122_/_0.48)]"
        initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.55 }}
        transition={{ duration: 4.8, ease: "easeInOut", repeat: canUseAmbientMotion ? Infinity : 0 }}
      />
      <motion.span
        aria-hidden="true"
        animate={canUseAmbientMotion ? { opacity: [0.12, 0.28, 0.12], scale: [1, 1.24, 1] } : undefined}
        className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-lyken-gold/20"
        transition={{ duration: 5.8, ease: "easeInOut", repeat: canUseAmbientMotion ? Infinity : 0 }}
      />
    </div>
  )
}

function StructureVisual({ shouldReduceMotion }) {
  const modules = [
    "col-span-3 row-span-2",
    "col-span-2",
    "col-span-3",
    "col-span-2 row-span-2",
    "col-span-3",
    "col-span-2",
  ]

  return (
    <div className="relative min-h-[18rem] overflow-hidden border border-lyken-gold-line-20 bg-lyken-emerald/35 p-5 sm:min-h-[28rem] sm:p-8">
      <svg
        aria-hidden="true"
        className="absolute inset-0 h-full w-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 560 420"
      >
        <motion.path
          d="M70 100 H246 V194 H420 M136 314 H306 V242 H490"
          initial={shouldReduceMotion ? false : { pathLength: 0, opacity: 0 }}
          stroke="#D4B47A"
          strokeOpacity="0.32"
          strokeWidth="1"
          transition={{ duration: 1.4, ease: "easeInOut" }}
          viewport={{ once: true }}
          whileInView={{ pathLength: 1, opacity: 1 }}
        />
        {[70, 246, 420, 136, 306, 490].map((cx, index) => (
          <motion.circle
            cx={cx}
            cy={index < 3 ? [100, 194, 194][index] : [314, 242, 242][index - 3]}
            fill="#D4B47A"
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.6 }}
            key={`${cx}-${index}`}
            r="3"
            transition={{ delay: shouldReduceMotion ? 0 : 0.18 + index * 0.08, duration: 0.5 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 0.72, scale: 1 }}
          />
        ))}
      </svg>

      <div
        aria-hidden="true"
        className="absolute inset-6 grid grid-cols-5 grid-rows-4 gap-3 opacity-80 sm:inset-8"
      >
        {modules.map((moduleClass, index) => (
          <motion.span
            className={`border border-lyken-gold-line-20 bg-lyken-deep/55 ${moduleClass}`}
            initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
            key={`${moduleClass}-${index}`}
            transition={{ delay: shouldReduceMotion ? 0 : 0.28 + index * 0.08, duration: 0.5 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          />
        ))}
      </div>
    </div>
  )
}

function IdentityVisual({ shouldReduceMotion, stage }) {
  return (
    <div className="relative min-h-[20rem] overflow-hidden border border-lyken-gold-line-20 bg-lyken-emerald/40 p-5 sm:min-h-[31rem] sm:p-8">
      <motion.img
        alt=""
        aria-hidden="true"
        className="absolute right-4 top-6 h-40 w-40 opacity-10 sm:h-56 sm:w-56"
        initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.94 }}
        src="/logos/lyken-monogram.svg"
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true }}
        whileInView={{ opacity: 0.14, scale: 1 }}
      />
      <div className="relative z-10 grid h-full gap-5">
        <motion.div
          className="max-w-sm border-l border-lyken-gold-line-45 pl-5"
          initial={shouldReduceMotion ? false : { opacity: 0, x: -14 }}
          transition={{ duration: 0.62, ease: "easeOut" }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <p className="lyken-text-eyebrow text-lyken-gold">{stage.label}</p>
          <p className="mt-3 font-display text-5xl leading-none text-lyken-text sm:text-7xl">
            LK
          </p>
        </motion.div>

        <div className="grid gap-3 sm:grid-cols-2">
          {stage.keywords.slice(0, 4).map((keyword, index) => (
            <motion.div
              className="min-h-24 border border-lyken-gold-line-20 bg-lyken-deep/62 p-4"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
              key={keyword}
              transition={{ delay: shouldReduceMotion ? 0 : 0.18 + index * 0.08, duration: 0.56 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <span className="lyken-text-button text-lyken-gold/80">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="mt-4 text-sm font-medium leading-6 text-lyken-text">
                {keyword}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          aria-hidden="true"
          className="h-px bg-gradient-to-r from-lyken-gold/60 via-lyken-gold-line-20 to-transparent"
          initial={shouldReduceMotion ? false : { opacity: 0, scaleX: 0 }}
          style={{ transformOrigin: "left" }}
          transition={{ delay: shouldReduceMotion ? 0 : 0.5, duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, scaleX: 1 }}
        />
      </div>
    </div>
  )
}

function DigitalPresenceVisual({ canUseAmbientMotion, shouldReduceMotion, stage }) {
  return (
    <div className="relative min-h-[20rem] overflow-hidden border border-lyken-gold-line-20 bg-lyken-emerald/40 p-4 sm:min-h-[31rem] sm:p-7">
      <motion.div
        aria-hidden="true"
        animate={canUseAmbientMotion ? { opacity: [0.18, 0.34, 0.2], scale: [1, 1.06, 1] } : undefined}
        className="absolute inset-0 bg-[length:118%_118%] bg-center opacity-15 sm:opacity-25"
        style={{ backgroundImage: `url(${goldDigitalMesh})` }}
        transition={{ duration: 8, ease: "easeInOut", repeat: canUseAmbientMotion ? Infinity : 0 }}
      />
      <div className="relative z-10 grid h-full gap-3 sm:grid-cols-6 sm:grid-rows-5">
        {stage.keywords.slice(0, 4).map((keyword, index) => (
          <motion.div
            className={`border border-lyken-gold-line-20 bg-lyken-deep/72 p-3 transition duration-200 hover:border-lyken-gold-line-45 hover:bg-lyken-emerald/70 sm:p-4 sm:hover:-translate-y-1 ${index === 0 ? "sm:col-span-4 sm:row-span-3" : ""} ${index === 1 ? "sm:col-span-2 sm:row-span-2" : ""} ${index === 2 ? "sm:col-span-2 sm:row-span-3" : ""} ${index === 3 ? "sm:col-span-4 sm:row-span-2" : ""}`}
            initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
            key={keyword}
            transition={{ delay: shouldReduceMotion ? 0 : 0.12 + index * 0.1, duration: 0.54 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <span className="block h-1 w-10 bg-lyken-gold/70" />
            <p className="mt-3 text-sm font-medium uppercase tracking-[0.14em] text-lyken-text sm:mt-4 sm:tracking-[0.16em]">
              {keyword}
            </p>
            <div aria-hidden="true" className="mt-4 grid gap-2 sm:mt-5">
              <span className="h-px w-full bg-lyken-gold-line-20" />
              <span className="h-px w-2/3 bg-lyken-gold-line-20" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function IntelligenceVisual({ canUseAmbientMotion, shouldReduceMotion, stage }) {
  const nodes = [
    [74, 78],
    [208, 56],
    [342, 106],
    [462, 72],
    [128, 246],
    [286, 218],
    [430, 286],
    [210, 350],
  ]

  return (
    <div className="relative min-h-[20rem] overflow-hidden border border-lyken-gold-line-20 bg-[#0B1F1A] p-4 sm:min-h-[31rem] sm:p-7">
      <svg
        aria-hidden="true"
        className="absolute inset-0 h-full w-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 540 420"
      >
        <motion.path
          d="M74 78 C158 54 178 74 208 56 C282 60 294 94 342 106 C394 118 424 84 462 72 M128 246 C190 204 230 226 286 218 C344 218 384 260 430 286 M208 56 C210 162 204 264 210 350 M342 106 C318 178 302 224 286 218"
          initial={shouldReduceMotion ? false : { opacity: 0, pathLength: 0 }}
          stroke="#D4B47A"
          strokeOpacity="0.34"
          strokeWidth="1"
          transition={{ duration: 1.5, ease: "easeInOut" }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, pathLength: 1 }}
        />
        {nodes.map(([cx, cy], index) => (
          <motion.circle
            animate={canUseAmbientMotion ? { opacity: [0.35, 0.8, 0.45], y: [0, -4, 0] } : undefined}
            cx={cx}
            cy={cy}
            fill="#D4B47A"
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.7 }}
            key={`${cx}-${cy}`}
            r={index % 3 === 0 ? 4 : 3}
            transition={{
              delay: shouldReduceMotion ? 0 : index * 0.08,
              duration: shouldReduceMotion ? 0.01 : 3.6 + index * 0.1,
              ease: "easeInOut",
              repeat: canUseAmbientMotion ? Infinity : 0,
            }}
            viewport={{ once: true }}
            whileInView={{ opacity: 0.64, scale: 1 }}
          />
        ))}
      </svg>

      <div className="relative z-10 ml-auto grid max-w-sm gap-3">
        {stage.keywords.slice(0, 3).map((keyword, index) => (
          <motion.div
            className="border border-lyken-gold-line-20 bg-lyken-emerald/45 p-3 sm:p-4"
            initial={shouldReduceMotion ? false : { opacity: 0, x: 16 }}
            key={keyword}
            transition={{ delay: shouldReduceMotion ? 0 : 0.2 + index * 0.1, duration: 0.55 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <span className="lyken-text-button text-lyken-gold/80">
              {String(index + 1).padStart(2, "0")}
            </span>
            <p className="mt-3 text-sm font-medium uppercase tracking-[0.14em] text-lyken-text">
              {keyword}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function GrowthVisual({ canUseAmbientMotion, continueCta, shouldReduceMotion, stage }) {
  return (
    <div className="relative min-h-[20rem] overflow-hidden border border-lyken-gold-line-20 bg-lyken-emerald/35 p-5 sm:min-h-[31rem] sm:p-8">
      <motion.div
        aria-hidden="true"
        animate={canUseAmbientMotion ? { opacity: [0.22, 0.44, 0.28], scale: [1, 1.12, 1] } : undefined}
        className="absolute inset-[-18%] bg-[length:92%_92%] bg-center bg-no-repeat opacity-20 sm:opacity-35"
        style={{
          backgroundImage: `radial-gradient(circle at 64% 42%, rgb(212 180 122 / 0.18), transparent 16rem), url(${goldDigitalMesh})`,
        }}
        transition={{ duration: 9, ease: "easeInOut", repeat: canUseAmbientMotion ? Infinity : 0 }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(120deg,rgb(11_31_26_/_0.92),rgb(11_31_26_/_0.56)_42%,transparent_100%)]"
      />

      <div className="relative z-10 flex min-h-[15rem] flex-col justify-end sm:min-h-[22rem]">
        <div className="grid max-w-xl gap-3 sm:grid-cols-3">
          {stage.keywords.slice(0, 3).map((keyword, index) => (
            <motion.div
              className="border border-lyken-gold-line-20 bg-lyken-deep/58 p-3 sm:p-4"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
              key={keyword}
              transition={{ delay: shouldReduceMotion ? 0 : 0.16 + index * 0.1, duration: 0.56 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <p className="text-sm font-medium uppercase tracking-[0.14em] text-lyken-text">
                {keyword}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.a
          className="lyken-text-button mt-8 inline-flex min-h-11 w-fit max-w-full items-center gap-3 border-b border-lyken-gold-line-45 py-2 text-lyken-gold transition hover:border-lyken-gold hover:text-lyken-text"
          href={continueCta.href}
          initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
          transition={{ delay: shouldReduceMotion ? 0 : 0.52, duration: 0.62, ease: "easeOut" }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          {continueCta.label}
          <span aria-hidden="true">↓</span>
        </motion.a>
      </div>
    </div>
  )
}

export default Journey
