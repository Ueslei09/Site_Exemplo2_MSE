// src/modules/home/composables/useTupperware.js
import { ref } from 'vue'
import { getTupperwareData } from '../services/tupperwareService'

export function useTupperware() {
  const sectionData = ref(getTupperwareData())
  const scrollContainer = ref(null)

  // Funções de navegação do carrossel (setas)
  const scrollLeft = () => {
    if (scrollContainer.value) {
      scrollContainer.value.scrollBy({ left: -280, behavior: 'smooth' })
    }
  }

  const scrollRight = () => {
    if (scrollContainer.value) {
      scrollContainer.value.scrollBy({ left: 280, behavior: 'smooth' })
    }
  }

  return {
    sectionData,
    scrollContainer,
    scrollLeft,
    scrollRight
  }
}