import Button from "../common/Button"
import Container from "../common/Container"
import GoldDivider from "../common/GoldDivider"

const monogramSrc = "/logos/lyken-monogram.svg"

function FooterLink({ link }) {
  return (
    <a
      className="lyken-text-button inline-flex min-h-9 items-center text-lyken-text-muted transition-colors duration-200 hover:text-lyken-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lyken-gold"
      href={link.href}
    >
      {link.label}
    </a>
  )
}

function PendingItem({ item, pendingLabel }) {
  return (
    <span className="flex items-center justify-between gap-3 text-sm text-lyken-text-muted">
      <span>{item.label}</span>
      <span className="lyken-text-button text-lyken-text-soft">{pendingLabel}</span>
    </span>
  )
}

const footerLinkFocusClass =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lyken-gold"

function Footer({ content }) {
  const footer = content.footer

  return (
    <footer className="lyken-footer-surface relative overflow-hidden border-t border-lyken-gold-line-20 bg-lyken-deep/95">
      <img
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-8 right-6 h-32 w-32 opacity-[0.045] md:h-44 md:w-44"
        height="160"
        loading="lazy"
        src={monogramSrc}
        width="160"
      />
      <Container className="relative py-12 lg:py-16">
        <GoldDivider className="mb-10" />

        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
          <div>
            <img
              alt={footer.logo.alt}
              className="h-10 w-auto opacity-90"
              height="128"
              loading="lazy"
              src={footer.logo.src}
              width="520"
            />
            <p className="lyken-text-card-title mt-6 max-w-sm text-lyken-text">
              {footer.tagline}
            </p>
            <Button className="mt-7 min-h-10 px-5 py-3" href={footer.cta.href}>
              {footer.cta.label}
            </Button>
          </div>

          <div>
            <p className="lyken-text-button mb-5 text-lyken-gold">{footer.navigationLabel}</p>
            <nav aria-label={footer.navigationLabel} className="flex flex-col gap-3">
              {footer.links.map((link) => (
                <FooterLink key={link.id} link={link} />
              ))}
            </nav>
          </div>

          <div>
            <p className="lyken-text-button mb-5 text-lyken-gold">{footer.contactLabel}</p>
            <div className="text-sm leading-7 text-lyken-text-muted">
              <p className="lyken-text-button mb-2 text-lyken-text-soft">
                {footer.contact.emailLabel}
              </p>
              {footer.contact.email ? (
                <a className={footerLinkFocusClass} href={`mailto:${footer.contact.email}`}>
                  {footer.contact.email}
                </a>
              ) : (
                <p>{footer.contact.emailPendingText}</p>
              )}
            </div>
          </div>

          <div>
            <p className="lyken-text-button mb-5 text-lyken-gold">{footer.socialLabel}</p>
            <div className="flex flex-col gap-3">
              {footer.socialLinks.map((item) =>
                item.href ? (
                  <a
                    className={`text-sm text-lyken-text-muted transition-colors duration-200 hover:text-lyken-gold ${footerLinkFocusClass}`}
                    href={item.href}
                    key={item.id}
                  >
                    {item.label}
                  </a>
                ) : (
                  <PendingItem item={item} key={item.id} pendingLabel={footer.pendingLabel} />
                ),
              )}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-lyken-gold-line-20 pt-6 text-xs text-lyken-text-soft md:flex-row md:items-center md:justify-between">
          <p>{footer.brandLine}</p>
          <p>{footer.copyright}</p>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
