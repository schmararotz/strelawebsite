<script setup>
import '../styles/legal.css'
defineProps({ title: { type: String, required: true } })
</script>

<template>
  <a class="skip-link" href="#main">Zum Inhalt springen</a>
  <header class="site-header">
    <a class="brand" href="/#start" aria-label="Strela – Startseite">STRELA</a>
    <a class="text-link" href="/">Zur Startseite ↗</a>
  </header>
  <main id="main" class="legal-page">
    <h1>{{ title }}</h1>
    <slot />
  </main>
  <footer class="legal-footer">
    <nav aria-label="Rechtliche Informationen">
      <a href="/impressum.html">Impressum</a>
      <a href="/datenschutz.html">Datenschutz</a>
    </nav>
    <p>Created with <span role="img" aria-label="Liebe">❤️</span> by Paradox</p>
  </footer>
</template>
