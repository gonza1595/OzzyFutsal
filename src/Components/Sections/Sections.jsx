import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSection } from "../../Redux/Actions";
import CardSection from "../CardSection/CardSection";

export default function Home() {
  const dispatch = useDispatch();
  const sectionState = useSelector((state) => state.sections);

  useEffect(() => {
    dispatch(getSection());
  }, []);

  return (
    <div className="bg-secondary">
      <div className="row">
        {sectionState.data ? (
          sectionState.data.map((e) => (
            <div className="col-md-3 mt-4 p-4">
              <CardSection
                key={e.id}
                id={e.id}
                title={e.attributes.title}
                image={e.attributes.images.data?.map((e) => e.attributes.url)}
                description={e.attributes.description}
              />
            </div>
          ))
        ) : (
          <h1>No hay Nada</h1>
        )}
      </div>
    </div>
  );
}
