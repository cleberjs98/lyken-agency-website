import Footer from "./Footer"
import Navbar from "./Navbar"

function Layout({ children, content, language, setLanguage, supportedLanguages }) {
  return (
    <div id="top" className="lyken-surface-texture min-h-screen bg-lyken-deep text-lyken-text">
      <Navbar
        content={content}
        language={language}
        setLanguage={setLanguage}
        supportedLanguages={supportedLanguages}
      />
      <main id="main-content">{children}</main>
      <Footer content={content} />
    </div>
  )
}

export default Layout
