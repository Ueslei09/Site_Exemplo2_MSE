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
    }
  }

  const prevSlide = () => {
    if (slides.value.length > 0) {
      currentSlideIndex.value = (currentSlideIndex.value - 1 + slides.value.length) % slides.value.length
    }
  }

  const setSlide = (index) => {
    currentSlideIndex.value = index
    // Se o utilizador clicar manualmente, reinicia o ciclo se estivesse a reproduzir
    if (isPlaying.value) {
      restartTimer()
    }
  }

  const startTimer = () => {
    if (timer) clearInterval(timer)
    timer = setInterval(() => {
      nextSlide()
    }, 5000)
    isPlaying.value = true
  }

  const pauseTimer = () => {
    if (timer) clearInterval(timer)
    timer = null
    isPlaying.value = false
  }

  const restartTimer = () => {
    if (timer) clearInterval(timer)
    timer = setInterval(() => {
      nextSlide()
    }, 5000)
    isPlaying.value = true
  }

  const togglePlayState = () => {
    if (isPlaying.value) {
      pauseTimer()
    } else {
      startTimer()
    }
  }

  onMounted(() => {
    slides.value = getHomeSlides()
    loading.value = false
    startTimer()
  })

  onUnmounted(() => {
    if (timer) clearInterval(timer)
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