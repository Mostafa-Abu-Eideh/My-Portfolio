import type { CSSProperties } from 'react'

interface EmailLinkProps {
  email: string
}

/**
 * The email address set large. Each letter is its own span with an index (--i),
 * so on hover the weight change ripples across the address letter by letter.
 */
export function EmailLink({ email }: EmailLinkProps) {
  return (
    <a className="email-link" href={`mailto:${email}`} lang="en" aria-label={`Email ${email}`}>
      {[...email].map((char, i) => (
        <span key={i} aria-hidden="true" style={{ '--i': i } as CSSProperties}>
          {char}
        </span>
      ))}
    </a>
  )
}
