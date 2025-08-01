import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItemById } from '../../redux/cart/selectors';
import type { CartItem } from '../../redux/cart/types';
import { addItem, removeItem } from '../../redux/cart/slice';
import { FiPlus } from 'react-icons/fi';

const typeNames = ['тонкое', 'традиционное'];

type PizzaBlockProps = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  sizes: number[];
  types: number[];
  rating: number;
};

export const PizzaBlock: React.FC<PizzaBlockProps> = ({
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
    <div className="flex flex-col">
      <Link to={`/pizza/${id}`} className="block">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover rounded-xl mb-3 hover:scale-105 transition-transform duration-300"
        />
        <h4 className="text-lg font-semibold text-gray-900">{title}</h4>
      </Link>

      {/* Выбор типа и размера */}
      <div className="flex flex-wrap gap-2 mt-3 text-sm">
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
      <div className="mt-4 flex items-center justify-between">
        <div className="text-base font-semibold text-gray-900">от {price} ₽</div>

        <div className="flex items-center gap-2">
          {addedCount > 0 && (
            <button
              onClick={onClickMinus}
              className="w-8 h-8 text-xl text-orange-500 hover:bg-orange-100 rounded-full flex items-center justify-center">
              −
            </button>
          )}
          <button
            onClick={onClickAdd}
            className="flex items-center gap-1 bg-orange-500 text-white px-3 py-1.5 rounded-full hover:bg-orange-600 transition text-sm">
            <FiPlus />
            <span>В корзину</span>
            {addedCount > 0 && (
              <span className="bg-white text-orange-500 rounded-full px-2 text-xs font-bold">
                {addedCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
