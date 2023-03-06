import React from "react";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSectionID } from "../../Redux/Actions";
import SectionImagesID from "./SectionImagesID";
import SectionVideosID from "./SectionVideosID";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import "./SectionID.css";

export default function SectionID() {
  const dispatch = useDispatch();
  const sectionId = useSelector((state) => state.sectionID);
  const { id } = useParams();
  const navigate = useNavigate();
  const [scrollPosition, setScrollPosition] = useState(0);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getSectionID(id));
  }, [id, dispatch]);

  function handleGoBack() {
    navigate(-1, { state: { scrollPosition, page } });
    setPage();
  }

  function handleScroll() {
    setScrollPosition(window.pageYOffset);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined" && window.history.state?.scrollPosition) {
      window.scrollTo(0, window.history.state.scrollPosition);
    }
  }, []);

  return (
    <div className="bgSectionColor">
      <NavBar />
      <div>
        <button onClick={handleGoBack} setPage={setPage}>
          Volver
        </button>
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
            <SectionImagesID page={page} />
          </div>
          <div className="col-12 col-xxl-12 pt-5">
            <h1 className="text-center pb-3">Videos</h1>
            <SectionVideosID page={page} />
          </div>
        </div>
      </div>

      <div className="pt-5">
        <Footer />
      </div>
    </div>
  );
}
