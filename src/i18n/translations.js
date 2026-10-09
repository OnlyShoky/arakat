export const translations = {
  en: {
    nav_brand: 'arakat.app',
    hero_sub: 'Apps and games with nothing to prove. Useful, free and free of noise.',
    pillar_web_title: 'Web',
    pillar_web_desc: 'Open any app from its subdomain, nothing to install.',
    pillar_android_title: 'Android',
    pillar_android_desc: 'Get it on Google Play and use it without a constant connection.',
    pillar_ios_title: 'iOS',
    pillar_ios_desc: 'Coming soon for iPhone and iPad.',
    status_live: 'Available',
    status_soon: 'Coming soon',
    platform_web: 'Web',
    platform_android: 'Android',
    platform_ios: 'iOS',
    platform_soon_suffix: 'soon',
    footer_privacy: 'Privacy',
    footer_contact: 'Contact',
    footer_copyright: '© 2026 Arakat',
    aria_dock: 'App gallery',
    aria_stage: 'App details',
    aria_theme: 'Toggle theme',
    aria_lang: 'Language',
    skip_link: 'Skip to content',
    img_logo_alt: '{name} logo',
    img_screenshot_alt: '{name} screenshot',
  },
  es: {
    nav_brand: 'arakat.app',
    hero_sub: 'Aplicaciones y juegos que no tienen nada que demostrar. Útiles, gratuitas y sin ruido.',
    pillar_web_title: 'Web',
    pillar_web_desc: 'Abre cualquier app desde su subdominio, sin instalar nada.',
    pillar_android_title: 'Android',
    pillar_android_desc: 'Descárgala en Google Play y úsala sin conexión constante.',
    pillar_ios_title: 'iOS',
    pillar_ios_desc: 'En camino para iPhone y iPad.',
    status_live: 'Disponible',
    status_soon: 'En camino',
    platform_web: 'Web',
    platform_android: 'Android',
    platform_ios: 'iOS',
    platform_soon_suffix: 'pronto',
    footer_privacy: 'Privacidad',
    footer_contact: 'Contacto',
    footer_copyright: '© 2026 Arakat',
    aria_dock: 'Galería de apps',
    aria_stage: 'Detalles de la app',
    aria_theme: 'Cambiar tema',
    aria_lang: 'Idioma',
    skip_link: 'Saltar al contenido',
    img_logo_alt: 'Logo de {name}',
    img_screenshot_alt: 'Captura de {name}',
  },
  fr: {
    nav_brand: 'arakat.app',
    hero_sub: 'Des applications et des jeux qui n\'ont rien à prouver. Utiles, gratuits et sans bruit.',
    pillar_web_title: 'Web',
    pillar_web_desc: 'Ouvrez chaque app depuis son sous-domaine, sans rien installer.',
    pillar_android_title: 'Android',
    pillar_android_desc: 'Téléchargez-la sur Google Play et utilisez-la sans connexion permanente.',
    pillar_ios_title: 'iOS',
    pillar_ios_desc: 'Bientôt pour iPhone et iPad.',
    status_live: 'Disponible',
    status_soon: 'À venir',
    platform_web: 'Web',
    platform_android: 'Android',
    platform_ios: 'iOS',
    platform_soon_suffix: 'bientôt',
    footer_privacy: 'Confidentialité',
    footer_contact: 'Contact',
    footer_copyright: '© 2026 Arakat',
    aria_dock: 'Galerie d\'apps',
    aria_stage: 'Détails de l\'app',
    aria_theme: 'Changer de thème',
    aria_lang: 'Langue',
    skip_link: 'Aller au contenu',
    img_logo_alt: 'Logo {name}',
    img_screenshot_alt: 'Capture d\'écran de {name}',
  },
}

export const SUPPORTED_LANGS = ['en', 'es', 'fr']
export const DEFAULT_LANG = 'en'

export function detectLang() {
  const stored = localStorage.getItem('arakat-lang')
  if (stored && SUPPORTED_LANGS.includes(stored)) return stored
  const browser = (navigator.language || 'en').slice(0, 2).toLowerCase()
  return SUPPORTED_LANGS.includes(browser) ? browser : DEFAULT_LANG
}

export function t(lang, key, vars = {}) {
  const str = translations[lang]?.[key] ?? translations.en[key] ?? key
  return Object.entries(vars).reduce(
    (s, [k, v]) => s.replace(`{${k}}`, v),
    str
  )
}
