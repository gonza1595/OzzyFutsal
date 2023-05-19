import React, { useEffect } from "react";
import { getSection } from "../../Redux/Actions";
import { useDispatch, useSelector } from "react-redux";
import baguetteBox from "baguettebox.js";

export default function FavoritesImages() {
  const favoritesImages =
    JSON.parse(localStorage.getItem("favoritesImages")) || [];
  const dispatch = useDispatch();
  const getSections = useSelector((state) => state.allSections);

  useEffect(() => {
    dispatch(getSection());
  }, [getSection]);

  const imagesFavorites = getSections.data
    ?.filter((section) =>
      section.attributes.images.data.some((image) =>
        favoritesImages.includes(image.id)
      )
    )
    .map((section) =>
      section.attributes.images.data.filter((image) =>
        favoritesImages.includes(image.id)
      )
    )
    .flat();

  const uniqueImages = [];

  if (imagesFavorites && imagesFavorites.length) {
    for (let i = 0; i < imagesFavorites.length; i++) {
      const image = imagesFavorites[i];
      if (!uniqueImages.find((item) => item.id === image.id)) {
        uniqueImages.push(image);
      }
    }
  }

  baguetteBox.run(".container-fluid", {
    captions: true,
  });

  return (
    <div className="container-fluid">
      <div>
        {uniqueImages.length > 0 ? (
          <article>
            <div className="row">
              {uniqueImages.map((e, id) => (
                <div
                  key={id}
                  className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-sm-12 imagePadding pe-3"
                >
                  {e && e.attributes && e.attributes.url && (
                    <div className="imageBorder bg-image hover-zoom">
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
                  )}
                </div>
              ))}
            </div>
          </article>
        ) : (
          <div className="no-videos-container">
            <i className="bi bi-file-earmark-image-fill fs-1"></i>
            <h2 className="no-videos-title fontStyleTitle">
              No has seleccionado ninguna imagen como favorita
            </h2>
            <p className="no-videos-description fontStyleText">
              Por favor, vuelve y elige las fotos que mas te gusten para poder
              visualizarlas aqui.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
