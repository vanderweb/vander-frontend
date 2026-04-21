<template>
  <div>
    <component
      v-for="(section, i) in sections"
      :key="i"
      :is="resolveComponent(`Section${pascalCase(section.type)}`)"
      :section="section"
    />
  </div>
</template>

<script setup lang="ts">
import { resolveComponent } from 'vue'
import type { VanderSection } from '@vanderweb/wp-nuxt-core'

defineProps<{ sections: VanderSection[] }>()

function pascalCase(type: string): string {
  return type
    .split('_')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('')
}
</script>
