# vander-frontend — Claude Code Guide

## Purpose

Headless Nuxt 3 frontend for [vander.dk](https://vander.dk) — a Danish web agency one-pager. The WordPress site is the CMS/source of truth; this Nuxt app consumes it via the REST API and delivers a modern, performant experience.

## Live reference

- Production WordPress backend: https://headless.vanderweb.dk
- REST API base: https://headless.vanderweb.dk/wp-json/wp/v2

## Stack

| Layer | Technology |
|---|---|
| Framework | Nuxt 3 (hybrid rendering) |
| Styling | Tailwind CSS (`@nuxtjs/tailwindcss`) |
| WP integration | `@vanderweb/wp-nuxt-core` (local path: `../wp-nuxt-core`) |
| Scroll/utilities | `@vueuse/core` + `@vueuse/nuxt` |
| Images | `@nuxt/image` |
| Language | TypeScript strict mode |

## Rendering strategy

| Route | Strategy | Reason |
|---|---|---|
| `/` | `prerender: true` | Static home, maximum performance |
| `/**` | `ssr: true` | Dynamic pages with fresh WP data |

## Environment variables

```
WP_API_BASE=https://headless.vanderweb.dk
```

Never hardcode API URLs. Always read from `useRuntimeConfig().public.wpApiBase`.

## wp-nuxt-core — installation and auto-import

The package lives at `../wp-nuxt-core` relative to this repo and is installed as a local path dependency:

```json
"@vanderweb/wp-nuxt-core": "file:../wp-nuxt-core"
```

Its composables are registered as an auto-import directory in `nuxt.config.ts`:

```ts
imports: {
  dirs: ['../wp-nuxt-core/composables'],
},
```

This means `useWordPress()`, `useSeo()`, and `useWpImage()` are available in all pages and components **without any import statement**. Do not add manual imports for these.

### Available from useWordPress()

- `getPage(slug)` — fetch a single page by slug
- `getPages(params?)` — fetch multiple pages
- `getPost(slug)` — fetch a single post by slug
- `getPosts(params?)` — fetch multiple posts
- `getMedia(id)` — fetch a media item by ID
- `searchContent(query)` — search posts
- `getMenus()` — fetch all registered nav menus via `/wp-json/menus/v1/menus`
- `getMenu(id)` — fetch a single menu by ID

Note: `getMenus()` and `getMenu()` require the WP-REST-API V2 Menus plugin and the route must be whitelisted in the Headless plugin settings on the WordPress side.

## Folder structure

```
vander-frontend/
├── assets/css/main.css       # Tailwind + .wp-content styles
├── components/
│   ├── AppHeader.vue         # Sticky nav, fetches pages for links
│   ├── AppFooter.vue         # Company info, copyright
│   ├── VwHero.vue
│   ├── VwServices.vue
│   ├── VwPortfolio.vue
│   ├── VwSkills.vue
│   ├── VwContact.vue
│   ├── VwNavbar.vue
│   └── VwProfile.vue
├── layouts/
│   └── default.vue           # Wraps header + footer around <slot />
├── pages/
│   ├── index.vue             # Home page (prerendered)
│   └── [slug].vue            # Dynamic WP pages (SSR)
├── types/
│   └── site.ts               # NavItem, SiteConfig interfaces
├── app.vue                   # Root: NuxtLayout + NuxtPage + global meta
├── nuxt.config.ts
├── tailwind.config.ts
└── .env                      # Not committed — see .env.example
```

## Conventions

- **No inline styles** — Tailwind classes only. Scoped CSS only when Tailwind cannot do it.
- **No manual wp-nuxt-core imports** — they are auto-imported.
- **All components and pages are TypeScript** (`<script setup lang="ts">`).
- **Components are single-responsibility** — each does one thing and fetches its own data.
- **No hardcoded content** — text/data comes from WordPress or `SiteConfig`.
- **Asset URLs** point to `https://headless.vanderweb.dk/wp-content/uploads/` — do not hardcode `vander.dk`.
