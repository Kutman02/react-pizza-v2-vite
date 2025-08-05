import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import type { Pizza, SearchPizzaParams } from './types';
import pickBy from 'lodash/pickBy';
import identity from 'lodash/identity';

export const fetchProducts = createAsyncThunk<Pizza[], SearchPizzaParams>(
  'products/fetchProductsStatus',
  async (params) => {
    const { sortBy, order, category, search, currentPage } = params;

    const apiUrl = 'http://localhost:3000/pizzas';

    const { data } = await axios.get<Pizza[]>(apiUrl, {
      params: pickBy(
        {
          page: currentPage,
          limit: 4,
          category,
          sortBy,
          order,
          search,
        },
        identity,
      ),
    });

    return data;
  },
);
