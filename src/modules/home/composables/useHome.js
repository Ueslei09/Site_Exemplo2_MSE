// src/modules/home/composables/useHome.js
import { ref, onMounted, onUnmounted } from 'vue'
import { getHomeSlides } from '../services/homeService'

export function useHome() {
  const slides = ref([])
  const currentSlideIndex = ref(0)
  const loading = ref(true)
  const isPlaying = ref(true)
  let timer = null

  const nextSlide = () => {
    if (slides.value.length > 0) {
      currentSlideIndex.value = (currentSlideIndex.value + 1) % slides.value.length
      if (isPlaying.value) {
        scheduleNextSlide()
      }
    }
  }

  const prevSlide = () => {
    if (slides.value.length > 0) {
      currentSlideIndex.value = (currentSlideIndex.value - 1 + slides.value.length) % slides.value.length
      if (isPlaying.value) {
        scheduleNextSlide()
      }
    }
  }

  const setSlide = (index) => {
    currentSlideIndex.value = index
    if (isPlaying.value) {
      scheduleNextSlide()
    }
  }

  const scheduleNextSlide = () => {
    if (timer) clearTimeout(timer)
    
    // Obtém a duração do slide atual (padrão 5000ms, ou 10000ms para o principal)
    const currentSlide = slides.value[currentSlideIndex.value]
    const duration = currentSlide?.duration || 5000

    timer = setTimeout(() => {
      nextSlide()
    }, duration)
    
    isPlaying.value = true
  }

  const pauseTimer = () => {
    if (timer) clearTimeout(timer)
    timer = null
    isPlaying.value = false
  }

  const togglePlayState = () => {
    if (isPlaying.value) {
      pauseTimer()
    } else {
      scheduleNextSlide()
    }
  }

  onMounted(() => {
    slides.value = getHomeSlides()
    loading.value = false
    if (slides.value.length > 0) {
      scheduleNextSlide()
    }
  })

  onUnmounted(() => {
    if (timer) clearTimeout(timer)
  })

  return {
    slides,
    currentSlideIndex,
    loading,
    isPlaying,
    nextSlide,
    prevSlide,
    setSlide,
    togglePlayState
  }
}