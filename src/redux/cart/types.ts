export type Product = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  type: 'pizza' | 'drink' | 'shaurma' | 'sweet';
  sizes?: number[];
  types?: number[];
  volume?: number[];
  rating?: number;
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
  productType?: string;
};
// redux/cart/types.ts
export type CartItem = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  type: string;
  size: number;
  count: number;
};
