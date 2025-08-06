import type { RootState } from '../store';

export const selectProductData = (state: RootState) => state.products;
