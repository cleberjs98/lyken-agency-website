import Container from "../common/Container"
import SectionLabel from "../common/SectionLabel"
import SectionTitle from "../common/SectionTitle"
import AnimatedLine from "../motion/AnimatedLine"
import MotionReveal, {
  MotionStagger,
  MotionStaggerItem,
} from "../motion/MotionReveal"

function WhyLyken({ content }) {
  const whyLyken = content.whyLyken

  return (
    <Container
      aria-labelledby={`${whyLyken.id}-title`}
      as="section"
      className="lyken-section-space relative border-t border-lyken-gold-line-20"
      id={whyLyken.id}
    >
      <AnimatedLine className="absolute left-5 right-5 top-0 md:left-8 md:right-8 lg:left-12 lg:right-12" />

      <div className="lyken-editorial-grid items-start">
        <MotionReveal className="md:col-span-6 lg:col-span-5">
          <SectionLabel>{whyLyken.sectionLabel}</SectionLabel>
          <SectionTitle className="mt-4" id={`${whyLyken.id}-title`}>
            {whyLyken.title}
          </SectionTitle>
        </MotionReveal>

        <MotionStagger
          as="ul"
          className="grid gap-0 border-y border-lyken-gold-line-20 md:col-span-6 lg:col-span-7"
          delay={0.08}
        >
          {whyLyken.points.map((point) => (
            <MotionStaggerItem
              as="li"
              className="grid gap-4 border-b border-lyken-gold-line-20 py-6 last:border-b-0 sm:grid-cols-[4rem_1fr] sm:py-7"
              key={point.id}
            >
              <span className="lyken-text-button text-lyken-gold">
                {String(point.order).padStart(2, "0")}
              </span>
              <span className="text-base leading-7 text-lyken-text-muted sm:text-lg">
                {point.text}
              </span>
            </MotionStaggerItem>
          ))}
        </MotionStagger>
      </div>
    </Container>
  )
}

export default WhyLyken
