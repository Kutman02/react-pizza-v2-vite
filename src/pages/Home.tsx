import React from 'react';
import { useSelector } from 'react-redux';

import { Categories, Sort, PizzaBlock, Skeleton, Pagination } from '../components';

import { useAppDispatch } from '../redux/store';
import { selectFilter } from '../redux/filter/selectors';
import { selectPizzaData } from '../redux/pizza/selectors';
import { setCategoryId, setCurrentPage } from '../redux/filter/slice';
import { fetchProducts } from '../redux/pizza/asyncActions';
import { type MenuItem } from '../redux/pizza/types';

const Home: React.FC = () => {
  const dispatch = useAppDispatch();

  const { items, status } = useSelector(selectPizzaData);
  const { categoryId, sort, currentPage, searchValue } = useSelector(selectFilter);

  const onChangeCategory = React.useCallback(
    (idx: number) => {
      dispatch(setCategoryId(idx));
    },
    [dispatch],
  );

  const onChangePage = (page: number) => {
    dispatch(setCurrentPage(page));
  };

  const getPizzas = React.useCallback(() => {
    const sortBy = sort.sortProperty.replace('-', '');
    const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';
    const category = categoryId > 0 ? String(categoryId) : '';
    const search = searchValue;

    dispatch(
      fetchProducts({
        sortBy,
        order,
        category,
        search,
        currentPage: String(currentPage),
      }),
    );

    window.scrollTo(0, 0);
  }, [categoryId, sort.sortProperty, searchValue, currentPage, dispatch]);

  React.useEffect(() => {
    getPizzas();
  }, [getPizzas]);

  const pizzas = items.map((obj: MenuItem) => <PizzaBlock key={obj.id} {...obj} />);
  const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index} />);

  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
        <Categories value={categoryId} onChangeCategory={onChangeCategory} />
        <Sort value={sort} />
      </div>

      <h2 className="text-3xl font-bold mb-6">Все пиццы</h2>

      {status === 'error' ? (
        <div className="text-center text-red-600">
          <h2 className="text-2xl mb-2">Произошла ошибка 😕</h2>
          <p>К сожалению, не удалось получить пиццы. Попробуйте повторить попытку позже.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {status === 'loading' ? skeletons : pizzas}
        </div>
      )}

      <Pagination currentPage={currentPage} onChangePage={onChangePage} />
    </div>
  );
};

export default Home;
