import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSectionID } from "../../Redux/Actions";
import baguetteBox from "baguettebox.js";
import { ReactComponent as IconHearth } from "../assets/suit-heart.svg";
import "./SectionImagesID.css";

export default function SectionID() {
  const dispatch = useDispatch();
  const sectionId = useSelector((state) => state.sectionID);

  const { id } = useParams();

  useEffect(() => {
    dispatch(getSectionID(id));
  }, [id, dispatch]);

  baguetteBox.run(".container-fluid", {
    captions: true,
  });

  const sectionImages = sectionId.data?.attributes.images?.data?.map(
    (e) => e.attributes.url
  );

  function handleFavoriteClick(id) {
    const favoritesImages =
      JSON.parse(localStorage.getItem("favoritesImages")) || [];
    favoritesImages.push(id);
    localStorage.setItem("favoritesImages", JSON.stringify(favoritesImages));
  }

  return (
    <div>
      {sectionImages ? (
        <article className="container-fluid">
          <div className="row">
            {sectionId.data ? (
              sectionId.data.attributes.images.data.map((e, id) => (
                <div
                  key={id}
                  className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-sm-12 imagePadding pe-3"
                >
                  <div className="imageBorder bg-image hover-zoom hover-overlay position-relative">
                    <div className="circle card-img-overlay mask d-none d-md-block">
                      <i
                        className="iconHearth card-img-overlay mask"
                        onClick={() => handleFavoriteClick(e.id)}
                      ></i>
                    </div>
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
            Todavía no se han cargado fotos de este partido
          </h2>
          <p className="no-videos-description fontStyleText">
            Por favor, vuelva a intentarlo más tarde o contacte al administrador
            del sitio.
          </p>
        </div>
      )}
    </div>
  );
}
