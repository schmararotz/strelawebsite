<script setup>
import { useNavigation } from './scripts/app.js'
import SocialLink from './components/SocialLink.vue'
import strelaBanner from './data/strelabanner.png'
import strelaLogo from './data/strelalogo.png'

const { menuOpen, closeMenu } = useNavigation()
const year = new Date().getFullYear()

// Seiteninhalte: Texte und Kontaktlink direkt hier bearbeiten.
const community = {
  callsign: 'Strela',
  designation: '1. Mot - Schützendivision',
  fullName: '1. Mot - Schützendivision "Strela"',
  game: 'Arma Reforger',
  discordUrl: 'https://discord.gg/wFEStDFumt', // Hier euren vollständigen Discord-Einladungslink einsetzen.
  twitchUrl: 'https://www.twitch.tv/muekke_97', // Hier den vollständigen Twitch-Kanallink des Inhabers einsetzen.
  youtubeUrl: 'https://www.youtube.com/@MueKKE_97_YT', // Hier den vollständigen YouTube-Kanallink des Inhabers einsetzen.
  intro: 'Wir sind eine Arma-Reforger-Gemeinschaft für Spieler, die taktisch, koordiniert und verbindlich im Team spielen möchten.',
  philosophy: 'Klare Kommunikation. Gemeinsames Vorgehen. Ein Spielstil, bei dem Auftrag, Rolle und Team wichtiger sind als Solo-Aktionen.',
}

const navigation = [
  { label: 'Die Einheit', href: '#einheit' },
  { label: 'Unser Anspruch', href: '#anspruch' },
  { label: 'Aufnahme', href: '#aufnahme' },
]

const principles = [
  { title: 'Auftragsorientiertes Spielen', text: 'Wir handeln nach Auftrag. Dazu gehört, zuzuhören, Aufträge zu verstehen und sie gemeinsam umzusetzen.' },
  { title: 'Feste Rollen und Aufgaben', text: 'Feste Rollen und Aufgaben geben unserem Zusammenspiel Struktur. Du übernimmst Verantwortung für deinen Teil im Team.' },
  { title: 'Klare Kommunikation', text: 'Wir kommunizieren klar und stimmen unser Vorgehen ab. Das gemeinsame Handeln steht vor der Solo-Aktion.' },
  { title: 'Ausbildung und Weiterentwicklung', text: 'Grundlagen und Ausbildungen gehören dazu. Wir erwarten Kritikfähigkeit und die Bereitschaft, sich weiterzuentwickeln.' },
]

const faqs = [
  { question: 'Was steht bei Strela im Mittelpunkt?', answer: 'Taktisches, koordiniertes und verbindliches Teamplay in Arma Reforger. Auftrag, Rolle und Team sind für uns wichtiger als Solo-Aktionen.' },
  { question: 'Wie funktioniert die Probephase?', answer: 'Die Aufnahme läuft über eine Probephase. Dabei schauen wir gemeinsam, ob der Spielstil passt und ob wir sinnvoll etwas aufbauen können. Die genauen Abläufe werden im persönlichen Austausch geklärt.' },
  { question: 'Welche Rolle spielt Ausbildung?', answer: 'Die Teilnahme an Grundlagen und Ausbildungen gehört zu unserem Anspruch. Wir möchten ein gemeinsames Verständnis für das Zusammenspiel entwickeln und uns als Team verbessern.' },
]
</script>

<template>
  <a class="skip-link" href="#main">Zum Inhalt springen</a>

  <header class="site-header">
    <a href="#start" class="brand" aria-label="Strela – Startseite" @click="closeMenu">
      <img class="brand-logo" :src="strelaLogo" alt="" width="48" height="48" />
      STRELA<span>Arma Reforger</span>
    </a>
    <button class="menu-toggle" type="button" :aria-expanded="menuOpen" aria-controls="navigation" @click="menuOpen = !menuOpen">
      {{ menuOpen ? 'Schließen −' : 'Menü +' }}
    </button>
    <nav id="navigation" :class="{ 'is-open': menuOpen }" aria-label="Hauptnavigation">
      <a v-for="item in navigation" :key="item.href" :href="item.href" @click="closeMenu">{{ item.label }}</a>
      <a href="#kontakt" class="nav-cta" @click="closeMenu">Kontakt <span aria-hidden="true">↗</span></a>
    </nav>
  </header>

  <main id="main">
    <section id="start" class="hero" aria-labelledby="hero-title">
      <div class="hero-content">
        <h1 id="hero-title" class="visually-hidden">{{ community.fullName }}</h1>
        <div class="hero-art">
          <img class="hero-banner" :src="strelaBanner" alt="" width="1921" height="819" fetchpriority="high" />
        </div>
        <div class="hero-intro">
          <p class="hero-statement">Taktisches Zusammenspiel in Arma Reforger.</p>
          <div class="hero-copy">
            <p>Für Spieler, die Verantwortung übernehmen<br class="desktop-break" /> und sich aufeinander verlassen wollen.</p>
            <div class="hero-actions">
              <a class="button button-primary" href="#aufnahme">Informationen zur Aufnahme <span aria-hidden="true">↗</span></a>
              <a class="text-link" href="#einheit">Über die Einheit <span aria-hidden="true">↓</span></a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="einheit" class="section about-section" aria-labelledby="about-title">
      <div class="unit-emblem">
        <img class="unit-logo" :src="strelaLogo" alt="Emblem der 1. Mot - Schützendivision Strela" width="1254" height="1254" loading="lazy" />
      </div>
      <div class="section-content about-copy">
        <h2 id="about-title">Die Einheit</h2>
        <p class="lead">{{ community.intro }}</p>
        <p>{{ community.philosophy }}</p>
      </div>
    </section>

    <section id="anspruch" class="section principles-section" aria-labelledby="principles-title">
      <div class="section-heading"><h2 id="principles-title">Unser Anspruch</h2><p>Was wir voneinander erwarten – im Spiel und im Umgang miteinander.</p></div>
      <div class="section-content principles-list">
        <article v-for="item in principles" :key="item.title" class="principle">
          <h3>{{ item.title }}</h3>
          <p>{{ item.text }}</p>
        </article>
      </div>
    </section>

    <section id="aufnahme" class="section recruitment-section" aria-labelledby="recruitment-title">
      <div class="section-heading"><h2 id="recruitment-title">Aufnahme</h2><p>Voraussetzungen und Probephase</p></div>
      <div class="section-content">
        <div class="requirements">
          <h3>Voraussetzungen</h3>
          <p>Wir suchen Spieler, die verbindlich im Team spielen möchten. Dazu gehört, Aufträgen zuzuhören, sie umzusetzen und eine feste Rolle mit klaren Aufgaben zu übernehmen.</p>
          <p>Klare Kommunikation und abgestimmtes Vorgehen sind uns wichtig. Solo-Aktionen passen nicht zu unserem Spielstil.</p>
          <p>Wir erwarten die Teilnahme an Grundlagen und Ausbildungen sowie die Bereitschaft, Kritik anzunehmen und sich weiterzuentwickeln.</p>
        </div>
        <div class="trial-panel">
          <h3>Probephase</h3>
          <p>Die Aufnahme erfolgt über eine Probephase. Dabei prüfen wir gemeinsam, ob unser Spielstil zu dir passt und die Zusammenarbeit funktioniert. Die Einzelheiten besprechen wir auf Discord.</p>
          <a class="button button-primary" href="#kontakt">Kontakt aufnehmen <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </section>

    <section class="section faq-section" aria-labelledby="faq-title">
      <div class="section-heading"><h2 id="faq-title">Häufige Fragen</h2></div>
      <div class="section-content faq-list">
        <details v-for="item in faqs" :key="item.question">
          <summary>{{ item.question }}<span aria-hidden="true">+</span></summary>
          <p>{{ item.answer }}</p>
        </details>
      </div>
    </section>

    <section id="kontakt" class="section contact-section" aria-labelledby="contact-title">
      <div class="section-heading"><h2 id="contact-title">Kontakt</h2><p>Discord und die Kanäle des Inhabers</p></div>
      <div class="section-content">
        <div class="contact-community">
          <h3>Discord</h3>
          <p>Für Fragen zur Gruppe oder Interesse an der Aufnahme erreichst du uns auf Discord.</p>
          <div class="social-links"><SocialLink platform="discord" label="Zum Strela-Discord" :url="community.discordUrl" /></div>
        </div>
        <div class="streamer-info">
          <h3>Der Inhaber auf Twitch &amp; YouTube</h3>
          <p>Der Inhaber unserer Gruppe ist Twitch-Streamer. Hier findest du seine Kanäle.</p>
          <div class="social-links">
            <SocialLink platform="twitch" label="Twitch" :url="community.twitchUrl" />
            <SocialLink platform="youtube" label="YouTube" :url="community.youtubeUrl" />
          </div>
        </div>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <div><a class="footer-brand" href="#start">STRELA</a><p>{{ community.fullName }}</p></div>
    <div class="footer-details"><p>© {{ year }} Strela · Arma-Reforger-Gemeinschaft</p><small>Inoffizielles Community-Projekt. Nicht mit Bohemia Interactive verbunden.</small></div>
    <nav class="footer-links" aria-label="Rechtliche Informationen">
      <a href="/impressum.html">Impressum</a>
      <a href="/datenschutz.html">Datenschutz</a>
      <a class="back-top" href="#start">Nach oben ↑</a>
    </nav>
    <p class="footer-credit">Created with <span role="img" aria-label="Liebe">❤️</span> by Paradox</p>
  </footer>
</template>
