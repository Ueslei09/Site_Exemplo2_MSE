<!-- src/shared/components/NavbarComponent.vue -->
<template>
  <header :class="['site-header py-2 px-3 px-md-5 fixed-top w-100', { 'scrolled': isScrolled }]" role="banner" v-if="!loading && navbarData">
    <div class="container-fluid">
      
      <!-- LINHA 1: Logótipo, Hambúrguer (Mobile), Marcas (Desktop) e Idioma -->
      <div class="d-flex justify-content-between align-items-center w-100 pb-2 border-bottom border-light border-opacity-25">
        
        <!-- Esquerda: Hambúrguer (Mobile) + Logótipo -->
        <div class="d-flex align-items-center gap-2">
          <!-- Botão de Hambúrguer exclusivo para Mobile (3 traços) -->
          <button 
            class="navbar-toggler d-lg-none border-0 bg-transparent text-white p-1 shadow-none" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#mobileMenu" 
            aria-controls="mobileMenu" 
            aria-expanded="false" 
            aria-label="Menu de navegação"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
            </svg>
          </button>

          <!-- Logótipo -->
          <router-link :to="navbarData.brand.homeUrl" class="navbar-brand fw-bold fs-5 fs-md-4 text-decoration-none m-0 text-white text-nowrap" :aria-label="navbarData.brand.altText">
            {{ navbarData.brand.name }}
          </router-link>
        </div>

        <!-- Centro: Links das Marcas (Visíveis apenas em Desktop) -->
        <nav class="d-none d-lg-flex align-items-center gap-4" aria-label="Navegação por marcas">
          <a 
            v-for="link in navbarData.navLinks" 
            :key="link.name" 
            :href="link.target" 
            class="nav-brand-link text-white text-decoration-none small fw-semibold text-nowrap opacity-85"
          >
            {{ link.name }}
          </a>
        </nav>

        <!-- Direita: Seletor de Idioma -->
        <div class="dropdown">
          <button class="btn btn-sm dropdown-toggle border-0 bg-transparent small fw-semibold text-white" type="button" data-bs-toggle="dropdown" aria-expanded="false" aria-label="Selecionar idioma">
            FR
          </button>
          <ul class="dropdown-menu dropdown-menu-end shadow-sm border-0" style="background-color: var(--cosmetic-lightest);">
            <li v-for="lang in navbarData.languages" :key="lang.code">
              <a class="dropdown-item small" href="#" style="color: var(--cosmetic-darkest);">{{ lang.label }}</a>
            </li>
          </ul>
        </div>
      </div>

      <!-- MENU COLLAPSE (Abre ao clicar nos 3 traços no Mobile) -->
      <div class="collapse navbar-collapse d-lg-none py-2 border-bottom border-light border-opacity-25" id="mobileMenu">
        <div class="d-flex flex-column gap-2">
          <a 
            v-for="link in navbarData.navLinks" 
            :key="link.name" 
            :href="link.target" 
            class="text-white text-decoration-none py-1 px-2 rounded small fw-semibold mobile-brand-item"
          >
            {{ link.name }}
          </a>
        </div>
      </div>

      <!-- LINHA 2: Preço (Invisível no mobile) e Botões (Um à esquerda, outro à direita no mobile) -->
      <div v-if="!isScrolled" class="d-flex align-items-center justify-content-between w-100 pt-2">
        
        <!-- PricingText: Oculto no mobile (d-none), visível apenas de 'md' para cima -->
        <span class="small m-0 text-white opacity-85 d-none d-md-block text-nowrap" aria-live="polite">
          {{ navbarData.pricingText }}
        </span>

        <!-- Botões: No mobile distribuem-se nas extremidades (justify-content-between ou gap controlado) -->
        <div class="d-flex align-items-center justify-content-between justify-content-md-end w-100 w-md-auto gap-2">
          <router-link :to="navbarData.ctaSecondary.url" class="btn btn-nav-secondary rounded-pill px-3 py-1 small fw-semibold text-decoration-none text-nowrap" role="button">
            {{ navbarData.ctaSecondary.text }}
          </router-link>
          
          <button class="btn btn-nav-primary rounded-pill px-3 py-1 small fw-semibold text-white border-0 shadow-sm text-nowrap" type="button">
            {{ navbarData.ctaPrimary.text }}
          </button>
        </div>
      </div>

    </div>
  </header>
</template>

<script setup>
import { useNavbar } from '../composables/useNavbar'
const { navbarData, loading, isScrolled } = useNavbar()
</script>

<style scoped>
.site-header {
  background-color: transparent !important;
  z-index: 1030;
  transition: background-color 0.4s ease, backdrop-filter 0.4s ease;
}

.site-header.scrolled {
  background-color: rgba(86, 15, 32, 0.85) !important;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
}

.nav-brand-link {
  transition: opacity 0.2s ease, color 0.2s ease;
  font-size: 0.9rem;
  letter-spacing: 0.5px;
}
.nav-brand-link:hover {
  opacity: 1;
  color: #FF8FA3 !important;
}

.mobile-brand-item {
  background-color: rgba(255, 255, 255, 0.08);
  transition: background-color 0.2s ease;
}
.mobile-brand-item:hover {
  background-color: rgba(255, 255, 255, 0.2);
  color: #FF8FA3 !important;
}

.btn-nav-secondary {
  border: 1px solid #ffffff;
  color: #ffffff;
  background-color: transparent;
  transition: all 0.25s ease-in-out;
}
.btn-nav-secondary:hover, .btn-nav-secondary:focus {
  background-color: #ffffff;
  color: var(--cosmetic-darkest);
  border-color: #ffffff;
}

.btn-nav-primary {
  background-color: #FF4D6D;
  color: #ffffff;
  transition: all 0.25s ease-in-out;
}
.btn-nav-primary:hover, .btn-nav-primary:focus {
  background-color: #ffffff;
  color: var(--cosmetic-darkest);
}
</style>