<template>
  <section class="vw-border-t vw-border-gray-900/10">
    <div class="vw-max-w-[1140px] vw-mx-auto vw-px-7 lg:vw-px-10 vw-py-16 sm:vw-py-20">
      <div v-if="section.heading" class="vw-mb-10">
        <p class="vw-font-mono vw-text-[9px] vw-tracking-[0.12em] vw-uppercase vw-text-gray-400 vw-mb-2">Testimonials</p>
        <h2 class="vw-text-3xl vw-font-bold vw-tracking-tight vw-text-gray-900">{{ section.heading }}</h2>
      </div>
      <div class="vw-grid vw-grid-cols-1 md:vw-grid-cols-2 lg:vw-grid-cols-3 vw-gap-px vw-bg-gray-900/10">
        <div
          v-for="(item, i) in section.items"
          :key="i"
          class="vw-bg-white vw-p-7 vw-flex vw-flex-col"
        >
          <p class="vw-text-[15px] vw-text-gray-700 vw-leading-relaxed vw-italic vw-flex-1">&ldquo;{{ item.quote }}&rdquo;</p>
          <div class="vw-flex vw-items-center vw-gap-3 vw-mt-6 vw-pt-5 vw-border-t vw-border-gray-900/10">
            <img
              v-if="item.avatar?.url"
              :src="item.avatar.url"
              :alt="item.avatar.alt || item.author"
              class="vw-w-9 vw-h-9 vw-object-cover vw-rounded-full"
            />
            <div v-else class="vw-w-9 vw-h-9 vw-bg-gray-100 vw-rounded-full" />
            <div>
              <p class="vw-text-[13px] vw-font-semibold vw-text-gray-900">{{ item.author }}</p>
              <p v-if="item.role" class="vw-font-mono vw-text-[9px] vw-tracking-[0.08em] vw-uppercase vw-text-gray-400">{{ item.role }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { VanderTestimonialsSection } from '@vanderweb/wp-nuxt-core'
defineProps<{ section: VanderTestimonialsSection }>()
</script>
