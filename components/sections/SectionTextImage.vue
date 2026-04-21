<template>
  <section class="vw-bg-white vw-py-16 vw-px-6">
    <div
      class="vw-max-w-vw vw-mx-auto vw-flex vw-flex-col vw-gap-10 vw-items-center"
      :class="section.layout === 'image_right' ? 'md:vw-flex-row' : 'md:vw-flex-row-reverse'"
    >
      <div v-if="section.image?.url" class="vw-shrink-0 vw-w-full md:vw-w-1/2">
        <img
          :src="section.image.url"
          :alt="section.image.alt"
          class="vw-w-full vw-h-auto vw-rounded-xl vw-object-cover"
        />
      </div>
      <div class="vw-flex-1 vw-space-y-4">
        <h2 v-if="section.heading" class="vw-text-3xl vw-font-bold vw-text-vw-card vw-leading-snug">
          {{ section.heading }}
        </h2>
        <p v-if="section.text" class="vw-text-vw-card vw-leading-relaxed">{{ section.text }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { VanderTextImageSection } from '@vanderweb/wp-nuxt-core'
defineProps<{ section: VanderTextImageSection }>()
</script>
