<template>
  <section class="vw-border-t vw-border-gray-900/10">
    <div class="vw-max-w-[1140px] vw-mx-auto vw-px-7 lg:vw-px-10 vw-py-16 sm:vw-py-20 vw-grid vw-grid-cols-1 md:vw-grid-cols-2 vw-gap-16">
      <!-- Left: heading + contact details -->
      <div>
        <p class="vw-font-mono vw-text-[9px] vw-tracking-[0.12em] vw-uppercase vw-text-gray-400 vw-mb-3">Contact</p>
        <h2 v-if="section.heading" class="vw-text-3xl vw-font-bold vw-tracking-tight vw-text-gray-900 vw-mb-4">{{ section.heading }}</h2>
        <p v-if="section.subheading" class="vw-text-[15px] vw-text-gray-500 vw-mb-8">{{ section.subheading }}</p>
        <div class="vw-space-y-3">
          <a
            v-if="section.email"
            :href="`mailto:${section.email}`"
            class="vw-flex vw-items-center vw-gap-3 vw-text-[14px] vw-text-gray-700 hover:vw-text-gray-900 vw-transition-colors vw-group"
          >
            <svg class="vw-w-4 vw-h-4 vw-text-gray-400 group-hover:vw-text-gray-900 vw-transition-colors vw-shrink-0" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" viewBox="0 0 16 16">
              <rect x="2" y="3.5" width="12" height="9"/>
              <path d="M2 4l6 5 6-5"/>
            </svg>
            {{ section.email }}
          </a>
          <a
            v-if="section.phone"
            :href="`tel:${section.phone.replace(/\s/g, '')}`"
            class="vw-flex vw-items-center vw-gap-3 vw-text-[14px] vw-text-gray-700 hover:vw-text-gray-900 vw-transition-colors vw-group"
          >
            <svg class="vw-w-4 vw-h-4 vw-text-gray-400 group-hover:vw-text-gray-900 vw-transition-colors vw-shrink-0" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" viewBox="0 0 16 16">
              <path d="M3 3h3l1 3-2 1c.5 2 2 3.5 4 4l1-2 3 1v3c0 .6-.4 1-1 1A11 11 0 0 1 2 4c0-.6.4-1 1-1z"/>
            </svg>
            {{ section.phone }}
          </a>
        </div>
      </div>

      <!-- Right: form -->
      <form v-if="section.show_form" class="vw-space-y-4" @submit.prevent>
        <div>
          <label class="vw-font-mono vw-text-[9px] vw-tracking-[0.12em] vw-uppercase vw-text-gray-400 vw-mb-1.5 vw-block">Name</label>
          <input
            type="text"
            class="vw-w-full vw-h-10 vw-px-3 vw-border vw-border-gray-300 vw-text-sm vw-text-gray-900 vw-bg-white focus:vw-outline-none focus:vw-border-gray-900 vw-transition-colors"
          />
        </div>
        <div>
          <label class="vw-font-mono vw-text-[9px] vw-tracking-[0.12em] vw-uppercase vw-text-gray-400 vw-mb-1.5 vw-block">Email</label>
          <input
            type="email"
            class="vw-w-full vw-h-10 vw-px-3 vw-border vw-border-gray-300 vw-text-sm vw-text-gray-900 vw-bg-white focus:vw-outline-none focus:vw-border-gray-900 vw-transition-colors"
          />
        </div>
        <div>
          <label class="vw-font-mono vw-text-[9px] vw-tracking-[0.12em] vw-uppercase vw-text-gray-400 vw-mb-1.5 vw-block">Message</label>
          <textarea
            rows="4"
            class="vw-w-full vw-px-3 vw-py-2.5 vw-border vw-border-gray-300 vw-text-sm vw-text-gray-900 vw-bg-white focus:vw-outline-none focus:vw-border-gray-900 vw-transition-colors vw-resize-none"
          />
        </div>
        <button
          type="submit"
          class="vw-h-10 vw-px-6 vw-bg-gray-900 vw-text-white vw-text-sm vw-font-medium vw-tracking-wide hover:vw-bg-gray-800 vw-transition-colors"
        >
          Send message
        </button>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { VanderContactSection } from '@vanderweb/wp-nuxt-core'
defineProps<{ section: VanderContactSection }>()
</script>
