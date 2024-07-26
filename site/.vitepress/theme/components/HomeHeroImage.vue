<!--.vitepress/theme/HomeHeroImage.vue-->
<script setup lang="ts">
import { inject } from 'vue';
import type { Ref } from 'vue';

const heroImageSlotExists = inject('hero-image-slot-exists') as Ref<boolean>;
</script>

<template #home-hero-image>
  <video
    src="/videos/wasm-page-demo.mp4"
    muted
    autoplay
    loop
    controls
    style="border-radius: 12px; z-index: 1; opacity: 0.85"
  ></video>
</template>
