import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSectionID } from "../../Redux/Actions";
import baguetteBox from "baguettebox.js";

export default function SectionID() {
  const dispatch = useDispatch();
  const sectionId = useSelector((state) => state.sectionID);

  const { id } = useParams();

  useEffect(() => {
    dispatch(getSectionID(id));
  }, [id, dispatch]);

  baguetteBox.run(".container", {
    captions: true,
  });

  return (
    <section className=" bg-secondary  p-5">
      <div className="row row-cols-lg-4 g-3 g-lg">
        {sectionId.data ? (
          sectionId.data.attributes.images.data.map((e, id) => (
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-5 col-sm-12 col-xs-12 p-3">
              <div className="bg-image hover-zoom" style={{ width: "370px" }}>
                <a
                  href={`http://localhost:1337${e.attributes.url}`}
                  data-caption={e.attributes.alternativeText}
                >
                  <img
                    src={`http://localhost:1337${e.attributes.url}`}
                    alt="Image"
                    className="img-top"
                    style={{ width: "100%", height: "370px" }}
                  />
                </a>
              </div>
            </div>
          ))
        ) : (
          <h1>Cargando...</h1>
        )}
      </div>
    </section>
  );
}
