/**
 * apps.js — single source of truth for all Arakat apps.
 *
 * To add a new app:
 *  1. Add its light logo as  /public/apps/<id>/logo.png          (512×512 px, PNG/WebP, ≤100 KB)
 *  2. Add its dark logo as   /public/apps/<id>/logo_darkmode.png (512×512 px, PNG/WebP, ≤100 KB)
 *  3. Add its screenshot as  /public/apps/<id>/screenshot.png    (390×844 px, PNG/WebP, ≤200 KB)
 *  4. Add an entry below following the same shape.
 *  5. Run `npm run dev` or `npm run build` — done.
 *
 * Fields:
 *   id          — unique slug, matches the /public/apps/<id>/ folder name
 *   color       — accent color for the icon ring
 *   status      — 'live' | 'soon'
 *   web         — URL of the web version (null = not available)
 *   android     — Google Play URL (null = not available)
 *   ios         — App Store URL (null = not available)
 *   category    — i18n key in APPS_CATEGORIES
 *   logo        — light mode logo path (default: /apps/<id>/logo.png)
 *   logoDark    — dark mode logo path (default: /apps/<id>/logo_darkmode.png)
 *   en/es/fr    — localized name + description (description must be factual)
 */

export const APPS = [
  {
    id: 'sukun',
    color: '#5e8c78',
    status: 'live',
    web: 'https://sukun.arakat.app',
    android: 'https://play.google.com/store/apps/details?id=com.arakat.sukun',
    ios: null,
    category: 'quran',
    logo: '/apps/sukun/logo.png',
    logoDark: '/apps/sukun/logo_darkmode.png',
    en: {
      name: 'sukun',
      description:
        'The complete Qur\u02bcān without distractions. Hundreds of reciters. No ads, no accounts.',
    },
    es: {
      name: 'sukun',
      description:
        'El Corán completo sin distracciones. Cientos de recitadores. Sin anuncios ni cuentas.',
    },
    fr: {
      name: 'sukun',
      description:
        'Le Coran complet sans distractions. Des centaines de récitants. Sans pub ni compte.',
    },
  },
  // {
  //   id: 'mealprepcodex',
  //   color: '#a8844a',
  //   status: 'soon',
  //   web: null,
  //   android: null,
  //   ios: null,
  //   category: 'nutrition',
  //   en: {
  //     name: 'MealPrep Codex',
  //     description:
  //       'A curated collection of batch-cooking recipes designed for weekly meal prep. Organized by course, with clear instructions and shopping-list-friendly ingredients.',
  //   },
  //   es: {
  //     name: 'MealPrep Codex',
  //     description:
  //       'Una colección curada de recetas de batch cooking pensadas para la preparación semanal de comidas. Organizadas por plato, con instrucciones claras e ingredientes fáciles de comprar.',
  //   },
  //   fr: {
  //     name: 'MealPrep Codex',
  //     description:
  //       'Une collection curatée de recettes de batch cooking conçues pour la préparation hebdomadaire des repas. Organisées par plat, avec des instructions claires et des ingrédients pratiques.',
  //   },
  // },
  // {
  //   id: 'biopotions',
  //   color: '#6f9e6a',
  //   status: 'soon',
  //   web: null,
  //   android: null,
  //   ios: null,
  //   category: 'wellness',
  //   en: {
  //     name: 'biopotions',
  //     description:
  //       'Natural home remedies for everyday ailments, organized by body part. Multi-language, works offline with a local fallback dataset, no backend required.',
  //   },
  //   es: {
  //     name: 'biopotions',
  //     description:
  //       'Remedios caseros naturales para molestias cotidianas, organizados por parte del cuerpo. Multilingüe, funciona sin conexión con datos locales, sin backend necesario.',
  //   },
  //   fr: {
  //     name: 'biopotions',
  //     description:
  //       'Remèdes naturels maison pour les maux du quotidien, classés par partie du corps. Multilingue, fonctionne hors ligne avec des données locales, sans backend requis.',
  //   },
  // },
  // {
  //   id: 'myramyrror',
  //   color: '#6f7fa6',
  //   status: 'soon',
  //   web: null,
  //   android: null,
  //   ios: null,
  //   category: 'fashion',
  //   en: {
  //     name: 'MyraMyrror',
  //     description:
  //       'AI-powered virtual try-on for online shopping. Upload your photo once, then try on clothes across major fashion retailers directly from your browser via a Chrome or Firefox extension.',
  //   },
  //   es: {
  //     name: 'MyraMyrror',
  //     description:
  //       'Probador virtual impulsado por IA para compras en línea. Sube tu foto una vez y pruébate ropa en las principales tiendas de moda directamente desde tu navegador, con una extensión para Chrome o Firefox.',
  //   },
  //   fr: {
  //     name: 'MyraMyrror',
  //     description:
  //       'Cabine d\'essayage virtuelle alimentée par IA pour le shopping en ligne. Téléchargez votre photo une fois, puis essayez des vêtements chez les principaux retailers de mode directement depuis votre navigateur, via une extension Chrome ou Firefox.',
  //   },
  // },
]

export const APPS_CATEGORIES = {
  quran: { en: 'Qur\u02bcān audio', es: 'Corán en audio', fr: 'Coran en audio' },
  nutrition: { en: 'Nutrition', es: 'Nutrición', fr: 'Nutrition' },
  wellness: { en: 'Wellness', es: 'Bienestar', fr: 'Bien-être' },
  fashion: { en: 'Fashion tech', es: 'Moda tech', fr: 'Mode & tech' },
}
