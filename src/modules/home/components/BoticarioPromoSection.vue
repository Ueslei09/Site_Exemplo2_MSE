<!-- src/modules/home/components/BoticarioPromoSection.vue -->
<template>
  <section class="boticario-section py-5 my-4" v-if="sectionData" aria-labelledby="boticario-heading">
    <div class="container-fluid px-4 px-lg-5">
      
      <!-- CABEÇALHO DA SECÇÃO: Centralizado e com letra fina -->
      <div class="text-center mb-5">
         <img v-if="sectionData.logoUrl" :src="sectionData.logoUrl" alt="O Boticário" style="height: 100px; object-fit: contain;" />
        <h2 id="boticario-heading" class="fw-light fs-2 text-dark m-0">
          Promoções <span class="fw-semibold" style="color: var(--cosmetic-dark);">O Boticário</span> do dia 
          <!--<img v-if="sectionData.logoUrl" :src="sectionData.logoUrl" alt="O Boticário" style="height: 28px; object-fit: contain;" />-->
        </h2>
        <div class="mx-auto mt-2 rounded-pill" style="width: 50px; height: 3px; background-color: var(--cosmetic-primary);"></div>
      </div>

      <!-- CORPO DA SECÇÃO: Banner (30%) + Carrossel de Produtos (70%) -->
      <div class="row g-4 align-items-stretch">
        
        <!-- BANNER DE DESTAQUE (Esquerda - 30%) -->
        <div class="col-lg-3 col-md-4">
          <div class="boticario-banner-card p-4 rounded-4 text-white d-flex flex-column justify-content-between h-100 shadow-sm position-relative overflow-hidden">
            
            <!-- Imagem de Fundo Real do Banner com Acessibilidade -->
            <img 
              v-if="sectionData.banner.bgImage"
              :src="sectionData.banner.bgImage" 
              :alt="sectionData.banner.imageAlt" 
              class="position-absolute top-0 start-0 w-100 h-100 banner-bg-img"
            />
            
            <!-- Overlay com tom escuro da paleta RAY -->
            <div class="position-absolute top-0 start-0 w-100 h-100 banner-bg-overlay"></div>
            
            <!-- Topo: Títulos -->
            <div class="position-relative z-2 text-center pt-2">
              <p class="small text-uppercase tracking-wider opacity-90 mb-2 fw-medium" style="font-size: 0.8rem;">
                {{ sectionData.banner.badgeText }}
              </p>
              <h3 class="fw-bold fs-4 lh-sm mb-3 text-white" style="letter-spacing: -0.5px;">
                PARA FECHAR O <br /> PEDIDO
              </h3>
            </div>

            <!-- Centro: Caixa de 50% OFF idêntica ao modelo -->
            <div class="position-relative z-2 my-auto py-2">
              <div class="discount-badge-model p-3 rounded-4 text-center shadow-lg mx-auto" style="max-width: 220px;">
                <span class="d-block text-white fw-bold text-uppercase" style="font-size: 0.75rem; letter-spacing: 1px;">COM ATÉ</span>
                <div class="d-flex align-items-baseline justify-content-center my-1">
                  <span class="display-5 fw-black text-white m-0 lh-1" style="font-weight: 800;">50</span>
                  <div class="text-start ms-1">
                    <span class="d-block text-white fw-bold fs-5 lh-1">%</span>
                    <span class="d-block text-white fw-bold" style="font-size: 0.6rem; letter-spacing: 0.5px;">OFF</span>
                  </div>
                </div>
                <div class="cashback-pill mt-2 py-1 px-2 rounded-pill d-inline-flex align-items-center justify-content-center gap-1 text-white fw-semibold" style="font-size: 0.68rem; background-color: rgba(0, 0, 0, 0.25);">
                  <span>+ CASHBACK</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>
                    <path d="M0 4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V6a2 2 0 0 1-2-2H3z"/>
                  </svg>
                </div>
              </div>
            </div>

            <!-- Fundo: Botão "Compre já" e Disclaimer -->
            <div class="position-relative z-2 mt-4 text-center">
              <a :href="sectionData.banner.ctaUrl" class="btn btn-light rounded-pill px-4 py-2 fw-semibold shadow-sm text-dark d-inline-flex align-items-center justify-content-center gap-2 hover-scale text-decoration-none" style="font-size: 0.9rem;">
                {{ sectionData.banner.ctaText }}
                <span class="fw-bold">&rsaquo;</span>
              </a>
              <p class="disclaimer-text text-white opacity-75 mt-3 m-0 text-center" style="font-size: 0.6rem; line-height: 1.3;">
                {{ sectionData.banner.disclaimer }}
              </p>
            </div>

          </div>
        </div>

        <!-- CARROSSEL DE PRODUTOS (Direita - 70%) -->
        <div class="col-lg-9 col-md-8">
          <div class="position-relative">
            
            <div class="products-slider-container overflow-hidden py-2">
              <div class="d-flex transition-transform gap-3" :style="{ transform: `translateX(-${currentProductIndex * (100 / itemsPerView)}%)` }">
                
                <div 
                  v-for="product in sectionData.products" 
                  :key="product.id" 
                  class="product-card-wrapper flex-shrink-0"
                  :style="{ width: `calc(${100 / itemsPerView}% - 1rem)` }"
                >
                  <div class="card product-card h-100 border-0 shadow-sm rounded-4 p-3 position-relative bg-white">
                    
                    <span class="badge discount-tag position-absolute top-0 start-0 m-3 px-2 py-1 small fw-bold text-white">
                      {{ product.discount }}
                    </span>

                    <button class="btn btn-link favorito-btn position-absolute top-0 end-0 m-3 p-0 text-muted" aria-label="Adicionar aos favoritos">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                      </svg>
                    </button>

                    <div class="product-img-container text-center py-4 my-2">
                      <img :src="product.image" :alt="product.imageAlt" class="img-fluid product-img" loading="lazy" />
                    </div>

                    <div class="card-body p-0 d-flex flex-column justify-content-between">
                      <div>
                        <div class="small fw-bold mb-1" style="color: var(--cosmetic-dark); font-size: 0.7rem;">
                          {{ product.tag }}
                        </div>

                        <div class="text-muted small fw-bold text-uppercase" style="font-size: 0.65rem;">
                          {{ product.brand }}
                        </div>
                        <h4 class="product-title fw-semibold text-dark fs-6 mb-2" style="display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; height: 2.6em;">
                          {{ product.name }}
                        </h4>

                        <!-- Avaliação por estrelas com suporte a leitores de tela -->
                        <div class="rating-stars mb-2" :aria-label="'Avaliação: ' + product.rating + ' de 5 estrelas'">
                          <span v-for="n in 5" :key="n" class="star" :class="{ 'text-warning': n <= product.rating, 'text-muted opacity-25': n > product.rating }">
                            ★
                          </span>
                        </div>
                      </div>

                      <div class="product-footer pt-2 border-top border-light">
                        <div class="price-box mb-2">
                          <span class="text-muted text-decoration-line-through small d-block" style="font-size: 0.75rem;">
                            {{ product.originalPrice }}
                          </span>
                          <span class="fw-bold fs-5" style="color: var(--cosmetic-darkest);">
                            {{ product.currentPrice }}
                          </span>
                          <span class="text-muted small d-block" style="font-size: 0.7rem;">
                            {{ product.installment }}
                          </span>
                        </div>

                        <!-- Botão Comprar corrigido sem text-white para exibir corretamente o texto escuro -->
                        <button 
                          class="btn btn-ray-custom w-100 rounded-pill py-2 d-flex align-items-center justify-content-center gap-2 fw-semibold shadow-sm"
                          :aria-label="product.ariaLabelButton"
                          type="button"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag" viewBox="0 0 16 16">
                            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4h-3.5zM2 5h12v9H2V5z"/>
                          </svg>
                          Comprar
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
                  v-for="(prod, idx) in sectionData.products" 
                  :key="prod.id"
                  @click="goToSlide(idx)"
                  :class="['carousel-dot border-0 rounded-pill', { 'active': currentProductIndex === idx }]"
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
import { useBoticario } from '../composables/useBoticario'

const { sectionData, currentProductIndex, itemsPerView, nextSlide, prevSlide, goToSlide } = useBoticario()
</script>

<style scoped>
.boticario-section {
  background-color: var(--cosmetic-lightest);
}

.boticario-banner-card {
  background-color: var(--cosmetic-darkest);
  min-height: 480px;
}

.banner-bg-img {
  object-fit: cover;
  z-index: 1;
}

.banner-bg-overlay {
  background: linear-gradient(135deg, rgba(86, 15, 32, 0.88), rgba(121, 17, 39, 0.93));
  z-index: 1;
}

.discount-badge-model {
  background: linear-gradient(135deg, var(--cosmetic-primary) 0%, var(--cosmetic-medium) 100%);
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.35) !important;
}

.hover-scale {
  transition: transform 0.2s ease;
}
.hover-scale:hover {
  transform: scale(1.05);
}

.product-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid var(--cosmetic-light) !important;
}
.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(86, 15, 32, 0.1) !important;
}

.discount-tag {
  background-color: var(--cosmetic-primary);
}

.favorito-btn {
  color: var(--cosmetic-dark) !important;
}

.product-img {
  max-height: 140px;
  object-fit: contain;
  transition: transform 0.3s ease;
}
.product-card:hover .product-img {
  transform: scale(1.05);
}

/* Botão com fundo branco, texto escuro e borda, mudando para escuro no hover com texto branco */
.btn-ray-custom {
  background-color: #ffffff !important;
  color: var(--cosmetic-darkest) !important;
  border: 1px solid var(--cosmetic-darkest) !important;
  transition: all 0.25s ease;
}

.btn-ray-custom:hover {
  background-color: var(--cosmetic-darkest) !important;
  color: #ffffff !important;
  border-color: var(--cosmetic-darkest) !important;
  transform: translateY(-2px);
}

.btn-ray-custom:hover svg {
  fill: #ffffff !important;
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
  background-color: var(--cosmetic-light);
  cursor: pointer;
  transition: all 0.3s ease;
}
.carousel-dot.active {
  width: 24px;
  background-color: var(--cosmetic-primary);
}
</style>