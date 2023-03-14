import React from "react";
import { useEffect } from "react";
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

  useEffect(() => {
    dispatch(getSectionID(id));
  }, [id]);

  return (
    <div className="bgSectionColor">
      <NavBar />
      <h1 className="text-uppercase text-center pt-5 fontStyleTitle">
        <strong>{sectionId.data?.attributes.title}</strong>
      </h1>

      <div className="container">
        <div className="row">
          <div className="col-12 col-xxl-12 pt-4">
            <h1 className="text-center pb-2 fontStyle">Fotos</h1>
            <SectionImagesID />
          </div>
          <div className="col-12 col-xxl-12 pt-5">
            <h1 className="text-center pb-3 fontStyle">Videos</h1>
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
