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
    <div className="bg-white ">
      <div className="mb-4"></div>
      <div className="row noMargin" style={{ width: "auto" }}>
        {sectionsToShow && sectionsToShow.length > 0 ? (
          sectionsToShow.map((e) => (
            <div
              key={e.id}
              className="col-xxl-3 col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12 sectionPadding "
            >
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
