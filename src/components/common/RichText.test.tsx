import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { RichText } from './RichText'

describe('RichText', () => {
  it('turns **marked** phrases into bold text', () => {
    const { container } = render(<RichText text="I use **React** and **Spring Boot** daily." />)

    const bold = container.querySelectorAll('b')
    expect([...bold].map((b) => b.textContent)).toEqual(['React', 'Spring Boot'])
    expect(container.textContent).toBe('I use React and Spring Boot daily.')
  })

  it('leaves text without markers unchanged', () => {
    const { container } = render(<RichText text="Plain sentence." />)

    expect(container.querySelector('b')).toBeNull()
    expect(container.textContent).toBe('Plain sentence.')
  })
})
