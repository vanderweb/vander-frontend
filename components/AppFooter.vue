<template>
  <footer class="vw-bg-brand-dark vw-text-brand-light">
    <div class="vw-max-w-7xl vw-mx-auto vw-px-4 sm:vw-px-6 lg:vw-px-8 vw-py-12">
      <div class="vw-grid vw-grid-cols-1 md:vw-grid-cols-3 vw-gap-8">
        <div>
          <p class="vw-font-bold vw-text-xl vw-tracking-wide vw-mb-2">Vander</p>
          <p class="vw-text-gray-400 vw-text-sm vw-leading-relaxed">{{ siteConfig.description }}</p>
        </div>
        <div>
          <p class="vw-font-semibold vw-text-sm vw-uppercase vw-tracking-wider vw-text-gray-400 vw-mb-3">Kontakt</p>
          <ul class="vw-space-y-2 vw-text-sm vw-text-gray-300">
            <li>
              <a :href="`mailto:${siteConfig.email}`" class="hover:vw-text-brand-accent vw-transition-colors">
                {{ siteConfig.email }}
              </a>
            </li>
            <li>
              <a :href="`tel:${siteConfig.phone.replace(/\s/g, '')}`" class="hover:vw-text-brand-accent vw-transition-colors">
                {{ siteConfig.phone }}
              </a>
            </li>
            <li class="vw-text-gray-400">{{ siteConfig.address }}</li>
          </ul>
        </div>
        <div>
          <p class="vw-font-semibold vw-text-sm vw-uppercase vw-tracking-wider vw-text-gray-400 vw-mb-3">{{ siteConfig.siteName }}</p>
          <p class="vw-text-sm vw-text-gray-400">Vi bygger moderne, performante webløsninger til virksomheder i Danmark og Norden.</p>
        </div>
      </div>
      <div class="vw-border-t vw-border-gray-800 vw-mt-10 vw-pt-6 vw-text-center vw-text-xs vw-text-gray-600">
        &copy; {{ currentYear }} {{ siteConfig.siteName }}. Alle rettigheder forbeholdes.
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import type { SiteConfig } from '~/types/site'

const currentYear = new Date().getFullYear()

const siteConfig: SiteConfig = {
  siteName: 'Vander',
  description: 'Dansk webagentur specialiseret i moderne webløsninger.',
  logoUrl: '/logo.svg',
  email: 'hello@vander.dk',
  phone: '+45 00 00 00 00',
  address: 'Danmark',
}
</script>
