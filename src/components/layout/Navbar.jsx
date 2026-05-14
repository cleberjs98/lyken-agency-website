import { Menu, X } from "lucide-react"
import { useCallback, useEffect, useRef, useState } from "react"

import Button from "../common/Button"
import Container from "../common/Container"
import MobileMenu from "./MobileMenu"
import LanguageSwitcher from "../ui/LanguageSwitcher"

const logoSrc = "/logos/lyken-logo.svg"

function NavLinks({ items, onNavigate }) {
  return items.map((item) => (
    <a
      className="lyken-text-button inline-flex min-h-9 items-center text-lyken-text-muted transition-colors duration-200 hover:text-lyken-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lyken-gold"
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
  const [isScrolled, setIsScrolled] = useState(false)
  const mobileMenuButtonRef = useRef(null)
  const navigation = content.navigation

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false)
    window.requestAnimationFrame(() => {
      mobileMenuButtonRef.current?.focus()
    })
  }, [])

  useEffect(() => {
    const updateScrolledState = () => {
      setIsScrolled(window.scrollY > 12)
    }

    updateScrolledState()
    window.addEventListener("scroll", updateScrolledState, { passive: true })

    return () => {
      window.removeEventListener("scroll", updateScrolledState)
    }
  }, [])

  useEffect(() => {
    if (!isMobileMenuOpen) {
      return undefined
    }

    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        closeMobileMenu()
      }
    }

    window.addEventListener("keydown", closeOnEscape)

    return () => {
      window.removeEventListener("keydown", closeOnEscape)
    }
  }, [closeMobileMenu, isMobileMenuOpen])

  useEffect(() => {
    if (!isMobileMenuOpen) {
      return undefined
    }

    const previousBodyOverflow = document.body.style.overflow
    const previousHtmlOverflow = document.documentElement.style.overflow

    document.body.style.overflow = "hidden"
    document.documentElement.style.overflow = "hidden"

    return () => {
      document.body.style.overflow = previousBodyOverflow
      document.documentElement.style.overflow = previousHtmlOverflow
    }
  }, [isMobileMenuOpen])

  return (
    <header
      className={`sticky top-0 z-50 border-b backdrop-blur-xl transition-[background-color,border-color] duration-200 ${
        isScrolled
          ? "border-lyken-gold-line-30 bg-lyken-deep/94"
          : "border-transparent bg-lyken-deep/42"
      } relative`}
    >
      <Container
        className={`flex items-center justify-between gap-6 transition-[min-height] duration-200 ${
          isScrolled ? "min-h-16" : "min-h-20"
        }`}
      >
        <a
          aria-label={navigation.brandLabel}
          className="inline-flex min-h-12 items-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lyken-gold"
          href="#top"
        >
          <img
            alt=""
            aria-hidden="true"
            className="h-10 w-auto max-w-[168px] object-contain md:h-11 md:max-w-[190px]"
            src={logoSrc}
          />
          <span className="sr-only">{navigation.brandLabel}</span>
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
          aria-controls="mobile-navigation"
          aria-expanded={isMobileMenuOpen}
          aria-label={
            isMobileMenuOpen
              ? navigation.mobileMenu.closeLabel
              : navigation.mobileMenu.openLabel
          }
          className="inline-flex min-h-11 min-w-11 items-center justify-center border border-lyken-gold-line-30 text-lyken-gold transition-colors duration-200 hover:border-lyken-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lyken-gold lg:hidden"
          onClick={() => setIsMobileMenuOpen((current) => !current)}
          ref={mobileMenuButtonRef}
          type="button"
        >
          {isMobileMenuOpen ? (
            <X aria-hidden="true" size={20} strokeWidth={1.5} />
          ) : (
            <Menu aria-hidden="true" size={20} strokeWidth={1.5} />
          )}
        </button>
      </Container>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        language={language}
        navigation={navigation}
        onClose={closeMobileMenu}
        setLanguage={setLanguage}
        supportedLanguages={supportedLanguages}
      />
    </header>
  )
}

export default Navbar
