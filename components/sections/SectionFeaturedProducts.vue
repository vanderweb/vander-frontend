<template>
  <section class="vw-border-t vw-border-gray-900/10">
    <div class="vw-max-w-[1140px] vw-mx-auto vw-px-7 lg:vw-px-10 vw-py-16 sm:vw-py-20">
      <div class="vw-flex vw-items-end vw-justify-between vw-mb-10">
        <div>
          <p v-if="section.subheading" class="vw-font-mono vw-text-[9px] vw-tracking-[0.12em] vw-uppercase vw-text-gray-400 vw-mb-2">{{ section.subheading }}</p>
          <h2 v-if="section.heading" class="vw-text-3xl vw-font-bold vw-tracking-tight vw-text-gray-900">{{ section.heading }}</h2>
        </div>
        <a
          v-if="section.cta_label && section.cta_url"
          :href="section.cta_url"
          class="vw-text-[13px] vw-text-gray-500 hover:vw-text-gray-900 vw-transition-colors vw-inline-flex vw-items-center vw-gap-1.5 vw-shrink-0"
        >
          {{ section.cta_label }}
          <svg class="vw-w-3.5 vw-h-3.5" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" viewBox="0 0 16 16">
            <path d="M3 8h10M9 4l4 4-4 4"/>
          </svg>
        </a>
      </div>
      <div class="vw-grid vw-grid-cols-2 lg:vw-grid-cols-4 vw-gap-px vw-bg-gray-900/10">
        <a
          v-for="(item, i) in section.items"
          :key="i"
          :href="item.url || '#'"
          class="vw-group vw-bg-white vw-block"
        >
          <div class="vw-aspect-[3/4] vw-bg-gray-100 vw-overflow-hidden">
            <img
              v-if="item.image?.url"
              :src="item.image.url"
              :alt="item.image.alt || item.title"
              class="vw-w-full vw-h-full vw-object-cover group-hover:vw-scale-[1.03] vw-transition-transform vw-duration-500"
            />
          </div>
          <div class="vw-p-4 vw-border-t vw-border-gray-900/10">
            <p class="vw-text-[14px] vw-font-medium vw-text-gray-900 vw-tracking-tight group-hover:vw-underline">{{ item.title }}</p>
            <p v-if="item.price" class="vw-font-mono vw-text-[11px] vw-tracking-[0.06em] vw-text-gray-400 vw-mt-1">{{ item.price }}</p>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { VanderFeaturedProductsSection } from '@vanderweb/wp-nuxt-core'
defineProps<{ section: VanderFeaturedProductsSection }>()
</script>
