<!-- src/modules/home/HomeView.vue -->
<template>
  <main class="home-view">
    
    <!-- Secção 1: Hero Principal (100vh) -->
    <div v-if="loading" class="text-center py-5" aria-live="polite" style="color: var(--cosmetic-dark);">
      A carregar conteúdo exclusivo...
    </div>
    <HeroSection v-else :data="homeData" />

    <!-- Nova Secção: Promoções O Boticário do dia -->

    <div  id ="boticario">
    <BoticarioPromoSection />
    </div>

    <!-- Secções Fictícias para testar o Scroll e a transição da Navbar 
    <section class="fake-section py-5 px-4 text-center d-flex flex-column justify-content-center align-items-center" style="background-color: var(--cosmetic-lightest); min-height: 100vh;">
      <div class="container py-5">
        <h2 class="display-4 fw-bold mb-4" style="color: var(--cosmetic-darkest);">Nossa Coleção de Cuidados</h2>
        <p class="lead text-muted mx-auto" style="max-width: 600px;">
          Descubra a harmonia perfeita entre ingredientes puros e alta tecnologia cosmética para o seu ritual diário de beleza.
        </p>
      </div>
    </section>-->
<!-- Nova secção adicionada -->
    <AngelPromoSection /> 

    <!-- Nova Secção Natura -->
    <div id="natura">
      <NaturaPromoSection />
    </div>
    <!-- Nova Secção Naturacard adicionada de forma limpa -->
    <NaturaCardSection />

     <!-- Nova Secção Jequiti integrada -->

    <div id="jequiti">
     
    <JequiteSection />
    </div>

    <JequitiCard />

    <!-- Carrossel Mary Kay Maquiagens -->
     <div id="marykay">
    <MaryKaySection />
    <</div>

    <!-- Secção Mary Kay em Grelha (Grid Estática) -->
    <MaryKayGridSection />

    <!-- Nova secção de Depoimentos -->
     <TestimonialsSection />

     <!-- Nova secção Tupperware -->
      <div id="tupperware">
       <TupperwareSection />

      </div>

      <TupperwareBannerSection/>

      <div id = "demillus">
        <DemillusSection/>
      </div>

      <DemillusCardsSection />
      <SellerProfileSection/>

   <!-- <section class="fake-section py-5 px-4 text-center d-flex flex-column justify-content-center align-items-center" style="background-color: #560F20; color: #ffffff; min-height: 100vh;">
      <div class="container py-5">
        <h2 class="display-4 fw-bold mb-4">Sustentabilidade & Elegância</h2>
        <p class="lead text-light opacity-85 mx-auto" style="max-width: 600px;">
          Embalagens recicláveis e fórmulas cruelty-free pensadas para respeitar a sua pele e o planeta.
        </p>
      </div>
    </section>-->

  </main>
</template>

<script setup>
import { useHome } from './composables/useHome'
import HeroSection from './components/HeroSection.vue'
import BoticarioPromoSection from './components/BoticarioPromoSection.vue'
import AngelPromoSection from './components/CardBoticarioPromoSection.vue'
import NaturaPromoSection from './components/NaturaPromoSection.vue'
import NaturaCardSection from '@/modules/home/components/NaturaCardSection.vue'
import JequiteSection from '@/modules/home/components/JequiteSection.vue'
import JequitiCard from '@/modules/home/components/JequitiCard.vue'
import MaryKaySection from '@/modules/home/components/MaryKaySection.vue'
import MaryKayGridSection from '@/modules/home/components/MaryKayGridSection.vue'
import TestimonialsSection from '@/modules/home/components/TestimonialsSection.vue'
import TupperwareSection from '@/modules/home/components/TupperwareSection.vue'
import TupperwareBannerSection from '@/modules/home/components/TupperwareBannerSection.vue'
import DemillusSection from './components/DemillusSection.vue'
import DemillusCardsSection from '@/modules/home/components/DemillusCardsSection.vue'
import SellerProfileSection from '@/modules/home/components/SellerProfileSection.vue'

const { homeData, loading } = useHome()
</script>