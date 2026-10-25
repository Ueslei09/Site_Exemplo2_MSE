// src/modules/home/composables/useBestSelling.js
import { ref } from 'vue'
import { getBestSellingData } from '../services/jequiticardService'

export function useBestSelling() {
  const sectionData = ref(getBestSellingData())

  return {
    sectionData
  }
}