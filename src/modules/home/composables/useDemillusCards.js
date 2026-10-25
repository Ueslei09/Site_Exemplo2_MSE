// src/modules/home/composables/useDemillusCards.js
import { ref } from 'vue'
import { getDemillusCardsData } from '../services/demillusCardsService'

export function useDemillusCards() {
  const sectionData = ref(getDemillusCardsData())

  return {
    sectionData
  }
}