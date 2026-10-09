import { useState, useCallback } from 'react'
import { useLang } from '../context/hooks'
import { t } from '../i18n/translations'
import { APPS, APPS_CATEGORIES } from '../data/apps'
import { Dock } from './Dock'
import { Stage } from './Stage'

export function AppShowcase() {
  const [activeIndex, setActiveIndex] = useState(0)
  const { lang } = useLang()

  const handleSelect = useCallback((i) => {
    setActiveIndex(i)
  }, [])

  const app = APPS[activeIndex]
  const category = APPS_CATEGORIES[app.category]?.[lang] ?? app.category

  return (
    <section aria-label={t(lang, 'aria_stage')}>
      <Dock apps={APPS} activeIndex={activeIndex} onSelect={handleSelect} lang={lang} />
      <Stage key={app.id} app={app} lang={lang} category={category} />
    </section>
  )
}
