// src/modules/home/services/homeService.js
import home1Img from '../asserts/home1_imagem.png'
// Se tiver mais imagens, importe-as aqui (ex: home2Img, home3Img, home4Img)
// Por enquanto, usamos a mesma ou as que preferir:
import home2Img from '../asserts/home1_imagem.png'
import home3Img from '../asserts/home1_imagem.png'
import home4Img from '../asserts/home1_imagem.png'

export const getHomeSlides = () => {
  return [
    {
      id: 1,
      badge: "Nova Coleção Exclusiva",
      titleMain: "Beleza e Cuidado",
      titleHighlight: "Redefinidos.",
      description: "Descubra fórmulas inovadoras desenvolvidas para realçar a sua essência natural com texturas suaves e alta performance.",
      image: home1Img,
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
      id: 2,
      badge: "Essência & Sofisticação",
      titleMain: "Fragrâncias Únicas",
      titleHighlight: "Para Momentos Raros.",
      description: "Notas olfativas selecionadas criteriosamente para expressar a sua personalidade com máxima elegância e fixação.",
      image: home2Img,
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
      id: 3,
      badge: "Cuidados Diários",
      titleMain: "Hidratação Profunda",
      titleHighlight: "Toque de Seda.",
      description: "Rituais de beleza avançados que nutrem e protegem a pele contra os desgastes diários com ativos botânicos.",
      image: home3Img,
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
      id: 4,
      badge: "Lançamento Mundial",
      titleMain: "Coleção Angell /S",
      titleHighlight: "O Futuro da Moda.",
      description: "Peças e acessórios selecionados a pensar na exclusividade e no design intemporal da RAY Multimarcas.",
      image: home4Img,
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