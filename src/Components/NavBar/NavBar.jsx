import React from "react";
import ozzyfoto from "../assets/ozzy page.jpeg";
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container">
        <a className="navbar-brand" href="/landingpage">
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
                className="nav-link active fs-4 text-uppercase"
                aria-current="page"
                href="/landingpage"
              >
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active fs-4 text-uppercase" href="/home">
                Categorias
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
