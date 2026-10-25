// src/modules/home/composables/useSellerProfile.js
import { ref } from 'vue'
import { getSellerProfileData } from '../services/sellerProfileService'

export function useSellerProfile() {
  const sectionData = ref(getSellerProfileData())
  const contactInput = ref('')

  const handleContactSubmit = (e) => {
    e.preventDefault()
    if (!contactInput.value) return
    alert(`Obrigado pelo contacto! Entraremos em contacto através de: ${contactInput.value}`)
    contactInput.value = ''
  }

  return {
    sectionData,
    contactInput,
    handleContactSubmit
  }
}