// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',

  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@nuxt/image',
  ],

  css: ['~/assets/css/main.css'],

  runtimeConfig: {
    public: {
      wpApiBase: process.env.WP_API_BASE,
    },
  },

  imports: {
    dirs: ['../wp-nuxt-core/composables'],
  },

  routeRules: {
    '/': { prerender: true },
    '/**': { ssr: true },
  },

  typescript: {
    strict: true,
  },
})
