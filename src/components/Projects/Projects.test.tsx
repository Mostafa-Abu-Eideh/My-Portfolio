import { screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { projects } from '../../content/projects'
import { renderWithProviders } from '../../test/renderWithProviders'
import { Projects } from './Projects'

describe('Projects', () => {
  it('shows every project in both languages', () => {
    renderWithProviders(<Projects />)

    for (const project of projects) {
      const card = screen.getByRole('article', { name: project.title.en })
      expect(within(card).getByRole('heading', { name: project.title.en })).toBeInTheDocument()
      expect(within(card).getByRole('heading', { name: project.title.ar })).toBeInTheDocument()
      for (const tech of project.stack) {
        expect(within(card).getByText(tech)).toBeInTheDocument()
      }
    }
  })

  it('links to the code only when a repository is set', () => {
    renderWithProviders(<Projects />)

    const withRepo = projects.filter((p) => p.repoUrl).length
    expect(screen.queryAllByRole('link', { name: 'On GitHub' })).toHaveLength(withRepo)
  })
})
