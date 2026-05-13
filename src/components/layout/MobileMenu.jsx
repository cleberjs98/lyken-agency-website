import { useEffect, useRef } from "react"

import Button from "../common/Button"
import Container from "../common/Container"
import LanguageSwitcher from "../ui/LanguageSwitcher"

function MobileMenu({
  isOpen,
  navigation,
  language,
  setLanguage,
  supportedLanguages,
  onClose,
}) {
  const firstLinkRef = useRef(null)

  useEffect(() => {
    if (!isOpen) {
      return undefined
    }

    window.requestAnimationFrame(() => {
      firstLinkRef.current?.focus()
    })
  }, [isOpen])

  return (
    <div
      aria-hidden={!isOpen}
      className={`lg:hidden ${isOpen ? "pointer-events-auto" : "pointer-events-none"}`}
    >
      <button
        aria-label={navigation.mobileMenu.closeLabel}
        className={`fixed inset-0 z-40 cursor-default bg-lyken-deep/10 transition-opacity duration-200 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
        tabIndex={isOpen ? 0 : -1}
        type="button"
      />

      <div
        aria-label="Mobile navigation"
        className={`absolute left-0 right-0 top-full z-[80] overflow-hidden border-t border-lyken-gold-line-20 bg-lyken-deep/98 shadow-[0_24px_48px_rgb(0_0_0_/_0.18)] backdrop-blur-xl transition-[max-height,opacity] duration-200 ${
          isOpen ? "max-h-[560px] opacity-100" : "max-h-0 opacity-0"
        }`}
        id="mobile-navigation"
      >
        <Container className="flex flex-col gap-6 py-6">
          <nav aria-label="Mobile navigation links" className="flex flex-col gap-2">
            {navigation.items.map((item, index) => (
              <a
                className="lyken-text-button min-h-11 border-b border-lyken-gold-line-20 py-4 text-lyken-text-muted transition-colors duration-200 hover:text-lyken-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lyken-gold"
                href={item.href}
                key={item.id}
                onClick={onClose}
                ref={index === 0 ? firstLinkRef : undefined}
                tabIndex={isOpen ? 0 : -1}
              >
                {item.label}
              </a>
            ))}
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
              onClick={onClose}
              tabIndex={isOpen ? 0 : -1}
            >
              {navigation.cta.label}
            </Button>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default MobileMenu
