import React from 'react';

export const NotFoundBlock: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-16 sm:py-20 text-center">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight max-w-xl">
        <span role="img" aria-label="confused face">
          😕
        </span>
        <br />
        Ничего не найдено
      </h1>
      <p className="text-base sm:text-lg text-gray-600 max-w-md">
        К сожалению, данная страница отсутствует в нашем интернет-магазине
      </p>
    </div>
  );
};
