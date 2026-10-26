import { strings } from '../../content/strings'
import { useLanguage } from '../../i18n/useLanguage'

/** The button is always labelled in the language it switches to. */
export function LanguageToggle() {
  const { lang, requestLanguage } = useLanguage()
  const toArabic = lang === 'en'
  const copy = toArabic ? strings.toggles.language.toArabic : strings.toggles.language.toEnglish

  return (
    <button
      type="button"
      className="lang-toggle"
      lang={toArabic ? 'ar' : 'en'}
      aria-label={copy.aria}
      onClick={() => requestLanguage(toArabic ? 'ar' : 'en')}
    >
      {copy.label}
    </button>
  )
}
