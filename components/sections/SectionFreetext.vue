<template>
  <section class="vw-bg-white vw-py-16 vw-px-6">
    <div class="vw-max-w-vw vw-mx-auto" :class="section.centered ? 'vw-text-center' : ''">
      <h2 v-if="section.heading" class="vw-text-3xl vw-font-bold vw-text-vw-card vw-mb-6">{{ section.heading }}</h2>
      <div v-if="section.content" class="vw-text-vw-card vw-leading-relaxed vw-whitespace-pre-line">{{ section.content }}</div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { VanderFreetextSection } from '@vanderweb/wp-nuxt-core'
defineProps<{ section: VanderFreetextSection }>()
</script>
