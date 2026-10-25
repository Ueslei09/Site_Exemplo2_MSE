<!-- src/modules/home/components/JequiteSection.vue -->
<template>
  <section class="jequite-section py-5 my-4" v-if="sectionData" aria-labelledby="jequite-heading">
    <div class="container-fluid px-3 px-md-4 px-lg-5">
      
      <!-- CABEÇALHO: Logo em cima e Título abaixo -->
      <div class="text-center mb-5">
        <div class="d-flex flex-column align-items-center justify-content-center gap-2 mb-2">
          <img 
            v-if="sectionData.logoUrl" 
            :src="sectionData.logoUrl" 
            :alt="sectionData.logoAlt || 'Logótipo Jequiti'" 
            style="height: 38px; object-fit: contain;" 
          />
          <h2 id="jequite-heading" class="fw-light fs-3 fs-md-2 text-purple-custom m-0 text-break">
            {{ sectionData.sectionTitle }}
          </h2>
        </div>
        <!-- HR roxo, bem fininho, com 70% de largura -->
        <hr class="mx-auto my-3 border-0 rounded-pill" style="width: 70%; height: 1px; background-color: #5a2d6c;" />
      </div>

      <!-- CARROSSEL RESPONSIVO -->
      <div class="position-relative px-md-4">
        <div class="products-slider-container overflow-hidden py-2">
          <div class="d-flex transition-transform gap-3" :style="{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }">
            
            <div 
              v-for="product in sectionData.products" 
              :key="product.id" 
              class="product-card-wrapper flex-shrink-0"
              :style="{ width: `calc(${100 / itemsPerView}% - ${(itemsPerView - 1) * 0.75 / itemsPerView}rem)` }"
            >
              <div class="card product-card h-100 border-0 shadow-sm rounded-4 position-relative bg-white overflow-hidden p-0">
                
                <!-- Badge de Desconto -->
                <span class="badge discount-tag position-absolute top-0 start-0 m-3 px-2 py-1 small fw-bold text-white z-2" style="background-color: var(--cosmetic-primary);" aria-hidden="true">
                  {{ product.discount }}
                </span>

                <!-- Botão de Favoritos com Acessibilidade -->
                <button 
                  class="btn btn-link favorito-btn position-absolute top-0 end-0 m-3 p-0 text-muted z-2" 
                  :aria-label="'Adicionar ' + product.name + ' aos favoritos'"
                  type="button"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>
                </button>

                <!-- Imagem do Produto com ALT obrigatório e descritivo -->
                <div class="product-img-container w-100 position-relative" style="height: 220px; background-color: #f8f9fa;">
                  <img 
                    :src="product.image" 
                    :alt="product.imageAlt || product.name" 
                    class="w-100 h-100 product-cover-img" 
                    loading="lazy" 
                  />
                </div>

                <div class="card-body p-3 d-flex flex-column justify-content-between">
                  <div>
                    <div class="text-purple-brand small fw-bold text-uppercase mb-1" style="font-size: 0.65rem;">
                      {{ product.brand }}
                    </div>
                    <h3 class="product-title fw-semibold text-dark fs-6 mb-2" style="display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; height: 2.6em;">
                      {{ product.name }}
                    </h3>

                    <!-- Avaliação com Acessibilidade para Leitores de Tela -->
                    <div class="rating-stars mb-2" :aria-label="'Avaliação: ' + product.rating + ' de 5 estrelas'">
                      <span v-for="n in 5" :key="n" class="star" :class="{ 'text-warning': n <= product.rating, 'text-muted opacity-25': n > product.rating }" aria-hidden="true">
                        ★
                      </span>
                    </div>
                  </div>

                  <div class="product-footer pt-2 border-top border-light">
                    <div class="price-box mb-2">
                      <span class="text-muted text-decoration-line-through small d-block" style="font-size: 0.75rem;">
                        {{ product.originalPrice }}
                      </span>
                      <span class="fw-bold fs-5 text-purple-price">
                        {{ product.currentPrice }}
                      </span>
                      <span class="text-muted small d-block" style="font-size: 0.7rem;">
                        {{ product.installment }}
                      </span>
                    </div>

                    <!-- Botão de Adicionar à Sacola com aria-label detalhado -->
                    <button 
                      class="btn btn-ray-custom w-100 rounded-pill py-2 d-flex align-items-center justify-content-center gap-2 fw-semibold shadow-sm"
                      :aria-label="product.ariaLabelButton"
                      type="button"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag" viewBox="0 0 16 16" aria-hidden="true">
                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4h-3.5zM2 5h12v9H2V5z"/>
                      </svg>
                      ADICIONAR
                    </button>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>

        <!-- Botões de Navegação do Carrossel com Acessibilidade -->
        <button @click="prevSlide" class="carousel-nav-btn prev-btn rounded-circle border shadow-sm d-flex align-items-center justify-content-center bg-white position-absolute top-50 start-0 translate-middle-y z-3" aria-label="Ver produtos anteriores do carrossel">
          &larr;
        </button>
        <button @click="nextSlide" class="carousel-nav-btn next-btn rounded-circle border shadow-sm d-flex align-items-center justify-content-center bg-white position-absolute top-50 end-0 translate-middle-y z-3" aria-label="Ver próximos produtos do carrossel">
          &rarr;
        </button>
      </div>

    </div>
  </section>
</template>

<script setup>
import { useJequiteSection } from '../composables/useJequiteSection'

const { sectionData, currentIndex, itemsPerView, nextSlide, prevSlide } = useJequiteSection()
</script>

<style scoped>
/* Fundo #ECD8E0 com 50% de transparência */
.jequite-section {
  background-color: rgba(236, 216, 224, 0.5) !important;
}

.text-purple-custom {
  color: #5a2d6c !important;
}

.text-purple-brand {
  color: #7b3896 !important;
}

.text-purple-price {
  color: #5a2d6c !important;
}

.product-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid var(--cosmetic-light) !important;
}
.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(90, 45, 108, 0.15) !important;
}

.product-cover-img {
  width: 100% !important;
  height: 100% !important;
  object-fit: cover !important;
  object-position: center !important;
  transition: transform 0.3s ease;
}

.product-card:hover .product-cover-img {
  transform: scale(1.05);
}

.btn-ray-custom {
  background-color: #ffffff !important;
  color: #5a2d6c !important;
  border: 1px solid #5a2d6c !important;
  transition: all 0.25s ease;
}

.btn-ray-custom:hover {
  background-color: #5a2d6c !important;
  color: #ffffff !important;
  border-color: #5a2d6c !important;
  transform: translateY(-2px);
}

.btn-ray-custom:hover svg {
  fill: #ffffff !important;
}

.products-slider-container {
  overflow: hidden;
}

/* Transição configurada exatamente para 2 segundos */
.transition-transform {
  transition: transform 2s cubic-bezier(0.25, 1, 0.5, 1) !important;
}

.carousel-nav-btn {
  width: 40px;
  height: 40px;
  cursor: pointer;
  color: #5a2d6c;
  font-weight: bold;
  font-size: 1.1rem;
  transition: all 0.2s ease;
  border: 1px solid rgba(90, 45, 108, 0.2) !important;
}
.carousel-nav-btn:hover {
  background-color: #5a2d6c !important;
  color: #ffffff;
  border-color: #5a2d6c !important;
}
</style>