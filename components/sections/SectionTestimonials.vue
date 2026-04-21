<template>
  <section class="vw-bg-vw-slate vw-py-16 vw-px-6">
    <div class="vw-max-w-vw vw-mx-auto">
      <h2 v-if="section.heading" class="vw-text-3xl vw-font-bold vw-text-white vw-text-center vw-mb-12">
        {{ section.heading }}
      </h2>
      <div class="vw-grid vw-grid-cols-1 md:vw-grid-cols-2 lg:vw-grid-cols-3 vw-gap-8">
        <div
          v-for="(item, i) in section.items"
          :key="i"
          class="vw-bg-white/10 vw-rounded-xl vw-p-6 vw-flex vw-flex-col vw-gap-4"
        >
          <p class="vw-text-vw-light vw-leading-relaxed vw-italic">&ldquo;{{ item.quote }}&rdquo;</p>
          <div class="vw-flex vw-items-center vw-gap-3 vw-mt-auto">
            <img
              v-if="item.avatar?.url"
              :src="item.avatar.url"
              :alt="item.avatar.alt || item.author"
              class="vw-w-10 vw-h-10 vw-rounded-full vw-object-cover"
            />
            <div>
              <p class="vw-font-semibold vw-text-white vw-text-sm">{{ item.author }}</p>
              <p v-if="item.role" class="vw-text-vw-light/70 vw-text-xs">{{ item.role }}</p>
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
