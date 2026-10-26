import { About } from './components/About/About'
import { Contact } from './components/Contact/Contact'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Hero } from './components/Hero/Hero'
import { LanguageCurtain } from './components/LanguageCurtain/LanguageCurtain'
import { Learning } from './components/Learning/Learning'
import { Projects } from './components/Projects/Projects'
import { Skills } from './components/Skills/Skills'
import { LanguageProvider } from './i18n/LanguageProvider'
import { ThemeProvider } from './theme/ThemeProvider'

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Learning />
          <Contact />
        </main>
        <Footer />
        <LanguageCurtain />
      </LanguageProvider>
    </ThemeProvider>
  )
}
