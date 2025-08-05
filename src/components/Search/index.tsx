import React from 'react';
import { useDispatch } from 'react-redux';
import debounce from 'lodash.debounce';
import { setSearchValue } from '../../redux/filter/slice';

export const Search: React.FC = () => {
  const dispatch = useDispatch();
  const [value, setValue] = React.useState('');
  const inputRef = React.useRef<HTMLInputElement>(null);

  const debouncedDispatch = React.useMemo(
    () =>
      debounce((str: string) => {
        dispatch(setSearchValue(str));
      }, 150),
    [dispatch],
  );

  React.useEffect(() => {
    return () => {
      debouncedDispatch.cancel();
    };
  }, [debouncedDispatch]);

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    debouncedDispatch(e.target.value);
  };

  const onClickClear = () => {
    dispatch(setSearchValue(''));
    setValue('');
    inputRef.current?.focus();
  };

  return (
    <div className="w-full max-w-sm sm:max-w-md md:max-w-lg mx-auto">
      <div className="relative flex items-center border border-gray-300 rounded-full px-4 py-2 shadow-sm bg-white">
        {/* Search icon */}
        <svg
          className="w-5 h-5 text-gray-500"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg">
          <circle
            cx="14"
            cy="14"
            fill="none"
            r="9"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <line
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            x1="27"
            x2="20.366"
            y1="27"
            y2="20.366"
          />
        </svg>

        {/* Input */}
        <input
          ref={inputRef}
          value={value}
          onChange={onChangeInput}
          className="flex-grow ml-3 outline-none text-sm sm:text-base text-gray-700 placeholder-gray-400 bg-transparent"
          placeholder="Поиск пиццы..."
        />

        {/* Clear icon */}
        {value && (
          <svg
            onClick={onClickClear}
            className="w-5 h-5 text-gray-400 cursor-pointer ml-2 hover:text-gray-700 transition"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
          </svg>
        )}
      </div>
    </div>
  );
};
