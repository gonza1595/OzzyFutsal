import React, { useEffect, useState } from "react";
import { getSection } from "../../Redux/Actions";
import { useDispatch, useSelector } from "react-redux";
import ReactPlayer from "react-player";

export default function Favorites() {
  const favoritesVideos =
    JSON.parse(localStorage.getItem("favoritesVideos")) || [];
  const dispatch = useDispatch();
  const getSections = useSelector((state) => state.allSections);

  const [showVideo, setShowVideo] = useState(false);
  const [selectedVideoIndex, setSelectedVideoIndex] = useState(0); // índice del video seleccionado

  useEffect(() => {
    dispatch(getSection());
  }, []);

  const handleVideoClick = (index) => {
    setSelectedVideoIndex(index); // setear el índice del video seleccionado al hacer click
    setShowVideo(true);
  };

  const handleOverlayClick = () => {
    setShowVideo(false);
  };

  const handleButtonClick = () => {
    setShowVideo(false);
  };

  const videosFavorites = getSections.data
    ?.filter((section) =>
      section.attributes.videos?.data?.some((video) =>
        favoritesVideos.includes(video.id)
      )
    )
    .map((section) =>
      section.attributes.videos?.data?.filter((video) =>
        favoritesVideos.includes(video.id)
      )
    )
    .flat();

  const uniqueVideos = [];

  if (videosFavorites && videosFavorites.length) {
    for (let i = 0; i < videosFavorites.length; i++) {
      const video = videosFavorites[i];
      if (!uniqueVideos.find((item) => item.id === video.id)) {
        uniqueVideos.push(video);
      }
    }
  }

  return (
    <div className="container">
      <div>
        {uniqueVideos.length > 0 ? (
          <article>
            <div className="row">
              {uniqueVideos.map((e, index) => (
                <div
                  className="col-xxl-6 col-xl-4 col-lg-4 col-md-6 col-sm-12 pe-4 pb-4"
                  key={index}
                >
                  <div className="cardID position-relative hover-overlay">
                    <div onClick={() => handleVideoClick(index)}>
                      <video
                        className="videoSize"
                        src={`http://localhost:1337${e.attributes.url}`}
                      />
                    </div>
                    <p className="card-text text-center video-title">
                      {e.attributes.alternativeText}
                    </p>
                  </div>
                </div>
              ))}
              {showVideo && (
                <div className="overlay modal" onClick={handleOverlayClick}>
                  <button className="close-btn" onClick={handleButtonClick}>
                    <i class="bi bi-x-lg"></i>
                  </button>
                  <div className="video-container ">
                    <ReactPlayer
                      url={`http://localhost:1337${uniqueVideos[selectedVideoIndex].attributes.url}`}
                      playing
                      controls={true}
                      width="100%"
                      height="100%"
                    />
                    <p className="card-text text-center video-title-modal">
                      {
                        uniqueVideos[selectedVideoIndex].attributes
                          .alternativeText
                      }
                    </p>
                  </div>
                </div>
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
    </div>
  );
}
