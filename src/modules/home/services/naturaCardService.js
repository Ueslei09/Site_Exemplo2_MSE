// src/modules/home/services/naturaCardService.js
import card1Img from '../asserts/naturacard1_imagem.jpg'

export const getNaturaCardData = () => {
  return {
    sectionTitle: 'Natura Bem estar',
    logoUrl: '@/assets/images/natura-logo.png',
    leftCard: {
      badge: 'DESTAQUE',
      title: 'COMPLEXION PERFECTION',
      subtitle: 'Conceal, Brighten, Perfect',
      image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1000&auto=format&fit=crop',
      imageAlt: 'Complexion Perfection Natura'
    },
    rightCard: {
      tag: 'NOVIDADE',
      name: 'Skin Mimetic Concealer',
      description: 'Buildable medium coverage with a radiant finish',
      rating: 5,
      price: 'R$ 125,00',
      image: card1Img   ,
      imageAlt: 'Skin Mimetic Concealer',
      ariaLabelButton: 'Adicionar à sacola Skin Mimetic Concealer'
    }
  }
}