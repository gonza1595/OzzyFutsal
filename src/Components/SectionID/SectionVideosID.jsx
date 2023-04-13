import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSectionVideoID } from "../../Redux/Actions";
import ReactPlayer from "react-player/lazy";
import { ReactComponent as IconHeart } from "../assets/suit-heart.svg";
import { ReactComponent as IconHeartFill } from "../assets/suit-heart-fill.svg";
import NavBar from "../NavBar/NavBar";
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

  function handleShareClick() {
    navigator
      .share({
        title: "Título del video",
        text: "Descripción del video",
        url: "http://localhost:1337/...", // URL del video
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
    <div>
      <NavBar />
      <div className="container">
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
                <article className="col-12 col-lg-12 pt-5">
                  <button
                    className="btn btn-dark me-3"
                    onClick={() =>
                      handleDownloadClick(
                        `http://localhost:1337${e.attributes.url}`,
                        e.attributes.url
                      )
                    }
                  >
                    Descargar
                  </button>

                  <button onClick={() => handleShareClick(e.attributes.url)}>
                    Compartir
                  </button>
                </article>
              </article>
            </section>
          ))
        ) : (
          <h1>No hay nada </h1>
        )}
      </div>
    </div>
  );
}

{
  /* <article className="col-12 col-lg-12">
<button
  onClick={() => {
    navigator.share({
      title: "Título del video",
      text: "Descripción del video",
      url: window.location.href,
    });
  }}
>
  Compartir
</button>
</article> */
}
