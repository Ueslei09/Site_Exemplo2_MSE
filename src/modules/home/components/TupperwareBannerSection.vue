<!-- src/modules/home/components/TupperwareBannerSection.vue -->
<template>
  <section class="tupperware-banner-section py-5 my-4 bg-white" v-if="sectionData">
    <div class="container-fluid px-3 px-md-4 px-lg-5">
      
      <!-- CABEÇALHO DA SECÇÃO -->
      <div class="mb-4">
        <span class="small fw-semibold text-uppercase d-block mb-1 custom-tag-color">
          {{ sectionData.tag }}
        </span>
        <h2 class="fw-bold fs-2 custom-title-color m-0">
          {{ sectionData.title }}
        </h2>
      </div>

      <!-- BANNER DE LARGURA TOTAL -->
      <div class="position-relative rounded-4 overflow-hidden shadow-sm banner-wrapper">
        
        <!-- Imagem de Fundo Totalmente Nítida -->
        <div class="position-absolute top-0 start-0 w-100 h-100 bg-dark">
          <img :src="sectionData.image" :alt="sectionData.imageAlt" class="w-100 h-100 object-fit-cover banner-img-crisp" loading="lazy" />
          <!-- Camada de escurecimento suave opcional apenas para destacar o texto branco -->
          <div class="position-absolute top-0 start-0 w-100 h-100" style="background-color: rgba(0, 0, 0, 0.25);"></div>
        </div>

        <!-- Conteúdo Centralizado -->
        <div class="card-body p-5 position-relative z-2 d-flex flex-column align-items-center justify-content-center text-center text-white" style="min-height: 380px;">
          <h3 class="fw-bold display-6 mb-2 text-white" style="text-shadow: 0 2px 6px rgba(0,0,0,0.6);">
            {{ sectionData.heading }}
          </h3>
          <p class="fs-6 mb-4 text-white" style="text-shadow: 0 1px 3px rgba(0,0,0,0.6);">
            {{ sectionData.subtitle }}
          </p>
          <div>
            <a :href="sectionData.url" class="btn custom-cta-btn rounded-pill px-4 py-2.5 fw-bold shadow-sm text-decoration-none d-inline-flex align-items-center gap-2">
              <span>{{ sectionData.ctaText }}</span>
            </a>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
import { useTupperwareBanner } from '../composables/useTupperwareBanner'

const { sectionData } = useTupperwareBanner()
</script>

<style scoped>
.tupperware-banner-section {
  background-color: #ffffff !important;
}

/* Cores da nossa paleta aplicada no título e tag */
.custom-tag-color {
  color: #560F20 !important;
}

.custom-title-color {
  color: #560F20 !important;
}

/* Filtros avançados para máxima nitidez, contraste e vivacidade da imagem */
.banner-img-crisp {
  image-rendering: -webkit-optimize-contrast;
  image-rendering: crisp-edges;
  filter: contrast(1.08) saturate(1.12) brightness(1.02);
}

/* Botão com estilo inicial e hover diferenciado */
.custom-cta-btn {
  background-color: #ffffff;
  color: #560F20;
  border: 2px solid #560F20;
  transition: all 0.3s ease;
}

.custom-cta-btn:hover {
  background-color: #560F20;
  color: #ffffff;
  border-color: #560F20;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(86, 15, 32, 0.3) !important;
}

.banner-wrapper {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.banner-wrapper:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15) !important;
}
</style>