import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { renderWithProviders } from '../../test/renderWithProviders'
import { LanguageToggle } from './LanguageToggle'

// jsdom cannot run Web Animations, so the provider switches instantly instead of using the curtain.
describe('LanguageToggle', () => {
  it('switches the page to right-to-left Arabic and back', async () => {
    renderWithProviders(<LanguageToggle />)
    const root = document.documentElement

    await userEvent.click(screen.getByRole('button', { name: 'Read this page in Arabic' }))

    expect(root.lang).toBe('ar')
    expect(root.dir).toBe('rtl')
    expect(document.title).toBe('مصطفى، مطوّر ويب متكامل')
    expect(window.location.hash).toBe('#ar')

    await userEvent.click(screen.getByRole('button', { name: 'اقرأ الصفحة بالإنجليزية' }))

    expect(root.lang).toBe('en')
    expect(root.dir).toBe('ltr')
    expect(window.location.hash).toBe('')
  })

  it('opens in Arabic when the URL ends in #ar', () => {
    history.replaceState(null, '', '/#ar')
    renderWithProviders(<LanguageToggle />)

    expect(document.documentElement.dir).toBe('rtl')
    expect(screen.getByRole('button')).toHaveTextContent('English')
  })
})
