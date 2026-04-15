<template>
  <div class="vw-flex vw-flex-col vw-min-h-screen">
    <AppHeader />
    <main class="vw-flex-1">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>
