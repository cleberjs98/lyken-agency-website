import Footer from "./Footer"
import Navbar from "./Navbar"

function Layout({ children, content, language, setLanguage, supportedLanguages }) {
  return (
    <div id="top" className="lyken-surface-texture min-h-screen bg-lyken-deep text-lyken-text">
      <a
        className="lyken-text-button sr-only focus:not-sr-only focus:fixed focus:left-5 focus:top-5 focus:z-[120] focus:border focus:border-lyken-gold focus:bg-lyken-deep focus:px-4 focus:py-3 focus:text-lyken-gold focus:outline focus:outline-2 focus:outline-offset-4 focus:outline-lyken-gold"
        href="#main-content"
      >
        Skip to main content
      </a>
      <Navbar
        content={content}
        language={language}
        setLanguage={setLanguage}
        supportedLanguages={supportedLanguages}
      />
      <main id="main-content" tabIndex={-1}>
        {children}
      </main>
      <Footer content={content} />
    </div>
  )
}

export default Layout
