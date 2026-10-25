// src/modules/home/composables/useNaturaCard.js
import { ref } from 'vue'
import { getNaturaCardData } from '../services/naturaCardService'

export function useNaturaCard() {
  const cardData = ref(getNaturaCardData())

  return {
    cardData
  }
}