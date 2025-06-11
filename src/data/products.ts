import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Oud Rose',
    description: 'Elegant blend of rose and oud with a hint on essence of Love!.',
    price: 349.00,
    image: 'https://i.pinimg.com/736x/f5/07/a2/f507a28a4f63fa61520e85e48e585643.jpg',
    additionalImages: [
      'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1595425934374-2e83da8f27c8?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1595426496987-37c7191c6f6c?auto=format&fit=crop&q=80&w=800'
    ],
    type: 'attar',
    category: 'oodh',
    size: '50ml',
    //featured: true,
    isNew: true,
    notes: {
      top: ['Floral', 'Rose', 'Saffron', 'Coriander'],
      middle: ['Woody', 'Rose', 'Iris', 'Patchouli', 'Agarwood'],
      base: ['Woody, Ambery, Vetiver, Labdanum,Honey, Benzoin, Musk']
  
    },
    sizes: [
      { size: '3ML', price: 29.99, inStock: true },
      { size: '6ML', price: 49.99, inStock: true },
      { size: '12ML', price: 89.99, inStock: true }
    ]
  },
  {
    id: '2',
    name: 'Ocean Mirage',
    description: 'Sweet vanilla bourbon with creamy tonka bean.',
    price: 599.00,
    image: 'https://i.pinimg.com/736x/39/09/c7/3909c7fd8370165d654d017316097c74.jpg',
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
      top: ['Bergamot', 'Salty', 'Amber', 'Lemon'],
      middle: ['Seaweed, Calone and Hedione'],
      base: ['Musk, Ambroxan and Cedar']
    },
    sizes: [
      { size: '3ML', price: 39.99, inStock: true },
      { size: '6ML', price: 69.99, inStock: true },
      { size: '12ML', price: 119.99, inStock: true }
    ]
  },
  {
    id: '3',
    name: 'CR7 BLUE',
    description: 'Dive into the blue – where confidence meets cool. CR7 Blue: bold, fresh, unforgettable.',
    price: 299.00,
    image: 'https://i.pinimg.com/736x/f0/bb/c9/f0bbc99580dc1cf361bc2a5f38c09b61.jpg',
    additionalImages: [
      'https://images.unsplash.com/photo-1595425934374-2e83da8f27c8?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1595426496987-37c7191c6f6c?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1590736704728-f4e505bb85b4?auto=format&fit=crop&q=80&w=800'
    ],
    type: 'attar',
    category: 'fresh',
    size: '100ml',
    //featured: true,
    isNew: true, //New Tag
    notes: {
      top: ['Bergamot, Lavender, Mandarin Orange'],
      middle: ['Cardamom, Pepper'],
      base: ['Tonka Bean, Vanilla, Woods']
    },
    sizes: [
      { size: '3ML', price: 39.99, inStock: true },
      { size: '6ML', price: 69.99, inStock: true },
      { size: '12ML', price: 119.99, inStock: true }
    ]
  },
  {
    id: '4',
    name: 'French Sparks',
    description: 'A seductive symphony of spice and bloom, leaving behind trails of ambered mystery',
    price: 259,
    image: 'https://i.pinimg.com/736x/48/3a/8f/483a8f23362e68b3abbbb83670a9857e.jpg',
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
      top: ['Bitter Almond, Saffron'],
      middle: ['Egyptian Jasmine, Cedar'],
      base: ['Ambergris, Woody Notes, Musk']
    },
    sizes: [
      { size: '3ML', price: 39.99, inStock: true },
      { size: '6ML', price: 69.99, inStock: true },
      { size: '12ML', price: 119.99, inStock: true }
    
    ]
  },
  {
    id: '5',
    name: 'AMBER LUXE',
    description: 'Amber and floral notes with a touch of spice.',
    price: 449,
    image: 'https://i.pinimg.com/736x/73/e3/38/73e3384f90d77fae4b5885e770fc3417.jpg',
    additionalImages: [
      'https://images.unsplash.com/photo-1595425934374-2e83da8f27c8?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1595426496987-37c7191c6f6c?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1590736704728-f4e505bb85b4?auto=format&fit=crop&q=80&w=800'
    ],
    type: 'attar',
    category: 'oodh',
    size: '100ml',
    //featured: true,
    //isNew: true, //New Tag
    notes: {
      top: ['Grapefruit, Orange, Paprika and Cardamom'],
      middle: ['Jasmine, Ylang-Ylang, Heliotrope, Lily-of-the-Valley, Rose, Orris Root'],
      base: ['Amber, Sandalwood, Vetiver, Tonka Beana, Vanilla']
    },
    sizes: [
      { size: '3ML', price: 39.99, inStock: true },
      { size: '6ML', price: 69.99, inStock: true },
      { size: '12ML', price: 119.99, inStock: true }
    ]
  },
  {
    id: '6',
    name: 'MUSK RIJAL',
    description: 'Musk Rijal – the essence of strength, wrapped in timeless musk.',
    price: 469,
    image: 'https://i.pinimg.com/736x/48/11/dc/4811dceea1f109f5dc14de073c8633c7.jpg',
    additionalImages: [
      'https://images.unsplash.com/photo-1595425934374-2e83da8f27c8?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1595426496987-37c7191c6f6c?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1590736704728-f4e505bb85b4?auto=format&fit=crop&q=80&w=800'
    ],
    type: 'attar',
    category: 'oodh',
    size: '100ml',
    //featured: true,
    //isNew: true, //New Tag
    notes: {
      top: ['Musk, Oud, Tuberose'],
      middle: ['Floral Accents, Woody'],
      base: ['Sandalwood, Amber']
    },
    sizes: [
      { size: '3ML', price: 39.99, inStock: true },
      { size: '6ML', price: 69.99, inStock: true },
      { size: '12ML', price: 119.99, inStock: true }
    ]
  },
  {
    id: '7',
    name: 'ETERNAL BLACK',
    description: 'Eternal Black – where nightfall lingers, and mystery leaves its mark.',
    price: 279,
    image: 'https://i.pinimg.com/736x/fa/90/43/fa9043f07940787a4b60ef70f4baad36.jpg',
    additionalImages: [
      'https://images.unsplash.com/photo-1595425934374-2e83da8f27c8?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1595426496987-37c7191c6f6c?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1590736704728-f4e505bb85b4?auto=format&fit=crop&q=80&w=800'
    ],
    type: 'attar',
    category: 'oodh',
    size: '100ml',
    //featured: true,
    //isNew: true, //New Tag
    notes: {
      top: ['Pink Pepper, Orange Blossom'],
      middle: ['Coffee, Jasmine'],
      base: ['Vanilla, Patchouli, Cedar']
    },
    sizes: [
      { size: '3ML', price: 39.99, inStock: true },
      { size: '6ML', price: 69.99, inStock: true },
      { size: '12ML', price: 119.99, inStock: true }
    ]
  },
  {
    id: '8',
    name: 'NAMRUL ABYAL',
    description: 'where whispers of oud and spice awaken the soul. A scent beyond time.  -Powerful, Magestic.',
    price: 259,
    image: 'https://i.pinimg.com/736x/a7/00/a5/a700a5d747d56619adfb3799ff394b69.jpg',
    additionalImages: [
      'https://images.unsplash.com/photo-1595425934374-2e83da8f27c8?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1595426496987-37c7191c6f6c?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1590736704728-f4e505bb85b4?auto=format&fit=crop&q=80&w=800'
    ],
    type: 'attar',
    category: 'oodh',
    size: '100ml',
    //featured: true,
    //isNew: true, //New Tag
    notes: {
      top: ['Grapefruit, Cardamom'],
      middle: ['Tuberose, Ylang-Ylang'],
      base: ['Vetiver, Suede']
    },
    sizes: [
      { size: '3ML', price: 39.99, inStock: true },
      { size: '6ML', price: 69.99, inStock: true },
      { size: '12ML', price: 119.99, inStock: true }
    ]
  },
  {
    id: '9',
    name: '31 SECRETS',
    description: 'Aromatic blend of cedarwood and fresh sage.',
    price: 690,
    image: 'https://i.pinimg.com/736x/99/02/09/990209ceded7fe5a85c59c23e982d599.jpg',
    additionalImages: [
      'https://images.unsplash.com/photo-1595425934374-2e83da8f27c8?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1595426496987-37c7191c6f6c?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1590736704728-f4e505bb85b4?auto=format&fit=crop&q=80&w=800'
    ],
    type: 'attar',
    category: 'oodh',
    size: '100ml',
    //featured: true,
    //isNew: true, //New Tag
    notes: {
      top: ['Pear, Lavender, Mint, Bergamot and Lemon'],
      middle: ['Cinnamon, Clary Sage and Caraway'],
      base: ['Black Vanilla Husk, Amber, Patchouli, Cedar']
    },
    sizes: [
      { size: '3ML', price: 39.99, inStock: true },
      { size: '6ML', price: 69.99, inStock: true },
      { size: '12ML', price: 119.99, inStock: true }
    ]
  }/*,
  {
    id: '10',
    name: 'Ocean Mirage',
    description: 'Sweet vanilla bourbon with creamy tonka bean.',
    price: 599.00,
    image: 'https://i.pinimg.com/736x/39/09/c7/3909c7fd8370165d654d017316097c74.jpg',
    additionalImages: [
      'https://images.unsplash.com/photo-1595425934374-2e83da8f27c8?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1595426496987-37c7191c6f6c?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1590736704728-f4e505bb85b4?auto=format&fit=crop&q=80&w=800'
    ],
    type: 'attar',
    category: 'oodh',
    size: '100ml',
    //featured: true,
    //isNew: true, //New Tag
    notes: {
      top: ['Bergamot', 'Salty', 'Amber', 'Lemon'],
      middle: ['Seaweed, Calone and Hedione'],
      base: ['Musk, Ambroxan and Cedar']
    },
    sizes: [
      { size: '3ML', price: 39.99, inStock: true },
      { size: '6ML', price: 69.99, inStock: true },
      { size: '12ML', price: 119.99, inStock: true }
    ]
  },
  {
    id: '11',
    name: 'Ocean Mirage',
    description: 'Sweet vanilla bourbon with creamy tonka bean.',
    price: 599.00,
    image: 'https://i.pinimg.com/736x/39/09/c7/3909c7fd8370165d654d017316097c74.jpg',
    additionalImages: [
      'https://images.unsplash.com/photo-1595425934374-2e83da8f27c8?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1595426496987-37c7191c6f6c?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1590736704728-f4e505bb85b4?auto=format&fit=crop&q=80&w=800'
    ],
    type: 'attar',
    category: 'oodh',
    size: '100ml',
    //featured: true,
    //isNew: true, //New Tag
    notes: {
      top: ['Bergamot', 'Salty', 'Amber', 'Lemon'],
      middle: ['Seaweed, Calone and Hedione'],
      base: ['Musk, Ambroxan and Cedar']
    },
    sizes: [
      { size: '3ML', price: 39.99, inStock: true },
      { size: '6ML', price: 69.99, inStock: true },
      { size: '12ML', price: 119.99, inStock: true }
    ]
  },
  {
    id: '12',
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
  }*/
];