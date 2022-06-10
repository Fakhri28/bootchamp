/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import PropTypes from 'prop-types';

import calculatePagination from '../../helpers/calculatePagination';

const PaginationButton = ({ total, perPage, currentPage, onChangePage }) => {
  const pagination = calculatePagination(total, perPage, currentPage);
  if (!pagination) return <div />;

  const { pagesToGenerate, previousPage, nextPage, currentStartRecord, currentEndRecord } =
    pagination;

  return (
    <nav
      className="bg-white px-5 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6"
      aria-label="Pagination"
    >
      <div className="hidden sm:block">
        <p className="text-sm text-gray-700">
          Showing <span className="font-medium">{currentStartRecord}</span> to{' '}
          <span className="font-medium">{currentEndRecord}</span> of{' '}
          <span className="font-medium">{total}</span> results
        </p>
      </div>
      <div className="flex-1 flex justify-between sm:justify-end">
        <a
          href="#"
          className="ml-1 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          onClick={() => onChangePage(1)}
          onKeyDown={() => onChangePage(1)}
        >
          First
        </a>
        <a
          href="#"
          className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          onClick={() => onChangePage(previousPage)}
          onKeyDown={() => onChangePage(previousPage)}
        >
          Prev
        </a>

        <div className="-mt-px w-0 flex-1 flex justify-end">
          <a
            href="#"
            className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
            onClick={() => onChangePage(nextPage)}
            onKeyDown={() => onChangePage(nextPage)}
          >
            Next
          </a>
          <a
            href="#"
            className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
            onClick={() => onChangePage(pagesToGenerate)}
            onKeyDown={() => onChangePage(pagesToGenerate)}
          >
            Last
          </a>
        </div>
      </div>
    </nav>
  );
};

PaginationButton.propTypes = {
  total: PropTypes.number.isRequired,
  perPage: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
};

export default PaginationButton;
