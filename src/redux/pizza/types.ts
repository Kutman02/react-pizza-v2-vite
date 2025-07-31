export type Pizza = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  sizes: number[];
  types: number[];
  rating: number;
};

// Вариант 1 (объект + тип)
export const Status = {
  LOADING: 'loading',
  SUCCESS: 'completed',
  ERROR: 'error',
} as const;

export type Status = (typeof Status)[keyof typeof Status];

// Или вариант 3 (union)
// export type Status = 'loading' | 'completed' | 'error';

export type SearchPizzaParams = {
  sortBy: string;
  order: string;
  category: string;
  search: string;
  currentPage: string;
};

export interface PizzaSliceState {
  items: Pizza[];
  status: Status;
}
