// src/modules/home/services/marykayService.js
import defaultImg from '../asserts/home1_imagem.png'
import logoMaryKay from '../asserts/maryKaylogo.png'

export const getMaryKayData = () => {
  return {
    sectionTitle: 'Mary kay Maquiagens',
    logoUrl: logoMaryKay, // Deixado pronto para inserir o caminho/URL da logo oficial se desejar
    logoAlt: 'Logótipo Mary Kay',
    products: [
      {
        id: 1,
        discount: 'Relançamento',
        brand: 'Mary Kay',
        name: 'Base TimeWise 3D 30ml',
        originalPrice: '',
        currentPrice: 'R$ 82,90',
        installment: 'à vista no pix (ou em até 1x de R$ 82,90 sem juros)',
        image: defaultImg,
        imageAlt: 'Base Líquida TimeWise 3D 30ml Mary Kay',
        rating: 4.8,
        ariaLabelButton: 'Adicionar Base TimeWise 3D por 82 reais e 90 centavos à sacola'
      },
      {
        id: 2,
        discount: 'Relançamento',
        brand: 'Mary Kay',
        name: 'Loção Corporal Firmadora Targeted-Action TimeWise 3D',
        originalPrice: '',
        currentPrice: 'R$ 249,90',
        installment: 'à vista no pix (ou em até 3x de R$ 83,30 sem juros)',
        image: defaultImg,
        imageAlt: 'Loção Corporal Firmadora Targeted-Action TimeWise 3D Mary Kay',
        rating: 5.0,
        ariaLabelButton: 'Adicionar Loção Corporal Firmadora por 249 reais e 90 centavos à sacola'
      },
      {
        id: 3,
        discount: 'Melhor avaliado',
        brand: 'Mary Kay',
        name: 'Base Líquida Matte Mary Kay At Play 29ml',
        originalPrice: '',
        currentPrice: 'R$ 59,90',
        installment: 'à vista no pix (ou em até 1x de R$ 59,90 sem juros)',
        image: defaultImg,
        imageAlt: 'Base Líquida Matte Mary Kay At Play 29ml',
        rating: 4.9,
        ariaLabelButton: 'Adicionar Base Líquida Matte At Play por 59 reais e 90 centavos à sacola'
      },
      {
        id: 4,
        discount: '-20%',
        brand: 'Mary Kay',
        name: 'Batom Líquido Matte Manteiga De Karité Vitamina E, 6,5g',
        originalPrice: 'R$ 49,90',
        currentPrice: 'R$ 39,90',
        installment: 'à vista no pix (ou em até 1x de R$ 39,90 sem juros)',
        image: defaultImg,
        imageAlt: 'Batom Líquido Matte Manteiga de Karité Vitamina E Mary Kay',
        rating: 4.2,
        ariaLabelButton: 'Adicionar Batom Líquido Matte por 39 reais e 90 centavos à sacola'
      },
      {
        id: 5,
        discount: 'Destaque',
        brand: 'Mary Kay',
        name: 'Corretivo Perfecting Concealer Mary Kay',
        originalPrice: 'R$ 69,90',
        currentPrice: 'R$ 54,90',
        installment: 'à vista no pix',
        image: defaultImg,
        imageAlt: 'Corretivo Perfecting Concealer Mary Kay',
        rating: 4.7,
        ariaLabelButton: 'Adicionar Corretivo Perfecting Concealer à sacola'
      }
    ]
  }
}