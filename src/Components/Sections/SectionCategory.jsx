import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { filterByCategory } from "../../Redux/Actions";
import CardSection from "../CardSection/CardSection";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import PaginationForCategory from "../Pagination/PaginationForCategory";

export default function SectionCategory() {
  const sectionCategory = useSelector((state) => state.filterByCategory);

  const dispatch = useDispatch();
  const { category } = useParams();

  useEffect(() => {
    dispatch(filterByCategory(category));
  }, [category, dispatch]);

  // pagination
  const [page, setPage] = useState(1);
  const showPerPage = 8;
  const lastOnPage = page * showPerPage;
  const firstOnPage = lastOnPage - showPerPage;
  const showSections = sectionCategory?.data?.slice(firstOnPage, lastOnPage);

  function pagination(pageNumber) {
    setPage(pageNumber);
  }

  return (
    <div className="bg-secondary">
      <NavBar />
      <div className="row">
        {showSections ? (
          showSections.map((e) => {
            if (e.attributes.category === "Primera") {
              return (
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
              );
            } else if (e.attributes.category === "C20") {
              return (
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
              );
            } else if (e.attributes.category === "C17") {
              return (
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
              );
            } else if (e.attributes.category === "C15") {
              return (
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
              );
            } else if (e.attributes.category === "C13") {
              return (
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
              );
            }
          })
        ) : (
          <div>No funca</div>
        )}
        <div>
          {!showSections ? null : (
            <div>
              <PaginationForCategory
                showPerPage={showPerPage}
                sectionCategory={sectionCategory.data.length}
                pagination={pagination}
                page={page}
              ></PaginationForCategory>
            </div>
          )}
        </div>
        <Footer />
      </div>
    </div>
  );
}
