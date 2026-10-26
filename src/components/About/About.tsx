import { strings } from '../../content/strings'
import { useLanguage } from '../../i18n/useLanguage'
import { RichText } from '../common/RichText'
import { Section } from '../common/Section'
import './About.css'

export function About() {
  const { lang, t } = useLanguage()

  return (
    <Section id="about" title={strings.sections.about}>
      <div className="about">
        <p className="about__statement" lang={lang}>
          <RichText text={t(strings.about.statement)} />
        </p>

        <dl className="about__facts">
          {strings.about.facts.map((fact) => (
            <div key={fact.label.en}>
              <dt>{t(fact.label)}</dt>
              <dd>{t(fact.value)}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  )
}
