<template>
  <div>
    <PageSectionsRenderer
      v-if="page && page.page_sections?.length"
      :sections="page.page_sections"
    />
    <div v-else-if="page" class="vw-max-w-7xl vw-mx-auto vw-px-4 sm:vw-px-6 lg:vw-px-8 vw-py-16">
      <h1 class="vw-text-4xl vw-font-bold vw-text-brand-dark vw-mb-8" v-html="page.title.rendered" />
      <div class="wp-content" v-html="page.content.rendered" />
    </div>
    <div v-else-if="pending" class="vw-max-w-7xl vw-mx-auto vw-px-4 vw-py-16 vw-animate-pulse vw-space-y-4">
      <div class="vw-h-10 vw-bg-gray-200 vw-rounded vw-w-2/3" />
      <div class="vw-h-4 vw-bg-gray-200 vw-rounded vw-w-full" />
      <div class="vw-h-4 vw-bg-gray-200 vw-rounded vw-w-5/6" />
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const slug = computed(() => route.params.slug as string)

const { getPage } = useWordPress()

const { data: page, pending } = await useAsyncData(
  `page-${slug.value}`,
  async () => {
    try {
      return await getPage(slug.value)
    } catch {
      return null
    }
  },
)

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

useSeo(page.value)
</script>
