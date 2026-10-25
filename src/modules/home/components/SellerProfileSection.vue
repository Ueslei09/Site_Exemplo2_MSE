<!-- src/modules/home/components/SellerProfileSection.vue -->
<template>
  <section class="seller-profile-section py-5 my-4 bg-white" v-if="sectionData">
    <div class="container-fluid px-3 px-md-4 px-lg-5">
      
      <div class="row align-items-center justify-content-center g-5">
        
        <!-- LADO ESQUERDO: Imagem Nítida com Preenchimento 100% -->
        <div class="col-12 col-lg-5 d-flex justify-content-center">
          <div class="seller-img-wrapper rounded-4 overflow-hidden position-relative shadow-sm w-100" style="max-height: 480px; min-height: 420px;">
            <img 
              :src="sectionData.image" 
              :alt="sectionData.imageAlt" 
              class="w-100 h-100 object-fit-cover banner-img-crisp position-absolute top-0 start-0" 
              loading="lazy" 
            />
          </div>
        </div>

        <!-- LADO DIREITO: Informações, Inputs e Botões com as Cores da Paleta -->
        <div class="col-12 col-lg-6 d-flex flex-column text-center text-lg-start ps-lg-5">
          
          <span class="small fw-bold text-uppercase tracking-wider mb-2" style="color: #560F20; letter-spacing: 2px;">
            {{ sectionData.brandTitle }}
          </span>

          <h2 class="fw-bold display-6 mb-2 text-dark" style="letter-spacing: 0.5px;">
            {{ sectionData.heading }}
          </h2>

          <h3 class="fs-6 fw-semibold text-muted text-uppercase mb-3">
            {{ sectionData.subtitle }}
          </h3>

          <p class="text-secondary mb-4" style="line-height: 1.6; max-width: 480px;">
            {{ sectionData.description }}
          </p>

          <!-- Formulário de Contacto -->
          <form @submit="handleContactSubmit" class="d-flex flex-column gap-3 w-100" style="max-width: 460px;">
            <div class="position-relative">
              <input 
                type="text" 
                v-model="contactInput" 
                :placeholder="sectionData.placeholderText" 
                class="form-control rounded-pill px-4 py-3 border-2 custom-input shadow-sm"
                required
              />
            </div>

            <button 
              type="submit" 
              class="btn rounded-pill py-3 fw-bold shadow-sm text-white custom-submit-btn text-uppercase"
            >
              {{ sectionData.ctaText }}
            </button>
          </form>

          <p class="text-muted small mt-4 opacity-75" style="font-size: 0.75rem; max-width: 460px;">
            {{ sectionData.disclaimer }}
          </p>

        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
import { useSellerProfile } from '../composables/useSellerProfile'

const { sectionData, contactInput, handleContactSubmit } = useSellerProfile()
</script>

<style scoped>
.seller-profile-section {
  background-color: #ffffff !important;
}

/* Otimização de nitidez da imagem */
.banner-img-crisp {
  image-rendering: -webkit-optimize-contrast;
  image-rendering: crisp-edges;
  filter: contrast(1.06) saturate(1.1) brightness(1.02);
}

.seller-img-wrapper {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.seller-img-wrapper:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(86, 15, 32, 0.15) !important;
}

/* Estilo do input com foco na cor da paleta */
.custom-input {
  border-color: #dee2e6;
  font-size: 0.9rem;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.custom-input:focus {
  border-color: #560F20;
  box-shadow: 0 0 0 0.25rem rgba(86, 15, 32, 0.15) !important;
}

/* Botão principal com as cores do projeto e hover personalizado */
.custom-submit-btn {
  background-color: #560F20;
  border: 2px solid #560F20;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
}

.custom-submit-btn:hover {
  background-color: #ECB1C0;
  color: #560F20 !important;
  border-color: #ECB1C0;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(86, 15, 32, 0.25) !important;
}
</style>