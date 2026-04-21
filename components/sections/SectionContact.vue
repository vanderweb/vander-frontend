<template>
  <section class="vw-bg-vw-slate vw-py-16 vw-px-6">
    <div class="vw-max-w-vw vw-mx-auto vw-text-center">
      <h2 v-if="section.heading" class="vw-text-3xl vw-font-bold vw-text-white vw-mb-3">{{ section.heading }}</h2>
      <p v-if="section.subheading" class="vw-text-vw-light vw-mb-8 vw-text-lg">{{ section.subheading }}</p>
      <div class="vw-flex vw-flex-col sm:vw-flex-row vw-justify-center vw-gap-6 vw-mb-10">
        <a
          v-if="section.email"
          :href="`mailto:${section.email}`"
          class="vw-inline-flex vw-items-center vw-gap-2 vw-text-vw-light hover:vw-text-white vw-transition-colors"
        >
          <svg class="vw-w-5 vw-h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 2-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"/>
          </svg>
          {{ section.email }}
        </a>
        <a
          v-if="section.phone"
          :href="`tel:${section.phone.replace(/\s/g, '')}`"
          class="vw-inline-flex vw-items-center vw-gap-2 vw-text-vw-light hover:vw-text-white vw-transition-colors"
        >
          <svg class="vw-w-5 vw-h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
          </svg>
          {{ section.phone }}
        </a>
      </div>
      <form v-if="section.show_form" class="vw-max-w-lg vw-mx-auto vw-space-y-4" @submit.prevent>
        <input type="text" placeholder="Name" class="vw-w-full vw-px-4 vw-py-2 vw-rounded vw-bg-white/10 vw-text-white vw-placeholder-white/50 vw-border vw-border-white/20 focus:vw-outline-none focus:vw-border-white/60" />
        <input type="email" placeholder="Email" class="vw-w-full vw-px-4 vw-py-2 vw-rounded vw-bg-white/10 vw-text-white vw-placeholder-white/50 vw-border vw-border-white/20 focus:vw-outline-none focus:vw-border-white/60" />
        <textarea rows="4" placeholder="Message" class="vw-w-full vw-px-4 vw-py-2 vw-rounded vw-bg-white/10 vw-text-white vw-placeholder-white/50 vw-border vw-border-white/20 focus:vw-outline-none focus:vw-border-white/60 vw-resize-none" />
        <button type="submit" class="vw-w-full vw-bg-brand-accent vw-text-white vw-font-semibold vw-py-2 vw-rounded hover:vw-bg-red-700 vw-transition-colors">Send</button>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { VanderContactSection } from '@vanderweb/wp-nuxt-core'
defineProps<{ section: VanderContactSection }>()
</script>
