<template>
  <section class="vw-border-t vw-border-gray-900/10">
    <div class="vw-max-w-[1140px] vw-mx-auto vw-px-7 lg:vw-px-10 vw-py-5">
      <div
        class="vw-flex vw-flex-col sm:vw-flex-row vw-items-start sm:vw-items-center vw-justify-between vw-gap-6 vw-px-8 vw-py-8"
        :class="section.dark_bg ? 'vw-bg-gray-900 vw-text-white' : 'vw-bg-gray-50 vw-border vw-border-gray-900/10'"
      >
        <div>
          <h2
            class="vw-text-[clamp(1.5rem,3vw,2rem)] vw-font-bold vw-tracking-tight vw-leading-tight"
            :class="section.dark_bg ? 'vw-text-white' : 'vw-text-gray-900'"
          >
            {{ section.heading }}
          </h2>
          <p
            v-if="section.subheading"
            class="vw-text-[14px] vw-mt-1"
            :class="section.dark_bg ? 'vw-text-white/70' : 'vw-text-gray-500'"
          >
            {{ section.subheading }}
          </p>
        </div>
        <a
          v-if="section.cta_label && section.cta_url"
          :href="section.cta_url"
          class="vw-inline-flex vw-items-center vw-h-10 vw-px-6 vw-text-sm vw-font-medium vw-tracking-wide vw-shrink-0 vw-transition-colors"
          :class="section.dark_bg
            ? 'vw-border vw-border-white vw-text-white hover:vw-bg-white hover:vw-text-gray-900'
            : 'vw-bg-gray-900 vw-text-white hover:vw-bg-gray-800'"
        >
          {{ section.cta_label }}
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { VanderCtaBannerSection } from '@vanderweb/wp-nuxt-core'
defineProps<{ section: VanderCtaBannerSection }>()
</script>
