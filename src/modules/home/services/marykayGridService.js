// src/modules/home/services/marykayBannersService.js
import defaultImg from '../asserts/home1_imagem.png'
import defaultImg2 from '../asserts/maryKaylogo.png'


export const getMaryKayBannersData = () => {
  return {
    sectionTitle: 'Mary Kay - Seja uma Consultora',
    logoUrl: defaultImg2, 
    logoAlt: 'Logótipo Mary Kay',
    topBanner: {
      url: '#'
    },
    imageBanners: [
      {
        id: 1,
        image: defaultImg,
        imageAlt: 'Banner Cuidados Mary Kay',
        url: '#'
      },
      {
        id: 2,
        image: defaultImg,
        imageAlt: 'Banner Fragrâncias Mary Kay',
        url: '#'
      },
      {
        id: 3,
        image: defaultImg,
        imageAlt: 'Banner Fragrâncias Mary Kay',
        url: '#'
      },
      {
         id: 3,
        image: defaultImg,
        imageAlt: 'Banner Fragrâncias Mary Kay',
        url: '#'

      }
    
    ],
    bottomBanners: [
      { id: 1, url: '#' },
      { id: 2, url: '#' },
      { id: 3, url: '#' },
      { id: 4, url: '#' },
    ]
  }
}