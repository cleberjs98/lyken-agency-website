import { Menu, X } from "lucide-react"
import { useState } from "react"

import Button from "../common/Button"
import Container from "../common/Container"
import LanguageSwitcher from "../ui/LanguageSwitcher"

function NavLinks({ items, onNavigate }) {
  return items.map((item) => (
    <a
      className="lyken-text-button text-lyken-text-muted transition-colors duration-200 hover:text-lyken-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lyken-gold"
      href={item.href}
      key={item.id}
      onClick={onNavigate}
    >
      {item.label}
    </a>
  ))
}

function Navbar({ content, language, setLanguage, supportedLanguages }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const navigation = content.navigation

  const closeMobileMenu = () => setIsMobileMenuOpen(false)

  return (
    <header className="sticky top-0 z-50 border-b border-lyken-gold-line-20 bg-lyken-deep/90 backdrop-blur-xl">
      <Container className="flex min-h-20 items-center justify-between gap-6">
        <a
          className="lyken-text-button text-lyken-text transition-colors duration-200 hover:text-lyken-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lyken-gold"
          href="#top"
        >
          {navigation.brandLabel}
        </a>

        <nav aria-label="Primary navigation" className="hidden items-center gap-7 lg:flex">
          <NavLinks items={navigation.items} />
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <LanguageSwitcher
            language={language}
            setLanguage={setLanguage}
            supportedLanguages={supportedLanguages}
          />
          <Button className="min-h-10 px-5 py-3" href={navigation.cta.href}>
            {navigation.cta.label}
          </Button>
        </div>

        <button
          aria-expanded={isMobileMenuOpen}
          aria-label={
            isMobileMenuOpen
              ? navigation.mobileMenu.closeLabel
              : navigation.mobileMenu.openLabel
          }
          className="inline-flex min-h-11 min-w-11 items-center justify-center border border-lyken-gold-line-30 text-lyken-gold transition-colors duration-200 hover:border-lyken-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lyken-gold lg:hidden"
          onClick={() => setIsMobileMenuOpen((current) => !current)}
          type="button"
        >
          {isMobileMenuOpen ? (
            <X aria-hidden="true" size={20} strokeWidth={1.5} />
          ) : (
            <Menu aria-hidden="true" size={20} strokeWidth={1.5} />
          )}
        </button>
      </Container>

      {isMobileMenuOpen ? (
        <div className="border-t border-lyken-gold-line-20 bg-lyken-deep/95 lg:hidden">
          <Container className="flex flex-col gap-6 py-6">
            <nav aria-label="Mobile navigation" className="flex flex-col gap-4">
              <NavLinks items={navigation.items} onNavigate={closeMobileMenu} />
            </nav>

            <div className="flex flex-col gap-4 border-t border-lyken-gold-line-20 pt-5 sm:flex-row sm:items-center sm:justify-between">
              <LanguageSwitcher
                language={language}
                setLanguage={setLanguage}
                supportedLanguages={supportedLanguages}
              />
              <Button
                className="w-full min-h-10 px-5 py-3 sm:w-auto"
                href={navigation.cta.href}
                onClick={closeMobileMenu}
              >
                {navigation.cta.label}
              </Button>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  )
}

export default Navbar
