<template>
  <div class="vw-max-w-5xl vw-mx-auto vw-px-4 vw-py-12 vw-font-mono vw-text-sm">
    <h1 class="vw-text-2xl vw-font-bold vw-mb-6">Raw WP data — vander-web (ID 371)</h1>
    <div v-if="pending" class="vw-text-gray-500">Loading…</div>
    <pre
      v-else-if="page"
      class="vw-bg-gray-100 vw-p-6 vw-rounded vw-overflow-x-auto vw-whitespace-pre-wrap vw-break-all vw-text-xs vw-leading-relaxed"
    >{{ JSON.stringify(page, null, 2) }}</pre>
    <p v-else class="vw-text-red-600">Page not found</p>
  </div>
</template>

<script setup lang="ts">
const { getPage } = useWordPress()
const { data: page, pending } = await useAsyncData('debug-page', () => getPage('vander-web'))
</script>
