import { useLang } from '../context/hooks'
import { t } from '../i18n/translations'
import { ArakatLogo } from './ArakatLogo'

export function Footer() {
  const { lang } = useLang()
  return (
    <footer className="footer">
      <div className="footer__brand">
        <ArakatLogo size={18} className="footer__logo" />
        <span>{t(lang, 'footer_copyright')}</span>
      </div>
      <nav className="footer__nav" aria-label="Footer links">
        <a href="/privacy-policy.html">{t(lang, 'footer_privacy')}</a>
        <a href="mailto:arakat.contact@gmail.com">{t(lang, 'footer_contact')}</a>
      </nav>
    </footer>
  )
}
