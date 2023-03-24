import React, { useEffect } from "react";
import { getSection } from "../../Redux/Actions";
import { useDispatch } from "react-redux";

export default function Favorites() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSection());
  });

  return (
    <div>
      <h1>Hola</h1>
    </div>
  );
}
