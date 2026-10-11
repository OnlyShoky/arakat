import { useLang } from '../context/hooks'
import { t } from '../i18n/translations'

export function Hero() {
  const { lang } = useLang()
  return (
    <header className="hero">
      <h1 className="hero__word">arakat</h1>
      <p className="hero__sub">{t(lang, 'hero_sub')}</p>
    </header>
  )
}
