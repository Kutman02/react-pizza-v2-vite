import React from 'react';

export const NotFoundBlock: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <h1 className="text-7xl font-bold mb-4">
        <span role="img" aria-label="confused face">
          😕
        </span>
        <br />
        Ничего не найдено
      </h1>
      <p className="text-lg text-gray-600">
        К сожалению, данная страница отсутствует в нашем интернет-магазине
      </p>
    </div>
  );
};
