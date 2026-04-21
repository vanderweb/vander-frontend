<template>
  <section class="vw-bg-white vw-py-16 vw-px-6">
    <div class="vw-max-w-vw vw-mx-auto">
      <div v-if="section.heading || section.subheading" class="vw-text-center vw-mb-12">
        <h2 v-if="section.heading" class="vw-text-3xl vw-font-bold vw-text-vw-card vw-mb-3">{{ section.heading }}</h2>
        <p v-if="section.subheading" class="vw-text-vw-mid vw-text-lg">{{ section.subheading }}</p>
      </div>
      <div class="vw-grid vw-grid-cols-1 sm:vw-grid-cols-2 lg:vw-grid-cols-3 vw-gap-8">
        <NuxtLink
          v-for="(item, i) in validCases"
          :key="i"
          :to="`/${item.post_id!.slug}`"
          class="vw-group vw-block vw-rounded-xl vw-overflow-hidden vw-shadow-md hover:vw-shadow-xl vw-transition-shadow"
        >
          <div class="vw-aspect-video vw-bg-gray-100 vw-overflow-hidden">
            <img
              v-if="item.post_id!.thumbnail_url"
              :src="item.post_id!.thumbnail_url"
              :alt="item.post_id!.title"
              class="vw-w-full vw-h-full vw-object-cover group-hover:vw-scale-105 vw-transition-transform vw-duration-300"
            />
            <div v-else class="vw-w-full vw-h-full vw-bg-gray-200" />
          </div>
          <div class="vw-p-5">
            <h3 class="vw-font-semibold vw-text-vw-card vw-mb-2">{{ item.post_id!.title }}</h3>
            <p class="vw-text-sm vw-text-vw-mid vw-leading-relaxed">{{ item.post_id!.excerpt }}</p>
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { VanderCasesSection } from '@vanderweb/wp-nuxt-core'
const props = defineProps<{ section: VanderCasesSection }>()
const validCases = computed(() => props.section.case_ids.filter((c) => c.post_id !== null))
</script>
