import React from 'react';
import { useSelector } from 'react-redux';

import { Categories, Sort, Skeleton, Pagination } from '../components';
import { ProductBlock } from '../components';

import { useAppDispatch } from '../redux/store';
import { selectFilter } from '../redux/filter/selectors';
import { selectProductData } from '../redux/products/selectors';
import { setCategoryId, setCurrentPage } from '../redux/filter/slice';
import { fetchAllProducts } from '../redux/products/slice'; // Исправлено: используем fetchAllProducts
import type { Product } from '../redux/products/types';

const Home: React.FC = () => {
  const dispatch = useAppDispatch();

  const { items, status, error } = useSelector(selectProductData); // Добавлено error

  // Отладка: показываем все типы товаров
  React.useEffect(() => {
    if (items.length > 0) {
      console.log('🔍 Отладка типов товаров:');
      const types = [...new Set(items.map((item) => item.type))];
      console.log('Уникальные типы в данных:', JSON.stringify(types, null, 2));

      items.slice(0, 5).forEach((item, index) => {
        console.log(
          `Товар ${index + 1}:`,
          JSON.stringify({ id: item.id, title: item.title, type: item.type }, null, 2),
        );
      });
    }
  }, [items]);

  const pizzas = items.filter((item) => item.type === 'pizzas');
  const drinks = items.filter((item) => item.type === 'drinks');
  const shaurma = items.filter((item) => item.type === 'shaurma');
  const sweets = items.filter((item) => item.type === 'sweets');

  const { categoryId, sort, currentPage, searchValue } = useSelector(selectFilter);

  // Логирование состояния товаров
  React.useEffect(() => {
    console.group('📊 Состояние товаров в Home');
    console.log('Статус:', status);
    console.log('Всего товаров:', items.length);
    console.log(
      'Пиццы:',
      pizzas.length,
      'из них:',
      JSON.stringify(
        pizzas.slice(0, 2).map((p) => p.title),
        null,
        2,
      ),
    );
    console.log(
      'Напитки:',
      drinks.length,
      'из них:',
      JSON.stringify(
        drinks.slice(0, 2).map((p) => p.title),
        null,
        2,
      ),
    );
    console.log(
      'Шаурма:',
      shaurma.length,
      'из них:',
      JSON.stringify(
        shaurma.slice(0, 2).map((p) => p.title),
        null,
        2,
      ),
    );
    console.log(
      'Сладости:',
      sweets.length,
      'из них:',
      JSON.stringify(
        sweets.slice(0, 2).map((p) => p.title),
        null,
        2,
      ),
    );
    if (error) {
      console.error('Ошибка:', error);
    }
    console.groupEnd();
  }, [
    status,
    items.length,
    pizzas.length,
    drinks.length,
    shaurma.length,
    sweets.length,
    error,
    pizzas,
    drinks,
    shaurma,
    sweets,
  ]);

  const onChangeCategory = React.useCallback(
    (idx: number) => {
      console.log('📂 Смена категории на:', idx);
      dispatch(setCategoryId(idx));
    },
    [dispatch],
  );

  const onChangePage = (page: number) => {
    console.log('📄 Смена страницы на:', page);
    dispatch(setCurrentPage(page));
  };

  React.useEffect(() => {
    console.group('🔄 Запрос товаров');
    console.log(
      'Параметры фильтра:',
      JSON.stringify(
        {
          categoryId,
          sortProperty: sort.sortProperty,
          currentPage,
          searchValue,
        },
        null,
        2,
      ),
    );

    const sortBy = sort.sortProperty.replace('-', '');
    const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';
    const category = categoryId > 0 ? String(categoryId) : '';
    const search = searchValue;
    const page = String(currentPage);

    console.log(
      'Обработанные параметры:',
      JSON.stringify(
        {
          sortBy,
          order,
          category,
          search,
          page,
        },
        null,
        2,
      ),
    );

    // Используем fetchAllProducts вместо fetchProducts
    console.log('🚀 Отправляем запрос fetchAllProducts...');
    dispatch(fetchAllProducts());
    console.groupEnd();

    window.scrollTo(0, 0);
  }, [categoryId, sort.sortProperty, searchValue, currentPage, dispatch]);

  const renderProductList = (title: string, items: Product[]) => {
    const isLoading = status === 'loading' && items.length === 0;

    console.log(
      `🎯 Рендер списка "${title}":`,
      JSON.stringify(
        {
          количество: items.length,
          статус: status,
          показатьСкелетон: isLoading,
          первыеТовары: items.slice(0, 2).map((item) => ({ id: item.id, title: item.title })),
        },
        null,
        2,
      ),
    );

    return (
      <>
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10">
          {isLoading
            ? [...new Array(4)].map((_, i) => {
                console.log(`💀 Показываем скелетон ${i + 1} для "${title}"`);
                return <Skeleton key={i} />;
              })
            : items.map((item) => (
                <ProductBlock
                  key={item.id}
                  {...item}
                  sizes={item.sizes ?? []}
                  types={item.types ?? []}
                  volume={item.volume ?? []}
                  rating={item.rating ?? 0}
                />
              ))}
        </div>
      </>
    );
  };

  // Логирование рендера компонента
  console.log('🏠 Home компонент рендерится, статус:', status);

  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
        <Categories value={categoryId} onChangeCategory={onChangeCategory} />
        <Sort value={sort} />
      </div>

      {status === 'error' ? (
        <div className="text-center text-red-600">
          <h2 className="text-2xl mb-2">Произошла ошибка 😕</h2>
          <p>К сожалению, не удалось получить продукты. Попробуйте позже.</p>
          {error && (
            <details className="mt-4 text-left bg-red-50 p-4 rounded">
              <summary className="cursor-pointer font-semibold">Детали ошибки</summary>
              <pre className="mt-2 text-sm text-red-700">{error}</pre>
            </details>
          )}
        </div>
      ) : (
        <>
          {renderProductList('Пиццы', pizzas)}
          {renderProductList('Напитки', drinks)}
          {renderProductList('Шаурма', shaurma)}
          {renderProductList('Сладости', sweets)}
        </>
      )}

      <Pagination currentPage={currentPage} onChangePage={onChangePage} />
    </div>
  );
};

export default Home;
