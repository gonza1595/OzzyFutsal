import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSectionID } from "../../Redux/Actions";
import "react-image-gallery/styles/css/image-gallery.css";

export default function SectionID() {
  const dispatch = useDispatch();
  const sectionId = useSelector((state) => state.sectionID);

  const { id } = useParams();

  useEffect(() => {
    dispatch(getSectionID(id));
  }, [id, dispatch]);

  return (
    <section className=" bg-secondary container ">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 ">
        {sectionId.data ? (
          sectionId.data.attributes.videos.data.map((e, id) => (
            <div className="col-lg-4 col-md-12 mb-4 mb-lg-0 ">
              <div className="bg-image hover-zoom" style={{ width: "370px" }}>
                <a href={`http://localhost:1337${e.attributes.url}`}>
                  <video
                    src={`http://localhost:1337${e.attributes.url}`}
                    className="img-top"
                    style={{ width: "370px" }}
                  />
                </a>
              </div>
            </div>
          ))
        ) : (
          <h1>Cargando...</h1>
        )}
      </div>
    </section>
  );
}
