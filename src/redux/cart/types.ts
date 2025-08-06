export type Product = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  type: 'pizzas' | 'drinks' | 'shaurma' | 'sweets';
  sizes: number[];
  types: number[];
  volume: number[];
  rating: number;
  category: number;
};

export type MenuItem = Product;

export const Status = {
  LOADING: 'loading',
  SUCCESS: 'completed',
  ERROR: 'error',
} as const;

export type Status = keyof typeof Status;

export interface ProductsSliceState {
  items: MenuItem[];
  status: Status;
  productType?: string;
}

export type SearchProductParams = {
  sortBy: string;
  order: string;
  category: string;
  search: string;
  currentPage: string;
  productType: 'pizzas' | 'drinks' | 'shaurma' | 'sweets';
};
// types.ts
export type CartItem = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  type: string;
  size: number;
  count: number;
};
export interface CartSliceState {
  items: CartItem[];
  totalPrice: number;
}
