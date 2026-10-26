import { createContext } from 'react'
import type { Bilingual, Lang } from '../content/types'

export interface LanguageContextValue {
  lang: Lang
  /** Pick the string for the current language. */
  t: (text: Bilingual) => string
  /** Ask to switch language. Animated through <LanguageCurtain> unless motion is reduced. */
  requestLanguage: (next: Lang) => void
  /** The language the curtain is switching to, or null when no switch is running. */
  incoming: Lang | null
  /** Called by the curtain once the screen is covered. */
  applyIncoming: () => void
  /** Called by the curtain once it has left the screen. */
  endTransition: () => void
}

export const LanguageContext = createContext<LanguageContextValue | null>(null)
