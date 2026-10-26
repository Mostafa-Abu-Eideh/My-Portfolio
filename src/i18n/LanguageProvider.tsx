import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react'
import { strings } from '../content/strings'
import type { Bilingual, Lang } from '../content/types'
import { prefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { LanguageContext } from './LanguageContext'

const initialLanguage = (): Lang => (window.location.hash === '#ar' ? 'ar' : 'en')

const canAnimate = () => typeof Element !== 'undefined' && 'animate' in Element.prototype

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(initialLanguage)
  const [incoming, setIncoming] = useState<Lang | null>(null)

  // Keep the <html> element, the tab title and the URL in sync with the language.
  useEffect(() => {
    const root = document.documentElement
    root.lang = lang
    root.dir = lang === 'ar' ? 'rtl' : 'ltr'
    document.title = strings.documentTitle[lang]

    const { pathname, search, hash } = window.location
    if (lang === 'ar' && hash !== '#ar') history.replaceState(null, '', '#ar')
    if (lang === 'en' && hash === '#ar') history.replaceState(null, '', pathname + search)
  }, [lang])

  const requestLanguage = useCallback(
    (next: Lang) => {
      if (next === lang || incoming) return
      if (prefersReducedMotion() || !canAnimate()) setLang(next)
      else setIncoming(next)
    },
    [lang, incoming],
  )

  const applyIncoming = useCallback(() => {
    if (incoming) setLang(incoming)
  }, [incoming])

  const endTransition = useCallback(() => setIncoming(null), [])

  const t = useCallback((text: Bilingual) => text[lang], [lang])

  const value = useMemo(
    () => ({ lang, t, requestLanguage, incoming, applyIncoming, endTransition }),
    [lang, t, requestLanguage, incoming, applyIncoming, endTransition],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}
