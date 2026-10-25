// src/modules/home/composables/useTupperwareBanner.js
import { ref } from 'vue'
import { getTupperwareBannerData } from '../services/tupperwareBannerService'

export function useTupperwareBanner() {
  const sectionData = ref(getTupperwareBannerData())

  return {
    sectionData
  }
}