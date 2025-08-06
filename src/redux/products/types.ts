export type Product = {
  id: string; // строка, чтобы совпадало с PizzaBlockProps
  title: string;
  price: number;
  imageUrl: string;
  type: 'pizzas' | 'drinks' | 'shaurma' | 'sweets';
  sizes?: number[];
  types?: number[];
  volume?: number[];
  rating?: number;
  category: number;
};

export type MenuItem = {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
  sizes: number[];
  types: number[];
  category: number;
  rating: number;
};
export type SearchProductParams = {
  sortBy: string;
  order: string;
  category: string;
  search: string;
  currentPage: string;
  productType: 'pizzas' | 'drinks' | 'shaurma' | 'sweets';
};
