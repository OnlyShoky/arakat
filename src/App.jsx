import { LangProvider, ThemeProvider } from './context/providers'
import { useLang } from './context/hooks'
import { t } from './i18n/translations'
import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { AppShowcase } from './components/AppShowcase'
import { Pillars } from './components/Pillars'
import { Footer } from './components/Footer'
import './index.css'

function SkipLink() {
  const { lang } = useLang()
  return (
    <a className="skip-link" href="#main-content">
      {t(lang, 'skip_link')}
    </a>
  )
}

function Page() {
  return (
    <>
      <SkipLink />
      <div className="wrap">
        <Nav />
        <main id="main-content">
          <Hero />
          <AppShowcase />
          <Pillars />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <LangProvider>
        <Page />
      </LangProvider>
    </ThemeProvider>
  )
}
