// src/modules/home/services/naturaService.js
import naturaBannerPerfumaria from '../asserts/home1_imagem.png'
import naturaBannerCabelos from '../asserts/home1_imagem.png'
import naturaBannerCorpo from '../asserts/home1_imagem.png'
import naturaBannerOfertas from '../asserts/home1_imagem.png'

import p1 from '../asserts/home1_imagem.png'
import p2 from '../asserts/home1_imagem.png'
import p3 from '../asserts/home1_imagem.png'
import p4 from '../asserts/home1_imagem.png'
import p5 from '../asserts/home1_imagem.png'
import p6 from '../asserts/home1_imagem.png'
import logoimag from '../asserts/naturalogo.png'

export const getNaturaSectionData = () => {
  return {
    sectionTitle: "Promoções Natura do dia",
    logoUrl: logoimag,
    sectionSubtitle: "os favoritos de hoje, selecionados para você",
    categories: [
      {
        id: 'perfumaria',
        name: 'perfumaria',
        banner: {
          image: naturaBannerPerfumaria,
          imageAlt: "Frasco de Deo Colônia Natura Homem Shup em destaque sobre base de madeira",
          title: "Natura Homem",
          subtitle: "Perfumaria Exclusiva"
        },
        products: [
          {
            id: 101,
            discount: null,
            image: p1,
            imageAlt: "Deo Colônia Feminino Natura Luna Força 75ml",
            tag: "Luna",
            brand: "NATURA",
            name: "Deo Colônia Feminino Natura Luna Força 75 ml",
            rating: 4.7,
            originalPrice: null,
            currentPrice: "R$ 185,90",
            installment: "ou 6x de R$ 30,98 sem juros",
            ariaLabelButton: "Adicionar à sacola Deo Colônia Feminino Natura Luna Força por 185 reais e 90 centavos"
          },
          {
            id: 102,
            discount: "-30%",
            image: p2,
            imageAlt: "Deo Parfum Masculino Essencial Supreme 100 ml",
            tag: "Essencial",
            brand: "NATURA",
            name: "Deo Parfum Masculino Essencial Supreme 100 ml",
            rating: 4.5,
            originalPrice: "R$ 279,00",
            currentPrice: "R$ 194,90",
            installment: "ou 6x de R$ 32,48 sem juros",
            ariaLabelButton: "Adicionar à sacola Deo Parfum Masculino Essencial Supreme por 194 reais e 90 centavos"
          },
          {
            id: 103,
            discount: "3 com 30% off",
            image: p3,
            imageAlt: "Deo Parfum Essencial Oud Pimenta Miniatura Masculino",
            tag: "Essencial",
            brand: "NATURA",
            name: "Deo Parfum Essencial Oud Pimenta Miniatura Masculino",
            rating: 4.7,
            originalPrice: "R$ 169,00",
            currentPrice: "R$ 114,90",
            installment: "ou 3x de R$ 38,30 sem juros",
            ariaLabelButton: "Adicionar à sacola Essencial Oud Pimenta por 114 reais e 90 centavos"
          },
          {
            id: 104,
            discount: null,
            image: p4,
            imageAlt: "Deo Colônia Unissex Natura Ekos Ryo Chuva 75 ml",
            tag: "Ekos",
            brand: "NATURA",
            name: "Deo Colônia Unissex Natura Ekos Ryo Chuva 75 ml",
            rating: 4.7,
            originalPrice: "R$ 189,00",
            currentPrice: "R$ 129,94",
            installment: "ou 4x de R$ 32,49 sem juros",
            ariaLabelButton: "Adicionar à sacola Ekos Ryo Chuva por 129 reais e 94 centavos"
          },
          {
            id: 105,
            discount: "-35%",
            image: p5,
            imageAlt: "Deo Colônia Masculino Homem Aromáticos 100ml",
            tag: "Natura Homem",
            brand: "NATURA",
            name: "Deo Colônia Masculino Homem Aromáticos 100ml",
            rating: 4.6,
            originalPrice: "R$ 214,90",
            currentPrice: "R$ 139,69",
            installment: "ou 4x de R$ 34,92 sem juros",
            ariaLabelButton: "Adicionar à sacola Homem Aromáticos por 139 reais e 69 centavos"
          },
          {
            id: 106,
            discount: "-35%",
            image: p6,
            imageAlt: "Deo Colônia Humor Quimica de Humor Masculino 75ml",
            tag: "Humor",
            brand: "NATURA",
            name: "Deo Colônia Humor Química de Humor 75ml",
            rating: 4.8,
            originalPrice: "R$ 169,90",
            currentPrice: "R$ 110,43",
            installment: "ou 3x de R$ 36,81 sem juros",
            ariaLabelButton: "Adicionar à sacola Química de Humor por 110 reais e 43 centavos"
          }
        ]
      },
      {
        id: 'cabelos',
        name: 'cabelos',
        banner: {
          image: naturaBannerCabelos,
          imageAlt: "Produtos Natura Lumina para tratamento capilar em destaque",
          title: "Natura Lumina",
          subtitle: "Cabelos Tratados e Saudáveis"
        },
        products: [
          /* 6 produtos específicos de Cabelos aqui (pode duplicar ou alterar dados estruturais) */
          { id: 201, discount: "-20%", image: p1, imageAlt: "Shampoo Revitalizante Lumina", tag: "Lumina", brand: "NATURA", name: "Shampoo Revitalizante Cabelos Secos Lumina 300ml", rating: 4.8, originalPrice: "R$ 49,90", currentPrice: "R$ 39,90", installment: "em até 2x", ariaLabelButton: "Adicionar Shampoo Lumina" },
          { id: 202, discount: null, image: p2, imageAlt: "Condicionador Lumina", tag: "Lumina", brand: "NATURA", name: "Condicionador Protetor Lumina 300ml", rating: 4.6, originalPrice: null, currentPrice: "R$ 49,90", installment: "em até 2x", ariaLabelButton: "Adicionar Condicionador Lumina" },
          { id: 203, discount: "-25%", image: p3, imageAlt: "Máscara Regeneradora", tag: "Lumina", brand: "NATURA", name: "Máscara Regeneradora Cabelos Danificados 250g", rating: 4.9, originalPrice: "R$ 79,90", currentPrice: "R$ 59,90", installment: "em até 2x", ariaLabelButton: "Adicionar Máscara Lumina" },
          { id: 204, discount: null, image: p4, imageAlt: "Sérum de Brilho", tag: "Plant", brand: "NATURA", name: "Sérum Regenerador Intensivo Natura Plant 50ml", rating: 4.7, originalPrice: null, currentPrice: "R$ 64,90", installment: "em até 2x", ariaLabelButton: "Adicionar Sérum Plant" },
          { id: 205, discount: "-30%", image: p5, imageAlt: "Cuidado Antifrizz", tag: "Lumina", name: "Creme de Pentear Antifrizz Lumina 250ml", rating: 4.5, originalPrice: "R$ 55,00", currentPrice: "R$ 38,50", installment: "em até 2x", ariaLabelButton: "Adicionar Antifrizz" },
          { id: 206, discount: null, image: p6, imageAlt: "Tônico Capilar", tag: "Plant", name: "Tônico para Crescimento Natura Plant 100ml", rating: 4.9, originalPrice: "R$ 89,90", currentPrice: "R$ 89,90", installment: "em até 3x", ariaLabelButton: "Adicionar Tônico" }
        ]
      },
      {
        id: 'corpo',
        name: 'corpo',
        banner: {
          image: naturaBannerCorpo,
          imageAlt: "Hidratantes Natura Tododia para cuidados corporais",
          title: "Natura Tododia",
          subtitle: "Hidratação e Bem-estar"
        },
        products: [
          /* 6 produtos específicos de Corpo aqui */
          { id: 301, discount: "-40%", image: p1, imageAlt: "Tododia Baunilha", tag: "Tododia", brand: "NATURA", name: "Desodorante Hidratante Corporal Tododia 400ml", rating: 4.9, originalPrice: "R$ 59,90", currentPrice: "R$ 35,90", installment: "em até 2x", ariaLabelButton: "Adicionar Hidratante Tododia" },
          { id: 302, discount: null, image: p2, imageAlt: "Óleo Ekos Andiroba", tag: "Ekos", brand: "NATURA", name: "Óleo Desodorante Corporal Ekos Andiroba 200ml", rating: 4.8, originalPrice: null, currentPrice: "R$ 84,90", installment: "em até 3x", ariaLabelButton: "Adicionar Óleo Ekos" },
          { id: 303, discount: "-25%", image: p3, imageAlt: "Creme para Mãos", tag: "Ekos", brand: "NATURA", name: "Polpa Hidratante para Mãos Ek Castanha 75g", rating: 4.9, originalPrice: "R$ 49,90", currentPrice: "R$ 37,40", installment: "em até 2x", ariaLabelButton: "Adicionar Polpa Mãos" },
          { id: 304, discount: null, image: p4, imageAlt: "Sabonetes em Barra", tag: "Tododia", brand: "NATURA", name: "Caixa de Sabonetes em Barra Variados Tododia 5 unidades", rating: 4.7, originalPrice: null, currentPrice: "R$ 29,90", installment: "à vista", ariaLabelButton: "Adicionar Sabonetes Tododia" },
          { id: 305, discount: "-35%", image: p5, imageAlt: "Spray Corporal", tag: "Tododia", brand: "NATURA", name: "Spray Corporal Perfumado Tododia 200ml", rating: 4.6, originalPrice: "R$ 79,90", currentPrice: "R$ 51,90", installment: "em até 2x", ariaLabelButton: "Adicionar Spray Tododia" },
          { id: 306, discount: null, image: p6, imageAlt: "Esfoliante Corporal", tag: "Ekos", brand: "NATURA", name: "Esfoliante Corporal Ekos Maracujá 200g", rating: 4.8, originalPrice: null, currentPrice: "R$ 69,90", installment: "em até 2x", ariaLabelButton: "Adicionar Esfoliante" }
        ]
      },
      {
        id: 'ofertas',
        name: 'ofertas até 50% off',
        banner: {
          image: naturaBannerOfertas,
          imageAlt: "Super ofertas Natura com descontos imperdíveis",
          title: "Super Ofertas",
          subtitle: "Até 50% de Desconto"
        },
        products: [
          /* 6 produtos específicos de Ofertas aqui */
          { id: 401, discount: "-50%", image: p1, imageAlt: "Perfume Humor a Rigor", tag: "OFERTA 🔥", brand: "NATURA", name: "Deo Colônia Humor a Rigor Masculino 75ml", rating: 4.9, originalPrice: "R$ 169,90", currentPrice: "R$ 84,95", installment: "em até 3x", ariaLabelButton: "Adicionar Humor a Rigor em oferta" },
          { id: 402, discount: "-45%", image: p2, imageAlt: "Essencial Exclusivo", tag: "OFERTA 🔥", brand: "NATURA", name: "Deo Parfum Essencial Exclusivo Feminino 100ml", rating: 4.8, originalPrice: "R$ 249,90", currentPrice: "R$ 137,44", installment: "em até 4x", ariaLabelButton: "Adicionar Essencial Exclusivo" },
          { id: 403, discount: "-50%", image: p3, imageAlt: "Ekos Maracujá", tag: "OFERTA 🔥", brand: "NATURA", name: "Kit Hidratante e Banho Ekos Maracujá", rating: 4.9, originalPrice: "R$ 119,90", currentPrice: "R$ 59,95", installment: "em até 2x", ariaLabelButton: "Adicionar Kit Ekos" },
          { id: 404, discount: "-40%", image: p4, imageAlt: "Kaiak Aventura", tag: "OFERTA 🔥", brand: "NATURA", name: "Deo Colônia Kaiak Aventura Masculino 100ml", rating: 4.7, originalPrice: "R$ 179,90", currentPrice: "R$ 107,94", installment: "em até 3x", ariaLabelButton: "Adicionar Kaiak Aventura" },
          { id: 405, discount: "-45%", image: p5, imageAlt: "Luna Radiante", tag: "OFERTA 🔥", brand: "NATURA", name: "Deo Colônia Luna Radiante 75ml", rating: 4.8, originalPrice: "R$ 185,90", currentPrice: "R$ 102,24", installment: "em até 3x", ariaLabelButton: "Adicionar Luna Radiante" },
          { id: 406, discount: "-50%", image: p6, imageAlt: "Tododia Framboesa", tag: "OFERTA 🔥", brand: "NATURA", name: "Kit Tododia Framboesa e Pimenta Rosa", rating: 4.9, originalPrice: "R$ 99,90", currentPrice: "R$ 49,95", installment: "em até 2x", ariaLabelButton: "Adicionar Kit Tododia" }
        ]
      }
    ]
  }
}