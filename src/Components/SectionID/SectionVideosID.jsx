import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSection } from "../../Redux/Actions";
import { ReactComponent as IconHeart } from "../assets/suit-heart.svg";
import { ReactComponent as IconHeartFill } from "../assets/suit-heart-fill.svg";
import "./SectionVideosID.css";

export default function SectionVideosID() {
  const dispatch = useDispatch();
  const getSections = useSelector((state) => state.allSections);
  const { id } = useParams();

  const [video, setVideo] = useState(null);
  useEffect(() => {
    dispatch(getSection());
  }, []);

  const sectionArray = Object.values(getSections);
  const videosID = sectionArray.reduce((acc, curr) => {
    if (curr.videos && curr.videos.data) {
      const ids = curr.videos.data.map((e) => e.id);
      return [...acc, ...ids];
    } else {
      return acc;
    }
  }, []);

  console.log(videosID);

  // useEffect(() => {
  //   // Buscar el video con el ID especificado
  //   const videosID = getSections?.data?.attributes?.videos?.data.map(
  //     (e) => e.id
  //   );

  //   console.log(videosID);

  //   // Guardar el video encontrado en el estado local
  //   // setVideo(selectedVideo);
  // }, [id]);

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

  if (!video) {
    return <h1>Cargando...</h1>;
  }

  return <div></div>;
}
