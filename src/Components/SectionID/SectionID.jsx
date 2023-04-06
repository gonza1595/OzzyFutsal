import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSectionID } from "../../Redux/Actions";
import { useNavigate } from "react-router-dom";
import SectionImagesID from "./SectionImagesID";
import { ReactComponent as IconHeart } from "../assets/suit-heart.svg";
import { ReactComponent as IconHeartFill } from "../assets/suit-heart-fill.svg";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import "./SectionID.css";

export default function SectionID() {
  const dispatch = useDispatch();
  const sectionId = useSelector((state) => state.sectionID);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getSectionID(id));
  }, [id]);

  const handleVideoClick = (index) => {
    const videoId = sectionId.data.attributes.videos.data[index].id;
    navigate(`/home/section/${id}/video/${videoId}`);
  };

  const sectionVideos = sectionId.data?.attributes.videos?.data?.map(
    (e) => e.attributes.url
  );

  const [videoFavorites, setVideoFavorites] = useState({});

  useEffect(() => {
    // leemos la lista de videos favoritos almacenados en el localStorage
    const favoritesVideos =
      JSON.parse(localStorage.getItem("favoritesVideos")) || [];
    // creamos un objeto "videoFavoriteState" que contiene los ID de los videos favoritos
    // como clave y se establece el valor de cada clave en "true"
    const videoFavoriteState = {};
    favoritesVideos.forEach((id) => {
      videoFavoriteState[id] = true;
    });
    // se actualiza el estado "videoFavorites" con el objeto "videoFavoriteState"
    setVideoFavorites(videoFavoriteState);
  }, []);

  function handleFavoriteClick(id) {
    // leemos la lista de videos favoritas almacenadas en el localStorage
    const favoritesVideos =
      JSON.parse(localStorage.getItem("favoritesVideos")) || [];
    // verificamos si el video esta en la lista de favoritos
    if (videoFavorites[id]) {
      const index = favoritesVideos.findIndex((videoId) => videoId === id);
      //si esta en favoritos elimina el ID del video de la lista "favoritesVideos"
      favoritesVideos.splice(index, 1);
    } else {
      // si no esta en favoritos agrega el ID del video en "favoritesVideos"
      favoritesVideos.push(id);
    }
    // actualizamos el localStorage con la lista actualizada de videos favoritos
    localStorage.setItem("favoritesVideos", JSON.stringify(favoritesVideos));
    // actualizamos el estado de videoFavorites actual,
    // si el video estaba en la lista de favoritos se elimina, si no estaba se agrega
    setVideoFavorites({ ...videoFavorites, [id]: !videoFavorites[id] });
  }

  return (
    <div className="bgSectionColor">
      <NavBar />
      <h1 className="text-uppercase text-center pt-5 fontSize fontStyleTitle">
        <strong>{sectionId.data?.attributes.title}</strong>
      </h1>
      <div className="container">
        <div className="row">
          <div className="col-12 col-xxl-12 pt-4">
            <h1 className="text-center pb-2 fontStyle">Fotos</h1>
            <SectionImagesID />
          </div>
          <div className="col-12 col-xxl-12 pt-5">
            <h1 className="text-center pb-3 fontStyle">Videos</h1>
            <div>
              {sectionVideos ? (
                <article className="container">
                  <div className="row">
                    {sectionId.data ? (
                      sectionId.data.attributes.videos.data.map((e, index) => (
                        <div
                          className="col-xxl-6 col-xl-4 col-lg-4 col-md-6 col-sm-12 pe-4 pb-4"
                          key={index}
                        >
                          <div className="cardID position-relative">
                            <div onClick={() => handleVideoClick(index)}>
                              <video
                                className="videoSize"
                                src={`http://localhost:1337${e.attributes.url}`}
                              />
                            </div>
                            <div
                              className="circle position-absolute top-0 end-0"
                              onClick={() => handleFavoriteClick(e.id)}
                            >
                              {videoFavorites[e.id] ? (
                                <IconHeartFill className="iconHeart" />
                              ) : (
                                <IconHeart className="iconHeart" />
                              )}
                            </div>

                            <p className="card-text text-center video-title">
                              {e.attributes.alternativeText}
                            </p>
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
                  <i className="bi bi-camera-video-off-fill fs-1"></i>
                  <h2 className="no-videos-title fontStyleTitle">
                    Todavía no se han cargado videos de este partido
                  </h2>
                  <p className="no-videos-description fontStyleText">
                    Por favor, vuelva a intentarlo más tarde o contacte al
                    administrador del sitio.
                  </p>
                </div>
              )}
            </div>
            );
          </div>
        </div>
      </div>
      <div className="pt-5">
        <Footer />
      </div>
    </div>
  );
}
