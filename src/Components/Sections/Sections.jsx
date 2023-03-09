import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSection } from "../../Redux/Actions";
import CardSection from "../CardSection/CardSection";
import Pagination from "../Pagination/Pagination";
import SearchBar from "../SearchBar/SearchBar";
import "./Sections.css";

export default function Sections() {
  const dispatch = useDispatch();
  const getSections = useSelector((state) => state.allSections);

  const [searchTerm, setSearchTerm] = useState("");
  const [nameSearch, setNameSearch] = useState("");

  useEffect(() => {
    const currentPage = localStorage.getItem("currentPage");
    if (currentPage) {
      setPage(parseInt(currentPage));
    }
    dispatch(getSection());
  }, []);

  // pagination
  const [page, setPage] = useState(1);
  const showPerPage = 12;
  const lastOnPage = page * showPerPage;
  const firstOnPage = lastOnPage - showPerPage;

  //searchBar filter
  const filteredSections = nameSearch
    ? getSections.data?.filter((section) =>
        section.attributes.title
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      )
    : getSections.data;

  const sectionsToShow = filteredSections?.slice(firstOnPage, lastOnPage);

  function pagination(pageNumber) {
    setPage(pageNumber);
    localStorage.setItem("currentPage", pageNumber);
  }

  return (
    <div className="container">
      <div className="row">
        {sectionsToShow && sectionsToShow.length > 0 ? (
          <div>
            <SearchBar
              nameSearch={nameSearch}
              setNameSearch={setNameSearch}
              setSearchTerm={setSearchTerm}
              setPage={setPage}
            />
          </div>
        ) : null}

        {getSections.data && sectionsToShow && sectionsToShow.length > 0 ? (
          sectionsToShow.map((e) => (
            <article
              key={e.id}
              className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-3 paddingSectionsCards "
            >
              <CardSection
                id={e.id}
                title={e.attributes.title}
                image={e.attributes.images?.data?.map((e) => e.attributes.url)}
                description={e.attributes.description}
                category={e.attributes.category}
                page={page}
              />
            </article>
          ))
        ) : (
          <article className="col-12 col-lg-12">
            <h1 className="text-center text-black paddingSectionNull">
              No hay secciones disponibles en este momento
            </h1>
          </article>
        )}
      </div>
      <div>
        {getSections.data && sectionsToShow && sectionsToShow.length > 0 ? (
          filteredSections ? (
            <div className="pt-4 paddingSectionPaginate">
              <Pagination
                showPerPage={showPerPage}
                getSections={filteredSections.length}
                pagination={pagination}
                page={page}
              />
            </div>
          ) : null
        ) : null}
      </div>
    </div>
  );
}
