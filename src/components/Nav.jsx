import { useLang, useTheme } from '../context/hooks'
import { SUPPORTED_LANGS, t } from '../i18n/translations'
import { ArakatLogo } from './ArakatLogo'

function MoonIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
    </svg>
  )
}

function SunIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  )
}

export function Nav() {
  const { lang, setLang } = useLang()
  const { theme, toggleTheme } = useTheme()

  return (
    <nav className="nav" role="navigation">
      <a href="/" className="nav__brand" aria-label="Arakat">
        <ArakatLogo size={24} className="nav__logo" />
        <span>{t(lang, 'nav_brand')}</span>
      </a>
      <div className="nav__tools">
        <div className="lang" role="group" aria-label={t(lang, 'aria_lang')}>
          {SUPPORTED_LANGS.map((l) => (
            <button
              key={l}
              className="lang__btn"
              aria-pressed={lang === l}
              onClick={() => setLang(l)}
            >
              {l.toUpperCase()}
            </button>
          ))}
        </div>
        <button
          className="theme-btn"
          aria-label={t(lang, 'aria_theme')}
          onClick={toggleTheme}
        >
          {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
        </button>
      </div>
    </nav>
  )
}
