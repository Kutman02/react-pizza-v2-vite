import type { RootState } from '../store';

export const selectPizzaData = (state: RootState) => state.pizza;
