<!-- src/shared/components/WhatsappButton.vue -->
<template>
  <div class="whatsapp-float-container">
    <button 
      class="whatsapp-btn btn rounded-circle d-flex align-items-center justify-content-center shadow-lg p-0 border-0"
      @click="openWhatsapp"
      :aria-label="whatsappData.ariaLabel"
      :title="whatsappData.tooltipText"
      type="button"
    >
      <!-- Ícone SVG oficial do WhatsApp -->
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-whatsapp text-white" viewBox="0 0 16 16">
        <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.558 6.558 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.012-.304.086-.403.087-.088.197-.232.296-.348.1-.104.133-.18.198-.3.065-.115.032-.215-.016-.302-.049-.087-.444-1.067-.61-1.464-.16-.384-.324-.33-.445-.335l-.38-.002c-.133 0-.35.05-.533.25-.187.198-.716.7-.716 1.708s.732 1.981.832 2.114c.1.133 1.13 1.728 2.736 2.421.383.166.681.266.915.341.384.122.733.105 1.008.064.307-.046 1.17-.478 1.337-.942.168-.468.168-.87.117-.942-.052-.077-.187-.125-.384-.224z"/>
      </svg>
      <!-- Efeito de pulso animado para destaque sutil -->
      <span class="pulse-ring"></span>
    </button>
  </div>
</template>

<script setup>
import { useWhatsapp } from '../composables/useWhatsapp'
const { whatsappData, openWhatsapp } = useWhatsapp()
</script>

<style scoped>
.whatsapp-float-container {
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 1040;
}

.whatsapp-btn {
  width: 58px;
  height: 58px;
  background-color: #25d366; /* Verde oficial do WhatsApp respeitado globalmente */
  transition: all 0.3s ease-in-out;
  cursor: pointer;
}

.whatsapp-btn:hover {
  background-color: #20ba5a;
  transform: scale(1.1);
}

/* Animação de pulso elegante */
.pulse-ring {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 2px solid #25d366;
  animation: pulseAnimation 2s infinite;
  opacity: 0;
}

@keyframes pulseAnimation {
  0% {
    transform: scale(1);
    opacity: 0.8;
  }
  100% {
    transform: scale(1.5);
    opacity: 0;
  }
}
</style>