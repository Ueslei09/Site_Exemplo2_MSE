<!-- src/modules/home/components/NaturaPromoSection.vue -->
<template>
  <section class="natura-section py-5 my-4" v-if="naturaData" aria-labelledby="natura-heading">
    <div class="container-fluid px-4 px-lg-5">
      
      <!-- CABEÇALHO DA SECÇÃO: Título, HR com 40% de largura, Subtítulo e Abas -->
      <div class="text-center mb-4">
        <img v-if="naturaData.logoUrl" :src="naturaData.logoUrl" alt="Natura" style="height: 100px; object-fit: contain;" />
        <h2 id="natura-heading" class="fw-light fs-2 text-dark m-0">
          {{ naturaData.sectionTitle }} 
        <!-- <img v-if="naturaData.logoUrl" :src="naturaData.logoUrl" alt="Natura" style="height: 28px; object-fit: contain;" />-->
        </h2>
        
        <!-- Linha HR com 40% de largura, bem fininha e branca -->
        <hr class="section-divider mx-auto my-3" />

        <p class="text-secondary small mt-1 mb-4" style="font-size: 0.9rem;">
          {{ naturaData.sectionSubtitle }}
        </p>

        <!-- Botões de Filtro de Categoria -->
        <div class="d-flex flex-wrap justify-content-center gap-2 mb-5">
          <button
            v-for="cat in naturaData.categories"
            :key="cat.id"
            @click="setActiveCategory(cat.id)"
            :class="['btn rounded-pill px-4 py-2 small fw-semibold text-capitalize filter-tab-btn', { 'active': activeCategoryId === cat.id }]"
            type="button"
          >
            {{ cat.name }}
          </button>
        </div>
      </div>

      <!-- CORPO DA SECÇÃO: Banner (30%) + Carrossel de Produtos (70%) -->
      <div class="row g-4 align-items-stretch" v-if="currentCategory">
        
        <!-- CARD / BANNER DE DESTAQUE À ESQUERDA (30%) -->
        <div class="col-lg-3 col-md-4">
          <div class="natura-banner-card p-4 rounded-4 text-white d-flex flex-column justify-content-between h-100 shadow-sm position-relative overflow-hidden">
            
            <!-- Imagem 100% limpa, nítida e sem nenhum overlay por cima -->
            <img 
              :src="currentCategory.banner.image" 
              :alt="currentCategory.banner.imageAlt" 
              class="position-absolute top-0 start-0 w-100 h-100 banner-bg-img"
            />
            
            <div class="position-relative z-2">
              <span class="d-inline-block px-2 py-1 rounded-pill bg-white text-dark small fw-bold mb-2 shadow-sm" style="font-size: 0.65rem;">
                DESTAQUE
              </span>
              <h3 class="fw-bold fs-4 lh-sm mb-1 text-white text-shadow">
                {{ currentCategory.banner.title }}
              </h3>
              <p class="small text-white opacity-95 m-0 text-shadow" style="font-size: 0.8rem;">
                {{ currentCategory.banner.subtitle }}
              </p>
            </div>

            <div class="position-relative z-2 mt-4 text-center">
              <a href="#" class="btn btn-light rounded-pill w-100 fw-bold py-2 shadow-sm text-dark hover-scale" style="font-size: 0.85rem;">
                Ver categoria &rsaquo;
              </a>
            </div>

          </div>
        </div>

        <!-- CARROSSEL DE PRODUTOS DA CATEGORIA ATIVA (70%) -->
        <div class="col-lg-9 col-md-8">
          <div class="position-relative">
            
            <div class="products-slider-container overflow-hidden py-2">
              <div class="d-flex transition-transform gap-3" :style="{ transform: `translateX(-${currentSlideIndex * (100 / itemsPerView)}%)` }">
                
                <div 
                  v-for="product in currentCategory.products" 
                  :key="product.id" 
                  class="product-card-wrapper flex-shrink-0"
                  :style="{ width: `calc(${100 / itemsPerView}% - 1rem)` }"
                >
                  <div class="card product-card h-100 border-0 shadow-sm rounded-4 p-0 position-relative bg-white overflow-hidden">
                    
                    <span v-if="product.discount" class="badge discount-tag position-absolute top-0 start-0 m-3 px-2 py-1 small fw-bold text-white z-2" style="background-color: var(--cosmetic-primary);">
                      {{ product.discount }}
                    </span>

                    <button class="btn btn-link favorito-btn position-absolute top-0 end-0 m-3 p-0 text-muted z-2" aria-label="Adicionar aos favoritos">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                      </svg>
                    </button>

                    <div class="product-img-container text-center w-100 position-relative d-flex align-items-center justify-content-center" style="height: 190px;">
                      <img :src="product.image" :alt="product.imageAlt" class="w-100 h-100 product-img" loading="lazy" />
                    </div>

                    <div class="card-body p-3 d-flex flex-column justify-content-between">
                      <div>
                        <div class="small fw-bold mb-1" style="color: var(--cosmetic-dark); font-size: 0.7rem;">
                          {{ product.tag }}
                        </div>

                        <h4 class="product-title fw-semibold text-dark fs-6 mb-2" style="display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; height: 2.6em;">
                          {{ product.name }}
                        </h4>

                        <div class="rating-stars mb-2" :aria-label="'Avaliação: ' + product.rating + ' de 5 estrelas'">
                          <span class="text-warning">★</span>
                          <span class="small fw-bold text-dark ms-1">{{ product.rating }}</span>
                        </div>
                      </div>

                      <div class="product-footer pt-2 border-top border-light">
                        <div class="price-box mb-2">
                          <span v-if="product.originalPrice" class="text-muted text-decoration-line-through small d-block" style="font-size: 0.75rem;">
                            {{ product.originalPrice }}
                          </span>
                          <span class="fw-bold fs-5" style="color: var(--cosmetic-darkest);">
                            {{ product.currentPrice }}
                          </span>
                          <span class="text-muted small d-block" style="font-size: 0.7rem;">
                            {{ product.installment }}
                          </span>
                        </div>

                        <button 
                          class="btn btn-ray-custom w-100 rounded-pill py-2 d-flex align-items-center justify-content-center gap-2 fw-semibold shadow-sm"
                          :aria-label="product.ariaLabelButton"
                          type="button"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-bag" viewBox="0 0 16 16">
                            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4h-3.5zM2 5h12v9H2V5z"/>
                          </svg>
                          adicionar à sacola
                        </button>
                      </div>

                    </div>
                  </div>
                </div>

              </div>
            </div>

            <!-- CONTROLOS DO CARROSSEL -->
            <div class="d-flex justify-content-between align-items-center mt-3 px-2">
              <button @click="prevSlide" class="carousel-control-btn rounded-circle border shadow-sm d-flex align-items-center justify-content-center bg-white" aria-label="Ver produtos anteriores">
                &larr;
              </button>

              <div class="d-flex gap-2 align-items-center">
                <button 
                  v-for="(prod, idx) in currentCategory.products" 
                  :key="prod.id"
                  @click="goToSlide(idx)"
                  :class="['carousel-dot border-0 rounded-pill', { 'active': currentSlideIndex === idx }]"
                  :aria-label="'Ir para o produto ' + (idx + 1)"
                  type="button"
                ></button>
              </div>

              <button @click="nextSlide" class="carousel-control-btn rounded-circle border shadow-sm d-flex align-items-center justify-content-center bg-white" aria-label="Ver produtos seguintes">
                &rarr;
              </button>
            </div>

          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
import { useNatura } from '../composables/useNatura'

const { 
  naturaData, 
  activeCategoryId, 
  currentCategory, 
  currentSlideIndex, 
  itemsPerView, 
  setActiveCategory, 
  nextSlide, 
  prevSlide, 
  goToSlide 
} = useNatura()
</script>

<style scoped>
/* Fundo #ECB1C0 com transparência suave */
.natura-section {
  background-color: rgba(236, 177, 192, 0.45) !important;
}

/* Linha HR com exatamente 40% de largura, fina e na cor branca */
.section-divider {
  width: 40% !important;
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.9);
  opacity: 1;
}

.filter-tab-btn {
  background-color: #ffffff;
  color: #333333;
  border: 1px solid rgba(0, 0, 0, 0.1);
  transition: all 0.25s ease;
}
.filter-tab-btn:hover {
  background-color: var(--cosmetic-dark);
  color: #ffffff;
  border-color: var(--cosmetic-dark);
}
.filter-tab-btn.active {
  background-color: var(--cosmetic-darkest);
  color: #ffffff;
  border-color: var(--cosmetic-darkest);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.natura-banner-card {
  background-color: var(--cosmetic-darkest);
  min-height: 420px;
}

/* Imagem 100% nítida, sem nenhum overlay ou opacidade alterada */
.banner-bg-img {
  width: 100% !important;
  height: 100% !important;
  object-fit: cover !important;
  object-position: center !important;
  opacity: 1 !important; 
  z-index: 1;
}

.text-shadow {
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.7);
}

.product-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.6) !important;
}
.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(86, 15, 32, 0.15) !important;
}

.product-img-container {
  width: 100%;
  background-color: #ffffff;
}

.product-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 0.3s ease;
}
.product-card:hover .product-img {
  transform: scale(1.05);
}
/* Botão Padrão do Site com o Hover Oficial do Design System */
.btn-ray-custom {
  background-color: #ffffff;
  color: var(--cosmetic-darkest);
  border: 1px solid var(--cosmetic-darkest);
  transition: all 0.25s ease;
}

.btn-ray-custom:hover {
  background-color: var(--cosmetic-darkest);
  color: #ffffff !important;
  border-color: var(--cosmetic-darkest);
  transform: translateY(-2px);
}
.products-slider-container {
  overflow: hidden;
}
.transition-transform {
  transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1);
}

.carousel-control-btn {
  width: 36px;
  height: 36px;
  cursor: pointer;
  color: var(--cosmetic-darkest);
  font-weight: bold;
  transition: all 0.2s ease;
}
.carousel-control-btn:hover {
  background-color: var(--cosmetic-primary) !important;
  color: #ffffff;
  border-color: var(--cosmetic-primary) !important;
}

.carousel-dot {
  width: 8px;
  height: 8px;
  background-color: rgba(255, 255, 255, 0.7);
  cursor: pointer;
  transition: all 0.3s ease;
}
.carousel-dot.active {
  width: 24px;
  background-color: var(--cosmetic-darkest);
}
</style>