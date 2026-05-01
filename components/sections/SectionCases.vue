<template>
  <section class="vw-border-t vw-border-gray-900/10">
    <div class="vw-max-w-[1140px] vw-mx-auto vw-px-7 lg:vw-px-10 vw-py-16 sm:vw-py-20">
      <div v-if="section.heading || section.subheading" class="vw-flex vw-items-end vw-justify-between vw-mb-10">
        <div>
          <p v-if="section.subheading" class="vw-font-mono vw-text-[9px] vw-tracking-[0.12em] vw-uppercase vw-text-gray-400 vw-mb-2">{{ section.subheading }}</p>
          <h2 v-if="section.heading" class="vw-text-3xl vw-font-bold vw-tracking-tight vw-text-gray-900">{{ section.heading }}</h2>
        </div>
      </div>
      <div class="vw-grid vw-grid-cols-1 sm:vw-grid-cols-2 lg:vw-grid-cols-3 vw-gap-px vw-bg-gray-900/10">
        <NuxtLink
          v-for="(item, i) in validCases"
          :key="i"
          :to="`/${item.post_id!.slug}`"
          class="vw-group vw-bg-white vw-block"
        >
          <div class="vw-aspect-video vw-bg-gray-100 vw-overflow-hidden">
            <img
              v-if="item.post_id!.thumbnail_url"
              :src="item.post_id!.thumbnail_url"
              :alt="item.post_id!.title"
              class="vw-w-full vw-h-full vw-object-cover group-hover:vw-scale-[1.02] vw-transition-transform vw-duration-500"
            />
          </div>
          <div class="vw-p-5 vw-border-t vw-border-gray-900/10">
            <h3 class="vw-text-[14px] vw-font-semibold vw-text-gray-900 vw-mb-1.5 group-hover:vw-underline">{{ item.post_id!.title }}</h3>
            <p class="vw-text-[12px] vw-text-gray-500 vw-leading-relaxed">{{ item.post_id!.excerpt }}</p>
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
