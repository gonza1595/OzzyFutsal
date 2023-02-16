import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSectionID } from "../../Redux/Actions";
import ReactPlayer from "react-player";
import "./SectionVideosID.css";

export default function SectionID() {
  const dispatch = useDispatch();
  const sectionId = useSelector((state) => state.sectionID);

  const { id } = useParams();

  const [showVideo, setShowVideo] = useState(false); // Estado local para controlar si se muestra la capa flotante

  useEffect(() => {
    dispatch(getSectionID(id));
  }, [id, dispatch]);

  const handleVideoClick = () => {
    setShowVideo(true); // Muestra la capa flotante cuando se hace clic en el video
  };

  const handleOverlayClick = () => {
    setShowVideo(false); // Oculta la capa flotante cuando se hace clic fuera del video
  };

  const handleButtonClick = () => {
    setShowVideo(false); // Oculta la capa flotante cuando se hace clic en el botón X
  };

  return (
    <section className=" bg-secondary container ">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 ">
        {sectionId.data ? (
          sectionId.data.attributes.videos.data.map((e, id) => (
            <div className="col-lg-4 col-md-12 mb-4 mb-lg-0 ">
              <div className="bg-image hover-zoom" style={{ width: "370px" }}>
                <div onClick={handleVideoClick}>
                  {" "}
                  {/* Se agrega onClick para mostrar la capa flotante */}
                  <video
                    src={`http://localhost:1337${e.attributes.url}`}
                    className="img-top"
                    style={{ width: "370px" }}
                  />
                </div>
              </div>
            </div>
          ))
        ) : (
          <h1>Cargando...</h1>
        )}

        {/* Capa flotante para mostrar el video */}
        {showVideo && (
          <div className="overlay " onClick={handleOverlayClick}>
            <button className="close-btn" onClick={handleButtonClick}>
              X
            </button>{" "}
            {/* Botón X para cerrar el video */}
            <div className="video-container modal ">
              <ReactPlayer
                url={`http://localhost:1337${sectionId.data.attributes.videos.data[0].attributes.url}`}
                playing
                controls={true}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
