<template>
  <section class="vw-bg-vw-mid vw-py-16 vw-px-6">
    <div class="vw-max-w-vw vw-mx-auto vw-grid vw-grid-cols-1 sm:vw-grid-cols-2 xl:vw-grid-cols-4 vw-gap-10">
      <div
        v-for="service in services"
        :key="service.title"
        class="vw-bg-white vw-rounded-xl vw-shadow-lg vw-p-6 vw-flex vw-flex-col vw-gap-4"
      >
        <div class="vw-text-vw-card">
          <component :is="service.icon" class="vw-w-12 vw-h-12" />
        </div>
        <h3 class="vw-text-lg vw-font-semibold vw-text-vw-card">{{ service.title }}</h3>
        <p class="vw-text-sm vw-text-vw-card vw-leading-relaxed">{{ service.desc }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { defineComponent, h } from 'vue'

function svgIcon(path: string) {
  return defineComponent({
    render: () =>
      h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24', 'stroke-width': 1.5 }, [
        h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: path }),
      ]),
  })
}

const IconSite    = svgIcon('M12 21a9 9 0 100-18 9 9 0 000 18zm0 0c-4.97 0-9-3.58-9-8s4.03-8 9-8 9 3.58 9 8-4.03 8-9 8zm-3-8h6m-3-3v6')
const IconShop    = svgIcon('M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.35 2.7A1 1 0 007 17h10m-10 0a2 2 0 104 0m6 0a2 2 0 104 0')
const IconSupport = svgIcon('M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z')
const IconHosting = svgIcon('M5 12H3m18 0h-2M12 5V3m0 18v-2m-7.07-1.93-1.41-1.41m14.14 0-1.41 1.41M4.93 6.34 3.51 4.93m14.14 0 1.41-1.41M12 8a4 4 0 100 8 4 4 0 000-8z')

const services = [
  {
    icon: IconSite,
    title: 'Hjemmeside',
    desc: 'WordPress hjemmeside. Design er typisk valgt fra et tema katalog eller ud fra inspiration fra andre hjemmesider.',
  },
  {
    icon: IconShop,
    title: 'Webshop',
    desc: 'WordPress hjemmeside med integreret WooCommerce webshop.',
  },
  {
    icon: IconSupport,
    title: 'Support',
    desc: 'WordPress support som en klippekortordning. 10 timer, fordelt på 40 klip af 15 minutter.',
  },
  {
    icon: IconHosting,
    title: 'Hosting',
    desc: 'WordPress Hosting med opdateringsaftale (WordPress, Tema og plugins), fra 150,- per måned.',
  },
]
</script>
