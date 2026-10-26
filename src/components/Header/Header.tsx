import { profile } from '../../content/profile'
import { strings } from '../../content/strings'
import { useScrolled } from '../../hooks/useScrolled'
import { useLanguage } from '../../i18n/useLanguage'
import { LanguageToggle } from './LanguageToggle'
import { ThemeToggle } from './ThemeToggle'
import './Header.css'

const navItems = [
  { href: '#about', label: strings.nav.about },
  { href: '#skills', label: strings.nav.skills },
  { href: '#work', label: strings.nav.work },
  { href: '#contact', label: strings.nav.contact },
]

export function Header() {
  const { t } = useLanguage()
  const scrolled = useScrolled()

  return (
    <header id="top" className={`header${scrolled ? ' header--scrolled' : ''}`}>
      <div className="wrap header__bar">
        <a className="header__mark" href="#top">
          {profile.name}
        </a>

        <nav className="header__nav" aria-label={t(strings.nav.label)}>
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {t(item.label)}
            </a>
          ))}
        </nav>

        <div className="header__tools">
          <ThemeToggle />
          <LanguageToggle />
        </div>
      </div>
    </header>
  )
}
