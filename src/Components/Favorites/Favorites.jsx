import React from "react";
import FavoritesImages from "./FavoritesImages";
import FavoritesVideos from "./FavoritesVideos";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

export default function Favorites() {
  return (
    <div>
      <NavBar />
      <div className="container">
        <div className="row">
          <div className="col-12 col-xxl-12 pt-4">
            <h1 className="text-center pb-2 fontStyle">Fotos Favoritas</h1>
            <FavoritesImages />
          </div>
          <div className="col-12 col-xxl-12 pt-5">
            <h1 className="text-center pb-3 fontStyle">Videos Favoritos</h1>
            <FavoritesVideos />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
