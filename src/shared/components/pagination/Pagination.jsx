import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Pagination = ({ totalPages = 8, initialPage = 1, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(initialPage);

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    onPageChange?.(page);
  };

  const getPageNumbers = () => {
    const pages = [];

    if (totalPages <= 5) {

      for (let i = initialPage; i <= totalPages; i++) pages.push(i);
      return pages;
    }

    pages.push(1, 2, 3);

    if (currentPage > 4) {
      pages.push("...");
    }

    if (currentPage > 3 && currentPage < totalPages - 1) {
      if (!pages.includes(currentPage)) {
        pages.push(currentPage);
      }
    }

    if (currentPage === totalPages - 1) {
      pages.push(totalPages - 1);
    }
    if (currentPage < totalPages - 1) {
      pages.push("...");
    }

    if (!pages.includes(totalPages)) {
      pages.push(totalPages);
    }
    console.log(pages);

    return pages;
  };

  const pageNumbers = getPageNumbers();

  const baseBtn =
    "w-10 h-10 rounded-xl flex items-center justify-center text-sm font-medium transition-all duration-200 cursor-pointer select-none";

  const pageBtn = `${baseBtn} bg-[#1e1e2e] text-zinc-300 hover:bg-[#2a2a3d] hover:text-white`;

  const activeBtn = `${baseBtn} bg-violet-500 text-white font-bold shadow-lg shadow-violet-500/30`;

  const arrowBtn = (disabled) =>
    `${baseBtn} bg-[#1e1e2e] text-zinc-400 ${
      disabled
        ? "opacity-40 cursor-not-allowed"
        : "hover:bg-[#2a2a3d] hover:text-white"
    }`;

  return (
    <div className="flex items-center gap-1.5">
      {/* Prev */}
      <button
        className={arrowBtn(currentPage === 1)}
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Previous page"
      >
        <ChevronLeft size={16} strokeWidth={2.5} />
      </button>

      {/* Pages */}
      {pageNumbers.map((page, index) =>
        page === "..." ? (
          <span
            key={`ellipsis-${index}`}
            className="w-10 h-10 flex items-center justify-center text-zinc-500 text-sm bg-[#1e1e2e] rounded-xl"
          >
            ...
          </span>
        ) : (
          <button
            key={page}
            className={currentPage === page ? activeBtn : pageBtn}
            onClick={() => handlePageChange(page)}
            aria-label={`Page ${page}`}
            aria-current={currentPage === page ? "page" : undefined}
          >
            {page}
          </button>
        ),
      )}

      {/* Next */}
      <button
        className={arrowBtn(currentPage === totalPages)}
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Next page"
      >
        <ChevronRight size={16} strokeWidth={2.5} />
      </button>
    </div>
  );
};

export default Pagination;
