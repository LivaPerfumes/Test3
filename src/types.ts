export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'floral' | 'woody' | 'oriental' | 'fresh';
  size: string;
  featured?: boolean;
  isNew?: boolean;
}

export type Category = 'all' | 'floral' | 'woody' | 'oriental' | 'fresh';