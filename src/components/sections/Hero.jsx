import { motion, useReducedMotion } from "framer-motion"

import AnimatedLine from "../motion/AnimatedLine"
import Button from "../common/Button"
import Container from "../common/Container"
import HeroVideoBackground from "../motion/HeroVideoBackground"
import SectionLabel from "../common/SectionLabel"

function Hero({ content, isIntroActive = false }) {
  const hero = content.hero
  const shouldReduceMotion = useReducedMotion()

  const revealTransition = shouldReduceMotion
    ? { duration: 0.01 }
    : { duration: 0.92, ease: [0.22, 1, 0.36, 1] }

  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate h-[calc(100svh-4.5rem)] min-h-[390px] max-h-[620px] overflow-hidden bg-[#061312] text-lyken-text lg:h-[calc(100svh-5rem)]"
      id="hero"
    >
      <HeroVideoBackground />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,#03100F_0%,rgb(3_16_15_/_0.82)_19%,rgb(6_19_18_/_0.44)_38%,rgb(6_19_18_/_0.08)_62%,transparent_82%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgb(3_16_15_/_0.32)_0%,transparent_23%,transparent_70%,rgb(3_16_15_/_0.42)_100%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-black/15 sm:bg-black/10 lg:bg-transparent"
      />

      <Container className="relative z-10 flex h-full max-w-[100vw] flex-col justify-center overflow-hidden py-6 pb-5 pt-7 sm:py-8 md:py-9 lg:max-w-[1080px] lg:py-10">
        <div className="max-w-[calc(100vw-2.5rem)] overflow-hidden lg:max-w-none lg:overflow-visible">
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="min-w-0 max-w-[16rem] sm:max-w-[29rem] md:max-w-[32rem] lg:max-w-[34rem]"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
            transition={revealTransition}
          >
            <SectionLabel>{hero.concept}</SectionLabel>
            <h1
              className="mt-3 max-w-full text-wrap font-display text-[clamp(1.9rem,7.6vw,2.8rem)] font-medium leading-[1.04] tracking-normal text-lyken-text drop-shadow-[0_10px_34px_rgb(0_0_0_/_0.5)] [overflow-wrap:break-word] sm:text-[clamp(2.85rem,6.2vw,3.8rem)] sm:leading-[0.99] lg:text-[clamp(3.35rem,4.4vw,4.15rem)]"
              id="hero-title"
            >
              {hero.headline}
            </h1>

            <motion.p
              animate={{ opacity: 1, y: 0 }}
              className="mt-3 max-w-[16rem] break-words font-sans text-[0.78rem] leading-5 text-lyken-text-muted drop-shadow-[0_8px_28px_rgb(0_0_0_/_0.42)] sm:max-w-[25rem] sm:text-[0.86rem] sm:leading-6"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              transition={{ ...revealTransition, delay: shouldReduceMotion ? 0 : 0.16 }}
            >
              {hero.subheadline}
            </motion.p>
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 flex max-w-[16rem] flex-col gap-3 sm:max-w-full sm:flex-row"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
              transition={{ ...revealTransition, delay: shouldReduceMotion ? 0 : 0.3 }}
            >
              <Button className="min-h-10 w-full px-4 py-3 sm:w-auto sm:px-5" href={hero.primaryCta.href}>
                {hero.primaryCta.label}
              </Button>
              <Button
                className="min-h-10 w-full px-4 py-3 sm:w-auto sm:px-5"
                href={hero.secondaryCta.href}
                variant="secondary"
              >
                {hero.secondaryCta.label}
              </Button>
            </motion.div>
          </motion.div>
        </div>

        <AnimatedLine className="mt-5 md:mt-6" delay={shouldReduceMotion ? 0 : 0.42} />

        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col gap-3 pt-3 md:flex-row md:items-end md:justify-between"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
          transition={{ ...revealTransition, delay: shouldReduceMotion ? 0 : 0.48 }}
        >
          <p className="lyken-text-button max-w-[17rem] break-words leading-5 text-lyken-gold sm:max-w-[calc(100vw-2.5rem)] md:max-w-full">
            {hero.tagline}
          </p>
          <div className="flex flex-col gap-3 md:items-end">
            <p className="max-w-[17rem] break-words text-[0.68rem] leading-5 text-lyken-text-soft/60 sm:max-w-[calc(100vw-2.5rem)] md:max-w-lg md:text-right">
              {hero.narrative}
            </p>
            <motion.div
              animate={{ opacity: 1 }}
              aria-hidden="true"
              className="hidden items-center gap-3 text-lyken-gold/70 md:flex"
              initial={shouldReduceMotion ? false : { opacity: 0 }}
              transition={{ ...revealTransition, delay: shouldReduceMotion ? 0 : 0.62 }}
            >
              <span className="h-12 w-px overflow-hidden bg-lyken-gold-line-20">
                <motion.span
                  animate={shouldReduceMotion || isIntroActive ? undefined : { y: [0, 32, 0] }}
                  className="block h-4 w-px bg-lyken-gold"
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
