// src/modules/home/services/homeService.js
import home1Img from '../asserts/home3_imagem.png'
import home2Img from '../asserts/home1_imagem.png' // Substitua pelo ficheiro real da 2ª imagem se tiver
import home3Img from '../asserts/home2_imagem.jpg' // Substitua pelo ficheiro real da 3ª imagem se tiver
import home4Img from '../asserts/home3_imagem.png' // Substitua pelo ficheiro real da 4ª imagem se tiver
import home5Img from '../asserts/home1_imagem.png' // Substitua pelo ficheiro real da 5ª imagem se tiver (ou use uma das existentes)

export const getHomeSlides = () => {
  return [
    {
      id: 1,
      isMainHero: true, // Slide 1: Promoção do Dia (Apenas imagem, sem card flutuante, 10 segundos)
      duration: 10000, 
      image: home1Img,
      imageAlt: "Promoção do Dia - RAY Multimarcas"
    },
    {
      id: 2,
      isMainHero: false,
      duration: 5000,
      badge: "Nova Coleção Exclusiva",
      titleMain: "Beleza e Cuidado",
      titleHighlight: "Redefinidos.",
      description: "Descubra fórmulas inovadoras desenvolvidas para realçar a sua essência natural com texturas suaves e alta performance.",
      image: home2Img,
      imageAlt: "Frasco de perfume elegante e modelo em ambiente sofisticado",
      ctaPrimary: "Comprar Agora",
      ctaSecondary: "Saber Mais",
      features: [
        { id: 1, value: "100%", label: "Natural & Vegano" },
        { id: 2, value: "24h", label: "Hidratação Prolongada" },
        { id: 3, value: "Dermato", label: "Testado & Aprovado" }
      ]
    },
    {
      id: 3,
      isMainHero: false,
      duration: 5000,
      badge: "Essência & Sofisticação",
      titleMain: "Fragrâncias Únicas",
      titleHighlight: "Para Momentos Raros.",
      description: "Notas olfativas selecionadas criteriosamente para expressar a sua personalidade com máxima elegância e fixação.",
      image: home3Img,
      imageAlt: "Coleção de perfumes exclusivos RAY",
      ctaPrimary: "Ver Fragrâncias",
      ctaSecondary: "Explorar",
      features: [
        { id: 1, value: "12h+", label: "Fixação Duradoura" },
        { id: 2, value: "Luxo", label: "Ingredientes Importados" },
        { id: 3, value: "Exclusivo", label: "Edição Limitada" }
      ]
    },
    {
      id: 4,
      isMainHero: false,
      duration: 5000,
      badge: "Cuidados Diários",
      titleMain: "Hidratação Profunda",
      titleHighlight: "Toque de Seda.",
      description: "Rituais de beleza avançados que nutrem e protegem a pele contra os desgastes diários com ativos botânicos.",
      image: home4Img,
      imageAlt: "Cuidados com a pele de alta performance",
      ctaPrimary: "Garantir o Meu",
      ctaSecondary: "Saiba Mais",
      features: [
        { id: 1, value: "98%", label: "Origem Natural" },
        { id: 2, value: "Instantâneo", label: "Efeito Iluminador" },
        { id: 3, value: "Premium", label: "Qualidade Comprovada" }
      ]
    },
    {
      id: 5,
      isMainHero: false,
      duration: 5000,
      badge: "Lançamento Mundial",
      titleMain: "Coleção Angell /S",
      titleHighlight: "O Futuro da Moda.",
      description: "Peças e acessórios selecionados a pensar na exclusividade e no design intemporal da RAY Multimarcas.",
      image: home5Img,
      imageAlt: "Coleção Angell /S RAY Multimarcas",
      ctaPrimary: "Pré-comprar",
      ctaSecondary: "Detalhes",
      features: [
        { id: 1, value: "269€", label: "Preço Especial" },
        { id: 2, value: "Garantia", label: "Oficial RAY" },
        { id: 3, value: "Envio", label: "Expresso Global" }
      ]
    }
  ]
}