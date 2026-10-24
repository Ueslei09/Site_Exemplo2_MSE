// src/shared/composables/useNavbar.js
import { ref, onMounted, onUnmounted } from 'vue'
import { getNavbarData } from '../services/navbarService'

export function useNavbar() {
  const navbarData = ref(null)
  const loading = ref(true)
  const isScrolled = ref(false)

  const handleScroll = () => {
    // Quando rolar mais de 50px para baixo, ativa o estado scrolled
    isScrolled.value = window.scrollY > 50
  }

  onMounted(() => {
    navbarData.value = getNavbarData()
    loading.value = false

    window.addEventListener('scroll', handleScroll)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })

  return {
    navbarData,
    loading,
    isScrolled
  }
}