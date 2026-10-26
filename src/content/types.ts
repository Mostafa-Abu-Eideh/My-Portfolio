export type Lang = 'en' | 'ar'

/** A piece of text written in both languages. */
export type Bilingual = Record<Lang, string>

/** A skill is either a name that reads the same in both languages, or a translated label. */
export type Skill = string | Bilingual

export interface SkillGroup {
  label: Bilingual
  items: Skill[]
}

export interface Project {
  id: string
  title: Bilingual
  description: Bilingual
  stack: string[]
  repoUrl?: string
}
