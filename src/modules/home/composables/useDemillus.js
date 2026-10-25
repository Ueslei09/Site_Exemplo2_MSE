// src/modules/home/composables/useDemillus.js
import { ref, onMounted, onUnmounted } from 'vue'
import { getDemillusData } from '../services/demillusService'

export function useDemillus() {
  const sectionData = ref(getDemillusData())
  const scrollContainer = ref(null)
  let timer = null

  const scrollLeft = () => {
    if (scrollContainer.value) {
      const cardWidth = 265 // largura do card + gap
      scrollContainer.value.scrollBy({ left: -cardWidth, behavior: 'smooth' })
    }
  }

  const scrollRight = () => {
    if (scrollContainer.value) {
      const cardWidth = 265
      const maxScrollLeft = scrollContainer.value.scrollWidth - scrollContainer.value.clientWidth
      
      // Se chegou ao fim, volta ao início (loop infinito)
      if (scrollContainer.value.scrollLeft >= maxScrollLeft - 10) {
        scrollContainer.value.scrollTo({ left: 0, behavior: 'smooth' })
      } else {
        scrollContainer.value.scrollBy({ left: cardWidth, behavior: 'smooth' })
      }
    }
  }

  // Rotação automática a cada 5 segundos
  const startAutoPlay = () => {
    timer = setInterval(() => {
      scrollRight()
    }, 5000)
  }

  const stopAutoPlay = () => {
    if (timer) clearInterval(timer)
  }

  onMounted(() => {
    startAutoPlay()
  })

  onUnmounted(() => {
    stopAutoPlay()
  })

  return {
    sectionData,
    scrollContainer,
    scrollLeft,
    scrollRight,
    startAutoPlay,
    stopAutoPlay
  }
}