import { Cpu, Diamond, Target } from "lucide-react"

import Button from "./components/common/Button"
import Card from "./components/common/Card"
import Container from "./components/common/Container"
import GoldDivider from "./components/common/GoldDivider"
import IconWrapper from "./components/common/IconWrapper"
import SectionLabel from "./components/common/SectionLabel"
import SectionTitle from "./components/common/SectionTitle"
import Navbar from "./components/layout/Navbar"
import useLanguage from "./hooks/useLanguage"
// Structured early-phase asset; replace this file with the official LK monogram when approved.
import monogram from "./assets/logos/lyken-monogram.svg"

function App() {
  const {
    content,
    language,
    setLanguage,
    supportedLanguages,
  } = useLanguage()
  const cardItems = [
    {
      icon: Target,
      title: "Strategic structure",
      text: "Short, focused surfaces with deep green depth, fine gold borders, and measured hierarchy.",
    },
    {
      icon: Diamond,
      title: "Brand clarity",
      text: "Linear champagne icons and restrained copy keep the system premium without becoming generic.",
    },
    {
      icon: Cpu,
      title: "Intelligent layer",
      text: "Subtle texture and a static mesh prepare the visual language without adding complex motion.",
    },
  ]

  return (
    <main className="lyken-surface-texture min-h-screen bg-lyken-deep text-lyken-text" id="top">
      <Navbar
        content={content}
        language={language}
        setLanguage={setLanguage}
        supportedLanguages={supportedLanguages}
      />
      <Container as="section" className="lyken-section-space">
        <GoldDivider className="mb-12" />

        <div className="lyken-editorial-grid lyken-mesh-panel items-end">
          <div className="md:col-span-4 lg:col-span-7">
            <SectionLabel>Phase 01 / 1.31-1.42</SectionLabel>
            <h1 className="lyken-text-hero mt-6 text-lyken-text">
              Lyken component foundation
            </h1>
          </div>

          <div className="md:col-span-2 lg:col-span-5">
            <p className="lyken-text-body text-lyken-text-muted">
              Temporary validation surface for the final visual-system pass:
              refined base components, responsive behavior, subtle texture,
              prepared mesh, LK monogram treatment, and phase approval checks.
            </p>
          </div>
        </div>

        <GoldDivider className="my-12" strength="subtle" />

        <div className="lyken-editorial-grid">
          <div className="border-t border-lyken-gold-line-30 pt-6 md:col-span-3 lg:col-span-4">
            <SectionLabel className="text-lyken-text-soft">
              Component base
            </SectionLabel>
            <SectionTitle className="mt-4">Premium surfaces</SectionTitle>
          </div>

          <div className="border-t border-lyken-gold-line-30 pt-6 md:col-span-3 lg:col-span-4">
            <p className="lyken-text-card-title text-lyken-text">
              Monogram treatment
            </p>
            <img
              alt=""
              aria-hidden="true"
              className="mt-6 h-20 w-20 opacity-80"
              src={monogram}
            />
            <p className="lyken-reading-narrow mt-4 text-lyken-text-muted">
              The LK symbol is prepared as a restrained premium asset, used
              with space and without exaggerated effects.
            </p>
          </div>

          <div className="border-t border-lyken-gold-line-30 pt-6 md:col-span-6 lg:col-span-4">
            <p className="lyken-text-card-title text-lyken-text">
              Button states
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button>Primary Action</Button>
              <Button variant="secondary">Secondary Action</Button>
              <Button variant="ghost">Ghost Action</Button>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {cardItems.map(({ icon: Icon, title, text }) => (
            <Card
              icon={
                <IconWrapper>
                  <Icon aria-hidden="true" size={22} strokeWidth={1.5} />
                </IconWrapper>
              }
              key={title}
              title={title}
            >
              <p className="text-sm leading-7 text-lyken-text-muted">{text}</p>
            </Card>
          ))}
        </div>
      </Container>

      {/* Phase 02 — Bilingual system validation surface */}
      <Container as="section" className="lyken-section-space border-t border-lyken-gold-line-20">
        <SectionLabel>Phase 02 / 2.9–2.14</SectionLabel>

        <div className="lyken-editorial-grid mt-8 items-start">
          <div className="md:col-span-6 lg:col-span-7">
            <p className="lyken-text-label mb-2 text-lyken-text-soft">
              {content.hero.tagline}
            </p>
            <h2 className="lyken-text-section-title text-lyken-text">
              {content.hero.headline}
            </h2>
            <p className="lyken-text-body mt-4 text-lyken-text-muted">
              {content.hero.subheadline}
            </p>
          </div>

          <div className="flex flex-col gap-4 md:col-span-6 lg:col-span-5">
            <div className="border border-lyken-gold-line-20 p-5">
              <p className="lyken-text-label mb-3 text-lyken-text-soft">
                {content.loading.phrase}
              </p>
              <p className="lyken-text-label text-lyken-text-soft">
                {content.navigation.items.map((item) => item.label).join(" · ")}
              </p>
            </div>
            <div className="border border-lyken-gold-line-20 p-5">
              <p className="text-xs text-lyken-text-soft">
                {/* Bilingual system validation: active language, localStorage key, fallback */}
                lang: <span className="text-lyken-gold">{language}</span>
                {" · "}
                key: <span className="text-lyken-text-muted">lyken-language</span>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </main>
  )
}

export default App
