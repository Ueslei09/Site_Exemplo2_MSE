// src/modules/home/composables/useMaryKayBanners.js
import { ref } from 'vue'
import { getMaryKayBannersData } from '../services/marykayGridService'

export function useMaryKayBanners() {
  const sectionData = ref(getMaryKayBannersData())

  return {
    sectionData
  }
}