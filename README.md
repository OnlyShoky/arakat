# Arakat (`arakat.app`)

Vitrina minimalista y escaparate oficial del estudio de aplicaciones y juegos **Arakat** ([https://arakat.app](https://arakat.app)).

Cada app de Arakat vive en su propio subdominio (`x.arakat.app`) y está orientada a múltiples plataformas (**Web**, **Android** e **iOS**). La web explica el catálogo de un vistazo, permite explorar cada aplicación de forma interactiva y enlaza directamente a cada versión.

---

## 🏛 Principios de diseño

- **Estética Escaparate**: Fiel al diseño de referencia (`mockups/arakat-v3-escaparate.html`). Tipografía editorial clásica (*Cormorant Garamond*) combinada con una sans-serif legible (*Karla*), paleta azul tinta/pergamino y acentos dorados/latón (`#a8844a`).
- **Dock interactivo y escenario**: Selector de aplicaciones tipo dock con iconos fluidos que actualiza el escenario central en tiempo real, con mockup de dispositivo móvil sobre arco arquitectónico y ficha de información de la app.
- **Multilingüe nativo**: Soporte completo para **Inglés (EN)**, **Español (ES)** y **Francés (FR)** con autodetección según navegador y persistencia en `localStorage`.
- **Tema Claro / Oscuro**: Detección automática de preferencia del sistema (`prefers-color-scheme`) y botón de conmutación manual con persistencia.
- **Accesibilidad (a11y)**: Navegación accesible con teclado, atributos ARIA completos (`role="tablist"`, `role="tab"`, `role="tabpanel"`), enlaces de salto (`skip-link`), y respeto por `prefers-reduced-motion`.
- **Rendimiento extremo**: Sin dependencias pesadas ni frameworks CSS runtime. Carga ultrarrápida, bundle optimizado con Vite, e imágenes comprimidas en alta resolución.

---

## 📁 Estructura del proyecto

```text
arakat/
├── public/
│   ├── apps/                    # Assets por cada aplicación (logo y screenshot)
│   │   ├── sukun/
│   │   ├── mealprepcodex/
│   │   ├── biopotions/
│   │   └── myramyrror/
│   ├── og/
│   │   └── og-image.png         # Imagen Open Graph 1200×630
│   ├── favicon.svg              # Favicon vectorial
│   ├── favicon-32.png           # Favicon PNG 32×32
│   ├── apple-touch-icon.png     # Icono táctil Apple 180×180
│   ├── privacy-policy.html      # Política de privacidad estática ligera
│   ├── robots.txt               # Directivas para rastreadores
│   └── sitemap.xml              # Mapa del sitio con soporte multilingüe
├── src/
│   ├── components/
│   │   ├── AppShowcase.jsx      # Contenedor del selector y escenario
│   │   ├── Dock.jsx             # Barra de navegación dock con iconos
│   │   ├── Stage.jsx            # Escenario con mockup de móvil y plataformas
│   │   ├── Hero.jsx             # Título editorial y subtítulo
│   │   ├── Nav.jsx              # Barra superior con selector de idioma y tema
│   │   ├── Pillars.jsx          # Sección de los 3 pilares (Web, Android, iOS)
│   │   └── Footer.jsx           # Pie de página y enlaces
│   ├── context/
│   │   ├── contexts.js          # Contextos React (LangContext, ThemeContext)
│   │   ├── hooks.js             # Hooks (useLang, useTheme)
│   │   └── providers.jsx        # Providers de idioma y tema
│   ├── data/
│   │   └── apps.js              # Fuente única de verdad de las aplicaciones
│   ├── i18n/
│   │   └── translations.js      # Diccionario de traducciones (EN, ES, FR)
│   ├── App.jsx                  # Raíz de la aplicación
│   ├── index.css                # Sistema de diseño con tokens CSS
│   └── main.jsx                 # Punto de entrada de React
├── netlify.toml                 # Configuración de despliegue en Netlify
├── vite.config.js               # Configuración de Vite con rolldown / manualChunks
└── package.json
```

---

## 🚀 Cómo añadir una nueva aplicación

El catálogo se gestiona de forma centralizada en [`src/data/apps.js`](file:///D:/Proyectos/Webpages/arakat/src/data/apps.js):

1. **Logo**: Añade el icono en `/public/apps/<id>/logo.png` (512×512 px, PNG/WebP, ≤100 KB).
2. **Screenshot**: Añade la captura o mockup en `/public/apps/<id>/screenshot.png` (390×844 px o 750×1334 px, ≤200 KB).
3. **Registro**: Añade una entrada en `APPS` en `src/data/apps.js`:
   ```javascript
   {
     id: 'mi-app',
     color: '#5e8c78',
     status: 'live', // 'live' | 'soon'
     web: 'https://miapp.arakat.app',
     android: 'https://play.google.com/store/apps/details?id=com.arakat.miapp',
     ios: null,
     category: 'quran', // clave registrada en APPS_CATEGORIES
     en: { name: 'Mi App', description: 'Factual description...' },
     es: { name: 'Mi App', description: 'Descripción objetiva...' },
     fr: { name: 'Mi App', description: 'Description factuelle...' },
   }
   ```
4. Ejecuta `npm run build` o `npm run dev` y la nueva app aparecerá inmediatamente en el dock y en el escenario interactivo.

---

## 🛠 Comandos disponibles

| Comando | Acción |
| --- | --- |
| `npm run dev` | Inicia el servidor de desarrollo local en `http://localhost:5175` |
| `npm run build` | Compila el bundle de producción en el directorio `dist/` |
| `npm run preview` | Previsualiza localmente el build de producción |
| `npm run lint` | Ejecuta el linter rápido `oxlint` (0 advertencias, 0 errores) |

---

## 🌐 Despliegue en producción

El proyecto está configurado para desplegarse como sitio estático optimizado en cualquier plataforma:

- **Netlify**: Incluye [`netlify.toml`](file:///D:/Proyectos/Webpages/arakat/netlify.toml) preconfigurado con encabezados de seguridad (`X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`), compresión y caché inmutable de 1 año para assets estáticos.
- **Vercel / Cloudflare Pages / GitHub Pages**: Simplemente apuntar el directorio de publicación a `dist/` con comando `npm run build`.

---

## 📝 Decisiones técnicas tomadas

1. **React 19 + Vite 8**: Scaffolding moderno, compilación instantánea y HMR ultrarrápido con `@vitejs/plugin-react`.
2. **Separación limpia de Hooks y Contextos**: Los contextos y hooks se organizaron en módulos independientes (`contexts.js`, `hooks.js`, `providers.jsx`) asegurando compatibilidad completa con React Fast Refresh y cero advertencias de linter (`oxlint`).
3. **Vanilla CSS con Custom Properties**: Control milimétrico de la estética sin sobrecarga de dependencias ni clases utilitarias redundantes.
4. **Mockups UI de alta resolución para próximas apps**: Se integraron capturas nítidas y optimizadas (< 200 KB) para *MealPrep Codex*, *Biopotions* y *MyraMyrror*, evitando pantallas vacías o 404 al navegar por el dock.
5. **SEO & Metadatos completos**: Canonical, alternate hreflang para EN/ES/FR, Twitter Card, Open Graph con imagen dedicada de 1200×630, e Schema.org `Organization` estructurado.
