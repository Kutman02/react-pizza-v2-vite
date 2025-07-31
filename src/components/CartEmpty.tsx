import React from 'react';
import { Link } from 'react-router-dom';

import cartEmptyImg from '../assets/img/empty-cart.png';

export const CartEmpty: React.FC = () => (
  <div className="flex flex-col items-center justify-center py-20 px-4 text-center max-w-md mx-auto">
    <h2 className="text-3xl font-bold mb-4">
      Корзина пустая <span>😕</span>
    </h2>
    <p className="text-gray-600 mb-8 leading-relaxed">
      Вероятней всего, вы не заказывали ещё пиццу.
      <br />
      Для того, чтобы заказать пиццу, перейди на главную страницу.
    </p>
    <img src={cartEmptyImg} alt="Empty cart" className="w-48 h-auto mb-8" />
    <Link
      to="/"
      className="inline-block bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition">
      <span>Вернуться назад</span>
    </Link>
  </div>
);
