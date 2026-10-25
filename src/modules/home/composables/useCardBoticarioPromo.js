// src/modules/home/composables/useAngelPromo.js
import { ref, onMounted } from 'vue'
import { getAngelPromoData } from '../services/cardBoticarioPromoService'

export function useAngelPromo() {
  const promoData = ref(null)

  onMounted(() => {
    promoData.value = getAngelPromoData()
  })

  return {
    promoData
  }
}