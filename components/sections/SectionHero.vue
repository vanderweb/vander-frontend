<template>
  <section
    class="vw-relative vw-flex vw-items-center vw-justify-center vw-min-h-[90vh] vw-bg-center vw-bg-cover vw-bg-no-repeat"
    :style="section.background_image?.url ? { backgroundImage: `url('${section.background_image.url}')` } : {}"
  >
    <div class="vw-absolute vw-inset-0 vw-bg-black" :style="{ opacity: section.overlay_opacity ?? 0.6 }" />
    <div class="vw-relative vw-z-10 vw-max-w-vw vw-mx-auto vw-px-6 vw-py-16 sm:vw-py-24">
      <h1 v-if="section.heading" class="vw-text-4xl sm:vw-text-5xl vw-font-bold vw-text-white vw-mb-4 vw-leading-tight">
        {{ section.heading }}
      </h1>
      <p v-if="section.subheading" class="vw-text-xl vw-text-white/80 vw-mb-8 vw-max-w-2xl">
        {{ section.subheading }}
      </p>
      <a
        v-if="section.cta_label && section.cta_url"
        :href="section.cta_url"
        class="vw-inline-block vw-bg-brand-accent vw-text-white vw-font-semibold vw-px-8 vw-py-3 vw-rounded hover:vw-bg-red-700 vw-transition-colors"
      >
        {{ section.cta_label }}
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { VanderHeroSection } from '@vanderweb/wp-nuxt-core'
defineProps<{ section: VanderHeroSection }>()
</script>
