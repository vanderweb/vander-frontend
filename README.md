# vander-frontend

Headless Nuxt 3 frontend for [vander.dk](https://vander.dk), consuming WordPress via REST API.

## Requirements

- Node.js 20+
- A running WordPress install at the URL set in `WP_API_BASE`
- `../wp-nuxt-core` checked out alongside this repo

## Setup

```bash
# 1. Clone the repo
git clone git@github.com:vanderweb/vander-frontend.git
cd vander-frontend

# 2. Copy env and fill in values
cp .env.example .env

# 3. Install dependencies
npm install

# 4. Start dev server
npm run dev
```

The app will be available at http://localhost:3000.

## Environment variables

| Variable | Description |
|---|---|
| `WP_API_BASE` | WordPress REST API base URL, e.g. `https://vander.dk/wp-json/wp/v2` |

## wp-nuxt-core

The shared composables package is installed from a local path:

```json
"@vanderweb/wp-nuxt-core": "file:../wp-nuxt-core"
```

Both repos must be sibling directories:

```
projekter/
├── vander-frontend/   ← this repo
└── wp-nuxt-core/      ← must exist here
```

### Updating wp-nuxt-core

After making changes in `../wp-nuxt-core`, re-run `npm install` to pick up the latest:

```bash
npm install
```

To switch from local path to a GitHub/npm install, update `package.json`:

```json
"@vanderweb/wp-nuxt-core": "github:vanderweb/wp-nuxt-core"
// or
"@vanderweb/wp-nuxt-core": "^1.0.0"
```

Then run `npm install`.

## Build and deploy

```bash
# SSR build (Node server required)
npm run build
node .output/server/index.mjs

# Static generation (prerendered routes only)
npm run generate
```

### Rendering strategy

| Route | Mode | Notes |
|---|---|---|
| `/` | Prerendered | Built at deploy time — zero server cost |
| `/**` | SSR | Fresh content from WordPress on each request |

For full static deploys (e.g. Netlify/Vercel with no Node server), switch all routes to `prerender: true` in `nuxt.config.ts` and use `npm run generate`.
