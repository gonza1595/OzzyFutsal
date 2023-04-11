import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSectionVideoID } from "../../Redux/Actions";
import { ReactComponent as IconHeart } from "../assets/suit-heart.svg";
import { ReactComponent as IconHeartFill } from "../assets/suit-heart-fill.svg";
import "./SectionVideosID.css";

export default function SectionVideosID({ idVideo }) {
  const dispatch = useDispatch();
  const getSectionVideo = useSelector((state) => state.sectionVideoID);
  const { id } = useParams();
  const [video, setVideo] = useState(null);

  console.log(idVideo);

  useEffect(() => {
    dispatch(getSectionVideoID(id, idVideo));
  }, [id, idVideo]);

  useEffect(() => {
    const selectedVideo = getSectionVideo.data?.attributes?.videos?.data?.find(
      (e) => e.id === idVideo
    );
    if (selectedVideo) {
      setVideo(selectedVideo);
    }
  }, [id]);

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
}
