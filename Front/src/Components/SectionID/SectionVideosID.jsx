import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSectionVideoID } from "../../Redux/Actions";
import ReactPlayer from "react-player/lazy";
import { ReactComponent as IconHeart } from "../assets/suit-heart.svg";
import { ReactComponent as IconHeartFill } from "../assets/suit-heart-fill.svg";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import "./SectionVideosID.css";

export default function SectionVideosID() {
  const dispatch = useDispatch();
  const getSectionVideo = useSelector((state) => state.sectionVideoID);
  const { id } = useParams();
  const storedIdVideo = localStorage.getItem("idVideo");
  const [videoID, setVideoID] = useState(storedIdVideo);

  useEffect(() => {
    if (storedIdVideo) {
      setVideoID(storedIdVideo);
    }
  }, []);

  useEffect(() => {
    dispatch(getSectionVideoID(id, videoID));
  }, [id, videoID]);

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

  function handleShareClick(url) {
    navigator
      .share({
        title: "Título del video",
        text: "Descripción del video",
        url: url, // URL del video
      })
      .then(() => console.log("Compartido con éxito"))
      .catch((error) => console.error("Error al compartir", error));
  }

  function handleDownloadClick(url, fileName) {
    fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        const link = document.createElement("a");
        link.href = window.URL.createObjectURL(new Blob([blob]));
        link.download = fileName;
        link.click();
      });
  }

  return (
    <main>
      <div className="pb-4">
        <NavBar />
      </div>
      <div className="container bgSectionColor">
        {getSectionVideo.data ? (
          getSectionVideo.data.attributes.videos.data.map((e) => (
            <section className="row pt-5" key={e.id}>
              <article className="col-12 col-lg-7">
                <video
                  controls
                  autoPlay
                  style={{ width: "100%", height: "100%" }}
                >
                  <source
                    src={`http://localhost:1337${e.attributes.url}`}
                    type={e.attributes.mime}
                  />
                  Su navegador no soporta la etiqueta de vídeo.
                </video>
              </article>
              <article className="col-12 col-lg-5 ps-4">
                <h1 className="pt-4">
                  {getSectionVideo.data.attributes.title}
                </h1>
                <h3 className="pt-3">{e.attributes.alternativeText}</h3>
                <article className="col-12 col-lg-12 pt-5 d-flex align-items-center">
                  <button
                    className="btn btn-primary me-3 btn-lg"
                    onClick={() =>
                      handleDownloadClick(
                        `http://localhost:1337${e.attributes.url}`,
                        e.attributes.url
                      )
                    }
                  >
                    <i className="bi bi-cloud-arrow-down-fill iconSize">
                      {" "}
                      Descargar
                    </i>
                  </button>
                  <button
                    className="btn btn-primary me-3 btn-lg"
                    onClick={() => handleShareClick(e.attributes.url)}
                  >
                    <i className="bi bi-share-fill iconSize"></i>
                  </button>
                  <button
                    className="circleButtonFavorites"
                    onClick={() => handleFavoriteClick(e.id)}
                  >
                    {videoFavorites[e.id] ? (
                      <IconHeartFill className="iconHearth-video" />
                    ) : (
                      <IconHeart className="iconHearth-video" />
                    )}
                  </button>
                </article>
              </article>
            </section>
          ))
        ) : (
          <h1>Cargando... </h1>
        )}
      </div>
      <section className="footerPosition">
        <Footer />
      </section>
    </main>
  );
}
