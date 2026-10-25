// src/modules/home/services/demillusCardsService.js
import revistaimg1 from '../asserts/revistaDemillus1_imagem.jpg'
import revistaimg2 from '../asserts/revistaDemillus2_imagem.jpg'
import revistaimg3 from '../asserts/demilluscard1_imagem.jpg'

export const getDemillusCardsData = () => {
  return {
    // Card da Esquerda
    leftCard: {
      title: 'CONFIRA AS NOVIDADES',
      image: revistaimg3,
      alt: 'Modelos vestindo coleções de lingerie Demillus em destaque',
      url: '#'
    },
    // Card da Direita
    rightCard: {
      heading: 'QUERO COMPRAR',
      subtext: 'CLIQUE E ENCONTRE OS PRODUTOS',
      ctaText: 'CLIQUE PARA COMPRAR DEMILLUS',
      ctaUrl: '#',
      catalogs: [
        {
          id: 1,
          title: 'Revista Demillus Campanha Atual',
          image: revistaimg1,
          alt: 'Capa da revista Demillus edição especial com modelo de lingerie',
          url: '#'
        },
        {
          id: 2,
          title: 'Revista Demillus Coleção Festas',
          image: revistaimg2,
          alt: 'Capa da revista Demillus coleção de Natal e Ano Novo',
          url: '#'
        }
      ]
    }
  }
}