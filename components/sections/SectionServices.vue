<template>
  <section class="vw-border-t vw-border-gray-900/10">
    <div class="vw-max-w-[1140px] vw-mx-auto vw-px-7 lg:vw-px-10 vw-py-16 sm:vw-py-20">
      <div v-if="section.heading || section.subheading" class="vw-mb-10">
        <p v-if="section.subheading" class="vw-font-mono vw-text-[9px] vw-tracking-[0.12em] vw-uppercase vw-text-gray-400 vw-mb-2">{{ section.subheading }}</p>
        <h2 v-if="section.heading" class="vw-text-3xl vw-font-bold vw-tracking-tight vw-text-gray-900">{{ section.heading }}</h2>
      </div>
      <div class="vw-grid vw-grid-cols-1 sm:vw-grid-cols-2 xl:vw-grid-cols-4 vw-gap-px vw-bg-gray-900/10">
        <div
          v-for="(item, i) in section.items"
          :key="i"
          class="vw-bg-white vw-p-6"
        >
          <p v-if="item.icon" class="vw-text-2xl vw-mb-4">{{ item.icon }}</p>
          <h3 class="vw-text-[15px] vw-font-semibold vw-text-gray-900 vw-mb-2 vw-tracking-tight">{{ item.title }}</h3>
          <p class="vw-text-[13px] vw-text-gray-500 vw-leading-relaxed">{{ item.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { VanderServicesSection } from '@vanderweb/wp-nuxt-core'
defineProps<{ section: VanderServicesSection }>()
</script>
