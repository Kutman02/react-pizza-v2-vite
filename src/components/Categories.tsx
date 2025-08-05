import React from 'react';

type CategoriesProps = {
  value: number;
  onChangeCategory: (idx: number) => void;
};

const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

export const Categories: React.FC<CategoriesProps> = React.memo(({ value, onChangeCategory }) => {
  return (
    <div className="mb-6 overflow-x-auto">
      <ul className="flex gap-3 sm:gap-4 whitespace-nowrap px-1 sm:px-0 scrollbar-hide">
        {categories.map((categoryName, i) => (
          <li
            key={i}
            onClick={() => onChangeCategory(i)}
            className={`cursor-pointer px-4 py-2 rounded-full border transition-all text-sm sm:text-base
              ${
                value === i
                  ? 'bg-orange-500 text-white border-orange-500'
                  : 'text-gray-700 hover:text-orange-500 border-gray-300'
              }`}>
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
});
