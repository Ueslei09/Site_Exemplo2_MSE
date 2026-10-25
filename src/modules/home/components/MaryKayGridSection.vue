<!-- src/modules/home/components/MaryKayBannersSection.vue -->
<template>
  <section class="marykay-banners-section py-5 my-4 bg-white" v-if="sectionData" aria-labelledby="marykay-banners-heading">
    <div class="container-fluid px-3 px-md-4 px-lg-5">
      
      <!-- CABEÇALHO -->
      <div class="text-center mb-5">
        <div class="d-flex flex-column align-items-center justify-content-center gap-2 mb-2">
          <img 
            v-if="sectionData.logoUrl" 
            :src="sectionData.logoUrl" 
            :alt="sectionData.logoAlt" 
            style="height: 38px; object-fit: contain;" 
          />
          <h2 id="marykay-banners-heading" class="fw-light fs-3 fs-md-2 text-dark m-0 text-break">
            {{ sectionData.sectionTitle }}
          </h2>
        </div>
        <hr class="mx-auto my-3 border-0 rounded-pill" style="width: 70%; height: 1px; background-color: #5a2d6c;" />
      </div>

      <!-- 1. BANNER SUPERIOR (100% largura com altura controlada) -->
      <div class="mb-4 w-100">
        <a :href="sectionData.topBanner.url" class="d-block rounded-4 overflow-hidden shadow-sm banner-link w-100">
          <div class="banner-top-container">
            <img :src="defaultImgTop" alt="Consultora Mary Kay" class="banner-top-img" />
          </div>
        </a>
      </div>

      <!-- 2. EXATAMENTE 2 IMAGENS LADO A LADO (100% preenchidas) -->
      <div class="row g-4 mb-4">
        <div v-for="banner in sectionData.imageBanners" :key="banner.id" class="col-12 col-lg-6">
          <a :href="banner.url" class="d-block rounded-4 overflow-hidden shadow-sm banner-link position-relative">
            <div class="w-100 bg-light" style="min-height: 250px;">
              <img :src="banner.image" :alt="banner.imageAlt" class="w-100 h-100 object-fit-cover banner-img" loading="lazy" />
            </div>
          </a>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { useMaryKayBanners } from '../composables/useMaryKayGrid'
import defaultImgTop from '../asserts/imagemmarykaycard1.jpg'

const { sectionData } = useMaryKayBanners()
</script>

<style scoped>
.marykay-banners-section {
  background-color: #ffffff !important;
}

/* Controlo exato da largura total e altura proporcional do banner superior */
.banner-top-container {
  width: 100%;
  height: 340px; /* Altura ideal fixa para computadores */
  overflow: hidden;
  background-color: #f8f9fa;
}

@media (max-width: 768px) {
  .banner-top-container {
    height: 180px; /* Altura responsiva menor para telemóveis */
  }
}

.banner-top-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 0.3s ease;
}

.banner-link {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.banner-link:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.12) !important;
}

.banner-link:hover .banner-top-img {
  transform: scale(1.02);
}

.banner-img {
  transition: transform 0.3s ease;
}

.banner-link:hover .banner-img {
  transform: scale(1.02);
}
</style>