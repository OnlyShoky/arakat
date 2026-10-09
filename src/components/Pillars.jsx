import { useLang } from '../context/hooks'
import { t } from '../i18n/translations'

export function Pillars() {
  const { lang } = useLang()
  return (
    <section className="pillars" aria-label="Platforms">
      <div className="pillar">
        <h3 className="pillar__title">{t(lang, 'pillar_web_title')}</h3>
        <p className="pillar__desc">{t(lang, 'pillar_web_desc')}</p>
      </div>
      <div className="pillar">
        <h3 className="pillar__title">{t(lang, 'pillar_android_title')}</h3>
        <p className="pillar__desc">{t(lang, 'pillar_android_desc')}</p>
      </div>
      <div className="pillar">
        <h3 className="pillar__title">{t(lang, 'pillar_ios_title')}</h3>
        <p className="pillar__desc">{t(lang, 'pillar_ios_desc')}</p>
      </div>
    </section>
  )
}
