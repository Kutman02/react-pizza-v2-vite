import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import type { Product, SearchProductParams } from './types';
import pickBy from 'lodash/pickBy';
import identity from 'lodash/identity';

export const fetchProducts = createAsyncThunk<Product[], SearchProductParams>(
  'products/fetchProductsStatus',
  async (params) => {
    const { sortBy, order, category, search, currentPage, productType } = params;

    const apiUrl = `http://localhost:3000/${productType}`;

    const { data } = await axios.get<Product[]>(apiUrl, {
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
