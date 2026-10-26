import type { CSSProperties } from 'react'
import { strings } from '../../content/strings'
import { useLanguage } from '../../i18n/useLanguage'
import { useTheme } from '../../theme/useTheme'

// Background colour of each theme, shown as a swatch on the button.
const swatches = { black: '#0E0F0E', pine: '#123B33' } as const

/** Shows the theme you will switch *to*, with a swatch of its background. */
export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const { t } = useLanguage()
  const next = theme === 'black' ? 'pine' : 'black'
  const copy = strings.toggles.theme[next]

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={t(copy.aria)}
      style={{ '--swatch': swatches[next] } as CSSProperties}
    >
      <span className="theme-toggle__swatch" aria-hidden="true" />
      <span className="theme-toggle__label">{t(copy.label)}</span>
    </button>
  )
}
