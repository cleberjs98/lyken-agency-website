import { useCallback, useMemo, useState } from "react"

import { content, defaultLanguage, supportedLanguages } from "../data/content/index.js"

export const languageStorageKey = "lyken-language"

function isSupportedLanguage(language) {
  return supportedLanguages.includes(language)
}

function readStoredLanguage() {
  if (typeof window === "undefined") {
    return defaultLanguage
  }

  try {
    const storedLanguage = window.localStorage.getItem(languageStorageKey)
    return isSupportedLanguage(storedLanguage) ? storedLanguage : defaultLanguage
  } catch {
    return defaultLanguage
  }
}

function persistLanguage(language) {
  if (typeof window === "undefined") {
    return
  }

  try {
    window.localStorage.setItem(languageStorageKey, language)
  } catch {
    // Keep language switching available even if storage is blocked.
  }
}

function useLanguage() {
  const [language, setLanguageState] = useState(readStoredLanguage)

  const setLanguage = useCallback((nextLanguage) => {
    if (!isSupportedLanguage(nextLanguage)) {
      setLanguageState(defaultLanguage)
      persistLanguage(defaultLanguage)
      return
    }

    setLanguageState(nextLanguage)
    persistLanguage(nextLanguage)
  }, [])

  const currentContent = useMemo(
    () => content[language] ?? content[defaultLanguage],
    [language],
  )

  return {
    language,
    setLanguage,
    content: currentContent,
    defaultLanguage,
    supportedLanguages,
  }
}

export default useLanguage
