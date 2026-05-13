import {
  Cpu,
  Diamond,
  Globe,
  Layers,
  Target,
  TrendingUp,
} from "lucide-react"

import Card from "../common/Card"
import Container from "../common/Container"
import IconWrapper from "../common/IconWrapper"
import SectionLabel from "../common/SectionLabel"
import SectionTitle from "../common/SectionTitle"
import AnimatedLine from "../motion/AnimatedLine"
import DigitalMesh from "../motion/DigitalMesh"
import MotionReveal, {
  MotionStagger,
  MotionStaggerItem,
} from "../motion/MotionReveal"

const serviceIcons = {
  cpu: Cpu,
  diamond: Diamond,
  globe: Globe,
  layers: Layers,
  target: Target,
  "trending-up": TrendingUp,
}

function Services({ content }) {
  const services = content.services

  return (
    <Container
      aria-labelledby={`${services.id}-title`}
      as="section"
      className="lyken-section-space relative isolate overflow-hidden border-t border-lyken-gold-line-20"
      id={services.id}
    >
      <AnimatedLine className="absolute left-5 right-5 top-0 md:left-8 md:right-8 lg:left-12 lg:right-12" />
      <DigitalMesh className="hidden md:block" />

      <div className="lyken-editorial-grid relative z-10 items-end">
        <MotionReveal className="md:col-span-6 lg:col-span-7">
          <SectionLabel>{services.sectionLabel}</SectionLabel>
          <SectionTitle className="mt-4" id={`${services.id}-title`}>
            {services.title}
          </SectionTitle>
        </MotionReveal>
        <MotionReveal
          as="p"
          className="lyken-text-body text-lyken-text-muted md:col-span-6 lg:col-span-5"
          delay={0.1}
        >
          {services.intro}
        </MotionReveal>
      </div>

      <MotionStagger className="relative z-10 mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.items.map((service) => {
          const Icon = serviceIcons[service.icon]

          return (
            <MotionStaggerItem key={service.id}>
              <Card
                className="lyken-service-card flex min-h-[260px] flex-col"
                icon={
                  Icon ? (
                    <IconWrapper className="lyken-service-card-icon transition-transform duration-200 ease-out">
                      <Icon aria-hidden="true" size={22} strokeWidth={1.5} />
                    </IconWrapper>
                  ) : null
                }
                title={service.title}
              >
                <p className="text-sm leading-7 text-lyken-text-muted">{service.description}</p>
              </Card>
            </MotionStaggerItem>
          )
        })}
      </MotionStagger>
    </Container>
  )
}

export default Services
