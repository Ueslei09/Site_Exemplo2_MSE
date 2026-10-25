// src/modules/home/composables/useBoticario.js
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { getBoticarioSectionData } from '../services/boticarioService'

export function useBoticario() {
  const sectionData = ref(null)
  const currentProductIndex = ref(0)
  const windowWidth = ref(window.innerWidth)

  // Atualiza a largura da janela quando o utilizador redimensiona o ecrã
  const handleResize = () => {
    windowWidth.value = window.innerWidth
  }

  onMounted(() => {
    sectionData.value = getBoticarioSectionData()
    window.addEventListener('resize', handleResize)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
  })

  // Regra de responsividade gerida de forma limpa no Composable
  const itemsPerView = computed(() => {
    if (windowWidth.value < 768) return 1
    if (windowWidth.value < 992) return 2
    return 4
  })

  const nextSlide = () => {
    if (sectionData.value && sectionData.value.products) {
      const maxIndex = sectionData.value.products.length - itemsPerView.value
      if (currentProductIndex.value < maxIndex) {
        currentProductIndex.value++
      } else {
        currentProductIndex.value = 0
      }
    }
  }

  const prevSlide = () => {
    if (sectionData.value && sectionData.value.products) {
      if (currentProductIndex.value > 0) {
        currentProductIndex.value--
      } else {
        const maxIndex = sectionData.value.products.length - itemsPerView.value
        currentProductIndex.value = maxIndex > 0 ? maxIndex : 0
      }
    }
  }

  const goToSlide = (index) => {
    currentProductIndex.value = index
  }

  return {
    sectionData,
    currentProductIndex,
    itemsPerView,
    nextSlide,
    prevSlide,
    goToSlide
  }
}