// src/modules/home/services/testimonialsService.js
import avatarImg from '../asserts/home1_imagem.png' // Substitua pelos avatares reais se desejar

export const getTestimonialsData = () => {
  return {
    sectionTitle: 'Depoimentos',
    slides: [
      {
        id: 1,
        quote: 'Thank you very much for all lovely skincare, face masks, body oils, lotion products. An absolutely amazing brand gorgeous silky texture and the most important for me safe to use then on my clients. Everyone loves the skincare products, the algae power face mask it makes a huge difference after applications, bighting, reduces the dark age spots and small wrinkle.',
        author: 'Imroz Mawa',
        avatar: avatarImg
      },
      {
        id: 2,
        quote: 'Os produtos da Mary Kay transformaram completamente a minha rotina de cuidados diários. A textura é maravilhosa e o atendimento é impecável. Recomendo a todas as minhas amigas!',
        author: 'Ana Souza',
        avatar: avatarImg
      },
      {
        id: 3,
        quote: 'Encontrar a base ideal sempre foi um desafio, mas com o quiz e o suporte especializado foi super fácil. A qualidade superou todas as minhas expectativas.',
        author: 'Carla Mendes',
        avatar: avatarImg
      },
      {
        id: 4,
        quote: 'Linha masculina excelente! Produtos práticos com resultados visíveis desde as primeiras aplicações. Sou cliente fiel há mais de dois anos.',
        author: 'Rafael Oliveira',
        avatar: avatarImg
      },
      {
        id: 5,
        quote: 'Simplesmente apaixonada pelas fragrâncias e lançamentos da revista The Look. Qualidade premium e entrega super rápida.',
        author: 'Juliana Lima',
        avatar: avatarImg
      }
    ]
  }
}