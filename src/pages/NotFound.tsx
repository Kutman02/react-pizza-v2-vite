import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => (
  <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
    <h1 className="text-7xl font-bold mb-4">404</h1>
    <p className="text-xl mb-6">Страница не найдена 😕</p>
    <Link
      to="/"
      className="inline-block px-6 py-3 border border-gray-700 rounded hover:bg-gray-700 hover:text-white transition">
      Вернуться назад
    </Link>
  </div>
);

export default NotFound;
