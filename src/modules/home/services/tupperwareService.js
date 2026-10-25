// src/modules/home/services/tupperwareService.js
import defaultImg from '../asserts/tupperwarecarrosel3_imagem.jpg'
import defaultImg2 from '../asserts/tupperware2_imagem.jpg'
import imagemcarrusel1 from '../asserts/tupperwarecarrusel1_imagem.png'
import imagemcarrusel2 from '../asserts/tupperwarecarrosel2_imagem.png'
import imagemcarrusel3 from '../asserts/tupperwarecarrosel3_imagem.jpg'

export const getTupperwareData = () => {
  return {
    sectionTitle: 'Tupperware',
    logoUrl: '',
    logoAlt: 'Logótipo Tupperware',
    featuredBanner: {
      tag: 'DESTAQUE',
      title: 'Tupperware',
      subtitle: ' Peças Exclusiva',
      ctaText: 'Ver categoria',
      image: defaultImg2,
      alt: 'Destaque Tupperware',
      url: '#'
    },
    carouselProducts: [
      {
        id: 1,
        title: 'Jeitosinho 400ml Mix Carne Moída',
        price: 'R$ 34,90',
        image: imagemcarrusel1 ,
        url: '#'
      },
      {
        id: 2,
        title: 'Jeitosinho 400ml Mix Feijão',
        price: 'R$ 34,90',
        image: imagemcarrusel2,
        url: '#'
      },
      {
        id: 3,
        title: 'Jeitosinho 400ml Mix Arroz',
        price: 'R$ 34,90',
        image: defaultImg,
        url: '#'
      },
      {
        id: 4,
        title: 'Jeitoso 800ml Vermelho',
        price: 'R$ 44,90',
        image: defaultImg,
        url: '#'
      },
      {
        id: 5,
        title: 'Modulares para Armário 1L',
        price: 'R$ 59,90',
        image: defaultImg,
        url: '#'
      },
      {
        id: 6,
        title: 'Super Caixa 5L Freezer',
        price: 'R$ 89,90',
        image: defaultImg,
        url: '#'
      }
    ]
  }
}