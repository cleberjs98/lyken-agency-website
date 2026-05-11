const languageLabels = {
  en: {
    short: "EN",
    ariaLabel: "Change language to English",
  },
  pt: {
    short: "PT",
    ariaLabel: "Alterar idioma para português",
  },
}

function LanguageSwitcher({ language, setLanguage, supportedLanguages }) {
  return (
    <div
      aria-label="Language selection"
      className="lyken-text-button inline-flex items-center gap-2 border border-lyken-gold-line-20 bg-lyken-deep/40 px-3 py-2 text-xs text-lyken-text-soft"
      role="group"
    >
      {supportedLanguages.map((languageCode, index) => {
        const isActive = languageCode === language
        const label = languageLabels[languageCode]

        return (
          <span className="inline-flex items-center gap-2" key={languageCode}>
            {index > 0 ? (
              <span aria-hidden="true" className="text-lyken-gold-line-45">
                /
              </span>
            ) : null}
            <button
              aria-label={label.ariaLabel}
              aria-pressed={isActive}
              className={`min-h-7 px-1 transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lyken-gold ${
                isActive
                  ? "text-lyken-gold"
                  : "text-lyken-text-soft hover:text-lyken-text"
              }`}
              onClick={() => setLanguage(languageCode)}
              type="button"
            >
              {label.short}
            </button>
          </span>
        )
      })}
    </div>
  )
}

export default LanguageSwitcher
