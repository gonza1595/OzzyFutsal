import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSectionID } from "../../Redux/Actions";
import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
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

  const sectionImages = sectionId.data?.attributes.images?.data?.map(
    (e) => e.attributes.url
  );

  return (
    <div>
      {sectionImages ? (
        <article className="container">
          <div className="row">
            {sectionId.data ? (
              sectionId.data.attributes.images.data.map((e, id) => (
                <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-sm-12 imagePadding pe-3">
                  <div className="imageBorder bg-image hover-zoom ">
                    <a
                      href={`http://localhost:1337${e.attributes.url}`}
                      data-caption={e.attributes.alternativeText}
                    >
                      <img
                        src={`http://localhost:1337${e.attributes.url}`}
                        alt="Image"
                        className="img-top"
                        style={{ width: "100%", height: "300px" }}
                      />
                    </a>
                  </div>
                </div>
              ))
            ) : (
              <h1>Cargando...</h1>
            )}
          </div>
        </article>
      ) : (
        <div className="no-videos-container">
          <i className="bi bi-file-earmark-image-fill fs-1"></i>
          <h2 className="no-videos-title fontStyleTitle">
            Todav??a no se han cargado fotos de este partido
          </h2>
          <p className="no-videos-description fontStyleText">
            Por favor, vuelva a intentarlo m??s tarde o contacte al administrador
            del sitio.
          </p>
        </div>
      )}
    </div>
  );
}
