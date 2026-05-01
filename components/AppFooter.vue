<template>
  <footer class="vw-bg-white vw-border-t vw-border-gray-900">
    <!-- Main grid: brand col + nav columns -->
    <div class="vw-max-w-[1140px] vw-mx-auto vw-px-7 lg:vw-px-10 vw-pt-10 vw-pb-8">
      <div class="vw-grid vw-grid-cols-1 md:vw-grid-cols-[1.4fr_repeat(4,1fr)] vw-gap-8">
        <!-- Brand column -->
        <div>
          <NuxtLink to="/">
            <img v-if="footer.logoUrl" :src="footer.logoUrl" :alt="footer.logoAlt || 'Logo'" class="vw-h-7 vw-w-auto vw-mb-4" />
            <span v-else class="vw-font-bold vw-text-gray-900 vw-text-base vw-tracking-tight vw-mb-4 vw-block">◆ STUDIO</span>
          </NuxtLink>

          <p v-if="footer.tagline" class="vw-text-[13px] vw-text-gray-600 vw-leading-relaxed vw-mb-3">{{ footer.tagline }}</p>

          <div v-if="footer.address || footer.contactPhone || footer.contactEmail" class="vw-text-[12px] vw-text-gray-500 vw-leading-relaxed vw-mb-4 vw-space-y-0.5">
            <p v-if="footer.address">{{ footer.address }}</p>
            <a v-if="footer.contactEmail" :href="`mailto:${footer.contactEmail}`" class="vw-block hover:vw-text-gray-900 vw-transition-colors">{{ footer.contactEmail }}</a>
          </div>

          <div v-if="footer.socialLinks?.length" class="vw-flex vw-gap-3">
            <a
              v-for="social in footer.socialLinks"
              :key="social.platform"
              :href="social.url"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="social.platform"
              class="vw-text-gray-400 hover:vw-text-gray-900 vw-transition-colors"
            >
              <!-- Instagram -->
              <svg v-if="social.platform === 'instagram'" class="vw-w-4 vw-h-4" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 16 16">
                <rect x="2" y="2" width="12" height="12" rx="3"/>
                <circle cx="8" cy="8" r="2.5"/>
                <circle cx="11.5" cy="4.5" r=".4" fill="currentColor"/>
              </svg>
              <!-- LinkedIn -->
              <svg v-else-if="social.platform === 'linkedin'" class="vw-w-4 vw-h-4" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" viewBox="0 0 16 16">
                <rect x="2" y="2" width="12" height="12"/>
                <path d="M5 7v5M5 5v.01M8 12V7M11 12V9.5a1.5 1.5 0 0 0-3 0"/>
              </svg>
              <!-- X / Twitter -->
              <svg v-else-if="social.platform === 'x'" class="vw-w-4 vw-h-4" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" viewBox="0 0 16 16">
                <path d="M2 3l5 6-5 4M14 3 9 9l5 4"/>
              </svg>
              <!-- Facebook -->
              <svg v-else class="vw-w-4 vw-h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- Nav columns -->
        <div v-for="(col, i) in footer.columns" :key="i">
          <p class="vw-font-mono vw-text-[9px] vw-tracking-[0.12em] vw-uppercase vw-text-gray-400 vw-mb-4">{{ col.heading }}</p>
          <ul class="vw-space-y-2.5">
            <li v-for="(link, j) in col.links" :key="j">
              <NuxtLink :to="link.url" class="vw-text-[13px] vw-text-gray-700 hover:vw-text-gray-900 vw-transition-colors">{{ link.label }}</NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Mobile accordion for nav columns (small screens) -->
    <div class="vw-md:vw-hidden">
      <!-- handled by grid collapse above -->
    </div>

    <!-- Legal strip -->
    <div class="vw-border-t vw-border-gray-900/10">
      <div class="vw-max-w-[1140px] vw-mx-auto vw-px-7 lg:vw-px-10 vw-py-4 vw-flex vw-flex-col sm:vw-flex-row vw-items-center vw-justify-between vw-gap-3">
        <span class="vw-font-mono vw-text-[9px] vw-tracking-[0.08em] vw-uppercase vw-text-gray-400">
          {{ footer.bottomText || `© ${currentYear} Studio` }}
        </span>
        <div class="vw-flex vw-gap-5 vw-font-mono vw-text-[9px] vw-tracking-[0.08em] vw-uppercase vw-text-gray-400">
          <span class="hover:vw-text-gray-900 vw-cursor-pointer vw-transition-colors">Privacy</span>
          <span class="hover:vw-text-gray-900 vw-cursor-pointer vw-transition-colors">Terms</span>
          <span class="hover:vw-text-gray-900 vw-cursor-pointer vw-transition-colors">Cookies</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import type { VanderFooterSettings } from '@vanderweb/wp-nuxt-core'

const currentYear = new Date().getFullYear()

const FOOTER_DEFAULTS: VanderFooterSettings = {
  logoUrl: '', logoAlt: '', tagline: '',
  address: '', contactPhone: '', contactEmail: '',
  columns: [], bottomText: '', socialLinks: [],
}

const { getSettings } = useVanderSettings()
const { data: settings } = await useAsyncData('vander-settings-footer', getSettings)
const footer = computed(() => ({ ...FOOTER_DEFAULTS, ...settings.value?.footer }))
</script>
