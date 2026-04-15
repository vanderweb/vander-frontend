<template>
  <div>
    <VwNavbar />
    <VwHero />
    <VwServices />
    <VwPortfolio />
    <VwSkills />
    <VwProfile />
    <VwContact />
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: false })

const { getPage } = useWordPress()
const { data: page } = await useAsyncData('page-home', () => getPage('vander-web'))

if (page.value) {
  useSeo(page.value)
}
</script>
