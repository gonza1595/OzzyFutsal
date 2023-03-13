import React from "react";

export default function Pagination({
  showPerPage,
  getSections,
  pagination,
  page,
}) {
  const pageNumber = [];
  const total = Math.ceil(getSections / showPerPage) + 1;
  for (let i = 1; i < total; i++) {
    pageNumber.push(i);
  }

  return (
    <div className="btn-toolbar justify-content-center">
      <div className="pagination">
        <button
          className="page-link text-dark fw-bold fontStyleTitle"
          onClick={page > 1 ? () => pagination(page - 1) : null}
          hidden={page === 1 ? true : false}
        >
          Prev
        </button>
        {pageNumber &&
          pageNumber.map((n) => (
            <button
              className="page-link text-dark fw-bold fontStyleTitle"
              key={n}
              onClick={() => pagination(n)}
            >
              {n}{" "}
            </button>
          ))}

        <button
          className="page-link text-dark fw-bold fontStyleTitle"
          onClick={page < total ? () => pagination(page + 1) : null}
          hidden={page === total - 1 ? true : false}
        >
          Next
        </button>
      </div>
    </div>
  );
}
