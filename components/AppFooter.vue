<template>
  <footer class="vw-bg-vw-slate vw-text-vw-light">
    <div class="vw-max-w-vw vw-mx-auto vw-px-4 sm:vw-px-6 lg:vw-px-8 vw-py-12">
      <div class="vw-grid vw-grid-cols-1 md:vw-grid-cols-3 vw-gap-8">
        <div>
          <img v-if="footer.logoUrl" :src="footer.logoUrl" :alt="footer.logoAlt || 'Logo'" class="vw-h-8 vw-w-auto vw-mb-3" />
          <p v-if="footer.tagline" class="vw-text-gray-400 vw-text-sm vw-leading-relaxed">{{ footer.tagline }}</p>
        </div>
        <div
          v-for="(col, i) in footer.columns"
          :key="i"
        >
          <p class="vw-font-semibold vw-text-sm vw-uppercase vw-tracking-wider vw-text-gray-400 vw-mb-3">{{ col.heading }}</p>
          <ul class="vw-space-y-2 vw-text-sm vw-text-gray-300">
            <li v-for="(link, j) in col.links" :key="j">
              <NuxtLink :to="link.url" class="hover:vw-text-brand-accent vw-transition-colors">{{ link.label }}</NuxtLink>
            </li>
          </ul>
        </div>
      </div>

      <div v-if="footer.socialLinks?.length" class="vw-flex vw-gap-4 vw-mt-8">
        <a
          v-for="social in footer.socialLinks"
          :key="social.platform"
          :href="social.url"
          target="_blank"
          rel="noopener noreferrer"
          :aria-label="social.platform"
          class="vw-text-gray-400 hover:vw-text-white vw-transition-colors"
        >
          <svg class="vw-w-5 vw-h-5" fill="currentColor" viewBox="0 0 24 24">
            <path v-if="social.platform === 'facebook'" d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
            <path v-else-if="social.platform === 'instagram'" d="M16 2H8a6 6 0 00-6 6v8a6 6 0 006 6h8a6 6 0 006-6V8a6 6 0 00-6-6zm4 14a4 4 0 01-4 4H8a4 4 0 01-4-4V8a4 4 0 014-4h8a4 4 0 014 4v8zm-8-9a5 5 0 100 10A5 5 0 0012 7zm0 8a3 3 0 110-6 3 3 0 010 6zm5-9a1 1 0 100 2 1 1 0 000-2z"/>
            <path v-else-if="social.platform === 'linkedin'" d="M19 0h-14C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM8 19H5V9h3v10zM6.5 7.75A1.75 1.75 0 118.25 6 1.75 1.75 0 016.5 7.75zM19 19h-3v-5.5c0-1.38-.56-2.5-2-2.5s-2 1.12-2 2.5V19h-3V9h3v1.26C12.7 9.46 13.8 9 15 9c2.21 0 4 1.79 4 4v6z"/>
            <path v-else d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        </a>
      </div>

      <div class="vw-border-t vw-border-gray-800 vw-mt-10 vw-pt-6 vw-text-center vw-text-xs vw-text-gray-600">
        {{ footer.bottomText || `© ${currentYear} Vander` }}
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import type { VanderFooterSettings } from '@vanderweb/wp-nuxt-core'

const currentYear = new Date().getFullYear()

const FOOTER_DEFAULTS: VanderFooterSettings = {
  logoUrl: '', logoAlt: '', tagline: '', columns: [], bottomText: '', socialLinks: [],
}

const { getSettings } = useVanderSettings()
const { data: settings } = await useAsyncData('vander-settings-footer', getSettings)
const footer = computed(() => ({ ...FOOTER_DEFAULTS, ...settings.value?.footer }))
</script>
