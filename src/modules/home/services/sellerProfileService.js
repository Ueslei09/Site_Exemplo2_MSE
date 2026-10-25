// src/modules/home/services/sellerProfileService.js
import defaultImg from '../asserts/fotoVendedora2_imagem.jpg.png'

export const getSellerProfileData = () => {
  return {
    brandTitle: 'CONSULTORA OFICIAL',
    heading: 'FALE COMIGO',
    subtitle: 'ATENDIMENTO EXCLUSIVO',
    description: 'Seja a primeira a descobrir os lançamentos, ofertas exclusivas e dicas personalizadas de beleza e cosméticos...',
    placeholderText: 'Digite o seu WhatsApp ou e-mail',
    ctaText: 'QUERO ATENDIMENTO',
    disclaimer: '*Atendimento personalizado e seguro. Seus dados estão protegidos conosco.',
    image: defaultImg,
    imageAlt: 'Consultora de beleza e cosméticos sorrindo'
  }
}