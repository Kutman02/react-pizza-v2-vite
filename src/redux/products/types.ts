export type Product = {
  id: string; // строка, чтобы совпадало с PizzaBlockProps
  title: string;
  price: number;
  imageUrl: string;
  type: 'pizza' | 'drink' | 'shaurma' | 'sweet';
  sizes?: number[]; // опционально
  types?: number[];
  volume?: number[];
  rating?: number;
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
