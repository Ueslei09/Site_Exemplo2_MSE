// src/modules/home/services/footerService.js

export const getFooterData = () => {
  return {
    brandName: 'Ray Multimarcas',
    brandSubtitle: 'online shop',
    description: 'Descubra um mundo de beleza ao seu alcance! A nossa loja online oferece uma seleção rigorosa de produtos de perfumaria, maquiagem e cuidados para todos os estilos.',
    quickLinksTitle: 'Quick Links',
    quickLinks: [
      { name: 'Home', url: '/' },
      { name: 'Shop', url: '#' },
      { name: 'Produtos', url: '#' },
      { name: 'Sobre Nós', url: '#' }
    ],
    updatesTitle: 'Updates',
    updatesLinks: [
      { name: 'Recentes', url: '#' },
      { name: 'Novos Produtos', url: '#' },
      { name: 'Galeria', url: '#' },
      { name: 'Blog', url: '#' }
    ],
    socialTitle: 'Social Media',
    socialLinks: [
      { 
        name: 'Instagram', 
        url: '#', 
        icon: 'instagram' 
      },
      { 
        name: 'Telegram', 
        url: '#', 
        icon: 'telegram' 
      },
      { 
        name: 'WhatsApp', 
        url: '#', 
        icon: 'whatsapp' 
      }
    ],
    copyright: 'Copyright © 2026 Ray Multimarcas. All Right Reserved'
  }
}