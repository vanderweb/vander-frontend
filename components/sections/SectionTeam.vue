<template>
  <section class="vw-border-t vw-border-gray-900/10">
    <div class="vw-max-w-[1140px] vw-mx-auto vw-px-7 lg:vw-px-10 vw-py-16 sm:vw-py-20">
      <div class="vw-flex vw-items-end vw-justify-between vw-mb-10">
        <div>
          <p class="vw-font-mono vw-text-[9px] vw-tracking-[0.12em] vw-uppercase vw-text-gray-400 vw-mb-2">Team / about</p>
          <h2 v-if="section.heading" class="vw-text-3xl vw-font-bold vw-tracking-tight vw-text-gray-900">{{ section.heading }}</h2>
        </div>
        <p v-if="section.subheading" class="vw-text-[13px] vw-text-gray-500">{{ section.subheading }}</p>
      </div>
      <div class="vw-grid vw-grid-cols-2 sm:vw-grid-cols-3 lg:vw-grid-cols-4 vw-gap-px vw-bg-gray-900/10">
        <div v-for="(member, i) in section.items" :key="i" class="vw-bg-white">
          <div class="vw-aspect-[3/4] vw-bg-gray-100 vw-overflow-hidden">
            <img
              v-if="member.image?.url"
              :src="member.image.url"
              :alt="member.image.alt || member.name"
              class="vw-w-full vw-h-full vw-object-cover"
            />
          </div>
          <div class="vw-p-4 vw-border-t vw-border-gray-900/10">
            <p class="vw-text-[14px] vw-font-semibold vw-text-gray-900 vw-tracking-tight">{{ member.name }}</p>
            <p v-if="member.role" class="vw-font-mono vw-text-[9px] vw-tracking-[0.1em] vw-uppercase vw-text-gray-400 vw-mt-0.5">{{ member.role }}</p>
            <p v-if="member.bio" class="vw-text-[12px] vw-text-gray-500 vw-mt-2 vw-leading-relaxed">{{ member.bio }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { VanderTeamSection } from '@vanderweb/wp-nuxt-core'
defineProps<{ section: VanderTeamSection }>()
</script>
