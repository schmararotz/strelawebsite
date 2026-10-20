import { ref, onMounted, onUnmounted } from 'vue'

export function useNavigation() {
    const menuOpen = ref(false)
    const closeMenu = () => { menuOpen.value = false }
    const handleKey = (event) => { if (event.key === 'Escape') closeMenu() }
    onMounted(() => document.addEventListener('keydown', handleKey))
    onUnmounted(() => document.removeEventListener('keydown', handleKey))

    return { menuOpen, closeMenu }
}
