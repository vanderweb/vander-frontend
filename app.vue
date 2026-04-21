<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
const { getSettings } = useVanderSettings()

const { data: settings } = await useAsyncData('vander-settings', getSettings)

const general = computed(() => settings.value?.general)

useHead({
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
  ],
  link: computed(() => general.value?.googleFontsUrl
    ? [{ rel: 'stylesheet', href: general.value.googleFontsUrl }]
    : []
  ),
  style: computed(() => [{
    innerHTML: `:root {
      --brand-primary: ${general.value?.primaryColor ?? '#e63329'};
      --brand-accent:  ${general.value?.accentColor  ?? '#1a1a1a'};
      --brand-font:    ${general.value?.fontFamily    ?? 'Inter'};
    }`,
  }]),
})
</script>
