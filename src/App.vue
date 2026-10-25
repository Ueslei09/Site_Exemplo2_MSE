<template>
  <div id="app" class="bg-white text-dark min-vh-100 d-flex flex-column">
    <NavbarComponent />
    <main class="flex-grow-1" role="main">
      <router-view />
    </main>

    <!-- Botão Flutuante do WhatsApp no Canto Direito -->
    <WhatsappButton />

    <!-- Footer Global Reutilizável -->
    <GlobalFooter />

  </div>
</template>

<script setup>
import NavbarComponent from '@/shared/components/NavbarComponent.vue'
import WhatsappButton from './shared/components/WhatsappButton.vue'
import GlobalFooter from './shared/components/GlobalFooter.vue'
</script>