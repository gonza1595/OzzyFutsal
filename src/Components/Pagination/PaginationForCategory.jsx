import React from "react";

export default function Pagination({
  showPerPage,
  sectionCategory,
  pagination,
  page,
}) {
  const pageNumber = [];
  const total = Math.ceil(sectionCategory / showPerPage) + 1;
  for (let i = 1; i < total; i++) {
    pageNumber.push(i);
  }

  return (
    <div>
      <button
        onClick={page > 1 ? () => pagination(page - 1) : null}
        hidden={page === 1 ? true : false}
      >
        Prev
      </button>
      {pageNumber &&
        pageNumber.map((n) => (
          <button className="" key={n} onClick={() => pagination(n)}>
            {n}{" "}
          </button>
        ))}

      <button
        className=""
        onClick={page < total ? () => pagination(page + 1) : null}
        hidden={page === total - 1 ? true : false}
      >
        Next
      </button>
    </div>
  );
}
