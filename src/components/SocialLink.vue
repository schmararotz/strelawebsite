<script setup>
defineProps({
  platform: { type: String, required: true },
  label: { type: String, required: true },
  url: { type: String, default: '' },
})
</script>

<template>
  <div class="social-link">
    <a v-if="url" class="social-button" :class="`social-button--${platform}`" :href="url" target="_blank" rel="noopener noreferrer">
      <img :src="`/icons/${platform}.svg`" alt="" width="24" height="24" aria-hidden="true" />
      <span>{{ label }}</span>
      <span class="social-arrow" aria-hidden="true">↗</span>
    </a>
    <button v-else class="social-button" :class="`social-button--${platform}`" type="button" disabled :aria-label="`${label} – Link folgt`">
      <img :src="`/icons/${platform}.svg`" alt="" width="24" height="24" aria-hidden="true" />
      <span>{{ label }}</span>
    </button>
    <small v-if="!url" class="social-note">Link folgt</small>
  </div>
</template>
