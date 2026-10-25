<!-- src/modules/home/components/DemillusCardsSection.vue -->
<template>
  <section class="demillus-cards-section py-5 my-4 bg-white" v-if="sectionData">
    <div class="container-fluid px-3 px-md-4 px-lg-5">
      
      <div class="row align-items-stretch g-4">
        
        <!-- LADO ESQUERDO: Card com altura e largura aumentadas para igualar o direito -->
        <!-- LADO ESQUERDO: Imagem a ocupar 100% diretamente, sem div de fundo -->
        <div class="col-12 col-lg-4 d-flex">
          <a :href="sectionData.leftCard.url" class="card-left-wrapper d-block w-100 text-decoration-none rounded-4 overflow-hidden position-relative shadow-sm" style="min-height: 400px;">
            
            <!-- Imagem posicionada diretamente de ponta a ponta -->
            <img :src="sectionData.leftCard.image" :alt="sectionData.leftCard.alt" class="w-100 h-100 object-fit-cover position-absolute top-0 start-0 banner-img-crisp" loading="lazy" />
            
            <!-- Caixa de Texto Estilizada por cima -->
            <div class="position-relative z-2 h-100 d-flex flex-column justify-content-end p-4">
              <div class="bg-white p-3 rounded-3 shadow-sm d-inline-block align-self-start" style="max-width: 240px;">
                <span class="fw-bold text-dark d-block text-uppercase" style="font-size: 0.95rem; line-height: 1.2;">
                  {{ sectionData.leftCard.title }}
                </span>
              </div>
            </div>

          </a>
        </div>

        <!-- LADO DIREITO: Card maior com as duas imagens de revistas aumentadas -->
        <div class="col-12 col-lg-8 d-flex">
          <div class="card-right-wrapper w-100 rounded-4 p-4 p-lg-5 text-white position-relative overflow-hidden shadow-sm d-flex flex-column flex-md-row align-items-center justify-content-between gap-4" style="background-color: #560F20; min-height: 400px;">
            
            <!-- Coluna de Texto e Botão Principal -->
            <div class="text-center text-md-start flex-grow-1">
              <h2 class="fw-bold display-6 mb-3 text-uppercase" style="color: #ECB1C0; letter-spacing: 1px;">
                {{ sectionData.rightCard.heading }}
              </h2>
              <div>
                <a :href="sectionData.rightCard.ctaUrl" class="btn btn-light rounded-pill px-4 py-3 fw-bold text-dark shadow-sm text-decoration-none d-inline-flex align-items-center justify-content-center gap-2 cta-button">
                  <span>{{ sectionData.rightCard.ctaText }}</span>
                  <span>▼</span>
                </a>
              </div>
            </div>

            <!-- Coluna com as 2 Imagens/Revistas com Largura e Altura Maiores -->
            <div class="d-flex flex-column align-items-center">
              <div class="d-flex gap-3 mb-2 justify-content-center">
                <a 
                  v-for="catalog in sectionData.rightCard.catalogs" 
                  :key="catalog.id" 
                  :href="catalog.url" 
                  class="catalog-link d-block rounded-3 overflow-hidden shadow-sm position-relative"
                  style="width: 140px; height: 195px;"
                  :aria-label="catalog.title"
                >
                  <img :src="catalog.image" :alt="catalog.alt" class="w-100 h-100 object-fit-cover banner-img-crisp" loading="lazy" />
                </a>
              </div>
              <span class="small text-white-50 text-uppercase fw-semibold mt-2" style="font-size: 0.75rem; letter-spacing: 0.5px;">
                {{ sectionData.rightCard.subtext }}
              </span>
            </div>

          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
import { useDemillusCards } from '../composables/useDemillusCards'

const { sectionData } = useDemillusCards()
</script>

<style scoped>
.demillus-cards-section {
  background-color: #ffffff !important;
}

/* Otimização de nitidez da imagem */
.banner-img-crisp {
  image-rendering: -webkit-optimize-contrast;
  image-rendering: crisp-edges;
  filter: contrast(1.06) saturate(1.1) brightness(1.02);
}

.card-left-wrapper, .card-right-wrapper {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card-left-wrapper:hover, .card-right-wrapper:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(86, 15, 32, 0.2) !important;
}

/* Efeito Hover nas revistas/catálogos ampliados */
.catalog-link {
  border: 2px solid rgba(255, 255, 255, 0.2);
  transition: transform 0.3s ease, border-color 0.3s ease;
}

.catalog-link:hover {
  transform: scale(1.05);
  border-color: #ECB1C0;
}

/* Efeito Hover no botão principal */
.cta-button {
  transition: all 0.3s ease;
}

.cta-button:hover {
  background-color: #ECB1C0 !important;
  color: #560F20 !important;
  transform: translateY(-2px);
}
</style>