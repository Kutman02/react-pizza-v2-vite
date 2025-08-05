import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { Product } from './types';

interface PizzaState {
  items: Product[];
  status: 'loading' | 'success' | 'error';
}

const initialState: PizzaState = {
  items: [],
  status: 'loading',
};

const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<Product[]>) {
      state.items = action.payload;
    },
  },
});

export const { setItems } = pizzaSlice.actions;
export default pizzaSlice.reducer;
