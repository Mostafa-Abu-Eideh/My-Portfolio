// Interface copy in both languages.
// Text wrapped in **double asterisks** is rendered bold by <RichText>.

export const strings = {
  documentTitle: {
    en: 'Mostafa Abu Eideh, full-stack developer',
    ar: 'مصطفى، مطوّر ويب متكامل',
  },

  nav: {
    label: { en: 'Sections', ar: 'الأقسام' },
    about: { en: 'About', ar: 'نبذة' },
    skills: { en: 'Skills', ar: 'المهارات' },
    work: { en: 'Work', ar: 'الأعمال' },
    contact: { en: 'Contact', ar: 'تواصل' },
  },

  toggles: {
    language: {
      toArabic: { label: 'عربي', aria: 'Read this page in Arabic' },
      toEnglish: { label: 'English', aria: 'اقرأ الصفحة بالإنجليزية' },
    },
    // Each entry describes switching *to* that theme.
    theme: {
      black: {
        label: { en: 'Black', ar: 'أسود' },
        aria: { en: 'Switch to the black theme', ar: 'التبديل إلى الثيم الأسود' },
      },
      pine: {
        label: { en: 'Pine', ar: 'صنوبري' },
        aria: { en: 'Switch to the pine theme', ar: 'التبديل إلى ثيم الصنوبر' },
      },
    },
  },

  hero: {
    role: {
      en: 'Junior full-stack developer and recent Computer Science graduate.',
      ar: 'مطوّر ويب متكامل (Full-Stack) وخريج علوم حاسوب حديثاً.',
    },
    seeWork: { en: 'See my work', ar: 'شاهد أعمالي' },
    downloadResume: { en: 'Download Resume', ar: 'تحميل السيرة الذاتية' },
    status: { en: 'Open to internships and junior roles', ar: 'متاح لفرص التدريب والوظائف للمبتدئين' },
    hint: {
      en: 'Move or drag across my name to read it both ways.',
      ar: 'مرّر المؤشر أو اسحب فوق الاسم لتقرأه في الاتجاهين.',
    },
  },

  sections: {
    about: { en: 'About', ar: 'نبذة' },
    skills: { en: 'Skills', ar: 'مهارات' },
    work: { en: 'Work', ar: 'أعمال' },
    learning: { en: 'Learning', ar: 'أتعلّم' },
    contact: { en: 'Contact', ar: 'تواصل' },
  },

  about: {
    statement: {
      en: 'I’m Mostafa, a Computer Science graduate who builds web apps end to end: **Angular or React** on the front, **Spring Boot and PostgreSQL** behind it. I care about clean architecture and code that is easy to read, test and grow.',
      ar: 'أنا مصطفى، خريج علوم حاسوب أبني تطبيقات الويب من الواجهة حتى قاعدة البيانات: **Angular** أو **React** في الواجهة، و**Spring Boot** مع **PostgreSQL** في الخلفية. يهمّني أن تكون البنية نظيفة، وأن يبقى الكود سهل القراءة والاختبار والتوسّع.',
    },
    facts: [
      {
        label: { en: 'Studied', ar: 'الدراسة' },
        value: { en: 'Computer Science, recent graduate', ar: 'علوم الحاسوب، تخرّج حديث' },
      },
      {
        label: { en: 'Focus', ar: 'التركيز' },
        value: { en: 'Full-stack web applications', ar: 'تطبيقات الويب المتكاملة' },
      },
      {
        label: { en: 'Looking for', ar: 'أبحث عن' },
        value: { en: 'Internships and junior developer roles', ar: 'فرص تدريب ووظائف مطوّر مبتدئ' },
      },
      {
        label: { en: 'Languages', ar: 'اللغات' },
        value: { en: 'Arabic and English', ar: 'العربية والإنجليزية' },
      },
    ],
  },

  projects: {
    onGitHub: { en: 'On GitHub', ar: 'على GitHub' },
  },

  learning: {
    en: 'Right now I’m learning **NodeJS**, and reading about **system design**, so the next thing I ship is easier to run and harder to break.',
    ar: 'أتعلّم حالياً **NodeJS**، وأقرأ عن **تصميم الأنظمة**، كي يكون مشروعي القادم أسهل في التشغيل وأصعب في الكسر.',
  },

  contact: {
    lede: {
      en: 'Hiring for an internship or junior role, or have a project in mind? Email me. I reply in Arabic or English.',
      ar: 'لديك فرصة تدريب أو وظيفة لمطوّر مبتدئ، أو فكرة مشروع؟ راسلني، وسأردّ بالعربية أو الإنجليزية.',
    },
    resume: { en: 'Resume (PDF)', ar: 'السيرة الذاتية (PDF)' },
    copyEmail: { en: 'Copy email', ar: 'نسخ البريد' },
    copied: { en: 'Copied', ar: 'تم النسخ' },
  },

} as const
