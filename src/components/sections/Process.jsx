import Card from "../common/Card"
import Container from "../common/Container"
import SectionLabel from "../common/SectionLabel"
import SectionTitle from "../common/SectionTitle"
import AnimatedLine from "../motion/AnimatedLine"
import MotionReveal, {
  MotionStagger,
  MotionStaggerItem,
} from "../motion/MotionReveal"

function Process({ content }) {
  const process = content.process

  return (
    <Container
      as="section"
      aria-labelledby="process-title"
      className="lyken-section-space relative border-t border-lyken-gold-line-20"
      id={process.id}
    >
      <AnimatedLine className="absolute left-5 right-5 top-0 md:left-8 md:right-8 lg:left-12 lg:right-12" />

      <div className="lyken-editorial-grid items-end">
        <MotionReveal className="md:col-span-6 lg:col-span-8">
          <SectionLabel>{process.sectionLabel}</SectionLabel>
          <SectionTitle className="mt-4" id="process-title">
            {process.title}
          </SectionTitle>
        </MotionReveal>
      </div>

      <div className="relative mt-12">
        <span
          aria-hidden="true"
          className="absolute bottom-3 left-3 top-3 w-px bg-gradient-to-b from-lyken-gold/0 via-lyken-gold-line-45 to-lyken-gold/0 md:hidden"
        />
        <MotionStagger className="grid max-w-full gap-5 pl-9 md:grid-cols-2 md:pl-0 lg:grid-cols-3">
          {process.steps.map((step) => (
            <MotionStaggerItem className="relative min-w-0" key={step.id}>
              <span
                aria-hidden="true"
                className="absolute -left-8 top-7 h-3 w-3 border border-lyken-gold-line-45 bg-lyken-gold shadow-[0_0_18px_rgb(212_180_122_/_0.22)] md:hidden"
              />
              <Card className="min-h-[190px] p-5 sm:p-6 lg:min-h-[210px]" variant="deep">
                <p className="lyken-text-button text-lyken-gold">
                  {String(step.order).padStart(2, "0")}
                </p>
                <h3 className="lyken-text-card-title mt-4 text-lyken-text">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-lyken-text-muted">
                  {step.description}
                </p>
              </Card>
            </MotionStaggerItem>
          ))}
        </MotionStagger>
      </div>
    </Container>
  )
}

export default Process
