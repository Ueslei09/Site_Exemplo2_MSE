// src/modules/home/services/demillusService.js
import defaultImg from '../asserts/home1_imagem.png'
import modeloImg1 from '../asserts/modelo1Demilus_imagem.jpg'
import modeloImg2 from '../asserts/modelo2Demilus_imagem.jpg'
import modeloImg3 from '../asserts/modelo3Demilus_imagem.jpg'
import modeloImg4 from '../asserts/modelo4Demilus_imagem.jpg'
import modeloImg5 from '../asserts/modelo5Demilus_imagem.jpg'



export const getDemillusData = () => {
  return {
    sectionTitle: 'Demillus',
    logoUrl: '',
    logoAlt: 'Logótipo oficial da marca Demillus em destaque na cor preta',
    // Banner de destaque posicionado à direita
    featuredBanner: {
      tag: 'DESTAQUE',
      title: '',
      subtitle: 'Coleção Exclusiva Lingerie',
      ctaText: 'Ver coleção',
      image: modeloImg1,
      alt: 'Modelo vestindo sutiã tomara que caia preto da coleção Top de Vendas Demillus',
      url: '#'
    },
    // Carrossel com 6 slides de produtos à esquerda
    carouselProducts: [
      {
        id: 1,
        code: '098132_20_1629',
        title: 'BODY RANTELLI',
        price: 'R$ 89,90',
        image:modeloImg2,
        alt: 'Modelo vestindo body branco modelador Rantelli Demillus',
        url: '#'
      },
      {
        id: 2,
        code: '098133_21_1630',
        title: 'BERMUDA CONTROL',
        price: 'R$ 69,90',
        image: modeloImg3,
        alt: 'Bermuda control modeladora na cor bege Demillus',
        url: '#'
      },
      {
        id: 3,
        code: '098134_22_1631',
        title: 'SUTIÃ RENDADO',
        price: 'R$ 49,90',
        image: modeloImg4,
        alt: 'Sutiã rendado com sustentação Demillus',
        url: '#'
      },
      {
        id: 4,
        code: '098135_23_1632',
        title: 'CALCINHA CLASSIC',
        price: 'R$ 29,90',
        image: modeloImg5,
        alt: 'Calcinha clássica confortável Demillus',
        url: '#'
      },
      {
        id: 5,
        code: '098136_24_1633',
        title: 'CONJUNTO SEDUTORA',
        price: 'R$ 99,90',
        image: defaultImg,
        alt: 'Conjunto de lingerie sensual Demillus',
        url: '#'
      },
      {
        id: 6,
        code: '098137_25_1634',
        title: 'CAMISOLA ROSA',
        price: 'R$ 119,90',
        image: defaultImg,
        alt: 'Camisola elegante em tecido suave Demillus',
        url: '#'
      }
    ]
  }
}