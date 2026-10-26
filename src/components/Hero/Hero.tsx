import { useRef } from 'react'
import { profile } from '../../content/profile'
import { strings } from '../../content/strings'
import { useLanguage } from '../../i18n/useLanguage'
import { KineticName } from './KineticName'
import { useSeam } from './useSeam'
import './Hero.css'

export function Hero() {
  const { lang, t } = useLanguage()
  const heroRef = useRef<HTMLElement>(null)
  const nameRef = useRef<HTMLDivElement>(null)

  useSeam(nameRef, heroRef, lang)

  return (
    <section className="hero wrap" ref={heroRef} aria-labelledby="hero-name">
      <h1 id="hero-name" className="sr-only">
        {profile.name}
      </h1>

      <KineticName ref={nameRef} />

      {/* Both role lines are always shown; each fades in as the seam reveals its language. */}
      <div className="hero__roles ltr-fixed">
        <p className="hero__role hero__role--en" lang="en">
          {strings.hero.role.en}
        </p>
        <p className="hero__role hero__role--ar" lang="ar">
          {strings.hero.role.ar}
        </p>
      </div>

      <div className="hero__foot">
        <div className="hero__actions">
          <a className="btn btn--solid" href="#work">
            {t(strings.hero.seeWork)}
          </a>
          <a className="btn" href={profile.resumeUrl} download>
            {t(strings.hero.downloadResume)}
          </a>
        </div>
        <p className="hero__status">{t(strings.hero.status)}</p>
        <p className="hero__hint">{t(strings.hero.hint)}</p>
      </div>
    </section>
  )
}
