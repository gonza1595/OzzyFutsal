import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSection } from "../../Redux/Actions";
import CardSection from "../CardSection/CardSection";
import Pagination from "../Pagination/Pagination";
import "./Sections.css";

export default function Sections({ page, setPage, searchTerm }) {
  const dispatch = useDispatch();
  const getSections = useSelector((state) => state.allSections);

  useEffect(() => {
    dispatch(getSection());
  }, []);

  const showPerPage = 12;
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
    <div className="container">
      <div className="row pt-5">
        {sectionsToShow && sectionsToShow.length > 0 ? (
          sectionsToShow.map((e) => (
            <article
              key={e.id}
              className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-3 paddingSectionsCards"
            >
              <CardSection
                id={e.id}
                title={e.attributes.title}
                image={e.attributes.images?.data?.map((e) => e.attributes.url)}
                description={e.attributes.description}
              />
            </article>
          ))
        ) : (
          <div>
            <h1 className="text-center text-black pt-4 pb-4">
              No hay secciones disponibles en este momento
            </h1>
          </div>
        )}
      </div>
      <div>
        {filteredSections && filteredSections.length > showPerPage ? (
          <div className="pt-4 paddingSectionPaginate">
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
