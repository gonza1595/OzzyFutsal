import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSectionID } from "../../Redux/Actions";

export default function SectionID() {
  const dispatch = useDispatch();
  const sectionId = useSelector((state) => state.sectionID);

  const { id } = useParams();

  useEffect(() => {
    dispatch(getSectionID(id));
  }, [id, dispatch]);

  return (
    <div>
      {sectionId.data ? (
        sectionId.data.attributes.videos.data.map((e, id) => (
          <div key={id}>
            <video
              src={`http://localhost:1337${e.attributes.url}`}
              alt="No image"
            />
            <h2>{e.attributes.alternativeText}</h2>
          </div>
        ))
      ) : (
        <h1>Cargando...</h1>
      )}
    </div>
  );
}
