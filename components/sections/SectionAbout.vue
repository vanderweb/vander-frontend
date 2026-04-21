<template>
  <section class="vw-bg-vw-dark vw-py-16 vw-px-6">
    <div class="vw-max-w-vw vw-mx-auto vw-flex vw-flex-col md:vw-flex-row vw-gap-12 vw-items-center">
      <div v-if="section.image?.url" class="vw-shrink-0">
        <img
          :src="section.image.url"
          :alt="section.image.alt"
          class="vw-w-64 vw-h-64 vw-object-cover vw-rounded-xl"
        />
      </div>
      <div class="vw-flex-1 vw-space-y-5">
        <h2 v-if="section.heading" class="vw-text-4xl vw-font-semibold vw-text-vw-light vw-leading-tight">
          {{ section.heading }}
        </h2>
        <p v-if="section.text" class="vw-text-vw-light vw-leading-relaxed vw-font-light">{{ section.text }}</p>
        <a
          v-if="section.cta_label && section.cta_url"
          :href="section.cta_url"
          class="vw-inline-block vw-border vw-border-white vw-text-white vw-font-semibold vw-px-6 vw-py-2 vw-rounded hover:vw-bg-white hover:vw-text-vw-dark vw-transition-colors"
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
