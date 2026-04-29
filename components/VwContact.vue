<template>
  <footer class="vw-bg-vw-dark vw-px-6 vw-pt-12 vw-pb-0">
    <div class="vw-max-w-vw vw-mx-auto vw-flex vw-flex-col sm:vw-flex-row sm:vw-items-start vw-justify-between vw-gap-6 vw-pb-10">
      <!-- Company info -->
      <div class="vw-text-vw-light vw-text-sm vw-space-y-1">
        <p class="vw-font-bold vw-text-4xl vw-text-white vw-mb-3">Vander Web</p>
        <p>Ulrik Vander</p>
        <p>Liljevænget 1, Skallebølle</p>
        <p>5492 Vissenbjerg</p>
        <p class="vw-pt-2">CVR: 40848959</p>
      </div>

      <!-- Contact icons -->
      <div class="vw-flex vw-items-center vw-gap-3 vw-pt-1">
        <a
          href="mailto:ulrik@vander.dk"
          aria-label="Send email"
          class="vw-inline-flex vw-items-center vw-justify-center vw-w-8 vw-h-8 vw-border vw-border-vw-light/40 vw-text-vw-light hover:vw-text-white hover:vw-border-white vw-transition-colors"
        >
          <svg class="vw-w-4 vw-h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 2-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"/>
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/company/vander-web"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          class="vw-inline-flex vw-items-center vw-justify-center vw-w-8 vw-h-8 vw-border vw-border-vw-light/40 vw-text-vw-light hover:vw-text-white hover:vw-border-white vw-transition-colors"
        >
          <svg class="vw-w-4 vw-h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM8 19H5V9h3v10zM6.5 7.75A1.75 1.75 0 118.25 6 1.75 1.75 0 016.5 7.75zM19 19h-3v-5.5c0-1.38-.56-2.5-2-2.5s-2 1.12-2 2.5V19h-3V9h3v1.26C12.7 9.46 13.8 9 15 9c2.21 0 4 1.79 4 4v6z"/>
          </svg>
        </a>
      </div>
    </div>

    <!-- Copyright bar -->
    <div class="vw-border-t vw-border-white/10 vw-py-4 vw-text-center vw-text-xs vw-text-white/30 vw-uppercase vw-tracking-widest">
      Vander Web {{ new Date().getFullYear() }} &copy; COPYRIGHT.
    </div>
  </footer>
</template>
