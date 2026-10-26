import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react'
import { ThemeContext, type Theme } from './ThemeContext'

const STORAGE_KEY = 'theme'

// index.html sets data-theme before React loads (to avoid a colour flash), so start from that.
const initialTheme = (): Theme =>
  document.documentElement.dataset.theme === 'pine' ? 'pine' : 'black'

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(initialTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try {
      localStorage.setItem(STORAGE_KEY, theme)
    } catch {
      // Storage can be blocked (private mode); the theme still works for this visit.
    }
  }, [theme])

  const toggleTheme = useCallback(() => setTheme((t) => (t === 'black' ? 'pine' : 'black')), [])

  const value = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme])

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
