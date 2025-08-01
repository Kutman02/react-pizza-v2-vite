import React from 'react';
import type { CartItemType } from '../@types/cart';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { CartItem, CartEmpty } from '../components';
import { selectCart } from '../redux/cart/selectors';
import { clearItems } from '../redux/cart/slice';

import { FiShoppingCart, FiTrash2, FiArrowLeft } from 'react-icons/fi';

const Cart: React.FC = () => {
  const dispatch = useDispatch();
  const { totalPrice, items } = useSelector(selectCart);

  const totalCount = items.reduce((sum: number, item: CartItemType) => sum + item.count, 0);

  const onClickClear = () => {
    if (window.confirm('Очистить корзину?')) {
      dispatch(clearItems());
    }
  };

  if (!totalPrice) {
    return <CartEmpty />;
  }

  return (
    <div className="container mx-auto px-4">
      <div className="bg-white rounded-xl shadow-md p-6">
        {/* Верх */}
        <div className="flex justify-between items-center mb-6 border-b pb-4">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <FiShoppingCart className="text-xl" />
            Корзина
          </h2>
          <button
            onClick={onClickClear}
            className="flex items-center gap-2 text-gray-500 hover:text-red-600 transition-colors">
            <FiTrash2 className="text-lg" />
            <span>Очистить корзину</span>
          </button>
        </div>

        {/* Товары */}
        <div className="mb-6">
          {items.map((item: CartItemType) => (
            <CartItem key={item.id} {...item} />
          ))}
        </div>

        {/* Итоги и кнопки */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 border-t pt-4">
          <div className="text-lg text-gray-700">
            <p>
              Всего пицц: <b>{totalCount} шт.</b>
            </p>
            <p>
              Сумма заказа: <b>{totalPrice} ₽</b>
            </p>
          </div>

          <div className="flex gap-4 mt-4 md:mt-0">
            <Link
              to="/"
              className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 transition">
              <FiArrowLeft />
              <span>Вернуться назад</span>
            </Link>
            <button
              type="button"
              className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-6 py-2 rounded shadow transition">
              Оплатить сейчас
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
