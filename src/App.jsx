import { useCallback, useEffect, useState } from "react"

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

const seoImage = "/images/og-lyken-agency.jpg"
const ogLocales = {
  en: "en_US",
  pt: "pt_BR",
}

function setMetaContent(selector, attributes, content) {
  let element = document.querySelector(selector)

  if (!element) {
    element = document.createElement("meta")
    Object.entries(attributes).forEach(([name, value]) => {
      element.setAttribute(name, value)
    })
    document.head.appendChild(element)
  }

  element.setAttribute("content", content)
}

function App() {
  const [isIntroActive, setIsIntroActive] = useState(true)
  const handleIntroComplete = useCallback(() => {
    setIsIntroActive(false)
  }, [])
  const {
    content,
    language,
    setLanguage,
    supportedLanguages,
  } = useLanguage()

  useEffect(() => {
    document.documentElement.lang = content.meta.language
    document.title = content.meta.title

    setMetaContent(
      'meta[name="description"]',
      { name: "description" },
      content.meta.description,
    )
    setMetaContent('meta[property="og:title"]', { property: "og:title" }, content.meta.title)
    setMetaContent(
      'meta[property="og:description"]',
      { property: "og:description" },
      content.meta.description,
    )
    setMetaContent('meta[property="og:image"]', { property: "og:image" }, seoImage)
    setMetaContent(
      'meta[property="og:locale"]',
      { property: "og:locale" },
      ogLocales[content.meta.language] ?? ogLocales.en,
    )
    setMetaContent('meta[name="twitter:title"]', { name: "twitter:title" }, content.meta.title)
    setMetaContent(
      'meta[name="twitter:description"]',
      { name: "twitter:description" },
      content.meta.description,
    )
    setMetaContent('meta[name="twitter:image"]', { name: "twitter:image" }, seoImage)
  }, [content.meta.description, content.meta.language, content.meta.title])

  return (
    <>
      <LoadingExperience
        language={language}
        onComplete={handleIntroComplete}
        phrase={content.loading.phrase}
      />
      <Layout
        content={content}
        language={language}
        setLanguage={setLanguage}
        supportedLanguages={supportedLanguages}
      >
        <Hero content={content} isIntroActive={isIntroActive} />
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
