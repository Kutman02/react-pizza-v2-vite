import React from 'react';

type CategoriesProps = {
  value: number;
  onChangeCategory: (idx: number) => void;
};

const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

export const Categories: React.FC<CategoriesProps> = React.memo(({ value, onChangeCategory }) => {
  return (
    <div className="mb-6">
      <ul className="flex gap-4">
        {categories.map((categoryName, i) => (
          <li
            key={i}
            onClick={() => onChangeCategory(i)}
            className={`cursor-pointer px-4 py-2 rounded transition-colors
              ${value === i ? 'bg-orange-500 text-white' : 'text-gray-700 hover:text-orange-500'}`}>
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
});
