// src/modules/home/services/tupperwareBannerService.js
import defaultImg from '../asserts/tupperware1_imagem.jpg'

export const getTupperwareBannerData = () => {
  return {
    tag: ' Tupperware Especial',
    title: 'Um de cada cor!',
    heading: 'Os melhores produtos',
    subtitle: 'Para sua cozinha, para sua vida!',
    ctaText: 'Explore Novos Produtos',
    url: '#',
    image: defaultImg,
    imageAlt: 'Produtos Tupperware'
  }
}