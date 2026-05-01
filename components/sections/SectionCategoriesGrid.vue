<template>
  <section class="vw-border-t vw-border-gray-900/10">
    <div class="vw-max-w-[1140px] vw-mx-auto vw-px-7 lg:vw-px-10 vw-py-16 sm:vw-py-20">
      <div v-if="section.heading" class="vw-mb-10">
        <p class="vw-font-mono vw-text-[9px] vw-tracking-[0.12em] vw-uppercase vw-text-gray-400 vw-mb-2">Categories</p>
        <h2 class="vw-text-3xl vw-font-bold vw-tracking-tight vw-text-gray-900">{{ section.heading }}</h2>
      </div>
      <div
        class="vw-grid vw-gap-px vw-bg-gray-900/10"
        :class="section.layout === '2x2' ? 'vw-grid-cols-2' : 'vw-grid-cols-2 lg:vw-grid-cols-4'"
      >
        <a
          v-for="(item, i) in section.items"
          :key="i"
          :href="item.url || '#'"
          class="vw-group vw-relative vw-bg-gray-100 vw-block vw-overflow-hidden"
          :class="section.layout === '2x2' ? 'vw-aspect-square' : 'vw-aspect-[3/4]'"
        >
          <img
            v-if="item.image?.url"
            :src="item.image.url"
            :alt="item.image.alt || item.name"
            class="vw-absolute vw-inset-0 vw-w-full vw-h-full vw-object-cover group-hover:vw-scale-[1.04] vw-transition-transform vw-duration-500"
          />
          <div class="vw-absolute vw-inset-0 vw-bg-gray-900/20 group-hover:vw-bg-gray-900/30 vw-transition-colors" />
          <div class="vw-absolute vw-bottom-0 vw-left-0 vw-p-4">
            <span class="vw-inline-flex vw-items-center vw-gap-1.5 vw-bg-white vw-text-gray-900 vw-text-[13px] vw-font-semibold vw-tracking-tight vw-px-3 vw-py-1.5 vw-border vw-border-gray-900/10">
              {{ item.name }}
              <svg class="vw-w-3 vw-h-3 vw-text-gray-500" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" viewBox="0 0 16 16">
                <path d="M3 8h10M9 4l4 4-4 4"/>
              </svg>
            </span>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { VanderCategoriesGridSection } from '@vanderweb/wp-nuxt-core'
defineProps<{ section: VanderCategoriesGridSection }>()
</script>
