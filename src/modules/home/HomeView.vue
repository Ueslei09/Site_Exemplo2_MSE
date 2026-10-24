<!-- src/modules/home/HomeView.vue -->
<template>
  <main class="home-view">
    
    <!-- Secção 1: Hero Principal (100vh) -->
    <div v-if="loading" class="text-center py-5" aria-live="polite" style="color: var(--cosmetic-dark);">
      A carregar conteúdo exclusivo...
    </div>
    <HeroSection v-else :data="homeData" />

    <!-- Secções Fictícias para testar o Scroll e a transição da Navbar -->
    <section class="fake-section py-5 px-4 text-center d-flex flex-column justify-content-center align-items-center" style="background-color: var(--cosmetic-lightest); min-height: 100vh;">
      <div class="container py-5">
        <h2 class="display-4 fw-bold mb-4" style="color: var(--cosmetic-darkest);">Nossa Coleção de Cuidados</h2>
        <p class="lead text-muted mx-auto" style="max-width: 600px;">
          Descubra a harmonia perfeita entre ingredientes puros e alta tecnologia cosmética para o seu ritual diário de beleza.
        </p>
      </div>
    </section>

    <section class="fake-section py-5 px-4 text-center d-flex flex-column justify-content-center align-items-center" style="background-color: #560F20; color: #ffffff; min-height: 100vh;">
      <div class="container py-5">
        <h2 class="display-4 fw-bold mb-4">Sustentabilidade & Elegância</h2>
        <p class="lead text-light opacity-85 mx-auto" style="max-width: 600px;">
          Embalagens recicláveis e fórmulas cruelty-free pensadas para respeitar a sua pele e o planeta.
        </p>
      </div>
    </section>

  </main>
</template>

<script setup>
import { useHome } from './composables/useHome'
import HeroSection from './components/HeroSection.vue'

const { homeData, loading } = useHome()
</script>