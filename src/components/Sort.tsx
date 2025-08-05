import React from 'react';
import { useDispatch } from 'react-redux';
import { setSort } from '../redux/filter/slice';
import type { Sort as SortType } from '../redux/filter/types';
import { SortPropertyEnum } from '../redux/filter/types';
import { sortList } from '../constants/sortList';

type SortItem = {
  name: string;
  sortProperty: SortPropertyEnum;
};

type SortPopupProps = {
  value: SortType;
};

export const Sort: React.FC<SortPopupProps> = React.memo(({ value }) => {
  const dispatch = useDispatch();
  const sortRef = React.useRef<HTMLDivElement>(null);
  const [open, setOpen] = React.useState(false);

  const onClickListItem = (obj: SortItem) => {
    dispatch(setSort(obj));
    setOpen(false);
  };

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const path = event.composedPath();
      if (sortRef.current && !path.includes(sortRef.current)) {
        setOpen(false);
      }
    };

    document.body.addEventListener('click', handleClickOutside);
    return () => {
      document.body.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div ref={sortRef} className="relative select-none text-gray-700 font-semibold">
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}>
        <svg
          className={`w-3 h-3 transition-transform ${open ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
        <b>Сортировка по:</b>
        <span className="ml-1">{value.name}</span>
      </div>

      {open && (
        <div className="absolute top-full mt-2 bg-white shadow-md rounded-md w-48 z-20">
          <ul>
            {sortList.map((obj, i) => (
              <li
                key={i}
                onClick={() => onClickListItem(obj)}
                className={`px-4 py-2 cursor-pointer hover:bg-orange-500 hover:text-white ${
                  value.sortProperty === obj.sortProperty
                    ? 'bg-orange-500 text-white font-bold'
                    : ''
                }`}>
                {obj.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
});
