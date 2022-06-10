/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import PropTypes from 'prop-types';

import {
  ChevronDoubleLeftIcon,
  ArrowNarrowLeftIcon,
  ArrowNarrowRightIcon,
  ChevronDoubleRightIcon,
} from '@heroicons/react/solid';

import calculatePagination from '../../helpers/calculatePagination';

// FIXME make example of this component

const PaginationTab = ({ total, perPage, currentPage, onChangePage }) => {
  const pagination = calculatePagination(total, perPage, currentPage);
  if (!pagination) return <div />;

  const { pagesToGenerate, previousPage, nextPage, startPage, endPage } = pagination;

  const pages = [];
  for (let pageNumber = startPage; pageNumber <= endPage; pageNumber += 1) {
    pages.push(
      <a
        key={`pagination_${pageNumber}`}
        href="#"
        className={
          pageNumber === currentPage
            ? 'border-purple-500 text-purple-600 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium'
            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium'
        }
        onClick={() => onChangePage(pageNumber)}
        onKeyDown={() => onChangePage(pageNumber)}
        aria-current="page"
      >
        {pageNumber}
      </a>,
    );
  }

  return (
    <nav
      className="border-t border-gray-200 px-4 flex items-center justify-between sm:px-0"
      aria-label="Pagination"
    >
      <div className="-mt-px w-0 flex-1 flex">
        <a
          href="#"
          className="border-t-2 border-transparent pt-4 pr-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-200"
          onClick={() => onChangePage(1)}
          onKeyDown={() => onChangePage(1)}
        >
          <ChevronDoubleLeftIcon className="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
        </a>
        <a
          href="#"
          className="border-t-2 border-transparent pt-4 pr-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-200"
          onClick={() => onChangePage(previousPage)}
          onKeyDown={() => onChangePage(previousPage)}
        >
          <ArrowNarrowLeftIcon className="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
        </a>
      </div>
      <div className="hidden md:-mt-px md:flex">{pages}</div>
      <div className="-mt-px w-0 flex-1 flex justify-end">
        <a
          href="#"
          className="border-t-2 border-transparent pt-4 pl-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-200"
          onClick={() => onChangePage(nextPage)}
          onKeyDown={() => onChangePage(nextPage)}
        >
          <ArrowNarrowRightIcon className="ml-3 h-5 w-5 text-gray-400" aria-hidden="true" />
        </a>
        &nbsp;&nbsp;
        <a
          href="#"
          className="border-t-2 border-transparent pt-4 pr-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-200"
          onClick={() => onChangePage(pagesToGenerate)}
          onKeyDown={() => onChangePage(pagesToGenerate)}
        >
          {pagesToGenerate}
          <ChevronDoubleRightIcon className="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
        </a>
      </div>
    </nav>
  );
};

PaginationTab.propTypes = {
  total: PropTypes.number.isRequired,
  perPage: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
};

export default PaginationTab;
