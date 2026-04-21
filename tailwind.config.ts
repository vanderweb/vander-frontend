import type { Config } from 'tailwindcss'

export default {
  prefix: 'vw-',
  content: [
    './components/**/*.{vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
    './plugins/**/*.ts',
    './nuxt.config.ts',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: 'var(--brand-primary)',
          accent:  'var(--brand-accent)',
          dark:    '#1a1a1a',
          light:   '#ffffff',
        },
        vw: {
          slate: '#3F4B4D',
          dark:  '#232323',
          mid:   '#727272',
          card:  '#333333',
          light: '#F1F1F1',
        },
      },
      maxWidth: {
        vw: '1140px',
      },
      fontFamily: {
        sans: ['var(--brand-font)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config
