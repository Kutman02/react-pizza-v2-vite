// Константа, заменяющая enum
export const SortPropertyEnum = {
  RATING_DESC: 'rating',
  RATING_ASC: '-rating',
  TITLE_DESC: 'title',
  TITLE_ASC: '-title',
  PRICE_DESC: 'price',
  PRICE_ASC: '-price',
} as const;

// Тип, полученный из значения SortPropertyEnum
export type SortPropertyEnum = (typeof SortPropertyEnum)[keyof typeof SortPropertyEnum];

// Тип сортировки
export type Sort = {
  name: string;
  sortProperty: SortPropertyEnum;
};

// Тип состояния слайса фильтров
export interface FilterSliceState {
  searchValue: string;
  categoryId: number;
  currentPage: number;
  sort: Sort;
}
