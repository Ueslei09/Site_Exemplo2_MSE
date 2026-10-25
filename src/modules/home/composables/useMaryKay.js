// src/modules/home/composables/useMaryKay.js
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { getMaryKayData } from '../services/marykayService'

export function useMaryKay() {
  const sectionData = ref(getMaryKayData())
  const currentIndex = ref(0)
  const windowWidth = ref(window.innerWidth)

  const updateWidth = () => {
    windowWidth.value = window.innerWidth
  }

  onMounted(() => {
    window.addEventListener('resize', updateWidth)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', updateWidth)
  })

  // Responsividade: 1 no mobile, 2 no tablet, 5 no desktop
  const itemsPerView = computed(() => {
    if (windowWidth.value < 768) return 1
    if (windowWidth.value < 1024) return 2
    return 5
  })

  const maxIndex = computed(() => {
    return Math.max(0, sectionData.value.products.length - itemsPerView.value)
  })

  const nextSlide = () => {
    if (currentIndex.value < maxIndex.value) {
      currentIndex.value++
    } else {
      currentIndex.value = 0
    }
  }

  const prevSlide = () => {
    if (currentIndex.value > 0) {
      currentIndex.value--
    } else {
      currentIndex.value = maxIndex.value
    }
  }

  return {
    sectionData,
    currentIndex,
    itemsPerView,
    nextSlide,
    prevSlide
  }
}