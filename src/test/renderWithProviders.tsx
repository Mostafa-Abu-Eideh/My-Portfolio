import { render } from '@testing-library/react'
import type { ReactElement } from 'react'
import { LanguageProvider } from '../i18n/LanguageProvider'
import { ThemeProvider } from '../theme/ThemeProvider'

/** Render a component inside the same providers the app uses. */
export function renderWithProviders(ui: ReactElement) {
  return render(
    <ThemeProvider>
      <LanguageProvider>{ui}</LanguageProvider>
    </ThemeProvider>,
  )
}
