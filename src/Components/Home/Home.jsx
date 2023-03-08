import React, { useEffect, useState } from "react";
import { changePage } from "../../Redux/Actions";
import { useDispatch } from "react-redux";
import Sections from "../Sections/Sections";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

export default function Home() {
  //  Aquí se utiliza el hook useState para manejar el estado de la página actual
  //  que se está mostrando en la aplicación.El valor inicial se obtiene del localStorage,
  //  y si no hay valor en el localStorage, se establece en 1.

  const [page, setPage] = useState(() => {
    const lastPage = localStorage.getItem("currentPage");
    return lastPage ? parseInt(lastPage) : 1;
  });

  const dispatch = useDispatch();

  // se utiliza el hook useEffect para guardar en el localStorage
  // el valor de la página actual cada vez que cambia, y para disparar
  // la acción changePage que actualiza la página actual en el store de Redux.

  useEffect(() => {
    localStorage.setItem("currentPage", page); // Guardamos la página actual en el localStorage
    dispatch(changePage(page)); // Disparamos la acción para cambiar la página en el store de Redux
  }, [dispatch, page]);

  return (
    <div>
      <div>
        {/* Renderiza la barra de navegación, recibe como prop la página actual */}
        <NavBar page={page} />
      </div>
      <main className="colorBgSection pt-5 pb-5">
        {/* Renderiza las secciones de
        la página actual, recibe como props la página actual y una función para
        cambiarla */}
        <Sections page={page} setPage={setPage} />
      </main>
      <div>
        <Footer /> // Renderiza el footer
      </div>
    </div>
  );
}
