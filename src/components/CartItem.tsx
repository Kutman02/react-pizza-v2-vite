import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem, minusItem, removeItem } from '../redux/cart/slice';
import type { CartItem as CartItemType } from '../redux/cart/types';
import { FiPlus, FiMinus, FiX } from 'react-icons/fi';

type CartItemProps = {
  id: string;
  title: string;
  type: string;
  size: number;
  price: number;
  count: number;
  imageUrl: string;
};

export const CartItem: React.FC<CartItemProps> = ({
  id,
  title,
  type,
  size,
  price,
  count,
  imageUrl,
}) => {
  const dispatch = useDispatch();

  const onClickPlus = () => {
    dispatch(addItem({ id } as CartItemType));
  };

  const onClickMinus = () => {
    dispatch(minusItem(id));
  };

  const onClickRemove = () => {
    if (window.confirm('Ты действительно хочешь удалить товар?')) {
      dispatch(removeItem(id));
    }
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b py-6">
      {/* Изображение и описание */}
      <div className="flex items-center gap-4 flex-1">
        <img className="w-20 h-20 object-cover rounded shadow" src={imageUrl} alt={title} />
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          <p className="text-sm text-gray-500">
            {type}, {size} см
          </p>
        </div>
      </div>

      {/* Кол-во */}
      <div className="flex items-center gap-2">
        <button
          onClick={onClickMinus}
          disabled={count === 1}
          className="p-2 border border-gray-300 rounded-full text-orange-500 hover:bg-orange-100 disabled:opacity-40 disabled:cursor-not-allowed transition"
          aria-label="Уменьшить количество">
          <FiMinus />
        </button>
        <span className="text-lg font-medium w-6 text-center">{count}</span>
        <button
          onClick={onClickPlus}
          className="p-2 border border-gray-300 rounded-full text-orange-500 hover:bg-orange-100 transition"
          aria-label="Увеличить количество">
          <FiPlus />
        </button>
      </div>

      {/* Цена */}
      <div className="text-lg font-semibold text-gray-800 w-24 text-center">{price * count} ₽</div>

      {/* Кнопка удаления */}
      <button
        onClick={onClickRemove}
        className="p-2 border border-gray-300 rounded-full text-gray-500 hover:bg-gray-200 transition"
        aria-label="Удалить товар">
        <FiX />
      </button>
    </div>
  );
};
