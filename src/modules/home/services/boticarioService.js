/*src/modules/home/services/boticarioService.js
export const getBoticarioSectionData = () => {
  return {
    sectionTitle: "Promoções O Boticário do dia",
    viewMoreText: "Veja Mais",
    viewMoreUrl: "#",
    // Banner de Destaque (30% da largura)
    banner: {
      badgeText: "O sinal que você esperava",
      mainTitle: "PARA FECHAR O PEDIDO",
      discountHighlight: "COM ATÉ 50% OFF + CASHBACK",
      ctaText: "Compre já",
      ctaUrl: "#",
      disclaimer: "*Imagens ilustrativas. Consulte descontos e itens participantes na página da promoção. Estoque limitado.",
      bgImage: "/images/home1_imagem.png" // Ou a imagem que preferir da pasta assets/public
    },
    // Carrossel de Produtos (6 Slides)
    products: [
      {
        id: 1,
        discount: "-35%",
        image: "/images/home1_imagem.png",
        imageAlt: "Sacola Surpresa Feminina Doçura Chique contendo 2 itens de O Boticário",
        tag: "SACOLA SURPRESA 🎁",
        brand: "O BOTICÁRIO",
        name: "Sacola Surpresa Feminina Doçura Chique (2 itens)",
        rating: 5, // 5 estrelas
        originalPrice: "R$ 317,79",
        currentPrice: "R$ 205,90",
        installment: "10x R$ 20,59",
        ariaLabelButton: "Comprar Sacola Surpresa Feminina Doçura Chique por 205 reais e 90 centavos"
      },
      {
        id: 2,
        discount: "-38%",
        image: "/images/home1_imagem.png",
        imageAlt: "Sacola Surpresa Masculina Essenciais contendo 2 itens de O Boticário",
        tag: "SACOLA SURPRESA 🎁",
        brand: "O BOTICÁRIO",
        name: "Sacola Surpresa Masculina Essenciais (2 itens)",
        rating: 1,
        originalPrice: "R$ 188,79",
        currentPrice: "R$ 116,90",
        installment: "5x R$ 23,38",
        ariaLabelButton: "Comprar Sacola Surpresa Masculina Essenciais por 116 reais e 90 centavos"
      },
      {
        id: 3,
        discount: "-45%",
        image: "/images/home1_imagem.png",
        imageAlt: "Sacola Surpresa Feminina Pronta Para Arrasar contendo 3 itens de O Boticário",
        tag: "SACOLA SURPRESA 🎁",
        brand: "O BOTICÁRIO",
        name: "Sacola Surpresa Feminina Pronta Para Arrasar (3 itens)",
        rating: 1,
        originalPrice: "R$ 150,50",
        currentPrice: "R$ 81,90",
        installment: "4x R$ 20,48",
        ariaLabelButton: "Comprar Sacola Surpresa Feminina Pronta Para Arrasar por 81 reais e 90 centavos"
      },
      {
        id: 4,
        discount: "-46%",
        image: "/images/home1_imagem.png",
        imageAlt: "Sacola Surpresa Feminina Toda Produzida contendo 3 itens de O Boticário",
        tag: "SACOLA SURPRESA 🎁",
        brand: "O BOTICÁRIO",
        name: "Sacola Surpresa Feminina Toda Produzida (3 itens)",
        rating: 4,
        originalPrice: "R$ 142,50",
        currentPrice: "R$ 76,90",
        installment: "3x R$ 25,63",
        ariaLabelButton: "Comprar Sacola Surpresa Feminina Toda Produzida por 76 reais e 90 centavos"
      },
      {
        id: 5,
        discount: "-40%",
        image: "/images/home1_imagem.png",
        imageAlt: "Kit Perfumaria e Hidratante Cuide-se Bem O Boticário",
        tag: "LANÇAMENTO 🌟",
        brand: "O BOTICÁRIO",
        name: "Kit Cuide-se Bem Deleite (Loção e Body Splash)",
        rating: 5,
        originalPrice: "R$ 120,00",
        currentPrice: "R$ 72,00",
        installment: "3x R$ 24,00",
        ariaLabelButton: "Comprar Kit Cuide-se Bem Deleite por 72 reais"
      },
      {
        id: 6,
        discount: "-50%",
        image: "/images/home1_imagem.png",
        imageAlt: "Desodorante Colônia Malbec O Boticário 100ml",
        tag: "MAIS VENDIDOS 🔥",
        brand: "O BOTICÁRIO",
        name: "Desodorante Colônia Malbec Clássico 100ml",
        rating: 5,
        originalPrice: "R$ 179,90",
        currentPrice: "R$ 89,90",
        installment: "4x R$ 22,47",
        ariaLabelButton: "Comprar Desodorante Colônia Malbec Clássico por 89 reais e 90 centavos"
      }
    ]
  }
}*/

// src/modules/home/services/boticarioService.js
import bannerImg from '../asserts/home1_imagem.png'
import prod1Img from '../asserts/home1_imagem.png'
import prod2Img from '../asserts/home1_imagem.png'
import prod3Img from '../asserts/home1_imagem.png'
import prod4Img from '../asserts/home1_imagem.png'
import prod5Img from '../asserts/home1_imagem.png'
import prod6Img from '../asserts/home1_imagem.png'
import logoimag from '../asserts/boticariologo.png'

export const getBoticarioSectionData = () => {
  return {
    sectionTitle: "Promoções O Boticário do dia",
    logoUrl: logoimag,
    viewMoreText: "Veja Mais",
    viewMoreUrl: "#",
    // Banner de Destaque (30% da largura) com a imagem real importada
    banner: {
      badgeText: "O sinal que você esperava",
      mainTitle: "PARA FECHAR O PEDIDO",
      discountHighlight: "COM ATÉ 50% OFF + CASHBACK",
      ctaText: "Compre já",
      ctaUrl: "#",
      disclaimer: "*Imagens ilustrativas. Consulte descontos e itens participantes na página da promoção. Estoque limitado.",
      bgImage: bannerImg,
      imageAlt: "Banner promocional de O Boticário com oferta especial"
    },
    // Carrossel de Produtos (6 Slides) com imagens importadas
    products: [
      {
        id: 1,
        discount: "-35%",
        image: prod1Img,
        imageAlt: "Sacola Surpresa Feminina Doçura Chique contendo 2 itens de O Boticário",
        tag: "SACOLA SURPRESA 🎁",
        brand: "O BOTICÁRIO",
        name: "Sacola Surpresa Feminina Doçura Chique (2 itens)",
        rating: 5,
        originalPrice: "R$ 317,79",
        currentPrice: "R$ 205,90",
        installment: "10x R$ 20,59",
        ariaLabelButton: "Comprar Sacola Surpresa Feminina Doçura Chique por 205 reais e 90 centavos"
      },
      {
        id: 2,
        discount: "-38%",
        image: prod2Img,
        imageAlt: "Sacola Surpresa Masculina Essenciais contendo 2 itens de O Boticário",
        tag: "SACOLA SURPRESA 🎁",
        brand: "O BOTICÁRIO",
        name: "Sacola Surpresa Masculina Essenciais (2 itens)",
        rating: 1,
        originalPrice: "R$ 188,79",
        currentPrice: "R$ 116,90",
        installment: "5x R$ 23,38",
        ariaLabelButton: "Comprar Sacola Surpresa Masculina Essenciais por 116 reais e 90 centavos"
      },
      {
        id: 3,
        discount: "-45%",
        image: prod3Img,
        imageAlt: "Sacola Surpresa Feminina Pronta Para Arrasar contendo 3 itens de O Boticário",
        tag: "SACOLA SURPRESA 🎁",
        brand: "O BOTICÁRIO",
        name: "Sacola Surpresa Feminina Pronta Para Arrasar (3 itens)",
        rating: 1,
        originalPrice: "R$ 150,50",
        currentPrice: "R$ 81,90",
        installment: "4x R$ 20,48",
        ariaLabelButton: "Comprar Sacola Surpresa Feminina Pronta Para Arrasar por 81 reais e 90 centavos"
      },
      {
        id: 4,
        discount: "-46%",
        image: prod4Img,
        imageAlt: "Sacola Surpresa Feminina Toda Produzida contendo 3 itens de O Boticário",
        tag: "SACOLA SURPRESA 🎁",
        brand: "O BOTICÁRIO",
        name: "Sacola Surpresa Feminina Toda Produzida (3 itens)",
        rating: 4,
        originalPrice: "R$ 142,50",
        currentPrice: "R$ 76,90",
        installment: "3x R$ 25,63",
        ariaLabelButton: "Comprar Sacola Surpresa Feminina Toda Produzida por 76 reais e 90 centavos"
      },
      {
        id: 5,
        discount: "-40%",
        image: prod5Img,
        imageAlt: "Kit Perfumaria e Hidratante Cuide-se Bem O Boticário",
        tag: "LANÇAMENTO 🌟",
        brand: "O BOTICÁRIO",
        name: "Kit Cuide-se Bem Deleite (Loção e Body Splash)",
        rating: 5,
        originalPrice: "R$ 120,00",
        currentPrice: "R$ 72,00",
        installment: "3x R$ 24,00",
        ariaLabelButton: "Comprar Kit Cuide-se Bem Deleite por 72 reais"
      },
      {
        id: 6,
        discount: "-50%",
        image: prod6Img,
        imageAlt: "Desodorante Colônia Malbec O Boticário 100ml",
        tag: "MAIS VENDIDOS 🔥",
        brand: "O BOTICÁRIO",
        name: "Desodorante Colônia Malbec Clássico 100ml",
        rating: 5,
        originalPrice: "R$ 179,90",
        currentPrice: "R$ 89,90",
        installment: "4x R$ 22,47",
        ariaLabelButton: "Comprar Desodorante Colônia Malbec Clássico por 89 reais e 90 centavos"
      }
    ]
  }
}