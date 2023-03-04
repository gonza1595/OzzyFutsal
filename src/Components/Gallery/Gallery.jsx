import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./Gallery.css";
import "baguettebox.js/dist/baguetteBox.min.css";

const galleryImages = [
  { id: uuidv4(), src: "https://picsum.photos/id/237/300/200" },
  { id: uuidv4(), src: "https://picsum.photos/id/238/300/200" },
  { id: uuidv4(), src: "https://picsum.photos/id/239/300/200" },
  { id: uuidv4(), src: "https://picsum.photos/id/240/300/200" },
  { id: uuidv4(), src: "https://picsum.photos/id/241/300/200" },
];

const galleryVideos = [
  {
    id: uuidv4(),
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    title: "Video 1",
  },
  {
    id: uuidv4(),
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    title: "Video 2",
  },
  {
    id: uuidv4(),
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    title: "Video 3",
  },
  {
    id: uuidv4(),
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    title: "Video 4",
  },
  {
    id: uuidv4(),
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    title: "Video 5",
  },
];

const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleImageClick = (img) => {
    setSelectedImg(img);
  };

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
  };

  const handleClose = () => {
    setSelectedImg(null);
    setSelectedVideo(null);
  };

  return (
    <>
      <div className="book-container">
        <div className="book-page page-left">
          <div className="row">
            {galleryImages.map((img) => (
              <div className="col-md-4 mb-3" key={img.id}>
                <a href={img.src} className="lightbox">
                  <img
                    src={img.src}
                    alt=""
                    className="img-thumbnail"
                    onClick={() => handleImageClick(img)}
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="book-page page-right">
          <div className="row">
            {galleryVideos.map((video) => (
              <div className="col-md-6 mb-3" key={video.id}>
                <div className="position-relative">
                  <video
                    src={video.src}
                    alt=""
                    className="w-100 h-100"
                    onClick={() => handleVideoClick(video)}
                  />
                  <div className="video-title">{video.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImg && (
        <div className="modal" onClick={handleClose}>
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <img src={selectedImg.src} alt="" className="w-100" />
            </div>
          </div>
        </div>
      )}

      {/* Video Modal */}
      {selectedVideo && (
        <div className="modal" onClick={handleClose}>
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <img src={selectedVideo.src} alt="" className="w-100" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
