<!-- src/components/GlobalFooter.vue -->
<template>
  <footer class="global-footer text-white pt-5 pb-4 position-relative" v-if="footerData">
    <div class="container-fluid px-4 px-md-5 py-4">
      
      <div class="row g-4 justify-content-between">
        
        <!-- Coluna 1: Informações da Marca e Descrição -->
        <div class="col-12 col-lg-4 mb-4 mb-lg-0">
          <div class="mb-3">
            <h3 class="brand-title fw-bold m-0 text-uppercase" style="letter-spacing: 2px; color: #ECB1C0;">
              {{ footerData.brandName }}
            </h3>
            <span class="small text-white-50 text-uppercase d-block" style="font-size: 0.75rem; letter-spacing: 1px;">
              {{ footerData.brandSubtitle }}
            </span>
          </div>
          <p class="text-white-50 small mb-0" style="line-height: 1.6; max-width: 350px;">
            {{ footerData.description }}
          </p>
        </div>

        <!-- Coluna 2: Quick Links -->
        <div class="col-6 col-md-4 col-lg-2">
          <h4 class="footer-col-title fw-bold fs-6 text-uppercase mb-3" style="color: #ffffff; letter-spacing: 1px;">
            {{ footerData.quickLinksTitle }}
          </h4>
          <ul class="list-unstyled d-flex flex-column gap-2 mb-0">
            <li v-for="(link, index) in footerData.quickLinks" :key="index">
              <a :href="link.url" class="footer-link text-white-50 text-decoration-none small">
                {{ link.name }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Coluna 3: Updates -->
        <div class="col-6 col-md-4 col-lg-2">
          <h4 class="footer-col-title fw-bold fs-6 text-uppercase mb-3" style="color: #ffffff; letter-spacing: 1px;">
            {{ footerData.updatesTitle }}
          </h4>
          <ul class="list-unstyled d-flex flex-column gap-2 mb-0">
            <li v-for="(link, index) in footerData.updatesLinks" :key="index">
              <a :href="link.url" class="footer-link text-white-50 text-decoration-none small">
                {{ link.name }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Coluna 4: Social Media com Ícones Circulares -->
        <div class="col-12 col-md-4 col-lg-3">
          <h4 class="footer-col-title fw-bold fs-6 text-uppercase mb-3" style="color: #ffffff; letter-spacing: 1px;">
            {{ footerData.socialTitle }}
          </h4>
          <div class="d-flex gap-3 align-items-center">
            <a 
              v-for="(social, index) in footerData.socialLinks" 
              :key="index" 
              :href="social.url" 
              :aria-label="social.name"
              class="social-icon-btn rounded-circle d-flex align-items-center justify-content-center text-dark bg-white shadow-sm text-decoration-none"
            >
              <!-- Instagram Icon -->
              <svg v-if="social.icon === 'instagram'" xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              
              <!-- Telegram Icon -->
              <svg v-else-if="social.icon === 'telegram'" xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>

              <!-- WhatsApp Icon -->
              <svg v-else-if="social.icon === 'whatsapp'" xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
            </a>
          </div>
        </div>

      </div>

      <!-- Linha Divisória Inferior -->
      <hr class="my-4 border-0 opacity-25" style="height: 1px; background-color: #ECB1C0;" />

      <!-- Copyright -->
      <div class="text-center">
        <p class="small text-white-50 m-0" style="font-size: 0.8rem;">
          {{ footerData.copyright }}
        </p>
      </div>

    </div>
  </footer>
</template>

<script setup>
import { useFooter } from '../composables/useFooter'

const { footerData } = useFooter()
</script>

<style scoped>
/* Fundo global com a cor primária da paleta --cosmetic-darkest (#560F20) */
.global-footer {
  background-color: #560F20 !important;
}

/* Transição suave nos links do rodapé */
.footer-link {
  transition: color 0.3s ease, padding-left 0.3s ease;
}

.footer-link:hover {
  color: #ECB1C0 !important;
  padding-left: 4px;
}

/* Botões circulares das redes sociais com hover personalizado */
.social-icon-btn {
  width: 42px;
  height: 42px;
  transition: all 0.3s ease;
  color: #560F20 !important;
}

.social-icon-btn:hover {
  background-color: #ECB1C0 !important;
  color: #560F20 !important;
  transform: translateY(-3px);
  box-shadow: 0 6px 15px rgba(236, 177, 192, 0.3) !important;
}
</style>