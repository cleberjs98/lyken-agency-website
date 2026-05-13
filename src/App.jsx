import { useEffect } from "react"

import Layout from "./components/layout/Layout"
import Contact from "./components/sections/Contact"
import Hero from "./components/sections/Hero"
import Journey from "./components/sections/Journey"
import LoadingExperience from "./components/motion/LoadingExperience"
import Process from "./components/sections/Process"
import Services from "./components/sections/Services"
import Solutions from "./components/sections/Solutions"
import WhyLyken from "./components/sections/WhyLyken"
import useLanguage from "./hooks/useLanguage"

function App() {
  const {
    content,
    language,
    setLanguage,
    supportedLanguages,
  } = useLanguage()

  useEffect(() => {
    document.documentElement.lang = content.meta.language
    document.title = content.meta.title

    let metaDescription = document.querySelector('meta[name="description"]')
    if (!metaDescription) {
      metaDescription = document.createElement("meta")
      metaDescription.setAttribute("name", "description")
      document.head.appendChild(metaDescription)
    }

    metaDescription.setAttribute("content", content.meta.description)
  }, [content.meta.description, content.meta.language, content.meta.title])

  return (
    <>
      <LoadingExperience language={language} phrase={content.loading.phrase} />
      <Layout
        content={content}
        language={language}
        setLanguage={setLanguage}
        supportedLanguages={supportedLanguages}
      >
        <Hero content={content} />
        <Journey content={content} />
        <Services content={content} />
        <Process content={content} />
        <Solutions content={content} />
        <WhyLyken content={content} />
        <Contact content={content} />
      </Layout>
    </>
  )
}

export default App
