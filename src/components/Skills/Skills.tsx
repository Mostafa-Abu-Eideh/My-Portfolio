import { skillGroups } from '../../content/skills'
import { strings } from '../../content/strings'
import type { Skill } from '../../content/types'
import { useLanguage } from '../../i18n/useLanguage'
import { Section } from '../common/Section'
import './Skills.css'

const skillKey = (skill: Skill) => (typeof skill === 'string' ? skill : skill.en)

export function Skills() {
  const { lang, t } = useLanguage()

  return (
    <Section id="skills" title={strings.sections.skills}>
      {/* Set as running lines of type; bold and light weights alternate to separate the items. */}
      <dl className="skills">
        {skillGroups.map((group) => (
          <div className="skills__row" key={group.label.en}>
            <dt>{t(group.label)}</dt>
            <dd>
              {group.items.map((skill) =>
                typeof skill === 'string' ? (
                  // Technology names are Latin in both languages.
                  <span key={skillKey(skill)} dir="ltr">
                    {skill}
                  </span>
                ) : (
                  <span key={skillKey(skill)} lang={lang}>
                    {t(skill)}
                  </span>
                ),
              )}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}
