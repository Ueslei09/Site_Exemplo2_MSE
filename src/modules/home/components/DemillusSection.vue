<!-- src/modules/home/components/DemillusSection.vue -->
<template>
  <section class="demillus-section py-5 my-4 position-relative overflow-hidden" v-if="sectionData">
    <div class="container-fluid px-3 px-md-4 px-lg-5 position-relative z-2">
      
      <!-- CABEÇALHO -->
      <div class="text-center mb-5">
        <div class="d-flex flex-column align-items-center justify-content-center gap-2 mb-2">
          <img 
            v-if="sectionData.logoUrl" 
            :src="sectionData.logoUrl" 
            :alt="sectionData.logoAlt" 
            style="height: 38px; object-fit: contain;" 
          />
          <h2 class="fw-light fs-3 fs-md-2 text-dark m-0 text-break">
            {{ sectionData.sectionTitle }}
          </h2>
        </div>
        <hr class="mx-auto my-3 border-0 rounded-pill" style="width: 70%; height: 1px; background-color: #560F20;" />
      </div>

      <!-- CONTEÚDO PRINCIPAL: Card à Esquerda + Carrossel à Direita -->
      <div class="row align-items-stretch g-4">
        
        <!-- Bloco Esquerdo: Card de Destaque -->
        <div class="col-12 col-lg-4 d-flex">
          <a :href="sectionData.featuredBanner.url" class="d-block w-100 text-decoration-none">
            <div class="featured-card w-100 rounded-4 p-4 text-white position-relative overflow-hidden shadow-sm d-flex flex-column justify-content-between">
              
              <!-- Imagem de Fundo Nítida -->
              <div class="position-absolute top-0 start-0 w-100 h-100 bg-dark">
                <img :src="sectionData.featuredBanner.image" :alt="sectionData.featuredBanner.alt" class="w-100 h-100 object-fit-cover banner-img-crisp opacity-85" loading="lazy" />
              </div>

              <!-- Conteúdo sobre a imagem -->
              <div class="position-relative z-2">
                <span class="badge bg-white text-dark mb-2 px-3 py-1.5 small fw-bold shadow-sm rounded-pill" style="font-size: 0.75rem;">
                  {{ sectionData.featuredBanner.tag }}
                </span>
                <h3 class="fw-bold fs-3 text-white mb-1" style="text-shadow: 0 2px 4px rgba(0,0,0,0.5);">
                  {{ sectionData.featuredBanner.title }}
                </h3>
                <p class="small text-white-50 mb-0" style="text-shadow: 0 1px 2px rgba(0,0,0,0.5);">
                  {{ sectionData.featuredBanner.subtitle }}
                </p>
              </div>

              <div class="position-relative z-2 mt-4 pt-3">
                <span class="btn btn-light rounded-pill px-4 py-2.5 fw-bold text-dark shadow-sm d-inline-flex align-items-center justify-content-center gap-1 w-100" style="max-width: 200px; font-size: 0.9rem;">
                  {{ sectionData.featuredBanner.ctaText }} &rsaquo;
                </span>
              </div>

            </div>
          </a>
        </div>

        <!-- Bloco Direito: Carrossel de 6 Slides com transição automática de 5s -->
        <div class="col-12 col-lg-8 position-relative d-flex flex-column justify-content-between">
          
          <!-- Cabeçalho do Carrossel e Setas de Navegação -->
          <div class="d-flex justify-content-between align-items-center mb-3 px-2">
            <div>
              <span class="small text-muted">Coleção em Destaque</span>
              <h3 class="fw-bold text-dark fs-4 m-0">Essenciais Demillus</h3>
            </div>
            <div class="d-flex gap-2">
              <button @click="scrollLeft" class="btn btn-light rounded-circle shadow-sm border d-flex align-items-center justify-content-center" style="width: 38px; height: 38px;" aria-label="Rolar carrossel para a esquerda">
                &#10094;
              </button>
              <button @click="scrollRight" class="btn btn-light rounded-circle shadow-sm border d-flex align-items-center justify-content-center" style="width: 38px; height: 38px;" aria-label="Rolar carrossel para a direita">
                &#10095;
              </button>
            </div>
          </div>

          <!-- Contentor Deslizante com pausa ao passar o rato -->
          <div 
            ref="scrollContainer" 
            @mouseenter="stopAutoPlay"
            @mouseleave="startAutoPlay"
            class="d-flex gap-3 overflow-x-auto pb-3 custom-scrollbar align-items-stretch" 
            style="scroll-behavior: smooth;"
          >
            <div 
              v-for="product in sectionData.carouselProducts" 
              :key="product.id" 
              class="flex-shrink-0"
              style="width: 250px;"
            >
              <!-- Card do Produto com Imagem Ocupando Todo o Espaço -->
              <a :href="product.url" class="card product-card h-100 border bg-white rounded-4 overflow-hidden position-relative shadow-sm text-decoration-none d-flex flex-column justify-content-between">
                
                <!-- Imagem preenchendo o card -->
                <div class="product-img-wrapper position-relative w-100" style="height: 320px;">
                  <img :src="product.image" :alt="product.alt" class="w-100 h-100 object-fit-cover banner-img-crisp" loading="lazy" />
                  
                  <!-- Overlay escurecido no hover com ícone de carrinho -->
                  <div class="cart-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center">
                    <span class="btn btn-light rounded-circle shadow d-flex align-items-center justify-content-center" style="width: 45px; height: 45px; background-color: #ffffff; color: #560F20;" title="Adicionar ao Carrinho">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
                    </span>
                  </div>
                </div>

                <!-- Rodapé do Card com Texto e Preço -->
                <div class="card-body bg-white p-3 text-center border-top">
                  <span class="text-muted d-block small mb-1" style="font-size: 0.7rem;">{{ product.code }}</span>
                  <h4 class="product-title text-dark fw-bold mb-1 text-truncate" style="font-size: 0.85rem;" :title="product.title">
                    {{ product.title }}
                  </h4>
                  <span class="product-price fw-bold" style="color: #560F20; font-size: 0.95rem;">
                    {{ product.price }}
                  </span>
                </div>

              </a>
            </div>
          </div>

        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
import { useDemillus } from '../composables/useDemillus'

const { sectionData, scrollContainer, scrollLeft, scrollRight, startAutoPlay, stopAutoPlay } = useDemillus()
</script>

<style scoped>
/* Fundo com --cosmetic-light (#ECB1C0) e 30% de transparência */
.demillus-section {
  background-color: rgba(236, 177, 192, 0.3) !important;
  backdrop-filter: blur(5px);
}

/* Ajusta a altura exata do card de destaque para igualar os cards da direita */
.featured-card {
  height: 100%;
  min-height: 405px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: none !important;
}

.featured-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15) !important;
}

/* Otimização de nitidez da imagem */
.banner-img-crisp {
  image-rendering: -webkit-optimize-contrast;
  image-rendering: crisp-edges;
  filter: contrast(1.06) saturate(1.1) brightness(1.02);
}

/* Ocultar scrollbar nativa mas manter o comportamento fluido */
.custom-scrollbar::-webkit-scrollbar {
  display: none;
}
.custom-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

/* Efeito Hover do Card de Produto */
.cart-overlay {
  background-color: rgba(0, 0, 0, 0.25);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.product-card:hover .cart-overlay {
  opacity: 1;
}

.product-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.product-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(86, 15, 32, 0.15) !important;
}
</style>