// src/modules/home/services/angelPromoService.js
import angelModelImg from '../asserts/home1_imagem.png' // Substitua pela imagem real do modelo ou produto

export const getAngelPromoData = () => {
  return {
    sectionTitle: "Perfume Angel Ray - 100ml",
    cardSubtitle: "CREATE",
    cardTitle: "Flawless Skin",
    cardDescription: "Apply these four best selling products to create the signature mawa glow",
    buttonText: "Eu quero",
    buttonUrl: "#",
    bgImage: angelModelImg,
    imageAlt: "Modelo elegante com boina azul aplicando produtos de beleza RAY Multimarcas"
  }
}