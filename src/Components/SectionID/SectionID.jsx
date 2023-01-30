import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSectionID } from "../../Redux/Actions";
import SectionVideosID from "./SectionVideosID";
import SectionImagesID from "./SectionImagesID";

export default function SectionID() {
  const dispatch = useDispatch();
  const sectionId = useSelector((state) => state.sectionID);

  const { id } = useParams();

  useEffect(() => {
    dispatch(getSectionID(id));
  }, [id, dispatch]);

  const getMedia = () => {
    if (sectionId.data.attributes.videos && sectionId.data.attributes.images) {
      return SectionVideosID && SectionImagesID;
    } else if (
      !sectionId.data.attributes.videos &&
      sectionId.data.attributes.images
    ) {
      return SectionImagesID;
    } else if (
      sectionId.data.attributes.videos &&
      !sectionId.data.attributes.images
    ) {
      return SectionVideosID;
    }
  };

  return (
    <div>
      {sectionId.data ? (
        <div>
          <SectionImagesID />
        </div>
      ) : (
        <h1>Cargando...</h1>
      )}
    </div>
  );
}
