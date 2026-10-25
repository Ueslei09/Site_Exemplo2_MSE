<!-- src/modules/home/components/BestSellingSection.vue -->
<template>
  <section class="best-selling-section py-5 my-4" v-if="sectionData" aria-labelledby="bestselling-heading">
    <div class="container-fluid px-4 px-lg-5">
      
      <div class="row align-items-center g-5">
        
        <!-- COLUNA ESQUERDA: Título, Descrição e Botão Buy Now -->
        <div class="col-lg-5">
          <div class="pe-lg-4">
            <h2 id="bestselling-heading" class="fw-light display-6 text-dark mb-4 lh-sm">
              {{ sectionData.title }}
            </h2>

            <p class="text-muted mb-4 lh-base" style="font-size: 0.95rem;">
              {{ sectionData.description }}
            </p>

            <div class="mb-4">
              <a 
                :href="sectionData.ctaUrl" 
                class="btn btn-ray-custom rounded-pill px-4 py-2.5 d-inline-flex align-items-center gap-2 fw-semibold shadow-sm text-decoration-none"
                :aria-label="sectionData.ariaLabelCta"
              >
                <span>{{ sectionData.ctaText }}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M7 17L17 7M17 7H7M17 7V17"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <!-- COLUNA CENTRAL: Imagem do Produto em Destaque -->
        <div class="col-lg-4 text-center">
          <div class="product-showcase-container position-relative py-3">
            <img 
              :src="sectionData.productImage" 
              :alt="sectionData.productImageAlt" 
              class="img-fluid product-showcase-img"
              loading="lazy"
            />
          </div>
        </div>

        <!-- COLUNA DIREITA: Benefícios e Características com marca de verificação -->
        <div class="col-lg-3">
          <div class="ps-lg-3">
            
            <!-- Benefit -->
            <div class="mb-4 pb-3 border-bottom border-secondary border-opacity-25">
              <h3 class="fw-semibold fs-5 text-dark mb-3">
                {{ sectionData.benefitsTitle }}
              </h3>
              <ul class="list-unstyled m-0 d-flex flex-column gap-2">
                <li v-for="(benefit, index) in sectionData.benefits" :key="'ben-' + index" class="d-flex align-items-center gap-2 text-muted small">
                  <span class="text-dark fw-bold">✓</span> {{ benefit }}
                </li>
              </ul>
            </div>

            <!-- Feature -->
            <div>
              <h3 class="fw-semibold fs-5 text-dark mb-3">
                {{ sectionData.featuresTitle }}
              </h3>
              <ul class="list-unstyled m-0 d-flex flex-column gap-2">
                <li v-for="(feature, index) in sectionData.features" :key="'feat-' + index" class="d-flex align-items-center gap-2 text-muted small">
                  <span class="text-dark fw-bold">✓</span> {{ feature }}
                </li>
              </ul>
            </div>

          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
import { useBestSelling } from '../composables/useJequitiCard'

const { sectionData } = useBestSelling()
</script>

<style scoped>
/* Fundo branco sólido */
.best-selling-section {
  background-color: #ffffff !important;
}

.product-showcase-img {
  max-height: 380px;
  object-fit: contain;
  transition: transform 0.4s ease;
}

.product-showcase-img:hover {
  transform: scale(1.03) rotate(-2deg);
}

/* Botão padrão do projeto */
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
  stroke: #ffffff !important;
}
</style>