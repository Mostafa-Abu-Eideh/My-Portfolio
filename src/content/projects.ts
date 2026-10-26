import { profile } from './profile'
import type { Project } from './types'

export const projects: Project[] = [
  {
    id: 'training-management',
    title: { en: 'Training Management System', ar: 'نظام إدارة التدريب' },
    description: {
      en: 'I built frontend features in Angular and the REST services behind them in Spring Boot, designed and queried the PostgreSQL database, and secured user access with JWT.',
      ar: 'طوّرت واجهات المستخدم باستخدام Angular، وخدمات REST باستخدام Spring Boot، وصمّمت قاعدة بيانات PostgreSQL واستعلاماتها، وأمّنت دخول المستخدمين باستخدام JWT.',
    },
    stack: ['Angular', 'Spring Boot', 'PostgreSQL', 'JWT'],
  },
  {
    id: 'student-management',
    title: { en: 'HighLit', ar: 'منصة HighLit' },
    description: {
      en: 'A developer community platform (graduation project). The current stack includes channels and websocket support, with future plans for student project publishing, a company portal, and a filtering system.',
      ar: 'منصة مجتمعية للمطورين (مشروع تخرّج). تدعم نشر مشاريع الطلاب وتوفير بوابة للشركات ونظام فلترة.',
    },
    stack: ['React', 'Next.js', 'Django REST', 'PostgreSQL'],
  },
  {
    id: 'portfolio',
    title: { en: 'Personal portfolio', ar: 'موقع شخصي' },
    description: {
      en: 'This site: a bilingual React app with a right-to-left Arabic mode, two colour themes and an interactive hero, built from small reusable components.',
      ar: 'هذا الموقع: تطبيق React ثنائي اللغة بوضع عربي من اليمين إلى اليسار، وثيمين للألوان، وواجهة تفاعلية، مبني من مكوّنات صغيرة قابلة لإعادة الاستخدام.',
    },
    stack: ['React', 'TypeScript', 'Vite', 'Vitest'],
    // TODO: replace with the repository URL
    repoUrl: profile.github,
  },
]
