<!-- src/modules/home/components/TestimonialsSection.vue -->
<template>
  <section class="testimonials-section py-5 my-4 position-relative overflow-hidden" v-if="sectionData">
    <div class="container py-4 position-relative z-2">
      
      <!-- Título da Secção -->
      <h2 class="text-center text-white fw-light fs-2 mb-5 font-serif" style="letter-spacing: 1px;">
        {{ sectionData.sectionTitle }}
      </h2>

      <!-- Carrossel -->
      <div class="position-relative mx-auto" style="max-width: 850px;">
        
        <!-- Caixa Branca do Depoimento -->
        <div class="card bg-white border-0 shadow-lg rounded-4 p-4 p-md-5 text-center position-relative mb-4">
          
          <!-- Botão Anterior (<) -->
          <button 
            @click="prevSlide" 
            class="carousel-arrow prev-arrow position-absolute top-50 start-0 translate-middle-y rounded-circle bg-white border shadow-sm d-flex align-items-center justify-content-center"
            aria-label="Depoimento anterior"
          >
            &#10094;
          </button>

          <!-- Texto do Slide Atual -->
          <p class="text-dark fst-italic px-3 px-md-5 mb-0" style="font-size: 1.05rem; line-height: 1.8;">
            "{{ sectionData.slides[currentIndex].quote }}"
          </p>

          <!-- Botão Seguinte (>) -->
          <button 
            @click="nextSlide" 
            class="carousel-arrow next-arrow position-absolute top-50 end-0 translate-middle-y rounded-circle bg-white border shadow-sm d-flex align-items-center justify-content-center"
            aria-label="Próximo depoimento"
          >
            &#10095;
          </button>

        </div>

        <!-- Avatar e Nome do Autor (Fora da caixa branca, em baixo) -->
        <div class="text-center">
          <div class="avatar-container mx-auto mb-2 rounded-circle p-1 bg-white shadow-sm" style="width: 70px; height: 70px;">
            <img 
              :src="sectionData.slides[currentIndex].avatar" 
              :alt="sectionData.slides[currentIndex].author" 
              class="w-100 h-100 rounded-circle object-fit-cover" 
            />
          </div>
          <h3 class="text-white fw-semibold fs-6 m-0">
            {{ sectionData.slides[currentIndex].author }}
          </h3>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
import { useTestimonials } from '../composables/useTestimonials'

const { sectionData, currentIndex, nextSlide, prevSlide } = useTestimonials()
</script>

<style scoped>
/* Fundo com a cor do site (#560F20) e transparência de 40% */
.testimonials-section {
  background-color: rgba(86, 15, 32, 0.6) !important;
  backdrop-filter: blur(5px);
}

/* Setas de navegação laterais */
.carousel-arrow {
  width: 42px;
  height: 42px;
  cursor: pointer;
  z-index: 3;
  color: #333;
  font-size: 1rem;
  transition: all 0.2s ease;
  margin-left: -21px;
}

.next-arrow {
  margin-left: 0;
  margin-right: -21px;
}

.carousel-arrow:hover {
  background-color: #f8f9fa;
  transform: translateY(-50%) scale(1.1);
}

.font-serif {
  font-family: Georgia, serif;
}
</style>