# Strela – Community-Webseite

Vue 3, JavaScript und normales CSS, ohne CSS-Framework.

## Lokal starten

Node.js 20.19+ oder 22.12+ verwenden.

```sh
npm install
npm run dev
```

## Dateien bearbeiten

| Datei | Zweck |
| --- | --- |
| `src/App.vue` | Seitentexte, Daten, Discord-Link und HTML-Struktur |
| `src/scripts/app.js` | Verhalten und Zustand der mobilen Navigation |
| `src/styles/base.css` | Farben, Schriften, globale Regeln |
| `src/styles/layout.css` | Seitenlayout und responsive Darstellung |
| `src/styles/components.css` | Gestaltung einzelner Elemente |
| `public/` | Statische Grafiken, später auch eigene Bilder |
| `src/data/` | Originalbanner und Logo, direkt in `src/App.vue` importiert |
| `index.html` | Seitentitel und Suchmaschinenbeschreibung |
| `src/pages/Impressum.vue` | Betreiberangaben für das Impressum |
| `src/pages/Datenschutz.vue` | Datenschutzerklärung |

Die Inhalte stehen direkt in `src/App.vue`: wiederholte Inhalte als Daten im oberen `<script setup>`-Bereich, weitere Texte direkt im Template. Die Navigationslogik bleibt in einer separaten JavaScript-Datei. CSS wird zentral in `src/main.js` geladen; es gibt keine Inline-Styles. Neue eigenständige Komponenten können in `src/components/` ergänzt werden.

### Kontakt aktivieren

In `src/App.vue` die vollständigen Links bei `community.discordUrl`, `community.twitchUrl` und `community.youtubeUrl` eintragen. Die Buttons mit lokalen SVG-Logos sind bereits sichtbar. Solange ein Link fehlt, ist der entsprechende Button deaktiviert und mit „Link folgt“ gekennzeichnet. Nach Eintragen des Links öffnet er das Ziel in einem neuen Tab. Die gemeinsame Darstellung steht in `src/components/SocialLink.vue`, die Logos liegen in `public/icons/`.

Die Probephase hat bewusst keine erfundene Dauer, Dienstzeiten oder Aufnahmebedingungen. Diese Angaben können ergänzt werden, sobald sie feststehen.

### Rechtliche Seiten

Die Footer-Links führen zu `impressum.html` und `datenschutz.html`. Beide werden als eigenständige Einstiegsseiten gebaut und benötigen keine Weiterleitungsregeln auf dem Webhost. Die Inhalte stehen in den entsprechenden Vue-Dateien unter `src/pages/`. Aktuell sind sie ausdrücklich als unfertige Platzhalter gekennzeichnet, da Betreiberangaben und Hosting-Details fehlen. Die Platzhalter durch die tatsächlichen Angaben bzw. die passende Datenschutzerklärung ersetzen; anschließend kann `noindex` aus den beiden HTML-Dateien entfernt werden.

### Design ändern

Die zentralen Farben und die Displayschrift stehen als CSS-Variablen am Anfang von `src/styles/base.css`. Alle Schriftarten sind lokal verfügbare Systemschriften; es werden keine externen Fonts geladen.

Die Farbpalette greift Schwarz, Anthrazit und Gold aus den beiden Motiven auf. `src/data/strelabanner.png` steht vollständig und ohne Zuschnitt im bildschirmhohen Kopfbereich. `src/data/strelalogo.png` wird in der Navigation, in der Einheitsvorstellung und als Favicon verwendet. Die Originalbilder bleiben unverändert.

## Produktionsversion

```sh
npm run build
npm run preview
```

Der Ordner `dist/` enthält die fertige statische Webseite und kann bei einem statischen Webhost veröffentlicht werden. Die Seite benötigt keinen Servercode und speichert keine Bewerberdaten. Das Kontaktziel wird extern geöffnet.
