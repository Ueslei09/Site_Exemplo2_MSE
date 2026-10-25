<!-- src/modules/home/components/NaturaCardSection.vue -->
<template>
  <section class="natura-card-section py-5 my-4 bg-white" v-if="cardData" aria-labelledby="natura-card-heading">
    <div class="container-fluid px-4 px-lg-5">
      
      <!-- CABEÇALHO DA SECÇÃO -->
      <div class="text-center mb-5">
        <div class="d-inline-flex align-items-center justify-content-center gap-2">
          <h2 id="natura-card-heading" class="fw-light fs-2 text-dark m-0">
            {{ cardData.sectionTitle }}
          </h2>
          <img :src="cardData.logoUrl" alt="Natura" style="height: 28px; object-fit: contain;" />
        </div>
        <div class="mx-auto mt-2 rounded-pill" style="width: 50px; height: 3px; background-color: var(--cosmetic-primary);"></div>
      </div>

      <!-- CORPO DA SECÇÃO: 2 Cards (50% cada) -->
      <div class="row g-4 align-items-stretch">
        
        <!-- CARD ESQUERDO (50%) - Imagem 100% nítida e preenchendo tudo -->
        <div class="col-lg-6">
          <div class="natura-split-card p-4 rounded-4 text-white d-flex flex-column justify-content-between h-100 shadow-sm position-relative overflow-hidden">
            
            <img 
              :src="cardData.leftCard.image" 
              :alt="cardData.leftCard.imageAlt" 
              class="position-absolute top-0 start-0 w-100 h-100 banner-bg-img"
            />

            <div class="position-relative z-2">
              <span class="d-inline-block px-2 py-1 rounded-pill bg-white text-dark small fw-bold shadow-sm" style="font-size: 0.65rem;">
                {{ cardData.leftCard.badge }}
              </span>
            </div>

            <!-- Textos no canto inferior esquerdo -->
            <div class="position-relative z-2 mt-auto pt-5">
              <h3 class="fw-bold fs-3 lh-sm mb-1 text-white text-shadow" style="letter-spacing: -0.5px;">
                {{ cardData.leftCard.title }}
              </h3>
              <p class="small text-white opacity-95 m-0 text-shadow" style="font-size: 0.85rem;">
                {{ cardData.leftCard.subtitle }}
              </p>
            </div>

          </div>
        </div>

        <!-- CARD DIREITO (50%) - Imagem preenchendo todo o espaço superior -->
        <div class="col-lg-6">
          <div class="card natura-product-split-card h-100 border-0 shadow-sm rounded-4 p-4 position-relative bg-white d-flex flex-column justify-content-between">
            
            <!-- Imagem do Produto preenchendo o topo -->
            <div class="product-img-container w-100 position-relative overflow-hidden rounded-4 mb-3" style="height: 240px;">
              <img :src="cardData.rightCard.image" :alt="cardData.rightCard.imageAlt" class="position-absolute top-0 start-0 w-100 h-100 product-cover-img" loading="lazy" />
            </div>

            <!-- Informações do Produto -->
            <div class="card-body px-0 pt-0 d-flex flex-column justify-content-between">
              <div>
                <div class="small fw-bold mb-1" style="color: var(--cosmetic-dark); font-size: 0.75rem;">
                  {{ cardData.rightCard.tag }}
                </div>
                
                <h4 class="fw-semibold text-dark fs-5 mb-2">
                  {{ cardData.rightCard.name }}
                </h4>

                <p class="text-muted small mb-3" style="font-size: 0.85rem;">
                  {{ cardData.rightCard.description }}
                </p>

                <!-- Avaliação -->
                <div class="rating-stars mb-3" :aria-label="'Avaliação: ' + cardData.rightCard.rating + ' de 5 estrelas'">
                  <span v-for="n in 5" :key="n" class="text-warning">★</span>
                </div>
              </div>

              <div class="product-footer pt-3 border-top border-light d-flex align-items-center justify-content-between">
                <div>
                  <span class="text-muted small d-block" style="font-size: 0.75rem;">Preço exclusivo</span>
                  <span class="fw-bold fs-4" style="color: var(--cosmetic-darkest);">
                    {{ cardData.rightCard.price }}
                  </span>
                </div>

                <div style="width: 200px;">
                  <button 
                    class="btn btn-ray-custom w-100 rounded-pill py-2 d-flex align-items-center justify-content-center gap-2 fw-semibold shadow-sm"
                    :aria-label="cardData.rightCard.ariaLabelButton"
                    type="button"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag" viewBox="0 0 16 16">
                      <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4h-3.5zM2 5h12v9H2V5z"/>
                    </svg>
                    Add to Bag
                  </button>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
import { useNaturaCard } from '../composables/useNaturaCard'

const { cardData } = useNaturaCard()
</script>

<style scoped>
.natura-card-section {
  background-color: #ffffff !important;
}

.natura-split-card {
  background-color: var(--cosmetic-darkest);
  min-height: 480px;
}

/* Imagem esquerda 100% nítida e cobrindo todo o card */
.banner-bg-img {
  width: 100% !important;
  height: 100% !important;
  object-fit: cover !important;
  object-position: center !important;
  opacity: 1 !important;
  z-index: 1;
}

.text-shadow {
  text-shadow: 0 2px 6px rgba(0, 0, 0, 0.75);
}

.natura-product-split-card {
  border: 1px solid rgba(0, 0, 0, 0.08) !important;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  min-height: 480px;
}
.natura-product-split-card:hover {
  box-shadow: 0 12px 30px rgba(86, 15, 32, 0.1) !important;
}

/* Imagem direita preenchendo todo o espaço superior */
.product-cover-img {
  width: 100% !important;
  height: 100% !important;
  object-fit: cover !important;
  object-position: center !important;
}

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
</style>