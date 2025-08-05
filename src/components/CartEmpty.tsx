import React from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';

export const CartEmpty: React.FC = () => (
  <div className="flex flex-col items-center justify-center px-4 sm:px-6 py-20 sm:py-24 text-center max-w-screen-sm mx-auto">
    {/* Иконка */}
    <div className="text-gray-400 mb-6">
      <FiShoppingCart className="text-6xl sm:text-7xl md:text-8xl" />
    </div>

    {/* Заголовок */}
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 leading-tight">
      Корзина пустая <span className="inline-block">😕</span>
    </h2>

    {/* Подзаголовок */}
    <p className="text-gray-600 mb-8 leading-relaxed text-sm sm:text-base md:text-lg">
      Похоже, вы ещё не добавили ни одной пиццы.
      <br />
      Чтобы сделать заказ — перейдите на главную страницу.
    </p>

    {/* Кнопка */}
    <Link
      to="/"
      className="inline-block bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition duration-300 text-sm sm:text-base font-medium shadow-lg">
      Вернуться на главную
    </Link>
  </div>
);
