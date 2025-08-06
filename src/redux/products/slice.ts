import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import type { Product } from './types';

interface ProductState {
  items: Product[];
  status: 'loading' | 'success' | 'error';
  error: string | null;
}

const initialState: ProductState = {
  items: [],
  status: 'loading',
  error: null,
};

export const fetchAllProducts = createAsyncThunk<Product[], void>(
  'products/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      console.log('🚀 Начинаем загрузку всех товаров...');

      const startTime = Date.now();

      const [pizzas, drinks, shaurma, sweets] = await Promise.all([
        axios.get<Product[]>('http://localhost:3000/pizzas'),
        axios.get<Product[]>('http://localhost:3000/drinks'),
        axios.get<Product[]>('http://localhost:3000/shaurma'),
        axios.get<Product[]>('http://localhost:3000/sweets'),
      ]);

      const endTime = Date.now();
      console.log(`⏱️ Все запросы выполнены за ${endTime - startTime}мс`);

      const results = {
        pizzas: pizzas.data,
        drinks: drinks.data,
        shaurma: shaurma.data,
        sweets: sweets.data,
      };

      console.log('📊 Результаты загрузки:');
      console.log(`  🍕 Пиццы: ${results.pizzas.length} шт.`);
      console.log(`  🥤 Напитки: ${results.drinks.length} шт.`);
      console.log(`  🌯 Шаурма: ${results.shaurma.length} шт.`);
      console.log(`  🍰 Сладости: ${results.sweets.length} шт.`);

      const allProducts = [...pizzas.data, ...drinks.data, ...shaurma.data, ...sweets.data];
      console.log(`✅ Всего товаров загружено: ${allProducts.length}`);

      return allProducts;
    } catch (error) {
      console.error('❌ Ошибка при загрузке товаров:');

      if (axios.isAxiosError(error)) {
        console.error('🌐 Сетевая ошибка:');
        console.error('  URL:', error.config?.url);
        console.error('  Метод:', error.config?.method?.toUpperCase());
        console.error('  Статус:', error.response?.status);
        console.error('  Статус текст:', error.response?.statusText);
        console.error('  Данные ошибки:', error.response?.data);
        console.error('  Заголовки ответа:', error.response?.headers);

        if (error.code) {
          console.error('  Код ошибки:', error.code);
        }

        if (!error.response) {
          console.error('  🔌 Сервер недоступен или нет интернет-соединения');
        }

        return rejectWithValue({
          message: error.message,
          status: error.response?.status,
          statusText: error.response?.statusText,
          url: error.config?.url,
          code: error.code,
        });
      } else {
        console.error('  💥 Неизвестная ошибка:', error);
        return rejectWithValue({
          message: error instanceof Error ? error.message : 'Неизвестная ошибка',
        });
      }
    }
  },
);

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setItems(state, action) {
      console.log('🔄 Установка товаров вручную:', action.payload.length);
      state.items = action.payload;
    },
    clearError(state) {
      console.log('🧹 Очистка ошибки');
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProducts.pending, (state) => {
        console.log('⏳ Статус: загрузка товаров...');
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        console.log('✅ Статус: товары успешно загружены');
        console.log('📦 Товары сохранены в store:', action.payload.length);
        state.items = action.payload;
        state.status = 'success';
        state.error = null;
      })
      .addCase(fetchAllProducts.rejected, (state, action) => {
        console.error('💥 Статус: ошибка загрузки товаров');
        console.error('📋 Детали ошибки:', action.payload);
        console.error('🔍 Action error:', action.error);

        state.status = 'error';
        state.items = [];

        // Сохраняем детальную информацию об ошибке
        if (action.payload && typeof action.payload === 'object') {
          const errorPayload = action.payload as {
            message: string;
            status?: number;
            statusText?: string;
          };
          state.error = `${errorPayload.message} (${errorPayload.status || 'неизвестный статус'})`;
        } else {
          state.error = action.error.message || 'Неизвестная ошибка при загрузке товаров';
        }
      });
  },
});

export const { setItems, clearError } = productSlice.actions;
export default productSlice.reducer;
