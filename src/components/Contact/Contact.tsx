import { profile } from '../../content/profile'
import { strings } from '../../content/strings'
import { useLanguage } from '../../i18n/useLanguage'
import { Section } from '../common/Section'
import { CopyEmailButton } from './CopyEmailButton'
import { EmailLink } from './EmailLink'
import './Contact.css'

export function Contact() {
  const { t } = useLanguage()

  return (
    <Section id="contact" title={strings.sections.contact}>
      <p className="contact__lede">{t(strings.contact.lede)}</p>

      <EmailLink email={profile.email} />

      <div className="contact__links">
        <a className="btn" href={profile.github} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a className="btn" href={profile.linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a className="btn" href={profile.resumeUrl} target="_blank" rel="noopener noreferrer">
          {t(strings.contact.resume)}
        </a>
        <CopyEmailButton email={profile.email} />
      </div>
    </Section>
  )
}
