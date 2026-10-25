// src/modules/home/composables/useTestimonials.js
import { ref, onMounted, onUnmounted } from 'vue'
import { getTestimonialsData } from '../services/testimonialsService'

export function useTestimonials() {
  const sectionData = ref(getTestimonialsData())
  const currentIndex = ref(0)
  let intervalId = null

  const nextSlide = () => {
    currentIndex.value = (currentIndex.value + 1).value || (currentIndex.value + 1) % sectionData.value.slides.length
  }

  const prevSlide = () => {
    currentIndex.value = (currentIndex.value - 1 + sectionData.value.slides.length) % sectionData.value.slides.length
  }

  const setSlide = (index) => {
    currentIndex.value = index
  }

  // Transição automática a cada 3 segundos
  onMounted(() => {
    intervalId = setInterval(() => {
      currentIndex.value = (currentIndex.value + 1) % sectionData.value.slides.length
    }, 3000)
  })

  onUnmounted(() => {
    if (intervalId) clearInterval(intervalId)
  })

  return {
    sectionData,
    currentIndex,
    nextSlide,
    prevSlide,
    setSlide
  }
}