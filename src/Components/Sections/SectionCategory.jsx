import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { filterByCategory } from "../../Redux/Actions";
import CardSection from "../CardSection/CardSection";
import NavBarForCategory from "../NavBar/NavBarForCategory";
import Footer from "../Footer/Footer";
import PaginationForCategory from "../Pagination/PaginationForCategory";

export default function SectionCategory() {
  const sectionCategory = useSelector((state) => state.filterByCategory);
  const [searchTermCategory, setSearchTermCategory] = useState("");

  const dispatch = useDispatch();
  const { category } = useParams();

  useEffect(() => {
    dispatch(filterByCategory(category));
  }, [category, dispatch]);

  // pagination
  const [pageCategory, setPageCategory] = useState(1);
  const showPerPage = 8;
  const lastOnPage = pageCategory * showPerPage;
  const firstOnPage = lastOnPage - showPerPage;
  const filteredSections = sectionCategory.data?.filter((value) => {
    if (searchTermCategory === "") {
      return value;
    } else if (
      value.attributes.title
        .toLowerCase()
        .includes(searchTermCategory.toLowerCase())
    ) {
      return value;
    }
  });

  const showSections = filteredSections?.slice(firstOnPage, lastOnPage);

  function pagination(pageNumber) {
    setPageCategory(pageNumber);
  }

  return (
    <div className="bg-white ">
      <NavBarForCategory
        setSearchTermCategory={setSearchTermCategory}
        setPageCategory={setPageCategory}
      />
      <div className="row noMargin">
        {showSections && showSections.length > 0 ? (
          showSections.map((e) => {
            if (e.attributes.category === "Primera") {
              return (
                <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12 sectionPadding">
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
              );
            } else if (e.attributes.category === "C20") {
              return (
                <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12 sectionPadding">
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
              );
            } else if (e.attributes.category === "C17") {
              return (
                <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12 sectionPadding">
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
              );
            } else if (e.attributes.category === "C15") {
              return (
                <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12 sectionPadding">
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
              );
            } else if (e.attributes.category === "C13") {
              return (
                <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12 sectionPadding">
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
              );
            }
          })
        ) : (
          <div>Cargando...</div>
        )}
        <div>
          {filteredSections && filteredSections.length > showPerPage ? (
            <div className="mt-3">
              <PaginationForCategory
                showPerPage={showPerPage}
                sectionCategory={filteredSections.length}
                pagination={pagination}
                pageCategory={pageCategory}
              />
            </div>
          ) : null}
        </div>
      </div>
      <Footer />
    </div>
  );
}
