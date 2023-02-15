import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSection } from "../../Redux/Actions";
import CardSection from "../CardSection/CardSection";
import Pagination from "../Pagination/Pagination";

export default function Sections({ page, setPage, searchTerm }) {
  const dispatch = useDispatch();
  const getSections = useSelector((state) => state.allSections);

  useEffect(() => {
    dispatch(getSection());
  }, []);

  const showPerPage = 8;
  const lastOnPage = page * showPerPage;
  const firstOnPage = lastOnPage - showPerPage;

  const filteredSections = getSections.data?.filter((value) => {
    if (searchTerm === "") {
      return value;
    } else if (
      value.attributes.title.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return value;
    }
  });

  const sectionsToShow = filteredSections?.slice(firstOnPage, lastOnPage);

  function pagination(pageNumber) {
    setPage(pageNumber);
  }

  return (
    <div className="bg-secondary">
      <div className="mb-4"></div>
      <div className="row">
        {sectionsToShow && sectionsToShow.length > 0 ? (
          sectionsToShow.map((e) => (
            <div key={e.id} className="col-md-3 mt-4 p-4">
              <CardSection
                id={e.id}
                title={e.attributes.title}
                image={e.attributes.images?.data?.map((e) => e.attributes.url)}
                description={e.attributes.description}
              />
            </div>
          ))
        ) : (
          <div>No se encontraron secciones</div>
        )}
      </div>
      <div>
        {filteredSections && filteredSections.length > showPerPage ? (
          <div>
            <Pagination
              showPerPage={showPerPage}
              getSections={filteredSections.length}
              pagination={pagination}
              page={page}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
}
