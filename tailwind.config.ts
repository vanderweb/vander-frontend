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
          dark: '#1a1a1a',
          light: '#ffffff',
          accent: '#e63329',
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
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config
