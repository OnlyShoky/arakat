import { useLang } from '../context/hooks'
import { t } from '../i18n/translations'
import { ArakatLogo } from './ArakatLogo'

export function Hero() {
  const { lang } = useLang()
  return (
    <header className="hero">
      <div className="hero__emblem">
        <ArakatLogo size={56} className="hero__logo" />
      </div>
      <h1 className="hero__word">arakat</h1>
      <p className="hero__sub">{t(lang, 'hero_sub')}</p>
    </header>
  )
}
