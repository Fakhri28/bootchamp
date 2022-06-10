const calculatePagination = (total, perPage, currentPage) => {
  if (!total) return undefined;
  if (total <= perPage) return undefined;

  const pagesToGenerate = Math.ceil(total / perPage);

  const previousPage = currentPage <= 2 ? 1 : currentPage - 1;
  const nextPage = currentPage < pagesToGenerate ? currentPage + 1 : pagesToGenerate;

  const firstPage = Math.floor(currentPage / 7);
  const startPage = firstPage === 0 ? 1 : firstPage * 7;
  const endPage = startPage + 7 > pagesToGenerate ? pagesToGenerate : startPage + 7;

  const currentStartRecord = currentPage < 2 ? 1 : (currentPage - 1) * perPage + 1;
  const currentEndMaxRecord = currentStartRecord + perPage - 1;
  const currentEndRecord = currentEndMaxRecord < total ? currentEndMaxRecord : total;

  return {
    pagesToGenerate,
    previousPage,
    nextPage,
    firstPage,
    startPage,
    endPage,
    currentStartRecord,
    currentEndRecord,
  };
};

export default calculatePagination;
