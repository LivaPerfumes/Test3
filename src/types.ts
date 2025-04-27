export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  type: 'attar' | 'spray';
  category: 'oodh' | 'floral' | 'fresh' | 'woody' | 'oriental' | 'arabic' | 'sporty';
  size: string;
  featured?: boolean;
  isNew?: boolean;
  additionalImages?: string[];
  notes?: {
    top?: string[];
    middle?: string[];
    base?: string[];
  };
  sizes: {
    size: '3ML' | '6ML' | '12ML' | '20ML' | '30ML' | '50ML' | '100ML';
    price: number;
    inStock: boolean;
  }[];
}

export type ProductType = 'all' | 'attar' | 'spray';
export type AttarCategory = 'all' | 'oodh' | 'floral' | 'fresh' | 'woody' | 'oriental';
export type SprayCategory = 'all' | 'arabic' | 'fresh' | 'woody' | 'sporty';

export interface CartItem {
  product: Product;
  quantity: number;
  selectedSize: '3ML' | '6ML' | '12ML' | '20ML' | '30ML' | '50ML' | '100ML';
}

export interface DeliveryAddress {
  fullName: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  phone: string;
}

export interface OrderDetails {
  orderId: string;
  items: CartItem[];
  deliveryAddress: DeliveryAddress;
  totalAmount: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered';
  estimatedDelivery: string;
  trackingNumber?: string;
}