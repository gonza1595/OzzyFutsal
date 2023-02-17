import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSectionID } from "../../Redux/Actions";
import baguetteBox from "baguettebox.js";
import "./SectionImagesID.css";

export default function SectionID() {
  const dispatch = useDispatch();
  const sectionId = useSelector((state) => state.sectionID);

  const { id } = useParams();

  useEffect(() => {
    dispatch(getSectionID(id));
  }, [id, dispatch]);

  baguetteBox.run(".container ", {
    captions: true,
  });

  return (
    <section className=" bg-secondary container px-5 p-5">
      <div className="row gx-1">
        {sectionId.data ? (
          sectionId.data.attributes.images.data.map((e, id) => (
            <div className="col-xxl-4 col-xl-3 col-lg-4 col-md-4 col-sm-12 col-xs-12 p-3">
              <div
                className="rounded-3 bg-image hover-zoom "
                style={{ width: "370px" }}
              >
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
