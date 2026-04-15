<template>
  <section id="portfolio" class="vw-bg-white vw-py-16 vw-px-6">
    <div class="vw-max-w-vw vw-mx-auto">
      <h2 class="vw-text-3xl vw-font-bold vw-text-vw-card vw-mb-10 vw-text-center">Portfolio</h2>
      <div class="vw-flex vw-flex-wrap vw-justify-center vw-items-center vw-gap-10">
        <a
          v-for="tech in stack"
          :key="tech.name"
          :href="tech.url"
          target="_blank"
          rel="noopener noreferrer"
          :title="tech.name"
          class="vw-grayscale hover:vw-grayscale-0 vw-opacity-70 hover:vw-opacity-100 vw-transition-all vw-duration-300"
        >
          <img :src="tech.img" :alt="tech.name" class="vw-h-16 vw-w-auto vw-object-contain" />
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const WP = 'https://vander.dk/wp-content/uploads'

const stack = [
  { name: 'WordPress',              img: `${WP}/WordPress_blue_logo.svg_-150x150.png`, url: 'https://wordpress.org' },
  { name: 'WooCommerce',            img: `${WP}/woo-150x150.png`,                      url: 'https://woocommerce.com' },
  { name: 'Elementor',              img: `${WP}/109_Elementor_logo_logos-512-150x150.png`, url: 'https://elementor.com' },
  { name: 'Advanced Custom Fields', img: `${WP}/acf-logo-150x150.png`,                 url: 'https://www.advancedcustomfields.com' },
]
</script>
