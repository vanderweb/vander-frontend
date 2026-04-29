<template>
  <section id="skills" class="vw-bg-vw-slate vw-py-16 vw-px-6">
    <div class="vw-max-w-vw vw-mx-auto vw-flex vw-flex-col md:vw-flex-row vw-gap-10">

      <!-- Left: heading + accordion -->
      <div class="vw-flex-1 vw-min-w-0">
        <h2 class="vw-text-2xl vw-font-bold vw-text-vw-light vw-mb-4 vw-uppercase vw-tracking-wide">
          Portfolio
        </h2>
        <div class="vw-divide-y vw-divide-white/20">
          <div v-for="(section, i) in sections" :key="section.title">
            <button
              class="vw-w-full vw-flex vw-items-center vw-gap-3 vw-py-3 vw-text-left vw-text-vw-light vw-font-bold vw-text-xs vw-uppercase vw-tracking-widest hover:vw-text-white vw-transition-colors"
              :aria-expanded="open === i"
              @click="open = open === i ? null : i"
            >
              <span class="vw-text-base vw-leading-none vw-w-4 vw-shrink-0">{{ open === i ? '−' : '+' }}</span>
              {{ section.title }}
            </button>

            <Transition
              enter-active-class="vw-transition-all vw-duration-300 vw-ease-out vw-overflow-hidden"
              enter-from-class="vw-max-h-0 vw-opacity-0"
              enter-to-class="vw-max-h-[2000px] vw-opacity-100"
              leave-active-class="vw-transition-all vw-duration-200 vw-ease-in vw-overflow-hidden"
              leave-from-class="vw-max-h-[2000px] vw-opacity-100"
              leave-to-class="vw-max-h-0 vw-opacity-0"
            >
              <div v-if="open === i" class="vw-pb-6 vw-text-vw-light vw-text-sm vw-leading-relaxed">
                <component :is="section.component" />
              </div>
            </Transition>
          </div>
        </div>
      </div>

      <!-- Right: profile photo -->
      <div class="vw-shrink-0 vw-flex vw-justify-center md:vw-justify-end md:vw-items-start vw-pt-10">
        <img
          src="https://headless.vanderweb.dk/wp-content/uploads/ulrik-vander-300x300.jpg"
          alt="Ulrik Vander"
          class="vw-w-64 vw-h-64 vw-object-cover"
        />
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
      { period: '2021 –',      role: 'Frontend Developer',  org: 'CarAds ApS, Odense',          tools: 'WordPress, Elementor, CSS, SCSS, Tailwind, HTML, PHP, VueJS, jQuery' },
      { period: '2019 – 2020', role: 'Frontend Developer',  org: 'redWEB ApS, Odense',           tools: 'WordPress, Joomla, CSS, Bootstrap, HTML, PHP, jQuery' },
      { period: '2019 –',      role: 'WordPress Developer', org: 'Vander Web, Odense',           tools: 'WordPress, Elementor, CSS, HTML, PHP, jQuery' },
      { period: '2013 – 2019', role: 'Web Programmer',      org: 'Certa Web, Odense',            tools: 'WordPress, Joomla, CSS, Bootstrap, HTML, PHP, jQuery — incl. WordPress Template Framework' },
      { period: '2013 – 2014', role: 'Web Programmer',      org: 'Symatic Production, Odense',   tools: 'Joomla, CSS, Bootstrap, HTML, PHP' },
      { period: '2009 – 2012', role: 'Frontender',          org: 'redWEB ApS, Odense',           tools: 'Joomla, CSS, HTML, PHP' },
      { period: '2008',        role: 'Programmer',          org: 'Pharma Nord ApS, Vejle',       tools: 'PHP, MySQL, HTML, CSS — Intranet development' },
    ]),
  },
  {
    title: 'Education / Courses',
    component: timeline([
      { period: '2006 – 2007', role: 'Web-integrator',                      org: 'Odense Tekniske Skole' },
      { period: '2002',        role: 'IT-Workshop',                          org: 'Odense Daghøjskole' },
      { period: '1995 – 1999', role: 'Higher Preparatory Examination (HF)', org: 'VUC Odense' },
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
  {
    title: 'Private / Spare Time',
    component: rows([
      'Always the helping hand when family and friends need computer assistance.',
      'Assists my sister with her pottery web shop (technical support).',
      'Interests: family, computers, electronics, movies and RPG board games.',
      'Lives in Vissenbjerg (Denmark), married with two children (17 and 7 years).',
    ]),
  },
]
</script>
