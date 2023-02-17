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

  return (
    <section className=" bg-secondary container ">
      <div className="row  ">
        {sectionId.data ? (
          sectionId.data.attributes.videos.data.map((e, index) => (
            <div
              className="col-xxl-4 col-lg-4 col-md-12 mb-4 mb-lg-0 p-3"
              key={index}
            >
              <div
                className="card cardID "
                style={{ width: "100%", height: "100%" }}
              >
                <div>
                  <div onClick={() => handleVideoClick(index)}>
                    <video src={`http://localhost:1337${e.attributes.url}`} />
                  </div>
                  <div className="card-body">
                    <p className="card-text text-center">
                      {e.attributes.alternativeText}
                    </p>
                  </div>
                </div>
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
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
