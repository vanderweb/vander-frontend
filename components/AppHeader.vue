<template>
  <!-- Announcement bar -->
  <div
    v-if="header.showAnnouncement && header.announcementText"
    class="vw-bg-gray-900 vw-text-white vw-flex vw-items-center vw-justify-center vw-h-8 vw-px-4"
  >
    <span class="vw-font-mono vw-text-[10px] vw-tracking-[0.12em] vw-uppercase">{{ header.announcementText }}</span>
  </div>

  <!-- Main header -->
  <header
    class="vw-top-0 vw-left-0 vw-right-0 vw-z-50 vw-bg-white vw-border-b vw-border-gray-900 vw-transition-shadow vw-duration-300"
    :class="[
      header.stickyHeader ? 'vw-sticky' : 'vw-relative',
      isScrolled ? 'vw-shadow-[0_1px_0_rgba(0,0,0,.08)]' : '',
    ]"
  >
    <!-- Desktop: three-column grid -->
    <div class="vw-hidden md:vw-grid vw-max-w-[1140px] vw-mx-auto vw-px-7 lg:vw-px-10" style="grid-template-columns: 1fr auto 1fr;">
      <!-- Brand -->
      <div class="vw-flex vw-items-center vw-py-4">
        <NuxtLink to="/" class="vw-flex vw-items-center vw-gap-2.5">
          <img v-if="header.logoUrl" :src="header.logoUrl" :alt="header.logoAlt || 'Logo'" class="vw-h-7 vw-w-auto" />
          <span v-else class="vw-font-bold vw-text-gray-900 vw-text-base vw-tracking-tight">◆ STUDIO</span>
        </NuxtLink>
      </div>

      <!-- Nav center -->
      <nav class="vw-flex vw-items-center vw-gap-7 vw-py-4">
        <NuxtLink
          v-for="item in header.navLinks"
          :key="item.url"
          :to="item.url"
          :target="item.target ? '_blank' : undefined"
          class="vw-text-[14px] vw-font-medium vw-text-gray-900 vw-border-b-2 vw-border-transparent hover:vw-border-gray-900 vw-pb-0.5 vw-transition-colors vw-whitespace-nowrap"
          active-class="!vw-border-brand-accent"
        >
          {{ item.label }}
        </NuxtLink>
      </nav>

      <!-- Utility right -->
      <div class="vw-flex vw-items-center vw-justify-end vw-gap-5 vw-py-4">
        <!-- Search -->
        <button class="vw-flex vw-items-center vw-gap-1.5 vw-text-gray-500 hover:vw-text-gray-900 vw-transition-colors" aria-label="Search">
          <svg class="vw-w-[15px] vw-h-[15px]" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 16 16">
            <circle cx="7" cy="7" r="4.5"/><path d="m10.5 10.5 3.5 3.5"/>
          </svg>
          <span class="vw-font-mono vw-text-[10px] vw-tracking-[0.1em] vw-uppercase">Search</span>
        </button>

        <!-- CTA button -->
        <a
          v-if="header.ctaLabel && header.ctaUrl"
          :href="header.ctaUrl"
          class="vw-border vw-border-gray-900 vw-text-gray-900 vw-font-medium vw-text-[13px] vw-px-4 vw-h-8 vw-inline-flex vw-items-center hover:vw-bg-gray-900 hover:vw-text-white vw-transition-colors vw-tracking-wide"
        >
          {{ header.ctaLabel }}
        </a>
      </div>
    </div>

    <!-- Mobile row -->
    <div class="vw-flex md:vw-hidden vw-items-center vw-justify-between vw-h-14 vw-px-4 vw-border-b vw-border-gray-900">
      <button
        class="vw-text-gray-900 vw-p-1"
        :aria-expanded="menuOpen"
        aria-label="Toggle navigation"
        @click="menuOpen = !menuOpen"
      >
        <svg class="vw-h-5 vw-w-5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
          <path v-if="!menuOpen" stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          <path v-else stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <NuxtLink to="/" class="vw-flex vw-items-center vw-gap-2">
        <img v-if="header.logoUrl" :src="header.logoUrl" :alt="header.logoAlt || 'Logo'" class="vw-h-6 vw-w-auto" />
        <span v-else class="vw-font-bold vw-text-gray-900 vw-text-sm vw-tracking-tight">◆ STUDIO</span>
      </NuxtLink>

      <div class="vw-flex vw-items-center vw-gap-4">
        <button class="vw-text-gray-600 hover:vw-text-gray-900" aria-label="Search">
          <svg class="vw-w-[18px] vw-h-[18px]" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 16 16">
            <circle cx="7" cy="7" r="4.5"/><path d="m10.5 10.5 3.5 3.5"/>
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile nav drawer -->
    <Transition
      enter-active-class="vw-transition vw-duration-150 vw-ease-out"
      enter-from-class="vw-opacity-0 -vw-translate-y-1"
      enter-to-class="vw-opacity-100 vw-translate-y-0"
      leave-active-class="vw-transition vw-duration-100 vw-ease-in"
      leave-from-class="vw-opacity-100 vw-translate-y-0"
      leave-to-class="vw-opacity-0 -vw-translate-y-1"
    >
      <nav
        v-if="menuOpen"
        class="md:vw-hidden vw-bg-white vw-border-b vw-border-gray-900 vw-px-4 vw-py-3"
      >
        <NuxtLink
          v-for="item in header.navLinks"
          :key="item.url"
          :to="item.url"
          :target="item.target ? '_blank' : undefined"
          class="vw-flex vw-items-center vw-justify-between vw-py-3 vw-text-sm vw-font-medium vw-text-gray-900 vw-border-b vw-border-gray-900/10 last:vw-border-0"
          @click="menuOpen = false"
        >
          {{ item.label }}
          <svg class="vw-w-3.5 vw-h-3.5 vw-text-gray-400" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 16 16">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 8h10M9 4l4 4-4 4"/>
          </svg>
        </NuxtLink>
        <a
          v-if="header.ctaLabel && header.ctaUrl"
          :href="header.ctaUrl"
          class="vw-mt-3 vw-flex vw-items-center vw-justify-center vw-h-10 vw-border vw-border-gray-900 vw-text-sm vw-font-medium vw-text-gray-900"
          @click="menuOpen = false"
        >
          {{ header.ctaLabel }}
        </a>
      </nav>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import { useWindowScroll } from '@vueuse/core'
import type { VanderHeaderSettings } from '@vanderweb/wp-nuxt-core'

const menuOpen = ref(false)
const { y } = useWindowScroll()
const isScrolled = computed(() => y.value > 40)

const HEADER_DEFAULTS: VanderHeaderSettings = {
  logoUrl: '', logoAlt: '', navLinks: [], ctaLabel: '', ctaUrl: '',
  stickyHeader: false, transparentHeader: false,
  showAnnouncement: false, announcementText: '',
}

const { getSettings } = useVanderSettings()
const { data: settings } = await useAsyncData('vander-settings-header', getSettings)
const header = computed(() => ({ ...HEADER_DEFAULTS, ...settings.value?.header }))
</script>
