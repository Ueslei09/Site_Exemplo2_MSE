<!-- src/modules/home/components/AngelPromoSection.vue -->
<template>
  <section class="angel-promo-section py-5 bg-white w-100" v-if="promoData" aria-labelledby="angel-heading">
    <div class="container-fluid px-0">
      
      <!-- Título da Seção (Topo) -->
      <div class="container mb-4">
        <h2 id="angel-heading" class="fw-light fs-2 text-dark m-0">
          {{ promoData.sectionTitle }}
        </h2>
        <div class="mt-2 rounded-pill" style="width: 60px; height: 3px; background-color: var(--cosmetic-primary);"></div>
      </div>

      <!-- Imagem a 100% de Largura com o Card Sobreposto à Esquerda -->
      <div class="position-relative w-100 banner-container overflow-hidden">
        
        <!-- Imagem de Fundo (100% de largura) -->
        <img 
          :src="promoData.bgImage" 
          :alt="promoData.imageAlt" 
          class="w-100 h-100 object-fit-cover banner-img"
        />

        <!-- Overlay suave -->
        <div class="position-absolute top-0 start-0 w-100 h-100 banner-overlay"></div>

        <!-- Card Alinhado à Esquerda -->
        <div class="container position-absolute top-50 start-50 translate-middle w-100 h-100 d-flex align-items-center">
          <div class="row w-100 mx-0 justify-content-start">
            <div class="col-11 col-md-7 col-lg-5 col-xl-4">
              
              <div class="promo-inner-card p-4 p-md-5 text-white shadow-lg position-relative">
                
                <!-- Borda interna fina idêntica ao modelo da foto -->
                <div class="card-inner-border"></div>

                <!-- Subtítulo "CREATE" Centralizado -->
                <div class="text-center position-relative z-2">
                  <span class="d-inline-block text-uppercase tracking-widest small mb-2 opacity-85" style="letter-spacing: 3px; font-size: 0.75rem;">
                    {{ promoData.cardSubtitle }}
                  </span>
                </div>

                <!-- Título principal "Flawless Skin" Centralizado -->
                <div class="text-center position-relative z-2">
                  <h3 class="display-6 fw-light fst-italic mb-3 text-white" style="font-family: serif;">
                    {{ promoData.cardTitle }}
                  </h3>
                </div>

                <!-- Descrição mantida à esquerda -->
                <p class="small text-light opacity-85 mb-4 lh-base text-start position-relative z-2" style="font-size: 0.85rem;">
                  {{ promoData.cardDescription }}
                </p>

                <!-- Botão "EU QUERO" Centralizado -->
                <div class="d-flex justify-content-center position-relative z-2">
                  <a 
                    :href="promoData.buttonUrl" 
                    class="btn btn-outline-light rounded-pill px-4 py-2 fw-semibold text-decoration-none text-uppercase tracking-wider btn-eu-quero shadow-sm"
                    role="button"
                  >
                    {{ promoData.buttonText }}
                  </a>
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
import { useAngelPromo } from '../composables/useCardBoticarioPromo'

const { promoData } = useAngelPromo()
</script>

<style scoped>
.angel-promo-section {
  background-color: #ffffff !important;
}

.banner-container {
  height: 500px;
  background-color: var(--cosmetic-lightest);
}

.banner-img {
  min-height: 500px;
  object-position: center;
}

.banner-overlay {
  background: rgba(0, 0, 0, 0.15);
}

/* Card principal com a cor oficial da RAY (--cosmetic-darkest) */
.promo-inner-card {
  background-color: var(--cosmetic-darkest);
  border: none;
}

/* Linha / Borda interna elegante idêntica ao print */
.card-inner-border {
  position: absolute;
  top: 14px;
  left: 14px;
  right: 14px;
  bottom: 14px;
  border: 1px solid rgba(255, 255, 255, 0.6);
  pointer-events: none;
  z-index: 1;
}

/* Estilo refinado para o botão "Eu quero" */
.btn-eu-quero {
  font-size: 0.8rem;
  letter-spacing: 1.5px;
  border-color: rgba(255, 255, 255, 0.9);
  background-color: transparent;
  color: #ffffff;
  transition: all 0.3s ease;
}

.btn-eu-quero:hover {
  background-color: var(--cosmetic-primary);
  color: #ffffff !important;
  border-color: var(--cosmetic-primary);
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .banner-container {
    height: 420px;
  }
  .banner-img {
    min-height: 420px;
  }
}
</style>