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

  const dispatch = useDispatch();
  const { category } = useParams();

  useEffect(() => {
    const currentPage = localStorage.getItem("currentPage");
    if (currentPage) {
      setPage(parseInt(currentPage));
    }
    dispatch(filterByCategory(category));
  }, [category, dispatch]);

  // pagination
  const [page, setPage] = useState(1);
  const showPerPage = 12;
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
    localStorage.setItem("currentPage", pageNumber);
  }

  return (
    <div className="colorBgSection ">
      <div>
        <NavBar />
      </div>
      {sectionsToShowCategory && sectionsToShowCategory.length > 0 ? (
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
        <div className="row">
          {sectionsToShowCategory && sectionsToShowCategory.length > 0 ? (
            sectionsToShowCategory.map((e) => {
              if (e.attributes.category === "Primera") {
                return (
                  <article className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-3 paddingSectionsCards">
                    <CardSection
                      key={e.id}
                      id={e.id}
                      title={e.attributes.title}
                      image={e.attributes.images?.data?.map(
                        (e) => e.attributes.url
                      )}
                      description={e.attributes.description}
                      page={page}
                    />
                  </article>
                );
              } else if (e.attributes.category === "C20") {
                return (
                  <article className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-3 paddingSectionsCards">
                    <CardSection
                      key={e.id}
                      id={e.id}
                      title={e.attributes.title}
                      image={e.attributes.images?.data?.map(
                        (e) => e.attributes.url
                      )}
                      description={e.attributes.description}
                      page={page}
                    />
                  </article>
                );
              } else if (e.attributes.category === "C17") {
                return (
                  <article className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-3 paddingSectionsCards">
                    <CardSection
                      key={e.id}
                      id={e.id}
                      title={e.attributes.title}
                      image={e.attributes.images?.data?.map(
                        (e) => e.attributes.url
                      )}
                      description={e.attributes.description}
                      page={page}
                    />
                  </article>
                );
              } else if (e.attributes.category === "C15") {
                return (
                  <article className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-3 paddingSectionsCards">
                    <CardSection
                      key={e.id}
                      id={e.id}
                      title={e.attributes.title}
                      image={e.attributes.images?.data?.map(
                        (e) => e.attributes.url
                      )}
                      description={e.attributes.description}
                      page={page}
                    />
                  </article>
                );
              } else if (e.attributes.category === "C13") {
                return (
                  <article className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-3 paddingSectionsCards">
                    <CardSection
                      key={e.id}
                      id={e.id}
                      title={e.attributes.title}
                      image={e.attributes.images?.data?.map(
                        (e) => e.attributes.url
                      )}
                      description={e.attributes.description}
                      page={page}
                    />
                  </article>
                );
              } else if (e.attributes.category === "C11") {
                return (
                  <article className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-3 paddingSectionsCards">
                    <CardSection
                      key={e.id}
                      id={e.id}
                      title={e.attributes.title}
                      image={e.attributes.images?.data?.map(
                        (e) => e.attributes.url
                      )}
                      description={e.attributes.description}
                      page={page}
                    />
                  </article>
                );
              } else if (e.attributes.category === "C9") {
                return (
                  <article className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-3 paddingSectionsCards">
                    <CardSection
                      key={e.id}
                      id={e.id}
                      title={e.attributes.title}
                      image={e.attributes.images?.data?.map(
                        (e) => e.attributes.url
                      )}
                      description={e.attributes.description}
                      page={page}
                    />
                  </article>
                );
              } else if (e.attributes.category === "C7") {
                return (
                  <article className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-3 paddingSectionsCards">
                    <CardSection
                      key={e.id}
                      id={e.id}
                      title={e.attributes.title}
                      image={e.attributes.images?.data?.map(
                        (e) => e.attributes.url
                      )}
                      description={e.attributes.description}
                      page={page}
                    />
                  </article>
                );
              }
            })
          ) : (
            <article className="col-12 col-lg-12">
              <h1 className="text-center text-black paddingSectionNull">
                No hay partidos de esta categoria disponible en este momento
              </h1>
            </article>
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
