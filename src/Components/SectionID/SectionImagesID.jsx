import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSectionID } from "../../Redux/Actions";
import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import baguetteBox from "baguettebox.js";
import "./SectionImagesID.css";

export default function SectionID() {
  const dispatch = useDispatch();
  const sectionId = useSelector((state) => state.sectionID);

  const { id } = useParams();

  useEffect(() => {
    dispatch(getSectionID(id));
  }, [id, dispatch]);

  baguetteBox.run(".row ", {
    captions: true,
  });

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
              <p className="fs-4">Videos</p>
            </Link>
          </article>
        </div>
        <hr className="hr hr-blurry" />

        <article className="container px-5 p-5">
          <div className="row gx-1">
            {sectionId.data ? (
              sectionId.data.attributes.images.data.map((e, id) => (
                <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6 col-sm-12 imagePadding pe-3">
                  <div className="imageBorder bg-image hover-zoom ">
                    <a
                      href={`http://localhost:1337${e.attributes.url}`}
                      data-caption={e.attributes.alternativeText}
                    >
                      <img
                        src={`http://localhost:1337${e.attributes.url}`}
                        alt="Image"
                        className="img-top"
                        style={{ width: "100%", height: "300px" }}
                      />
                    </a>
                  </div>
                </div>
              ))
            ) : (
              <h1> Esta seccion no ha sido cargada con imagenes</h1>
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
