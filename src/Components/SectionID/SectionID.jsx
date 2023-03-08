import React from "react";
import { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSectionID, changePage } from "../../Redux/Actions";
import SectionImagesID from "./SectionImagesID";
import SectionVideosID from "./SectionVideosID";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import "./SectionID.css";

export default function SectionID() {
  const dispatch = useDispatch();
  const sectionId = useSelector((state) => state.sectionID);
  const { id } = useParams();
  const navigate = useNavigate(); //guarda la función para navegar hacia atrás en el historial del navegador

  // guarda el objeto que representa la ubicación actual
  // de la página.
  // const location = useLocation();

  // crea un objeto URLSearchParams a partir de la cadena de consulta
  //   ( query string ) de la URL actual, que permite obtener los valores
  //   de los parámetros en la cadena de consulta.
  // const queryParams = new URLSearchParams(location.search);

  // busca el valor del parámetro "page" en la cadena de consulta,
  // y si no se encuentra, asigna el valor predeterminado 1 a la variable page.
  // const page = queryParams.get("page") || 1;

  useEffect(() => {
    dispatch(getSectionID(id));
  }, [id]);

  // se utiliza para navegar hacia atrás en el historial del navegador
  // y actualizar la página actual en el estado global de la aplicación.
  function handleGoBack() {
    // dispatch(changePage(page));
    navigate(-1);
  }
  return (
    <div className="bgSectionColor">
      <NavBar />
      <div>
        <a className="bi bi-arrow-left-square-fill" onClick={handleGoBack}></a>
        <h1 className="text-black text-uppercase p-3 pt-4 pb-4 text-center">
          <font>
            <strong>{sectionId.data?.attributes.title}</strong>
          </font>
        </h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-xxl-12 pt-4">
            <h1 className="text-center pb-2">Fotos</h1>
            <SectionImagesID />
          </div>
          <div className="col-12 col-xxl-12 pt-5">
            <h1 className="text-center pb-3">Videos</h1>
            <SectionVideosID />
          </div>
        </div>
      </div>

      <div className="pt-5">
        <Footer />
      </div>
    </div>
  );
}
