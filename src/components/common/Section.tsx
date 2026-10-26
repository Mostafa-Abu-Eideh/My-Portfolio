import type { ReactNode } from 'react'
import type { Bilingual } from '../../content/types'
import { useLanguage } from '../../i18n/useLanguage'
import './Section.css'

interface SectionProps {
  id: string
  title: Bilingual
  children: ReactNode
}

/** A page section with the paired English / Arabic heading used throughout the site. */
export function Section({ id, title, children }: SectionProps) {
  const { lang } = useLanguage()
  const headingId = `${id}-heading`

  return (
    <section className="section" id={id} aria-labelledby={headingId}>
      <div className="wrap">
        {/* English always sits left and Arabic right; the current language is the bold one. */}
        <h2 className="section__heading ltr-fixed" id={headingId}>
          <span lang="en" className={lang === 'en' ? 'is-active' : undefined}>
            {title.en}
          </span>
          <span lang="ar" className={lang === 'ar' ? 'is-active' : undefined}>
            {title.ar}
          </span>
        </h2>
        {children}
      </div>
    </section>
  )
}
