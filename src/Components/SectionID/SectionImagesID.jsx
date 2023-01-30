import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSectionID } from "../../Redux/Actions";
import "./cards-gallery.css";
import baguetteBox from "baguettebox.js";

export default function SectionID({ title }) {
  const dispatch = useDispatch();
  const sectionId = useSelector((state) => state.sectionID);

  const { id } = useParams();

  useEffect(() => {
    dispatch(getSectionID(id));
  }, [id, dispatch]);

  baguetteBox.run(".cards-gallery", {
    captions: true,
  });

  return (
    <section className="gallery-block cards-gallery bg-secondary">
      <h2 className="text-center">
        <font>
          <font>{sectionId.data.attributes.title}</font>
        </font>
      </h2>
      <div className="row">
        {sectionId.data ? (
          sectionId.data.attributes.images.data.map((e, id) => (
            <div className="col-md-6 col-lg-3 mt-5">
              <div
                className="card border-0 transform-on-hover"
                style={{ width: "370px" }}
              >
                <a
                  href={`http://localhost:1337${e.attributes.url}`}
                  data-caption={e.attributes.alternativeText}
                >
                  <img
                    src={`http://localhost:1337${e.attributes.url}`}
                    alt={e.attributes.alternativeText}
                    className="card-img-top"
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

// {sectionId.data ? (
//   sectionId.data.attributes.images.data.map((e, id) => (
//     <div className="polaroid__content-image" key={id}>
//       <img
//         src={`http://localhost:1337${e.attributes.url}`}
//         alt="No image"
//       />
//       <div className="polaroid__content-caption">
//         <h2>{e.attributes.alternativeText}</h2>
//       </div>
//     </div>
//   ))
// ) : (
//   <h1>Cargando...</h1>
// )}
