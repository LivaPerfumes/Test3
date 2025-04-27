import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Rose Elegance',
    description: 'A captivating blend of Bulgarian rose, jasmine, and vanilla.',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&q=80&w=800',
    additionalImages: [
      'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1595425934374-2e83da8f27c8?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1595426496987-37c7191c6f6c?auto=format&fit=crop&q=80&w=800'
    ],
    type: 'attar',
    category: 'floral',
    size: '50ml',
    featured: true,
    isNew: true,
    notes: {
      top: ['Bulgarian Rose', 'Bergamot'],
      middle: ['Jasmine', 'Iris'],
      base: ['Vanilla', 'Musk']
    },
    sizes: [
      { size: '3ML', price: 29.99, inStock: true },
      { size: '6ML', price: 49.99, inStock: true },
      { size: '12ML', price: 89.99, inStock: true }
    ]
  },
  {
    id: '2',
    name: 'Midnight Oud',
    description: 'Luxurious combination of rare oud wood and amber.',
    price: 189.99,
    image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=800',
    additionalImages: [
      'https://images.unsplash.com/photo-1595425934374-2e83da8f27c8?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1595426496987-37c7191c6f6c?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1590736704728-f4e505bb85b4?auto=format&fit=crop&q=80&w=800'
    ],
    type: 'attar',
    category: 'oodh',
    size: '100ml',
    featured: true,
    //isNew: true, //New Tag
    notes: {
      top: ['Oud Wood', 'Saffron'],
      middle: ['Rose', 'Patchouli'],
      base: ['Amber', 'Sandalwood']
    },
    sizes: [
      { size: '3ML', price: 39.99, inStock: true },
      { size: '6ML', price: 69.99, inStock: true },
      { size: '12ML', price: 119.99, inStock: true }
    ]
  },
  {
    id: '15',
    name: 'Spiced Amber',
    description: 'Warm amber with exotic spices and vanilla.',
    price: 179.99,
    image: 'https://images.unsplash.com/photo-1595426497433-63c4037de3df?auto=format&fit=crop&q=80&w=800',
    additionalImages: [
      'https://images.unsplash.com/photo-1595426496987-37c7191c6f6c?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1595425934374-2e83da8f27c8?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1590736704728-f4e505bb85b4?auto=format&fit=crop&q=80&w=800'
    ],
    type: 'spray',
    category: 'arabic',
    size: '100ml',
    isNew: true,
    notes: {
      top: ['Cardamom', 'Pink Pepper'],
      middle: ['Amber', 'Vanilla'],
      base: ['Musk', 'Tonka Bean']
    },
    sizes: [
      { size: '20ML', price: 49.99, inStock: true },
      { size: '30ML', price: 69.99, inStock: true },
      { size: '50ML', price: 99.99, inStock: true },
      { size: '100ML', price: 179.99, inStock: true }
    ]
  }
];