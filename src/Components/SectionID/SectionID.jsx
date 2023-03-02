import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSectionID } from "../../Redux/Actions";
import { Link } from "react-router-dom";
import SectionImagesID from "./SectionImagesID";
import SectionVideosID from "./SectionVideosID";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import "./SectionID.css";

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
          <article className="col-6 col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2">
            <Link
              to={`/home/media/${id}/videos`}
              className="text-decoration-none text-dark"
            >
              <p className="fs-4 ">Videos</p>
            </Link>
          </article>
        </div>

        <hr className="hr hr-blurry" />
        <div className="pt-5">
          <Footer />
        </div>
      </div>
    </div>
  );
}

{
  /* {!sectionImages && !sectionVideos && (
  <h1 className="text-center text-black pt-4 pb-4">
    No hay contenido disponible para esta sección
  </h1>
)} */
}
