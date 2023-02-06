import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSection } from "../../Redux/Actions";
import CardSection from "../CardSection/CardSection";
import Pagination from "../Pagination/Pagination";

export default function Sections({ title, page, setPage }) {
  const dispatch = useDispatch();
  const getSections = useSelector((state) => state.allSections);

  useEffect(() => {
    dispatch(getSection());
  }, []);

  // pagination

  const showPerPage = 8;
  const lastOnPage = page * showPerPage;
  const firstOnPage = lastOnPage - showPerPage;
  const showSections = getSections.data?.slice(firstOnPage, lastOnPage);

  function pagination(pageNumber) {
    setPage(pageNumber);
  }

  return (
    <div className="bg-secondary">
      <div className="row">
        {showSections ? (
          showSections
            .filter((value) => {
              if (title === "") {
                return value;
              } else if (
                value.attributes.title
                  .toLowerCase()
                  .includes(title.toLowerCase())
              ) {
                return value;
              }
            })
            .map((e) => (
              <div className="col-md-3 mt-4 p-4">
                <CardSection
                  key={e.id}
                  id={e.id}
                  title={e.attributes.title}
                  image={e.attributes.images?.data?.map(
                    (e) => e.attributes.url
                  )}
                  description={e.attributes.description}
                />
              </div>
            ))
        ) : (
          <div>No hay nada</div>
        )}
      </div>
      <div>
        {!showSections ? null : (
          <div>
            <Pagination
              showPerPage={showPerPage}
              getSections={getSections.data.length}
              pagination={pagination}
              page={page}
            ></Pagination>
          </div>
        )}
      </div>
    </div>
  );
}
