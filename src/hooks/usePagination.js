import { useState } from "react";

export const usePagination = (initialPage = 0, itemsPerPage = 9) => {
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [totalPages, setTotalPages] = useState(0);

  const goToPage = (pageNumber) => {
    if (pageNumber >= 0 && pageNumber < totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return {
    currentPage,
    totalPages,
    setTotalPages,
    goToPage,
    nextPage,
    prevPage,
    itemsPerPage,
  };
};
