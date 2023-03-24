import React, { useEffect } from "react";

import FavoritesImages from "./FavoritesImages";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

export default function Favorites() {
  return (
    <div>
      <NavBar />
      <div>
        <FavoritesImages />
      </div>
      <Footer />
    </div>
  );
}
