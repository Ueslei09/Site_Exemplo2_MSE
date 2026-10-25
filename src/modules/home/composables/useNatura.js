// src/modules/home/composables/useNatura.js
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { getNaturaSectionData } from '../services/naturaService'

export function useNatura() {
  const naturaData = ref(null)
  const activeCategoryId = ref('perfumaria')
  const currentSlideIndex = ref(0)
  const windowWidth = ref(window.innerWidth)

  const handleResize = () => {
    windowWidth.value = window.innerWidth
  }

  onMounted(() => {
    naturaData.value = getNaturaSectionData()
    window.addEventListener('resize', handleResize)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
  })

  const itemsPerView = computed(() => {
    if (windowWidth.value < 768) return 1
    if (windowWidth.value < 992) return 2
    return 4
  })

  // Retorna a categoria ativa atual
  const currentCategory = computed(() => {
    if (!naturaData.value) return null
    return naturaData.value.categories.find(c => c.id === activeCategoryId.value) || naturaData.value.categories[0]
  })

  const setActiveCategory = (categoryId) => {
    activeCategoryId.value = categoryId
    currentSlideIndex.value = 0 // Reseta o carrossel ao trocar de aba
  }

  const nextSlide = () => {
    if (currentCategory.value && currentCategory.value.products) {
      const maxIndex = currentCategory.value.products.length - itemsPerView.value
      if (currentSlideIndex.value < maxIndex) {
        currentSlideIndex.value++
      } else {
        currentSlideIndex.value = 0
      }
    }
  }

  const prevSlide = () => {
    if (currentCategory.value && currentCategory.value.products) {
      if (currentSlideIndex.value > 0) {
        currentSlideIndex.value--
      } else {
        const maxIndex = currentCategory.value.products.length - itemsPerView.value
        currentSlideIndex.value = maxIndex > 0 ? maxIndex : 0
      }
    }
  }

  const goToSlide = (index) => {
    currentSlideIndex.value = index
  }

  return {
    naturaData,
    activeCategoryId,
    currentCategory,
    currentSlideIndex,
    itemsPerView,
    setActiveCategory,
    nextSlide,
    prevSlide,
    goToSlide
  }
}