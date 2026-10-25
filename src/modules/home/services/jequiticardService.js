// src/modules/home/services/bestSellingService.js

import tuboCremeImg from '../asserts/tirafundo.png'
export const getBestSellingData = () => {
  return {
    title: 'Best Selling Anti-Hair Product This Week',
    description: 'Reveal your skin\'s natural radiance with BioCare brightening body lotion. Infused with kojic acid and saffron, this lightweight yet creamy lotion helps visibly brighten your skin tone.',
    productImage: tuboCremeImg,
    productImageAlt: 'Frasco de creme e loção corporal hidratante Bioxgn em destaque',
    ctaText: 'Buy Now',
    ctaUrl: '#',
    ariaLabelCta: 'Comprar Best Selling Anti-Hair Product Now',
    benefitsTitle: 'Benefit',
    benefits: [
      'Deep Hydration & Moisturization',
      'Enhances Skin Brightness'
    ],
    featuresTitle: 'Feature',
    features: [
      'Lightweight',
      'Creamy Lotion',
      'Easy Application',
      'All Skin Type'
    ]
  }
}