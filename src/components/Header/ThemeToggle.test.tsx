import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { renderWithProviders } from '../../test/renderWithProviders'
import { ThemeToggle } from './ThemeToggle'

describe('ThemeToggle', () => {
  it('starts on black and offers pine', () => {
    renderWithProviders(<ThemeToggle />)

    expect(document.documentElement.dataset.theme).toBe('black')
    expect(screen.getByRole('button', { name: 'Switch to the pine theme' })).toBeInTheDocument()
  })

  it('switches theme and remembers the choice', async () => {
    renderWithProviders(<ThemeToggle />)

    await userEvent.click(screen.getByRole('button', { name: 'Switch to the pine theme' }))

    expect(document.documentElement.dataset.theme).toBe('pine')
    expect(localStorage.getItem('theme')).toBe('pine')
    expect(screen.getByRole('button', { name: 'Switch to the black theme' })).toBeInTheDocument()
  })
})
