import { strings } from '../../content/strings'
import { useLanguage } from '../../i18n/useLanguage'
import { RichText } from '../common/RichText'
import { Section } from '../common/Section'
import './Learning.css'

export function Learning() {
  const { lang, t } = useLanguage()

  return (
    <Section id="learning" title={strings.sections.learning}>
      <p className="learning" lang={lang}>
        <RichText text={t(strings.learning)} />
      </p>
    </Section>
  )
}
