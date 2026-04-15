<template>
  <section class="vw-bg-vw-slate vw-py-16 vw-px-6">
    <div class="vw-max-w-vw vw-mx-auto">
      <div class="vw-divide-y vw-divide-white/20">
        <div v-for="(section, i) in sections" :key="section.title">
          <button
            class="vw-w-full vw-flex vw-items-center vw-justify-between vw-py-5 vw-text-left vw-text-vw-light vw-font-semibold vw-text-lg hover:vw-text-white vw-transition-colors"
            :aria-expanded="open === i"
            @click="open = open === i ? null : i"
          >
            {{ section.title }}
            <svg
              class="vw-w-5 vw-h-5 vw-shrink-0 vw-transition-transform vw-duration-300"
              :class="open === i ? 'vw-rotate-180' : ''"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          <Transition
            enter-active-class="vw-transition-all vw-duration-300 vw-ease-out vw-overflow-hidden"
            enter-from-class="vw-max-h-0 vw-opacity-0"
            enter-to-class="vw-max-h-[2000px] vw-opacity-100"
            leave-active-class="vw-transition-all vw-duration-200 vw-ease-in vw-overflow-hidden"
            leave-from-class="vw-max-h-[2000px] vw-opacity-100"
            leave-to-class="vw-max-h-0 vw-opacity-0"
          >
            <div v-if="open === i" class="vw-pb-8 vw-text-vw-light vw-text-sm vw-leading-relaxed">
              <component :is="section.component" />
            </div>
          </Transition>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { defineComponent, h } from 'vue'

const open = ref<number | null>(null)

function rows(items: string[]) {
  return defineComponent({
    render: () =>
      h('ul', { class: 'vw-list-disc vw-list-inside vw-space-y-1 vw-mt-2' },
        items.map((t) => h('li', t))
      ),
  })
}

function timeline(entries: { period: string; role: string; org: string; tools?: string }[]) {
  return defineComponent({
    render: () =>
      h('div', { class: 'vw-space-y-5 vw-mt-2' },
        entries.map((e) =>
          h('div', { class: 'vw-flex vw-gap-4' }, [
            h('span', { class: 'vw-text-white/50 vw-whitespace-nowrap vw-w-28 vw-shrink-0 vw-pt-0.5' }, e.period),
            h('div', [
              h('p', { class: 'vw-font-semibold vw-text-white' }, e.role),
              h('p', e.org),
              e.tools ? h('p', { class: 'vw-text-white/60 vw-text-xs vw-mt-1' }, e.tools) : null,
            ]),
          ])
        )
      ),
  })
}

function skillGrid(sections: { label: string; items: string[] }[]) {
  return defineComponent({
    render: () =>
      h('div', { class: 'vw-space-y-4 vw-mt-2' },
        sections.map((s) =>
          h('div', [
            h('p', { class: 'vw-font-semibold vw-text-white vw-mb-1' }, s.label),
            h('div', { class: 'vw-flex vw-flex-wrap vw-gap-2' },
              s.items.map((item) =>
                h('span', { class: 'vw-bg-white/10 vw-rounded vw-px-2 vw-py-0.5 vw-text-xs' }, item)
              )
            ),
          ])
        )
      ),
  })
}

const sections = [
  {
    title: 'Professional Skills',
    component: rows([
      'Web programmer — 17 years coding websites and web shops primarily on WordPress.',
      'Frontender — receives designs and encodes them (HTML, CSS, Elementor) while configuring shops, sliders, galleries.',
      'Middelender — codes framework-based templates and custom plugins, mainly for WordPress.',
    ]),
  },
  {
    title: 'Relevant Work Experience',
    component: timeline([
      { period: '2021 –',      role: 'Frontend Developer', org: 'CarAds ApS, Odense',          tools: 'WordPress, Elementor, CSS, SCSS, Tailwind, HTML, PHP, VueJS, jQuery' },
      { period: '2019 – 2020', role: 'Frontend Developer', org: 'redWEB ApS, Odense',           tools: 'WordPress, Joomla, CSS, Bootstrap, HTML, PHP, jQuery' },
      { period: '2019 –',      role: 'WordPress Developer', org: 'Vander Web, Odense',          tools: 'WordPress, Elementor, CSS, HTML, PHP, jQuery' },
      { period: '2013 – 2019', role: 'Web Programmer',     org: 'Certa Web, Odense',            tools: 'WordPress, Joomla, CSS, Bootstrap, HTML, PHP, jQuery — incl. WordPress Template Framework' },
      { period: '2013 – 2014', role: 'Web Programmer',     org: 'Symatic Production, Odense',   tools: 'Joomla, CSS, Bootstrap, HTML, PHP' },
      { period: '2009 – 2012', role: 'Frontender',          org: 'redWEB ApS, Odense',           tools: 'Joomla, CSS, HTML, PHP' },
      { period: '2008',        role: 'Programmer',          org: 'Pharma Nord ApS, Vejle',       tools: 'PHP, MySQL, HTML, CSS — Intranet development' },
    ]),
  },
  {
    title: 'Education / Courses',
    component: timeline([
      { period: '2006 – 2007', role: 'Web-integrator',                        org: 'Odense Tekniske Skole' },
      { period: '2002',        role: 'IT-Workshop',                            org: 'Odense Daghøjskole' },
      { period: '1995 – 1999', role: 'Higher Preparatory Examination (HF)',   org: 'VUC Odense' },
    ]),
  },
  {
    title: 'IT Skills',
    component: skillGrid([
      {
        label: 'Super User Level',
        items: ['CSS / SCSS / LESS', 'HTML', 'PHP', 'VueJS', 'Bootstrap & Tailwind', 'WordPress', 'WooCommerce', 'Elementor', 'ACF'],
      },
      {
        label: 'User Level',
        items: ['Office 365', 'Adobe Photoshop', 'MySQL', 'GIT'],
      },
    ]),
  },
  {
    title: 'Personal Skills',
    component: rows([
      'Curious → Never afraid to be in doubt and seek new knowledge.',
      'Technical → Can acquire new skills in a very short time.',
      'Industrious → Works in a concentrated and independent manner; works well in teams.',
    ]),
  },
  {
    title: 'Languages',
    component: rows(['English — written and spoken', 'Danish (mother tongue) — written and spoken']),
  },
]
</script>
