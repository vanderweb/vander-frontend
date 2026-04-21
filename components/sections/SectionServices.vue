<template>
  <section class="vw-bg-vw-mid vw-py-16 vw-px-6">
    <div class="vw-max-w-vw vw-mx-auto">
      <div v-if="section.heading || section.subheading" class="vw-text-center vw-mb-12">
        <h2 v-if="section.heading" class="vw-text-3xl vw-font-bold vw-text-white vw-mb-3">{{ section.heading }}</h2>
        <p v-if="section.subheading" class="vw-text-vw-light vw-text-lg">{{ section.subheading }}</p>
      </div>
      <div class="vw-grid vw-grid-cols-1 sm:vw-grid-cols-2 xl:vw-grid-cols-4 vw-gap-8">
        <div
          v-for="(item, i) in section.items"
          :key="i"
          class="vw-bg-white vw-rounded-xl vw-shadow-lg vw-p-6 vw-flex vw-flex-col vw-gap-3"
        >
          <p v-if="item.icon" class="vw-text-2xl">{{ item.icon }}</p>
          <h3 class="vw-text-lg vw-font-semibold vw-text-vw-card">{{ item.title }}</h3>
          <p class="vw-text-sm vw-text-vw-card vw-leading-relaxed">{{ item.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { VanderServicesSection } from '@vanderweb/wp-nuxt-core'
defineProps<{ section: VanderServicesSection }>()
</script>
