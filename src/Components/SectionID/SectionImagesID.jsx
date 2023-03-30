import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSectionID } from "../../Redux/Actions";
import baguetteBox from "baguettebox.js";
import { ReactComponent as IconHeart } from "../assets/suit-heart.svg";
import { ReactComponent as IconHeartFill } from "../assets/suit-heart-fill.svg";
import "./SectionImagesID.css";

export default function SectionID() {
  const dispatch = useDispatch();
  const sectionId = useSelector((state) => state.sectionID);

  const { id } = useParams();

  useEffect(() => {
    dispatch(getSectionID(id));
  }, [id]);

  const sectionImages = sectionId.data?.attributes.images?.data?.map(
    (e) => e.attributes.url
  );

  const [imageFavorites, setImageFavorites] = useState({});

  useEffect(() => {
    // leemos la lista de imagenes favoritas almacenadas en el localStorage
    const favoritesImages =
      JSON.parse(localStorage.getItem("favoritesImages")) || [];
    // creamos un objeto "imageFavoriteState" que contiene los ID de las imagenes favoritas
    // como clave y se establece el valor de cada clave en "true"
    const imageFavoriteState = {};
    favoritesImages.forEach((id) => {
      imageFavoriteState[id] = true;
    });
    // se actualiza el estado "imageFavorites" con el objeto "imageFavoriteState"
    setImageFavorites(imageFavoriteState);
  }, []);

  function handleFavoriteClick(id) {
    // leemos la lista de imagenes favoritas almacenadas en el localStorage
    const favoritesImages =
      JSON.parse(localStorage.getItem("favoritesImages")) || [];
    // verificamos si la imagen esta en la lista de favoritos
    if (imageFavorites[id]) {
      const index = favoritesImages.findIndex((imageId) => imageId === id);
      //si esta en favoritos elimina el ID de la imagen de la lista "favoritesIamges"
      favoritesImages.splice(index, 1);
    } else {
      // si no esta en favoritos agrega el ID de la imagen a "favoritesIamges"
      favoritesImages.push(id);
    }
    // actualizamos el localStorage con la lista actualziada de imagenes favoritas
    localStorage.setItem("favoritesImages", JSON.stringify(favoritesImages));
    // actualizamos el estado de iageFavorites actual,
    // si la imagen estaba en la lista de favoritos se elimina, si no estaba se agrega
    setImageFavorites({ ...imageFavorites, [id]: !imageFavorites[id] });
  }

  baguetteBox.run(".container-fluid", {
    captions: true,
  });

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
                  <div className="imageBorder bg-image position-relative">
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
                    <div
                      className="circle position-absolute top-0 end-0"
                      onClick={() => handleFavoriteClick(e.id)}
                    >
                      {imageFavorites[e.id] ? (
                        <IconHeartFill className="iconHeart" />
                      ) : (
                        <IconHeart className="iconHeart" />
                      )}
                    </div>
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
