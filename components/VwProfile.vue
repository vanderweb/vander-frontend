<template>
  <section class="vw-bg-vw-dark vw-py-16 vw-px-6">
    <div class="vw-max-w-vw vw-mx-auto vw-flex vw-flex-col md:vw-flex-row vw-gap-12 vw-items-center md:vw-items-start">
      <!-- Photo -->
      <div class="vw-shrink-0">
        <img
          src="https://vander.dk/wp-content/uploads/ulrik-vander-300x300.jpg"
          alt="Ulrik Vander"
          class="vw-w-48 vw-h-48 vw-rounded-full vw-object-cover vw-ring-4 vw-ring-white/10"
        />
      </div>

      <!-- Bio -->
      <div class="vw-flex-1 vw-space-y-5">
        <h2 class="vw-text-4xl sm:vw-text-5xl vw-font-semibold vw-text-vw-light vw-leading-tight">
          Ulrik Vander
        </h2>

        <p class="vw-text-vw-light vw-text-base vw-leading-relaxed vw-font-light">
          Outside of job I have always been the helping hand when the family needs general computer
          help. I also assist my sister with her pottery web shop when she needs technical assistance.
        </p>
        <p class="vw-text-vw-light vw-text-base vw-leading-relaxed vw-font-light">
          I live in Vissenbjerg (Denmark) in a house, am married and have two children of 17 and 7
          years respectively.
        </p>
        <p class="vw-text-vw-light vw-text-base vw-leading-relaxed vw-font-light">
          I am interested in family, computer, electronics, movies and RPG board games.
        </p>

        <!-- Social links -->
        <div class="vw-flex vw-gap-3 vw-pt-2">
          <a
            href="mailto:ulrik@vander.dk"
            aria-label="Send email"
            class="vw-inline-flex vw-items-center vw-justify-center vw-w-9 vw-h-9 vw-border vw-border-white vw-rounded vw-text-white hover:vw-text-vw-light hover:vw-border-vw-light vw-transition-colors"
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
            class="vw-inline-flex vw-items-center vw-justify-center vw-w-9 vw-h-9 vw-border vw-border-white vw-rounded vw-text-white hover:vw-text-vw-light hover:vw-border-vw-light vw-transition-colors"
          >
            <svg class="vw-w-4 vw-h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM8 19H5V9h3v10zM6.5 7.75A1.75 1.75 0 118.25 6 1.75 1.75 0 016.5 7.75zM19 19h-3v-5.5c0-1.38-.56-2.5-2-2.5s-2 1.12-2 2.5V19h-3V9h3v1.26C12.7 9.46 13.8 9 15 9c2.21 0 4 1.79 4 4v6z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
