// src/modules/home/services/jequitesectionService.js
import defaultImg from '../asserts/home1_imagem.png'
import LogoImg from '../asserts/jequitilogo.png'

export const getJequiteSectionData = () => {
  return {
    sectionTitle: 'Jequiti: Perfumes, Maquiagem e Cuidados Pessoais',
    logoUrl: LogoImg, // Deixado pronto para inserir o import ou URL da logo oficial da empresa
    products: [
      {
        id: 1,
        discount: '52% OFF',
        brand: 'Jequiti',
        name: 'Patrícia Abravanel Essence Colônia',
        originalPrice: 'R$ 49,90',
        currentPrice: 'R$ 23,65',
        installment: 'No Pix',
        image: defaultImg,
        imageAlt: 'Patrícia Abravanel Essence',
        rating: 5,
        ariaLabelButton: 'Adicionar Patrícia Abravanel Essence à sacola'
      },
      {
        id: 2,
        discount: '36% OFF',
        brand: 'Radiance',
        name: 'Radiance Passion Desodorante Colônia',
        originalPrice: 'R$ 149,90',
        currentPrice: 'R$ 94,91',
        installment: 'Ou 3x de R$ 33,30',
        image: defaultImg,
        imageAlt: 'Radiance Passion',
        rating: 5,
        ariaLabelButton: 'Adicionar Radiance Passion à sacola'
      },
      {
        id: 3,
        discount: '24% OFF',
        brand: 'Bem-Me-Quer',
        name: 'Bem-Me-Quer Magia Colônia Feminina',
        originalPrice: 'R$ 29,90',
        currentPrice: 'R$ 22,71',
        installment: 'No Pix',
        image: defaultImg,
        imageAlt: 'Bem-Me-Quer Magia',
        rating: 4,
        ariaLabelButton: 'Adicionar Bem-Me-Quer Magia à sacola'
      },
      {
        id: 4,
        discount: '40% OFF',
        brand: 'Candy Land',
        name: 'Desodorante Colônia Candy Land',
        originalPrice: 'R$ 39,90',
        currentPrice: 'R$ 23,65',
        installment: 'No Pix',
        image: defaultImg,
        imageAlt: 'Candy Land',
        rating: 5,
        ariaLabelButton: 'Adicionar Candy Land à sacola'
      },
      {
        id: 5,
        discount: '30% OFF',
        brand: 'Jequiti',
        name: 'Colônia Splash Desodorante',
        originalPrice: 'R$ 59,90',
        currentPrice: 'R$ 41,93',
        installment: 'No Pix',
        image: defaultImg,
        imageAlt: 'Colônia Splash',
        rating: 5,
        ariaLabelButton: 'Adicionar Colônia Splash à sacola'
      },
      {
        id: 6,
        discount: '45% OFF',
        brand: 'Jequiti',
        name: 'Aflora Hidratante Desodorante',
        originalPrice: 'R$ 44,90',
        currentPrice: 'R$ 24,69',
        installment: 'No Pix',
        image: defaultImg,
        imageAlt: 'Aflora Hidratante',
        rating: 5,
        ariaLabelButton: 'Adicionar Aflora Hidratante à sacola'
      }
    ]
  }
}