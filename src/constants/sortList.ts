import { SortPropertyEnum } from '../redux/filter/types';

export const sortList = [
  { name: 'популярности (DESC)', sortProperty: SortPropertyEnum.RATING_DESC },
  { name: 'популярности (ASC)', sortProperty: SortPropertyEnum.RATING_ASC },
  { name: 'цене (DESC)', sortProperty: SortPropertyEnum.PRICE_DESC },
  { name: 'цене (ASC)', sortProperty: SortPropertyEnum.PRICE_ASC },
  { name: 'алфавиту (DESC)', sortProperty: SortPropertyEnum.TITLE_DESC },
  { name: 'алфавиту (ASC)', sortProperty: SortPropertyEnum.TITLE_ASC },
];
