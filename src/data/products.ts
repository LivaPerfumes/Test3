// Removed unused Product import

type LocalProduct = {
  id: string;
  topNote: string;
  middleNote: string;
  baseNote: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: "floral" | "woody" | "oriental" | "fresh"; 
 //size: string;
  featured?: boolean;
  isNew?: boolean;
  ml: string;
};

export const products: LocalProduct[] = [
  {
    id: '1',
    name: 'Oud Rose',
    description: 'Elegant blend of rose and oud with a hint on essence of Love!.',
    price: 349,
    image: "https://i.pinimg.com/736x/f5/07/a2/f507a28a4f63fa61520e85e48e585643.jpg",
    category: 'floral',
   //size'50ml',
    //featured: true,
    isNew: true,
    topNote: 'Floral, Spicy, Rose, Saffron, Coriander',
    middleNote: 'Woody, Rose, Iris, Patchouli, Agarwood',
    baseNote: 'Woody, Ambery, Vetiver, Labdanum,Honey, Benzoin, Musk',
    ml: '6ml'
  },
  {
    id: '2',
    name: 'CR7 BLUE',
    description: 'Dive into the blue – where confidence meets cool. CR7 Blue: bold, fresh, unforgettable.',
    price: 299,
    image: 'https://i.pinimg.com/736x/f0/bb/c9/f0bbc99580dc1cf361bc2a5f38c09b61.jpg',
    category: 'woody',
   //size'100ml',
    featured: true,
    topNote: 'Bergamot, Lavender, Mandarin Orange',
    middleNote: 'Cardamom, Pepper',
    baseNote: 'Tonka Bean, Vanilla, Woods',
    ml: '6ml'
  },
  {
    id: '3',
    name: 'NAMRUL ABYAL',
    description: 'where whispers of oud and spice awaken the soul. A scent beyond time.  -Powerful, Magestic.',
    price: 259,
    image: 'https://i.pinimg.com/736x/a7/00/a5/a700a5d747d56619adfb3799ff394b69.jpg',
    category: 'fresh',
   //size'75ml',
    featured: true,
    topNote: 'Grapefruit, Cardamom',
    middleNote: 'Tuberose, Ylang-Ylang',
    baseNote: 'Vetiver, Suede',
    ml: '6ml'
  },
  {
    id: '4',
    name: 'AMBER LUXE',
    description: 'Amber and floral notes with a touch of spice.',
    price: 449,
    image: 'https://i.pinimg.com/736x/73/e3/38/73e3384f90d77fae4b5885e770fc3417.jpg',
    category: 'floral',
   //size'50ml',
    //isNew: true,
    topNote: 'Grapefruit, Orange, Paprika and Cardamom',
    middleNote: 'Jasmine, Ylang-Ylang, Heliotrope, Lily-of-the-Valley, Rose, Orris Root',
    baseNote: 'Amber, Sandalwood, Vetiver, Tonka Beana, Vanilla',
    ml: '6ml'
  },
  {
    id: '5',
    name: 'MUSK RIJAL',
    description: 'Musk Rijal – the essence of strength, wrapped in timeless musk.',
    price: 469,
    image: 'https://i.pinimg.com/736x/48/11/dc/4811dceea1f109f5dc14de073c8633c7.jpg',
    category: 'oriental',
   //size'75ml',
    //isNew: true
    topNote: 'Musk, Oud, Tuberose',
    middleNote: 'Floral Accents, Woody',
    baseNote: 'Sandalwood, Amber',
    ml: '6ml'
  },
  {
    id: '6',
    name: 'ETERNAL BLACK',
    description: 'Eternal Black – where nightfall lingers, and mystery leaves its mark.',
    price: 279,
    image: 'https://i.pinimg.com/736x/fa/90/43/fa9043f07940787a4b60ef70f4baad36.jpg',
    category: 'fresh',
   //size'100ml',
    //isNew: true
    featured: true,
    topNote: 'Pink Pepper, Orange Blossom',
    middleNote: 'Coffee, Jasmine',
    baseNote: 'Vanilla, Patchouli, Cedar',
    ml: '6ml'

  },
  {
    id: '7',
    name: 'French Sparks',
    description: 'A seductive symphony of spice and bloom, leaving behind trails of ambered mystery',
    price: 259,
    image: 'https://i.pinimg.com/736x/48/3a/8f/483a8f23362e68b3abbbb83670a9857e.jpg',
    category: 'floral',
   //size'50ml',
    //isNew: true
    topNote: 'Bitter Almond, Saffron',
    middleNote: 'Egyptian Jasmine, Cedar',
    baseNote: 'Ambergris, Woody Notes, Musk',
    ml: '6ml'
  },
  {
    id: '8',
    name: '31 SECRETS',
    description: 'Aromatic blend of cedarwood and fresh sage.',
    price: 690,
    image: 'https://i.pinimg.com/736x/99/02/09/990209ceded7fe5a85c59c23e982d599.jpg',
    category: 'woody',
   //size'75ml',
    isNew: true,
    topNote: 'Pear, Lavender, Mint, Bergamot and Lemon',
    middleNote: 'Cinnamon, Clary Sage and Caraway',
    baseNote: 'Black Vanilla Husk, Amber, Patchouli, Cedar',
    ml: '6ml'
  },
  {
    id: '9',
    name: 'Ocean Mirage',
    description: 'Sweet vanilla bourbon with creamy tonka bean.',
    price: 599,
    image: 'https://i.pinimg.com/736x/39/09/c7/3909c7fd8370165d654d017316097c74.jpg',
    category: 'oriental',
   //size'100ml',
    topNote: 'Bergamot, Salty Amber and Lemon',
    middleNote: 'Seaweed, Calone and Hedione',
    baseNote: 'Musk, Ambroxan and Cedar',
    ml: '6ml',
    isNew: true
  },
  /*{
    id: '10',
    name: 'Mediterranean Fig',
    description: 'Fresh fig leaves with coconut milk and cedar.',
    price: 348,
    image: 'https://images.pexels.com/photos/30981935/pexels-photo-30981935/free-photo-of-elegant-perfume-bottle-with-aromatic-wood-base.jpeg?auto=compress&cs=tinysrgb&w=1200',
    category: 'fresh',
   //size'50ml',
    topNote: 'Fig Leaves',
    middleNote: 'Coconut Milk',
    baseNote: 'Cedar',
    ml: '50ml'
  },
  {
    id: '11',
    name: '31 Secret',
    description: 'Mysterious blend of black orchid and dark chocolate.',
    price: 500,
    image: 'https://i.pinimg.com/474x/68/70/56/6870562b8588a3891f3f120d4edfc09c.jpg',
    category: 'oriental',
   //size'75ml',
    topNote: 'Black Orchid',
    middleNote: 'Dark Chocolate',
    baseNote: 'Musk',
    ml: '75ml'
  },
  {
      id: '12',
      name: 'Summer Breeze',
      description: 'Light and airy with notes of sea salt and driftwood.',
      price: 750,
      image: 'https://i.pinimg.com/736x/78/1f/17/781f173a119a081d45.jpg',
      category: 'fresh',
     //size'100ml',
      topNote: 'Sea Salt',
      middleNote: 'Driftwood',
      baseNote: 'Musk',
      ml: '100ml'
  },
  {
    id: '13',
    name: 'Sandalwood Mystic',
    description: 'Rich sandalwood with hints of rose and amber.',
    price: 670,
    image: 'https://cdn.pixabay.com/photo/2017/09/06/12/05/perfume-2721147_1280.jpg',
    category: 'woody',
   //size'50ml',
    topNote: 'Sandalwood',
    middleNote: 'Rose',
    baseNote: 'Amber',
    ml: '50ml'
  },
  
  {
    id: '14',
    name: 'Moonlit Garden',
    description: 'Night-blooming jasmine with white flowers and musk.',
    price: 899,
    image: 'https://example.com/moonlit-garden.jpg',
    category: 'floral',
   //size'75ml',
    topNote: 'Jasmine',
    middleNote: 'White Flowers',
    baseNote: 'Musk',
    ml: '75ml',
  },
  {
    id: '15',
    name: 'Spiced Amber',
    description: 'Warm amber with exotic spices and vanilla.',
    price: 640,
    image: 'https://i.pinimg.com/474x/5f/99/ec/5f99ec6ba42a82f51401f738741b4396.jpg',
    category: 'oriental',
   //size'100ml',
    isNew: true,
    topNote: 'Amber',
    middleNote: 'Spices',
    baseNote: 'Vanilla',
    ml: '100ml'
  }*/
];