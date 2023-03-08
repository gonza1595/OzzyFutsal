import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Sections from "../Sections/Sections";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { changePage } from "../../Redux/Actions";

export default function Home() {
  const dispatch = useDispatch();

  // Define el estado para guardar la página actual
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    // Cuando el componente se monte, busca en el localStorage el valor de la última página visitada
    const lastPageVisited = localStorage.getItem("lastPageVisited");
    if (lastPageVisited) {
      setCurrentPage(parseInt(lastPageVisited));
      dispatch(changePage(parseInt(lastPageVisited))); // actualiza el estado en redux
    } else {
      dispatch(changePage(1)); // si no hay valor en localStorage, se define la página 1 como página inicial
    }
  }, [dispatch]);

  return (
    <div>
      <div>
        <NavBar />
      </div>
      <main className="colorBgSection pt-5 pb-5">
        <Sections />
      </main>
      <div>
        <Footer />
      </div>
    </div>
  );
}
