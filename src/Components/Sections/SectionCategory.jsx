import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { filterByCategory } from "../../Redux/Actions";
import CardSection from "../CardSection/CardSection";
import NavBar from "../NavBar/NavBar";
import SearchBar from "../SearchBar/SearchBar";
import Pagination from "../Pagination/Pagination";
import Footer from "../Footer/Footer";
import "./Sections.css";

export default function SectionCategory() {
  const sectionCategory = useSelector((state) => state.filterByCategory);

  const [searchTerm, setSearchTerm] = useState("");
  const [nameSearch, setNameSearch] = useState("");
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();
  const { category } = useParams();

  const currentPageCategory = localStorage.getItem("currentPageCategory");

  useEffect(() => {
    dispatch(filterByCategory(category));
    if (currentPageCategory) {
      setPage(parseInt(currentPageCategory));
    }
  }, [category]);

  // pagination
  const showPerPage = 8;
  const lastOnPage = page * showPerPage;
  const firstOnPage = lastOnPage - showPerPage;

  //searchBar filter
  const filteredSections = nameSearch
    ? sectionCategory?.data?.filter((section) =>
        section.attributes.title
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      )
    : sectionCategory.data;

  const sectionsToShowCategory = filteredSections?.slice(
    firstOnPage,
    lastOnPage
  );

  function pagination(pageNumber) {
    setPage(pageNumber);
    localStorage.setItem("currentPageCategory", pageNumber);
  }

  return (
    <div className="colorBgSection ">
      <div>
        <NavBar />
      </div>
      {(sectionsToShowCategory && sectionsToShowCategory.length > 0) ||
      nameSearch ? (
        <div className="pt-5">
          <SearchBar
            nameSearch={nameSearch}
            setNameSearch={setNameSearch}
            setSearchTerm={setSearchTerm}
            setPage={setPage}
          />
        </div>
      ) : null}
      <div className="container pt-1 pb-5">
        <div className="row grid-container">
          {sectionsToShowCategory && sectionsToShowCategory.length > 0 ? (
            sectionsToShowCategory.map((e) => {
              if (e.attributes.category === "Primera") {
                return (
                  <article
                    key={e.id}
                    className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-3 paddingSectionsCards"
                  >
                    <CardSection
                      id={e.id}
                      title={e.attributes.title}
                      image={e.attributes.images?.data?.map(
                        (e) => e.attributes.url
                      )}
                      description={e.attributes.description}
                      category={e.attributes.category}
                      page={page}
                    />
                  </article>
                );
              } else if (e.attributes.category === "C20") {
                return (
                  <article
                    key={e.id}
                    className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-3 paddingSectionsCards"
                  >
                    <CardSection
                      id={e.id}
                      title={e.attributes.title}
                      image={e.attributes.images?.data?.map(
                        (e) => e.attributes.url
                      )}
                      description={e.attributes.description}
                      category={e.attributes.category}
                      page={page}
                    />
                  </article>
                );
              } else if (e.attributes.category === "C17") {
                return (
                  <article
                    key={e.id}
                    className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-3 paddingSectionsCards"
                  >
                    <CardSection
                      id={e.id}
                      title={e.attributes.title}
                      image={e.attributes.images?.data?.map(
                        (e) => e.attributes.url
                      )}
                      description={e.attributes.description}
                      category={e.attributes.category}
                      page={page}
                    />
                  </article>
                );
              } else if (e.attributes.category === "C15") {
                return (
                  <article
                    key={e.id}
                    className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-3 paddingSectionsCards"
                  >
                    <CardSection
                      id={e.id}
                      title={e.attributes.title}
                      image={e.attributes.images?.data?.map(
                        (e) => e.attributes.url
                      )}
                      description={e.attributes.description}
                      category={e.attributes.category}
                      page={page}
                    />
                  </article>
                );
              } else if (e.attributes.category === "C13") {
                return (
                  <article
                    key={e.id}
                    className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-3 paddingSectionsCards"
                  >
                    <CardSection
                      id={e.id}
                      title={e.attributes.title}
                      image={e.attributes.images?.data?.map(
                        (e) => e.attributes.url
                      )}
                      description={e.attributes.description}
                      category={e.attributes.category}
                      page={page}
                    />
                  </article>
                );
              } else if (e.attributes.category === "C11") {
                return (
                  <article
                    key={e.id}
                    className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-3 paddingSectionsCards"
                  >
                    <CardSection
                      id={e.id}
                      title={e.attributes.title}
                      image={e.attributes.images?.data?.map(
                        (e) => e.attributes.url
                      )}
                      description={e.attributes.description}
                      category={e.attributes.category}
                      page={page}
                    />
                  </article>
                );
              } else if (e.attributes.category === "C9") {
                return (
                  <article
                    key={e.id}
                    className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-3 paddingSectionsCards"
                  >
                    <CardSection
                      id={e.id}
                      title={e.attributes.title}
                      image={e.attributes.images?.data?.map(
                        (e) => e.attributes.url
                      )}
                      description={e.attributes.description}
                      category={e.attributes.category}
                      page={page}
                    />
                  </article>
                );
              } else if (e.attributes.category === "C7") {
                return (
                  <article
                    key={e.id}
                    className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-3 paddingSectionsCards"
                  >
                    <CardSection
                      id={e.id}
                      title={e.attributes.title}
                      image={e.attributes.images?.data?.map(
                        (e) => e.attributes.url
                      )}
                      description={e.attributes.description}
                      category={e.attributes.category}
                      page={page}
                    />
                  </article>
                );
              }
            })
          ) : (
            <div className="paddingSectionNullCategory">
              <div className="container sectionCategory-container">
                <i className="bi bi-exclamation-square-fill fs-1"></i>
                {nameSearch ? (
                  <>
                    <h2 className="sectionCategory-title fontStyleTitle">
                      Ningun elemento coincide con el criterio de busqueda
                    </h2>
                    <p className="sectionCategory-description fontStyleText">
                      Por favor, intente con otro nombre.
                    </p>
                  </>
                ) : (
                  <>
                    <h2 className="sectionCategory-title fontStyleTitle">
                      No hay partidos de esta categoria disponibles en este
                      momento
                    </h2>
                    <p className="sectionCategory-description fontStyleText">
                      Por favor, vuelva a intentarlo más tarde o contacte al
                      administrador del sitio.
                    </p>
                  </>
                )}
              </div>
            </div>
          )}
          <div>
            {sectionsToShowCategory && sectionsToShowCategory.length > 0 ? (
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
      </div>
      <Footer />
    </div>
  );
}
