import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItemById } from '../../redux/cart/selectors';
import type { CartItem } from '../../redux/cart/types';
import { addItem, removeItem } from '../../redux/cart/slice';
import { FiPlus } from 'react-icons/fi';

const typeNames = ['тонкое', 'традиционное'];

type ProductBlockProps = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  sizes: number[];
  types: number[];
  rating: number;
  category: number;
  volume?: number[];
};

export const ProductBlock: React.FC<ProductBlockProps> = ({
  id,
  title,
  price,
  imageUrl,
  sizes,
  types,
}) => {
  const dispatch = useDispatch();
  const cartItem = useSelector(selectCartItemById(id));
  const [activeType, setActiveType] = React.useState(0);
  const [activeSize, setActiveSize] = React.useState(0);

  const addedCount = cartItem ? cartItem.count : 0;

  const onClickAdd = () => {
    const item: CartItem = {
      id,
      title,
      price,
      imageUrl,
      type: typeNames[activeType],
      size: sizes[activeSize],
      count: 1,
    };
    dispatch(addItem(item));
  };

  const onClickMinus = () => {
    dispatch(removeItem(id));
  };

  return (
    <div className="flex flex-col bg-white p-4 rounded-2xl shadow hover:shadow-lg transition w-full max-w-sm mx-auto">
      <Link to={`/pizzas/${id}`} className="block">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-48 sm:h-56 object-cover rounded-xl mb-3 hover:scale-105 transition-transform duration-300"
        />
        <h4 className="text-lg sm:text-xl font-semibold text-gray-900 text-center">{title}</h4>
      </Link>

      {/* Выбор типа и размера */}
      <div className="flex flex-wrap justify-center gap-2 mt-4 text-sm sm:text-base">
        {types.map((typeId) => (
          <button
            key={typeId}
            onClick={() => setActiveType(typeId)}
            className={`px-3 py-1 rounded-full ${
              activeType === typeId
                ? 'bg-orange-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-orange-100'
            } transition`}>
            {typeNames[typeId]}
          </button>
        ))}
        {sizes.map((size, i) => (
          <button
            key={size}
            onClick={() => setActiveSize(i)}
            className={`px-3 py-1 rounded-full ${
              activeSize === i
                ? 'bg-orange-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-orange-100'
            } transition`}>
            {size} см
          </button>
        ))}
      </div>

      {/* Цена и кнопки */}
      <div className="mt-4 w-full">
        {addedCount === 0 ? (
          // Кнопка "Добавить"
          <button
            onClick={onClickAdd}
            className="w-full flex items-center justify-center gap-2 bg-orange-500 text-white py-2 rounded-full hover:bg-orange-600 text-base font-semibold transition-all shadow-md">
            <FiPlus />
            <span>Добавить</span>
          </button>
        ) : (
          // Блок управления количеством
          <div className="flex items-center justify-between bg-orange-100 rounded-full px-4 py-2 w-full shadow-md">
            {/* Кнопка "-" */}
            <button
              onClick={onClickMinus}
              className="w-8 h-8 text-xl text-orange-500 font-bold hover:bg-orange-200 rounded-full flex items-center justify-center transition">
              −
            </button>

            {/* Кол-во */}
            <span className="text-base font-semibold text-gray-800">{addedCount} в корзине</span>

            {/* Кнопка "+" */}
            <button
              onClick={onClickAdd}
              className="w-8 h-8 text-xl text-orange-500 font-bold hover:bg-orange-200 rounded-full flex items-center justify-center transition">
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
