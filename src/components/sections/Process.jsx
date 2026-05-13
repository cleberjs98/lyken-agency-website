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

      <MotionStagger className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {process.steps.map((step) => (
          <MotionStaggerItem key={step.id}>
            <Card className="p-6" variant="deep">
              <p className="lyken-text-button text-lyken-gold">
                {String(step.order).padStart(2, "0")}
              </p>
              <h3 className="lyken-text-card-title mt-4 text-lyken-text">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-lyken-text-muted">{step.description}</p>
            </Card>
          </MotionStaggerItem>
        ))}
      </MotionStagger>
    </Container>
  )
}

export default Process
