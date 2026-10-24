// src/shared/composables/useWhatsapp.js
import { ref } from 'vue'
import { getWhatsappData } from '../services/whatsappService'

export function useWhatsapp() {
  const whatsappData = ref(getWhatsappData())

  const openWhatsapp = () => {
    const { phoneNumber, defaultMessage } = whatsappData.value
    const encodedMessage = encodeURIComponent(defaultMessage)
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
    window.open(url, '_blank')
  }

  return {
    whatsappData,
    openWhatsapp
  }
}
