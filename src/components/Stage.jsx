import { useState } from 'react'
import { t } from '../i18n/translations'

function ScreenshotPlaceholder({ name }) {
  return (
    <div className="device__screen--placeholder">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21 15 16 10 5 21" />
      </svg>
      <span>{name}</span>
    </div>
  )
}

function PlatformRow({ label, sub, href }) {
  if (href) {
    return (
      <a className="plat" href={href} target="_blank" rel="noopener noreferrer">
        <span>{label}</span>
        <span className="plat__sub">{sub}</span>
      </a>
    )
  }
  return (
    <div className="plat plat--off">
      <span>{label}</span>
      <span className="plat__sub">{sub}</span>
    </div>
  )
}

export function Stage({ app, lang, category }) {
  const [screenshotError, setScreenshotError] = useState(false)
  const screenshotSrc = `/apps/${app.id}/screenshot.png`
  const localData = app[lang] ?? app.en
  const name = localData.name
  const desc = localData.description
  const isLive = app.status === 'live'
  const soonLabel = t(lang, 'platform_soon_suffix')

  return (
    <article
      className="stage"
      id="stage-panel"
      role="tabpanel"
      aria-labelledby={`tab-${app.id}`}
    >
      <div className="stage__info fade-in">
        <p className="stage__cat">{category}</p>
        <h2 className="stage__name">{name}</h2>
        <p className="stage__desc">{desc}</p>
        <span className={`stage__status${isLive ? ' live' : ''}`}>
          {t(lang, isLive ? 'status_live' : 'status_soon')}
        </span>

        <div className="plats">
          <PlatformRow
            label={t(lang, 'platform_web')}
            sub={app.web ? new URL(app.web).hostname : soonLabel}
            href={app.web}
          />
          <PlatformRow
            label={t(lang, 'platform_android')}
            sub={app.android ? 'Google Play' : soonLabel}
            href={app.android}
          />
          <PlatformRow
            label={t(lang, 'platform_ios')}
            sub={app.ios ? 'App Store' : soonLabel}
            href={app.ios}
          />
        </div>
      </div>

      <div className="art fade-in" aria-hidden="true">
        <div className="arch" style={{ background: `color-mix(in srgb, ${app.color} 18%, var(--arch))` }} />
        <div className="device">
          <div className="device__screen">
            {screenshotError ? (
              <ScreenshotPlaceholder name={name} />
            ) : (
              <img
                src={screenshotSrc}
                alt={t(lang, 'img_screenshot_alt', { name })}
                onError={() => setScreenshotError(true)}
                loading="lazy"
                decoding="async"
              />
            )}
          </div>
        </div>
      </div>
    </article>
  )
}
