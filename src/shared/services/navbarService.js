// src/shared/services/navbarService.js
export const getNavbarData = () => {
  return {
    brand: {
      name: "RAY - Multimarcas",
      homeUrl: "/",
      altText: "Página inicial RAY Multimarcas"
    },
    // Links de navegação para as secções das marcas
    navLinks: [
      { name: "Tupperware", target: "#tupperware" },
      { name: "Natura", target: "#natura" },
      { name: "O Boticário", target: "#boticario" },
      { name: "Jequiti", target: "#jequiti" },
     { name: "Mary Kay", target: "#marykay" },
     { name: "Demillus", target: "#demillus" }
    ],
    pricingText: "Perfume Natura Homem promoção por  269,00 reais",
    ctaSecondary: {
      text: "En savoir plus",
      url: "/pagina-2"
    },
    ctaPrimary: {
      text: "Précommander"
    },
    languages: [
      { code: "FR", label: "Français (FR)", current: true },
      { code: "EN", label: "English (EN)", current: false },
      { code: "PT", label: "Português (PT)", current: false }
    ]
  }
}