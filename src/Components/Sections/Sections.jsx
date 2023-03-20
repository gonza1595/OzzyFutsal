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
  const [page, setPage] = useState(1);

  const getNumber = () => {
    const currentPage = localStorage.getItem("currentPage");
    if (currentPage) {
      setPage(parseInt(currentPage));
    }
  };

  useEffect(() => {
    dispatch(getSection());
    getNumber();
  }, []);

  // pagination
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
      <div className="row ">
        <div>
          <SearchBar
            nameSearch={nameSearch}
            setNameSearch={setNameSearch}
            setSearchTerm={setSearchTerm}
            setPage={setPage}
          />
        </div>

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
          <div className="paddingSectionNullCategory">
            <div className="container sectionCategory-container">
              <i className="bi bi-exclamation-square-fill fs-1"></i>
              <h2 className="sectionCategory-title fontStyleTitle">
                No hay partidos disponibles en este momento
              </h2>
              <p className="sectionCategory-description fontStyleText">
                Por favor, vuelva a intentarlo más tarde o contacte al
                administrador del sitio.
              </p>
            </div>
          </div>
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
