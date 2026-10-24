<!-- src/modules/home/components/HeroSection.vue -->
<template>
  <section class="hero-impact-section position-relative overflow-hidden w-100 vh-100 d-flex align-items-center" v-if="currentSlide">
    
    <!-- Imagem de Fundo Dinâmica com Transição -->
    <div class="position-absolute top-0 start-0 w-100 h-100">
      <transition name="fade-slide" mode="out-in">
        <img 
          :key="currentSlide.id"
          :src="currentSlide.image" 
          :alt="currentSlide.imageAlt" 
          class="hero-img position-absolute w-100 h-100"
        />
      </transition>
      <div class="hero-overlay position-absolute top-0 start-0 w-100 h-100"></div>
    </div>

    <!-- Conteúdo Principal Flutuante -->
    <div class="container position-relative z-2 px-3 px-md-5 my-auto pt-5">
      <div class="row w-100 align-items-center justify-content-start">
        <div class="col-md-9 col-lg-7 col-xl-6">
          
          <transition name="fade-up" mode="out-in">
            <div :key="currentSlide.id" class="hero-floating-card p-4 p-md-5 rounded-4 shadow-lg text-white">
              
              <!-- Badge -->
              <span class="badge rounded-pill px-3 py-2 mb-3 text-white fw-semibold small" style="background-color: #FF4D6D;">
                {{ currentSlide.badge }}
              </span>

              <!-- Títulos -->
              <h1 class="hero-title fw-bold mb-2 text-white lh-sm">
                {{ currentSlide.titleMain }} <br />
                <span class="fw-light fst-italic" style="color: #FF8FA3;">{{ currentSlide.titleHighlight }}</span>
              </h1>

              <!-- Descrição -->
              <p class="hero-desc mb-4 text-light opacity-85">
                {{ currentSlide.description }}
              </p>

              <!-- Botões de Ação -->
              <div class="d-flex flex-row flex-wrap gap-2 gap-md-3 mb-4">
                <a href="#" class="btn btn-hero-primary rounded-pill px-4 py-2 fw-semibold text-decoration-none shadow-sm text-nowrap">
                  {{ currentSlide.ctaPrimary }}
                </a>
                <a href="#" class="btn btn-hero-secondary rounded-pill px-4 py-2 fw-semibold text-decoration-none text-nowrap">
                  {{ currentSlide.ctaSecondary }}
                </a>
              </div>

              <!-- Features na parte inferior do Card -->
              <div class="row pt-3 border-top border-light border-opacity-25 text-center text-md-start">
                <div v-for="feat in currentSlide.features" :key="feat.id" class="col-4">
                  <div class="fw-bold fs-6 text-white">{{ feat.value }}</div>
                  <div class="small text-light opacity-75" style="font-size: 0.75rem;">{{ feat.label }}</div>
                </div>
              </div>

            </div>
          </transition>

          <!-- Controlos de Navegação (Play/Pause + Dots) -->
          <div class="d-flex align-items-center gap-3 mt-3 px-2">
            <button 
              @click="togglePlayState" 
              class="play-pause-btn btn rounded-circle d-flex align-items-center justify-content-center p-0 border-0 text-white shadow"
              :title="isPlaying ? 'Pausar carrossel' : 'Reproduzir carrossel'"
              type="button"
            >
              <svg v-if="isPlaying" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
                <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"/>
              </svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
                <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.693-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
              </svg>
            </button>

            <div class="d-flex align-items-center gap-2">
              <button 
                v-for="(slide, index) in slides" 
                :key="slide.id"
                @click="setSlide(index)"
                :class="['carousel-dot border-0 rounded-pill', { 'active': currentSlideIndex === index }]"
                :aria-label="'Ir para slide ' + (index + 1)"
                type="button"
              ></button>
            </div>
          </div>

        </div>
      </div>
    </div>

  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useHome } from '../composables/useHome'

const { slides, currentSlideIndex, isPlaying, setSlide, togglePlayState } = useHome()

const currentSlide = computed(() => {
  return slides.value[currentSlideIndex.value] || null
})
</script>

<style scoped>
.hero-impact-section {
  min-height: 700px;
}

.hero-img {
  object-fit: cover;
  object-position: 25% center; 
}

.hero-overlay {
  background: linear-gradient(to right, rgba(86, 15, 32, 0.55), rgba(0, 0, 0, 0.3));
}

.hero-floating-card {
  background-color: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  max-width: 580px;
}

.hero-title {
  font-size: clamp(1.75rem, 2.5vw, 2.5rem);
}

.hero-desc {
  font-size: clamp(0.875rem, 1.1vw, 0.95rem);
  line-height: 1.5;
}

.btn-hero-primary {
  background-color: #ffffff;
  color: var(--cosmetic-darkest);
  border: 2px solid #ffffff;
  transition: all 0.25s ease-in-out;
}
.btn-hero-primary:hover, .btn-hero-primary:focus {
  background-color: #FF4D6D;
  border-color: #FF4D6D;
  color: #ffffff;
}

.btn-hero-secondary {
  background-color: transparent;
  color: #ffffff;
  border: 2px solid #ffffff;
  transition: all 0.25s ease-in-out;
}
.btn-hero-secondary:hover, .btn-hero-secondary:focus {
  background-color: #ffffff;
  color: var(--cosmetic-darkest);
}

.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: opacity 0.8s ease-in-out;
}
.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
}

.fade-up-enter-active,
.fade-up-leave-active {
  transition: opacity 0.4s ease, transform 0.4s ease;
}
.fade-up-enter-from {
  opacity: 0;
  transform: translateY(10px);
}
.fade-up-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.play-pause-btn {
  width: 34px;
  height: 34px;
  background-color: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(6px);
  border: 1px solid rgba(255, 255, 255, 0.4);
  transition: all 0.3s ease;
  cursor: pointer;
}
.play-pause-btn:hover {
  background-color: #FF4D6D;
  border-color: #FF4D6D;
  transform: scale(1.1);
}

.carousel-dot {
  width: 10px;
  height: 10px;
  background-color: rgba(255, 255, 255, 0.4);
  cursor: pointer;
  transition: all 0.3s ease;
}
.carousel-dot.active {
  width: 28px;
  background-color: #FF4D6D;
}
</style>