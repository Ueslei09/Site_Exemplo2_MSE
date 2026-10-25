<!-- src/modules/home/components/TupperwareSection.vue -->
<template>
  <section class="tupperware-section py-5 my-4 position-relative overflow-hidden" v-if="sectionData">
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
        <hr class="mx-auto my-3 border-0 rounded-pill" style="width: 70%; height: 1px; background-color: #5a2d6c;" />
      </div>

      <!-- CONTEÚDO PRINCIPAL: Imagem à Esquerda (Estilo do Print) + Carrossel à Direita -->
      <div class="row align-items-stretch g-4">
        
        <!-- Bloco Esquerdo: Card Estilo Banner com Imagem de Fundo 100% -->
        <div class="col-12 col-lg-4 d-flex">
          <a :href="sectionData.featuredBanner.url" class="d-block w-100 text-decoration-none">
            <div class="featured-card w-100 rounded-4 p-4 text-white position-relative overflow-hidden shadow-sm d-flex flex-column justify-content-between">
              
              <!-- Imagem de Fundo a preencher 100% -->
              <div class="position-absolute top-0 start-0 w-100 h-100 bg-dark">
                <img :src="sectionData.featuredBanner.image" :alt="sectionData.featuredBanner.alt" class="w-100 h-100 object-fit-cover opacity-75" loading="lazy" />
              </div>

              <!-- Conteúdo por cima da imagem -->
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

        <!-- Bloco Direito: Carrossel de Produtos com 6 Slides -->
        <div class="col-12 col-lg-8 position-relative d-flex flex-column justify-content-between">
          
          <!-- Cabeçalho do Carrossel (Subtítulo e Setas de Navegação) -->
          <div class="d-flex justify-content-between align-items-center mb-3 px-2">
            <div>
              <span class="small text-muted">Seleção Especial</span>
              <h3 class="fw-bold text-dark fs-4 m-0">Organize seu freezer</h3>
            </div>
            <div class="d-flex gap-2">
              <button @click="scrollLeft" class="btn btn-light rounded-circle shadow-sm border d-flex align-items-center justify-content-center" style="width: 38px; height: 38px;" aria-label="Anterior">
                &#10094;
              </button>
              <button @click="scrollRight" class="btn btn-light rounded-circle shadow-sm border d-flex align-items-center justify-content-center" style="width: 38px; height: 38px;" aria-label="Próximo">
                &#10095;
              </button>
            </div>
          </div>

          <!-- Contentor Deslizante dos Slides -->
          <div 
            ref="scrollContainer" 
            class="d-flex gap-3 overflow-x-auto pb-3 custom-scrollbar align-items-stretch" 
            style="scroll-snap-type: x mandatory; scroll-behavior: smooth;"
          >
            <div 
              v-for="product in sectionData.carouselProducts" 
              :key="product.id" 
              class="flex-shrink-0"
              style="width: 230px; scroll-snap-align: start;"
            >
              <!-- Card do Produto -->
              <div class="card product-card h-100 border bg-white rounded-4 p-3 position-relative shadow-sm text-center d-flex flex-column justify-content-between">
                
                <!-- Botão Favorito (Coração) -->
                <button class="btn btn-sm position-absolute top-0 end-0 m-2 rounded-circle bg-white border-0 shadow-sm wishlist-btn z-3" aria-label="Favorito">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                </button>

                <!-- Imagem do Produto a preencher o espaço superior -->
                <div class="product-img-wrapper my-2 position-relative w-100" style="height: 150px;">
                  <img :src="product.image" :alt="product.title" class="w-100 h-100 object-fit-contain" loading="lazy" />
                  
                  <!-- Ícone de Carrinho ao passar o rato -->
                  <div class="cart-overlay position-absolute bottom-0 start-50 translate-middle-x">
                    <a :href="product.url" class="btn btn-dark btn-sm rounded-circle shadow d-flex align-items-center justify-content-center" style="width: 36px; height: 36px; background-color: #333;" title="Adicionar ao Carrinho">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
                    </a>
                  </div>
                </div>

                <!-- Informações de Texto e Preço -->
                <div class="card-body p-0 mt-2 d-flex flex-column justify-content-end">
                  <h4 class="product-title text-dark fw-normal mb-2 text-truncate" style="font-size: 0.85rem;" :title="product.title">
                    {{ product.title }}
                  </h4>
                  <span class="product-price fw-bold" style="color: #c9184a; font-size: 0.95rem;">
                    {{ product.price }}
                  </span>
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
import { useTupperware } from '../composables/useTupperware'

const { sectionData, scrollContainer, scrollLeft, scrollRight } = useTupperware()
</script>

<style scoped>
/* Fundo com --cosmetic-light (#ECB1C0) e 60% de transparência */
.tupperware-section {
  background-color: rgba(236, 177, 192, 0.3) !important;
  backdrop-filter: blur(5px);
}

.featured-card {
  min-height: 380px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: none !important;
}

.featured-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15) !important;
}

/* Ocultar scrollbar nativa mas permitir scroll horizontal */
.custom-scrollbar::-webkit-scrollbar {
  display: none;
}
.custom-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

/* Efeito Hover do Carrinho de Compras */
.cart-overlay {
  opacity: 0;
  transform: translateY(10px);
  transition: all 0.3s ease;
}

.product-card:hover .cart-overlay {
  opacity: 1;
  transform: translateY(0);
}

.product-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.product-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08) !important;
}

.wishlist-btn {
  color: #666;
  transition: color 0.2s ease;
}

.wishlist-btn:hover {
  color: #c9184a;
}
</style>