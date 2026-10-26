import { createContext } from 'react'

export type Theme = 'black' | 'pine'

export interface ThemeContextValue {
  theme: Theme
  toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextValue | null>(null)
