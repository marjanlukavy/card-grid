import { ChevronLeft, ChevronRight } from "lucide-react";
import LoadingSpinner from "./LoadingSpinner";

const Pagination = ({
  currentPage,
  totalPages,
  goToPage,
  nextPage,
  prevPage,
  loading = false,
}) => {
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 5;

    const knownTotalPages = Number.isFinite(totalPages)
      ? totalPages
      : currentPage + 10;
    const effectiveTotalPages = Math.max(1, knownTotalPages);

    if (effectiveTotalPages <= maxPagesToShow) {
      for (let i = 0; i < effectiveTotalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      pageNumbers.push(0);

      let startPage = Math.max(1, currentPage - 1);
      let endPage = Math.min(effectiveTotalPages - 2, currentPage + 1);

      if (currentPage < 2) {
        endPage = 3;
      }

      if (currentPage > effectiveTotalPages - 3) {
        startPage = effectiveTotalPages - 4;
      }

      if (startPage > 1) {
        pageNumbers.push("...");
      }

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }

      if (endPage < effectiveTotalPages - 2) {
        pageNumbers.push("...");
      }

      if (Number.isFinite(totalPages)) {
        pageNumbers.push(effectiveTotalPages - 1);
      } else if (currentPage < effectiveTotalPages - 2) {
        pageNumbers.push("more");
      }
    }

    return pageNumbers;
  };

  if (totalPages <= 1 && currentPage === 0) return null;

  return (
    <div className="mt-8">
      <div className="flex items-center justify-center space-x-2">
        <button
          onClick={prevPage}
          disabled={currentPage === 0 || loading}
          className={`px-3 py-2 rounded-md transition-colors duration-200 ${
            currentPage === 0 || loading
              ? "text-gray-400 cursor-not-allowed"
              : "text-gray-700 hover:bg-gray-100"
          }`}
          aria-label="Previous page"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {loading ? (
          <div className="px-4">
            <LoadingSpinner />
          </div>
        ) : (
          getPageNumbers().map((page, index) => {
            if (page === "...") {
              return (
                <span key={`ellipsis-${index}`} className="px-3 py-1">
                  ...
                </span>
              );
            } else if (page === "more") {
              return (
                <button
                  key="more-pages"
                  onClick={nextPage}
                  className="w-9 h-9 rounded-md transition-all duration-200 text-gray-700 hover:bg-gray-100"
                >
                  »
                </button>
              );
            } else {
              return (
                <button
                  key={`page-${page}`}
                  onClick={() => goToPage(page)}
                  disabled={loading}
                  className={`w-9 h-9 rounded-md transition-all duration-200 ${
                    currentPage === page
                      ? "bg-blue-600 text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {page + 1}
                </button>
              );
            }
          })
        )}

        <button
          onClick={nextPage}
          disabled={
            (Number.isFinite(totalPages) && currentPage === totalPages - 1) ||
            loading
          }
          className={`px-3 py-2 rounded-md transition-colors duration-200 ${
            (Number.isFinite(totalPages) && currentPage === totalPages - 1) ||
            loading
              ? "text-gray-400 cursor-not-allowed"
              : "text-gray-700 hover:bg-gray-100"
          }`}
          aria-label="Next page"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      <div className="text-center mt-3 text-sm text-gray-500">
        Page {currentPage + 1}
        {Number.isFinite(totalPages) ? ` of ${totalPages}` : ""}
      </div>
    </div>
  );
};

export default Pagination;
