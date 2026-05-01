<template>
  <section class="vw-border-t vw-border-gray-900/10">
    <div
      class="vw-max-w-[1140px] vw-mx-auto vw-px-7 lg:vw-px-10 vw-py-16 sm:vw-py-20"
      :class="section.centered ? 'vw-text-center' : ''"
    >
      <h2
        v-if="section.heading"
        class="vw-text-[clamp(2rem,5vw,3.5rem)] vw-font-bold vw-tracking-[-0.02em] vw-leading-tight vw-text-gray-900 vw-mb-6"
        :class="section.centered ? 'vw-mx-auto vw-max-w-[22ch]' : 'vw-max-w-[22ch]'"
      >
        {{ section.heading }}
      </h2>
      <div
        v-if="section.content"
        class="vw-text-[15px] vw-text-gray-600 vw-leading-relaxed vw-whitespace-pre-line"
        :class="section.centered ? 'vw-max-w-[60ch] vw-mx-auto' : 'vw-max-w-[60ch]'"
      >
        {{ section.content }}
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { VanderFreetextSection } from '@vanderweb/wp-nuxt-core'
defineProps<{ section: VanderFreetextSection }>()
</script>
