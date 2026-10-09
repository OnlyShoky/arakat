import { useState, useEffect } from 'react'
import { detectLang, SUPPORTED_LANGS } from '../i18n/translations'
import { LangContext, ThemeContext } from './contexts'

export function LangProvider({ children }) {
  const [lang, setLangState] = useState(() => detectLang())

  function setLang(l) {
    if (!SUPPORTED_LANGS.includes(l)) return
    setLangState(l)
    localStorage.setItem('arakat-lang', l)
    document.documentElement.lang = l
  }

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>
}

export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState(() => {
    const stored = localStorage.getItem('arakat-theme')
    if (stored === 'light' || stored === 'dark') return stored
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })

  function setTheme(t) {
    setThemeState(t)
    localStorage.setItem('arakat-theme', t)
    document.documentElement.setAttribute('data-theme', t)
  }

  function toggleTheme() {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  // Sync with system preference when it changes
  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const handler = (e) => {
      if (!localStorage.getItem('arakat-theme')) {
        setThemeState(e.matches ? 'dark' : 'light')
      }
    }
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
