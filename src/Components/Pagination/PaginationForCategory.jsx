import React from "react";

export default function Pagination({
  showPerPage,
  sectionCategory,
  pagination,
  pageCategory,
}) {
  const pageNumber = [];
  const total = Math.ceil(sectionCategory / showPerPage) + 1;
  for (let i = 1; i < total; i++) {
    pageNumber.push(i);
  }

  return (
    <div>
      <button
        onClick={pageCategory > 1 ? () => pagination(pageCategory - 1) : null}
        hidden={pageCategory === 1 ? true : false}
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
        onClick={
          pageCategory < total ? () => pagination(pageCategory + 1) : null
        }
        hidden={pageCategory === total - 1 ? true : false}
      >
        Next
      </button>
    </div>
  );
}
