import type { SkillGroup } from './types'

export const skillGroups: SkillGroup[] = [
  {
    label: { en: 'Languages and core CS', ar: 'اللغات وأساسيات الحوسبة' },
    items: [
      'Java',
      'C++',
      'JavaScript',
      'SQL',
      { en: 'OOP', ar: 'البرمجة الكائنية' },
      { en: 'Data structures & algorithms', ar: 'هياكل البيانات والخوارزميات' },
    ],
  },
  {
    label: { en: 'Frontend', ar: 'الواجهات' },
    items: ['React', 'Angular', 'TypeScript', 'Tailwind CSS', 'HTML/CSS', 'Bootstrap', 'Figma'],
  },
  {
    label: { en: 'Backend and data', ar: 'الخلفية وقواعد البيانات' },
    items: ['Spring Boot', 'REST APIs', { en: 'JWT auth', ar: 'مصادقة JWT' }, 'PostgreSQL', 'MySQL'],
  },
  {
    label: { en: 'Tools', ar: 'الأدوات' },
    items: ['Git & GitHub', 'Postman', 'VS Code', 'Vitest'],
  },
]
