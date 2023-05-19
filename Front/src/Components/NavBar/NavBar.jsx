import React from "react";
import ozzyfoto from "../assets/ozzy page.jpeg";
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img
            src={ozzyfoto}
            alt="Bootstrap"
            style={{ width: "auto", height: "5rem" }}
          />
        </a>
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon "></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-lg-auto">
            <li className="nav-item">
              <a
                className="nav-link active fs-4 text-uppercase fontStyleTitle"
                aria-current="page"
                href="/"
              >
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active fs-4 text-uppercase fontStyleTitle"
                href="/home"
              >
                Categorias
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active fs-4 text-uppercase fontStyleTitle"
                href="/favorites"
              >
                Favoritos
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
