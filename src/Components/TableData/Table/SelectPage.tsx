import React from "react";

function SelectPage({
  onChangePage,
  page,
  totalPages,
}: {
  onChangePage: (pageNumber: number) => void;
  page: number;
  totalPages: number;
}) {
  const maxPages = 5;

  let firstPage = Math.min(
    Math.max(page - Math.floor(maxPages / 2), 1),
    totalPages - maxPages + 1
  );

  if (totalPages <= maxPages) {
    firstPage = 1;
  }

  const lastPage = Math.min(firstPage + maxPages - 1, totalPages);

  const handleNextPage = () => {
    if (page < totalPages) {
      onChangePage(page + 1);
    }
  };

  const handlePrevPage = () => {
    if (page > 1) {
      onChangePage(page - 1);
    }
  };

  return (
    <div className="selectPage">
      <div>
        <button
          onClick={handlePrevPage}
          disabled={page === 1}
          className="btnBackNext"
        >
          Назад
        </button>
      </div>
      <div>
        {Array.from({ length: lastPage - firstPage + 1 }, (_, index) => {
          const pageNumber = firstPage + index;
          const isActive = pageNumber === page;
          return (
            <button
              className={isActive ? "btnPage active" : "btnPage"}
              key={index}
              onClick={() => onChangePage(pageNumber)}
              disabled={page === pageNumber}
            >
              {pageNumber}
            </button>
          );
        })}
      </div>
      <div>
        <button
          onClick={handleNextPage}
          disabled={page === totalPages}
          className="btnBackNext"
        >
          Далее
        </button>
      </div>
    </div>
  );
}

export default SelectPage;
