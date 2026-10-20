import { createApp } from 'vue'
import './styles/base.css'
import './styles/layout.css'
import './styles/components.css'

const pages = {
  '/impressum.html': () => import('./pages/Impressum.vue'),
  '/datenschutz.html': () => import('./pages/Datenschutz.vue'),
}
const loadPage = pages[window.location.pathname] ?? (() => import('./App.vue'))
loadPage().then(({ default: page }) => createApp(page).mount('#app'))
