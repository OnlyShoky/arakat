import { useState } from 'react'
import { t } from '../i18n/translations'

function FallbackIcon({ color, name }) {
  const initial = name?.charAt(0)?.toUpperCase() ?? '?'
  return (
    <div
      className="dock__ic--placeholder"
      style={{
        background: `${color}22`,
        color,
        fontSize: 26,
        fontWeight: 700,
        fontFamily: 'var(--font-serif)',
        borderRadius: 'var(--radius-icon)',
      }}
      aria-hidden="true"
    >
      {initial}
    </div>
  )
}

function AppIcon({ app, lang }) {
  const [hasError, setHasError] = useState(false)
  const logoSrc = `/apps/${app.id}/logo.png`
  const name = app[lang]?.name ?? app.en.name
  const altText = t(lang, 'img_logo_alt', { name })

  if (hasError) {
    return <FallbackIcon color={app.color} name={name} />
  }

  return (
    <img
      src={logoSrc}
      alt={altText}
      onError={() => setHasError(true)}
      loading="lazy"
      decoding="async"
    />
  )
}

export function Dock({ apps, activeIndex, onSelect, lang }) {
  return (
    <div className="dock" role="tablist" aria-label={t(lang, 'aria_dock')}>
      {apps.map((app, i) => {
        const name = app[lang]?.name ?? app.en.name
        const isSelected = i === activeIndex
        return (
          <button
            key={app.id}
            role="tab"
            className={`dock__btn${app.status === 'soon' ? ' soon' : ''}`}
            aria-selected={isSelected}
            aria-controls="stage-panel"
            id={`tab-${app.id}`}
            onClick={() => onSelect(i)}
          >
            <div className="dock__ic">
              <AppIcon app={app} lang={lang} />
            </div>
            <span>{name}</span>
          </button>
        )
      })}
    </div>
  )
}
