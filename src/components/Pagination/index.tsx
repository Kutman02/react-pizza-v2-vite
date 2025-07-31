import React from 'react';
import ReactPaginate from 'react-paginate';

type PaginationProps = {
  currentPage: number;
  onChangePage: (page: number) => void;
};

export const Pagination: React.FC<PaginationProps> = ({ currentPage, onChangePage }) => (
  <ReactPaginate
    className="flex justify-center list-none gap-2 my-8"
    breakLabel="..."
    nextLabel=">"
    previousLabel="<"
    onPageChange={(event) => onChangePage(event.selected + 1)}
    pageRangeDisplayed={4}
    pageCount={3} // Лучше вынеси в пропсы или высчитывай динамически
    forcePage={currentPage - 1}
    pageClassName="border border-gray-300 rounded px-3 py-1 cursor-pointer hover:bg-gray-200"
    activeClassName="bg-blue-500 text-white"
    previousClassName="border border-gray-300 rounded px-3 py-1 cursor-pointer hover:bg-gray-200"
    nextClassName="border border-gray-300 rounded px-3 py-1 cursor-pointer hover:bg-gray-200"
    breakClassName="px-3 py-1"
  />
);
