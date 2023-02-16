import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSectionID } from "../../Redux/Actions";
import SectionImagesID from "./SectionImagesID";
import SectionVideosID from "./SectionVideosID";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

export default function SectionID() {
  const dispatch = useDispatch();
  const sectionId = useSelector((state) => state.sectionID);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getSectionID(id));
  }, [id, dispatch]);

  if (sectionId.loading) {
    return <h1>Cargando...</h1>;
  }

  const sectionImages = sectionId.data?.attributes.images?.data?.map(
    (e) => e.attributes.url
  );

  const sectionVideos = sectionId.data?.attributes.videos?.data?.map(
    (e) => e.attributes.url
  );

  return (
    <div className="bg-secondary ">
      <NavBar />
      <h1 className="text-black text-uppercase pt-4">
        <font>
          <strong>{sectionId.data?.attributes.title}</strong>
        </font>
      </h1>

      <hr className="hr hr-blurry" />

      {sectionImages ? (
        <div>
          <h1 className="text-center text-black text-uppercase ">FOTOS</h1>
          <hr className="hr hr-blurry" />
          <SectionImagesID />
        </div>
      ) : (
        <div>
          <hr className="hr hr-blurry" />
          <h1 className="text-center text-black text-uppercase ">FOTOS</h1>
          <hr className="hr hr-blurry" />
          <h1>Esta seccion no ha sido cargada con imagenes</h1>
        </div>
      )}

      {sectionVideos ? (
        <div>
          <hr className="hr hr-blurry" />
          <h1 className="text-center text-black text-uppercase ">VIDEOS</h1>
          <hr className="hr hr-blurry" />
          <SectionVideosID />
        </div>
      ) : (
        <div>
          <hr className="hr hr-blurry" />
          <h1 className="text-center text-black text-uppercase ">VIDEOS</h1>
          <hr className="hr hr-blurry" />
          <h1>Esta seccion no ha sido cargada con videos</h1>
        </div>
      )}

      {!sectionImages && !sectionVideos && (
        <h1>No hay contenido disponible para esta sección</h1>
      )}

      <Footer />
    </div>
  );
}
