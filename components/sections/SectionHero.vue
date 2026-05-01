<template>
  <!-- Split layout: text left, image right -->
  <section
    v-if="layout === 'split'"
    class="vw-border-b vw-border-gray-900/10"
  >
    <div class="vw-max-w-[1140px] vw-mx-auto vw-px-7 lg:vw-px-10 vw-py-16 sm:vw-py-24 vw-grid vw-grid-cols-1 md:vw-grid-cols-[1.1fr_0.9fr] vw-gap-12 vw-items-center">
      <div>
        <p v-if="section.subheading" class="vw-font-mono vw-text-[10px] vw-tracking-[0.12em] vw-uppercase vw-text-gray-400 vw-mb-4">{{ section.subheading }}</p>
        <h1 class="vw-text-[clamp(2.5rem,6vw,4rem)] vw-font-bold vw-leading-[0.95] vw-tracking-tight vw-text-gray-900 vw-mb-6">{{ section.heading }}</h1>
        <div class="vw-flex vw-flex-wrap vw-gap-3 vw-mt-8">
          <a
            v-if="section.cta_label && section.cta_url"
            :href="section.cta_url"
            class="vw-inline-flex vw-items-center vw-h-11 vw-px-6 vw-bg-gray-900 vw-text-white vw-text-sm vw-font-medium vw-tracking-wide hover:vw-bg-gray-800 vw-transition-colors"
          >
            {{ section.cta_label }}
          </a>
          <a
            v-if="section.cta_label_2 && section.cta_url_2"
            :href="section.cta_url_2"
            class="vw-inline-flex vw-items-center vw-h-11 vw-px-6 vw-border vw-border-gray-900 vw-text-gray-900 vw-text-sm vw-font-medium vw-tracking-wide hover:vw-bg-gray-900 hover:vw-text-white vw-transition-colors"
          >
            {{ section.cta_label_2 }}
          </a>
        </div>
      </div>
      <div v-if="section.background_image?.url">
        <img
          :src="section.background_image.url"
          :alt="section.background_image.alt || section.heading"
          class="vw-w-full vw-h-auto vw-object-cover vw-aspect-[4/3]"
        />
      </div>
      <div v-else class="vw-aspect-[4/3] vw-bg-gray-100" />
    </div>
  </section>

  <!-- Headline only: big display text -->
  <section
    v-else-if="layout === 'headline'"
    class="vw-border-b vw-border-gray-900/10"
  >
    <div class="vw-max-w-[1140px] vw-mx-auto vw-px-7 lg:vw-px-10 vw-py-16 sm:vw-py-28">
      <p v-if="section.subheading" class="vw-font-mono vw-text-[10px] vw-tracking-[0.12em] vw-uppercase vw-text-gray-400 vw-mb-6">{{ section.subheading }}</p>
      <h1 class="vw-text-[clamp(3rem,8vw,6rem)] vw-font-bold vw-leading-[0.92] vw-tracking-[-0.025em] vw-text-gray-900 vw-max-w-[14ch]">{{ section.heading }}</h1>
      <div class="vw-flex vw-flex-wrap vw-gap-3 vw-mt-10">
        <a
          v-if="section.cta_label && section.cta_url"
          :href="section.cta_url"
          class="vw-inline-flex vw-items-center vw-h-11 vw-px-6 vw-bg-gray-900 vw-text-white vw-text-sm vw-font-medium vw-tracking-wide hover:vw-bg-gray-800 vw-transition-colors"
        >
          {{ section.cta_label }}
        </a>
        <a
          v-if="section.cta_label_2 && section.cta_url_2"
          :href="section.cta_url_2"
          class="vw-inline-flex vw-items-center vw-h-11 vw-px-6 vw-border vw-border-gray-900 vw-text-gray-900 vw-text-sm vw-font-medium vw-tracking-wide hover:vw-bg-gray-900 hover:vw-text-white vw-transition-colors"
        >
          {{ section.cta_label_2 }}
        </a>
      </div>
    </div>
  </section>

  <!-- Full bleed: image background with overlay text -->
  <section
    v-else
    class="vw-relative vw-flex vw-items-end vw-min-h-[80vh] vw-bg-gray-100 vw-bg-cover vw-bg-center"
    :style="section.background_image?.url ? { backgroundImage: `url('${section.background_image.url}')` } : {}"
  >
    <div
      class="vw-absolute vw-inset-0 vw-bg-gray-900"
      :style="{ opacity: section.overlay_opacity ?? 0.45 }"
    />
    <div class="vw-relative vw-z-10 vw-max-w-[1140px] vw-mx-auto vw-px-7 lg:vw-px-10 vw-pb-16 sm:vw-pb-20 vw-w-full">
      <p v-if="section.subheading" class="vw-font-mono vw-text-[10px] vw-tracking-[0.12em] vw-uppercase vw-text-white/60 vw-mb-4">{{ section.subheading }}</p>
      <h1 class="vw-text-[clamp(2.5rem,6vw,4.5rem)] vw-font-bold vw-leading-[0.95] vw-tracking-tight vw-text-white vw-mb-8 vw-max-w-[18ch]">{{ section.heading }}</h1>
      <div class="vw-flex vw-flex-wrap vw-gap-3">
        <a
          v-if="section.cta_label && section.cta_url"
          :href="section.cta_url"
          class="vw-inline-flex vw-items-center vw-h-11 vw-px-6 vw-bg-white vw-text-gray-900 vw-text-sm vw-font-medium vw-tracking-wide hover:vw-bg-gray-100 vw-transition-colors"
        >
          {{ section.cta_label }}
        </a>
        <a
          v-if="section.cta_label_2 && section.cta_url_2"
          :href="section.cta_url_2"
          class="vw-inline-flex vw-items-center vw-h-11 vw-px-6 vw-border vw-border-white vw-text-white vw-text-sm vw-font-medium vw-tracking-wide hover:vw-bg-white hover:vw-text-gray-900 vw-transition-colors"
        >
          {{ section.cta_label_2 }}
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { VanderHeroSection } from '@vanderweb/wp-nuxt-core'
const props = defineProps<{ section: VanderHeroSection }>()
const layout = computed(() => props.section.layout || 'fullbleed')
</script>
