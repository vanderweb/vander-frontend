<template>
  <section class="vw-border-t vw-border-gray-900/10">
    <div class="vw-max-w-[1140px] vw-mx-auto vw-px-7 lg:vw-px-10 vw-py-16 sm:vw-py-20">
      <div class="vw-grid vw-grid-cols-1 md:vw-grid-cols-[1fr_2fr] vw-gap-16">
        <!-- Left: label + heading -->
        <div>
          <p class="vw-font-mono vw-text-[9px] vw-tracking-[0.12em] vw-uppercase vw-text-gray-400 vw-mb-3">FAQ</p>
          <h2 v-if="section.heading" class="vw-text-3xl vw-font-bold vw-tracking-tight vw-leading-snug vw-text-gray-900">{{ section.heading }}</h2>
          <p v-if="section.subheading" class="vw-text-[14px] vw-text-gray-500 vw-mt-3">{{ section.subheading }}</p>
        </div>
        <!-- Right: accordion -->
        <div>
          <div
            v-for="(item, i) in section.items"
            :key="i"
            class="vw-border-b vw-border-gray-900/10"
          >
            <button
              class="vw-w-full vw-flex vw-items-center vw-justify-between vw-py-4 vw-text-left"
              @click="toggle(i)"
            >
              <span class="vw-text-[14px] vw-font-medium vw-text-gray-900 vw-pr-4">{{ item.question }}</span>
              <svg
                class="vw-w-4 vw-h-4 vw-text-gray-400 vw-shrink-0 vw-transition-transform vw-duration-200"
                :class="open === i ? 'vw-rotate-45' : ''"
                fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" viewBox="0 0 16 16"
              >
                <path d="M8 3v10M3 8h10"/>
              </svg>
            </button>
            <div v-if="open === i" class="vw-pb-4">
              <p class="vw-text-[14px] vw-text-gray-600 vw-leading-relaxed">{{ item.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { VanderFaqSection } from '@vanderweb/wp-nuxt-core'
defineProps<{ section: VanderFaqSection }>()

const open = ref<number | null>(null)
function toggle(i: number) {
  open.value = open.value === i ? null : i
}
</script>
