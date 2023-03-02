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

  return (
    <div className="bgSectionColor">
      <NavBar />
      <div>
        <h1 className="text-black text-uppercase p-3 pt-4 pb-5 text-center">
          <font>
            <strong>{sectionId.data?.attributes.title}</strong>
          </font>
        </h1>
        <div className="row justify-content-evenly">
          <article className="col-6 col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2">
            <Link
              to={`/home/media/${id}/fotos`}
              className="text-decoration-none text-dark"
            >
              <p className="fs-4 text-end">Fotos</p>
            </Link>
          </article>
          <article className="col-6 col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 d-flex">
            <Link
              to={`/home/media/${id}/videos`}
              className="text-decoration-none text-dark"
            >
              <p className="fs-4">Videos</p>
            </Link>
          </article>
        </div>
        <hr className="hr hr-blurry" />
        <article className="container p-4">
          <div className="row gx-1">
            {sectionId.data ? (
              sectionId.data.attributes.videos.data.map((e, index) => (
                <div
                  className="col-xxl-3 col-xl-4 col-lg-6 col-md-6 col-sm-12 videoPadding pe-4"
                  key={index}
                >
                  <div className="cardID ">
                    <div onClick={() => handleVideoClick(index)}>
                      <video
                        className="videoSize"
                        src={`http://localhost:1337${e.attributes.url}`}
                      />
                    </div>
                    <div className="card-body">
                      <p className="card-text text-black text-center textPosition">
                        {e.attributes.alternativeText}
                      </p>
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
        </article>
        <div className="pt-5">
          <Footer />
        </div>
      </div>
    </div>
  );
}
