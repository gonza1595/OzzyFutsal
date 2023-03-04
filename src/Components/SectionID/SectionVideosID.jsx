import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSectionID } from "../../Redux/Actions";
import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import ReactPlayer from "react-player";
import "./SectionVideosID.css";

export default function SectionID() {
  const dispatch = useDispatch();
  const sectionId = useSelector((state) => state.sectionID);

  const { id } = useParams();

  const [showVideo, setShowVideo] = useState(false);
  const [selectedVideoIndex, setSelectedVideoIndex] = useState(0); // índice del video seleccionado

  useEffect(() => {
    dispatch(getSectionID(id));
  }, [id, dispatch]);

  const handleVideoClick = (index) => {
    setSelectedVideoIndex(index); // setear el índice del video seleccionado al hacer clic
    setShowVideo(true);
  };

  const handleOverlayClick = () => {
    setShowVideo(false);
  };

  const handleButtonClick = () => {
    setShowVideo(false);
  };

  const sectionVideos = sectionId.data?.attributes.videos?.data?.map(
    (e) => e.attributes.url
  );

  return (
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
                    <p className="card-text text-center video-title">
                      {e.attributes.alternativeText}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <h1>Cargando...</h1>
            )}

            {showVideo && (
              <div className="overlay modal" onClick={handleOverlayClick}>
                <button className="close-btn" onClick={handleButtonClick}>
                  <i class="bi bi-x-lg"></i>
                </button>
                <div className="video-container ">
                  <ReactPlayer
                    url={`http://localhost:1337${sectionId.data.attributes.videos.data[selectedVideoIndex].attributes.url}`}
                    playing
                    controls={true}
                    width="100%"
                    height="100%"
                  />
                  <p className="card-text text-center video-title-modal">
                    {
                      sectionId.data.attributes.videos.data[selectedVideoIndex]
                        .attributes.alternativeText
                    }
                  </p>
                </div>
              </div>
            )}
          </div>
        </article>
      ) : (
        <div className="paddingSectionVideoNull">
          <h1 className="text-center">
            Todavia no hay videos cargados de este partido{" "}
          </h1>
        </div>
      )}
    </div>
  );
}
