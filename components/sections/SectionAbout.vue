<template>
  <section class="vw-border-t vw-border-gray-900/10">
    <div class="vw-max-w-[1140px] vw-mx-auto vw-px-7 lg:vw-px-10 vw-py-16 sm:vw-py-20 vw-grid vw-grid-cols-1 md:vw-grid-cols-[0.9fr_1.1fr] vw-gap-12 vw-items-center">
      <!-- Image -->
      <div>
        <img
          v-if="section.image?.url"
          :src="section.image.url"
          :alt="section.image.alt || section.heading"
          class="vw-w-full vw-h-auto vw-object-cover vw-aspect-[4/5]"
        />
        <div v-else class="vw-aspect-[4/5] vw-bg-gray-100" />
      </div>
      <!-- Text -->
      <div>
        <p class="vw-font-mono vw-text-[9px] vw-tracking-[0.12em] vw-uppercase vw-text-gray-400 vw-mb-3">About</p>
        <h2 v-if="section.heading" class="vw-text-3xl vw-font-bold vw-tracking-tight vw-leading-snug vw-text-gray-900 vw-mb-5">{{ section.heading }}</h2>
        <p v-if="section.text" class="vw-text-[15px] vw-text-gray-600 vw-leading-relaxed vw-mb-6">{{ section.text }}</p>
        <a
          v-if="section.cta_label && section.cta_url"
          :href="section.cta_url"
          class="vw-inline-flex vw-items-center vw-h-10 vw-px-5 vw-border vw-border-gray-900 vw-text-gray-900 vw-text-sm vw-font-medium vw-tracking-wide hover:vw-bg-gray-900 hover:vw-text-white vw-transition-colors"
        >
          {{ section.cta_label }}
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { VanderAboutSection } from '@vanderweb/wp-nuxt-core'
defineProps<{ section: VanderAboutSection }>()
</script>
