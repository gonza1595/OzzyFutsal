import React from "react";
import { useDispatch } from "react-redux";
import ozzyfoto from "../assets/ozzy page.jpeg";
import { filterByCategory, deleteCategory } from "../../Redux/Actions";

export default function NavBar() {
  const dispatch = useDispatch();

  function handleFilterByCategory(e) {
    if (e.target.value === "all") {
      dispatch(deleteCategory());
    } else {
      dispatch(filterByCategory(e.target.value));
    }
  }

  return (
    <div>
      <img
        className="img-fluid"
        src={ozzyfoto}
        alt="No image"
        style={{ width: "100%", height: "300px" }}
      />
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a className="navbar-brand text-white" href="/home">
              Home
            </a>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <select
                onChange={(e) => handleFilterByCategory(e)}
                defaultValue="Filtrar por categoria"
              >
                <option disabled>Filtrar por categoria</option>
                <option value="all">Todas las cateogiras</option>
                <option value="Primera">Primera</option>
                <option value="C20">C 20</option>
                <option value="C17">C 17</option>
                <option value="C15">C 15</option>
                <option value="C13">C 13</option>
              </select>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
