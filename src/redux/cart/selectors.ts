import type { RootState } from '../store';
import type { CartItem } from './types';

export const selectCart = (state: RootState) => state.cart;

export const selectCartItemById =
  (id: string) =>
  (state: RootState): CartItem | undefined =>
    state.cart.items.find((obj: CartItem) => obj.id === id);
