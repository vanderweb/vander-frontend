<template>
  <footer class="vw-bg-vw-slate vw-py-10 vw-px-6">
    <div class="vw-max-w-vw vw-mx-auto vw-flex vw-flex-col sm:vw-flex-row vw-items-center sm:vw-items-start vw-justify-between vw-gap-6">
      <!-- Company info -->
      <div class="vw-text-vw-light vw-text-sm vw-space-y-1 vw-text-center sm:vw-text-left">
        <p class="vw-font-semibold vw-text-white vw-text-base">Vander Web</p>
        <p>Ulrik Vander</p>
        <p>Liljevænget 1, Skallebølle</p>
        <p>5492 Vissenbjerg</p>
        <p>CVR: 40848959</p>
      </div>

      <!-- Contact links -->
      <div class="vw-flex vw-items-center vw-gap-4">
        <a
          href="mailto:ulrik@vander.dk"
          aria-label="Send email"
          class="vw-text-vw-light hover:vw-text-white vw-transition-colors"
        >
          <svg class="vw-w-5 vw-h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 2-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"/>
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/company/vander-web"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          class="vw-text-vw-light hover:vw-text-white vw-transition-colors"
        >
          <svg class="vw-w-5 vw-h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM8 19H5V9h3v10zM6.5 7.75A1.75 1.75 0 118.25 6 1.75 1.75 0 016.5 7.75zM19 19h-3v-5.5c0-1.38-.56-2.5-2-2.5s-2 1.12-2 2.5V19h-3V9h3v1.26C12.7 9.46 13.8 9 15 9c2.21 0 4 1.79 4 4v6z"/>
          </svg>
        </a>
      </div>
    </div>

    <!-- Copyright -->
    <div class="vw-max-w-vw vw-mx-auto vw-mt-8 vw-pt-6 vw-border-t vw-border-white/20 vw-text-center vw-text-xs vw-text-white/40 vw-uppercase vw-tracking-widest">
      Vander Web {{ new Date().getFullYear() }} &copy; COPYRIGHT
    </div>
  </footer>
</template>
