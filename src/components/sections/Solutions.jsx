import Card from "../common/Card"
import Container from "../common/Container"
import SectionLabel from "../common/SectionLabel"
import SectionTitle from "../common/SectionTitle"
import AnimatedLine from "../motion/AnimatedLine"
import DigitalMesh from "../motion/DigitalMesh"
import MotionReveal, {
  MotionStagger,
  MotionStaggerItem,
} from "../motion/MotionReveal"

function Solutions({ content }) {
  const solutions = content.solutions

  return (
    <Container
      aria-labelledby={`${solutions.id}-title`}
      as="section"
      className="lyken-section-space relative isolate overflow-hidden border-t border-lyken-gold-line-20"
      id={solutions.id}
    >
      <AnimatedLine className="absolute left-5 right-5 top-0 md:left-8 md:right-8 lg:left-12 lg:right-12" />
      <DigitalMesh className="hidden md:block opacity-15" />

      <div className="lyken-editorial-grid relative z-10 items-end">
        <MotionReveal className="md:col-span-6 lg:col-span-8">
          <SectionLabel>{solutions.sectionLabel}</SectionLabel>
          <SectionTitle className="mt-4" id={`${solutions.id}-title`}>
            {solutions.title}
          </SectionTitle>
        </MotionReveal>
      </div>

      <MotionStagger className="relative z-10 mt-12 grid gap-6 md:grid-cols-2">
        {solutions.items.map((solution) => (
          <MotionStaggerItem key={solution.id}>
            <Card className="min-h-[210px]" title={solution.title} variant="elevated">
              <span className="lyken-text-button mb-5 block text-lyken-gold">
                {String(solution.order).padStart(2, "0")}
              </span>
              <p className="text-sm leading-7 text-lyken-text-muted">{solution.description}</p>
            </Card>
          </MotionStaggerItem>
        ))}
      </MotionStagger>
    </Container>
  )
}

export default Solutions
