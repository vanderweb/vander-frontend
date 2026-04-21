<template>
  <header
    class="vw-fixed vw-top-0 vw-left-0 vw-right-0 vw-z-50 vw-transition-all vw-duration-300"
    :class="[
      isScrolled || !header.transparentHeader ? 'vw-bg-vw-slate vw-shadow-md' : 'vw-bg-transparent',
      header.stickyHeader ? 'vw-sticky' : 'vw-fixed',
    ]"
  >
    <div class="vw-max-w-vw vw-mx-auto vw-px-4 sm:vw-px-6 lg:vw-px-8">
      <div class="vw-flex vw-items-center vw-justify-between vw-h-16">
        <NuxtLink to="/" class="vw-flex-shrink-0 vw-flex vw-items-center vw-gap-2">
          <img v-if="header.logoUrl" :src="header.logoUrl" :alt="header.logoAlt || 'Logo'" class="vw-h-8 vw-w-auto" />
          <span v-else class="vw-text-brand-light vw-font-bold vw-text-xl vw-tracking-wide">Vander</span>
        </NuxtLink>

        <nav class="vw-hidden md:vw-flex vw-items-center vw-gap-8">
          <NuxtLink
            v-for="item in header.navLinks"
            :key="item.url"
            :to="item.url"
            :target="item.target ? '_blank' : undefined"
            class="vw-text-sm vw-font-medium vw-text-brand-light hover:vw-text-brand-accent vw-transition-colors"
          >
            {{ item.label }}
          </NuxtLink>
          <a
            v-if="header.ctaLabel && header.ctaUrl"
            :href="header.ctaUrl"
            class="vw-text-sm vw-font-semibold vw-bg-brand-accent vw-text-white vw-px-4 vw-py-2 vw-rounded hover:vw-bg-red-700 vw-transition-colors"
          >
            {{ header.ctaLabel }}
          </a>
        </nav>

        <button
          class="md:vw-hidden vw-text-brand-light vw-p-2"
          :aria-expanded="menuOpen"
          aria-label="Toggle navigation"
          @click="menuOpen = !menuOpen"
        >
          <svg class="vw-h-6 vw-w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path v-if="!menuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>

    <Transition
      enter-active-class="vw-transition vw-duration-150 vw-ease-out"
      enter-from-class="vw-opacity-0 -vw-translate-y-2"
      enter-to-class="vw-opacity-100 vw-translate-y-0"
      leave-active-class="vw-transition vw-duration-100 vw-ease-in"
      leave-from-class="vw-opacity-100 vw-translate-y-0"
      leave-to-class="vw-opacity-0 -vw-translate-y-2"
    >
      <nav
        v-if="menuOpen"
        class="md:vw-hidden vw-bg-vw-slate vw-border-t vw-border-gray-800 vw-px-4 vw-py-4 vw-space-y-3"
      >
        <NuxtLink
          v-for="item in header.navLinks"
          :key="item.url"
          :to="item.url"
          :target="item.target ? '_blank' : undefined"
          class="vw-block vw-text-sm vw-font-medium vw-text-brand-light hover:vw-text-brand-accent vw-transition-colors vw-py-1"
          @click="menuOpen = false"
        >
          {{ item.label }}
        </NuxtLink>
      </nav>
    </Transition>
  </header>

  <div class="vw-h-16" />
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
}

const { getSettings } = useVanderSettings()
const { data: settings } = await useAsyncData('vander-settings-header', getSettings)
const header = computed(() => ({ ...HEADER_DEFAULTS, ...settings.value?.header }))
</script>
