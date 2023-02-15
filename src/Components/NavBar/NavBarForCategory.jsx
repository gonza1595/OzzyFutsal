import React, { useState } from "react";
import ozzyfoto from "../assets/ozzy page.jpeg";
import { getSectionTitle } from "../../Redux/Actions";
import { useDispatch, useSelector } from "react-redux";

export default function NavBarForCategory({
  setPageCategory,
  setSearchTermCategory,
}) {
  function handleSearch(event) {
    setSearchTermCategory(event.target.value);
    setPageCategory(1); // reset page to 1 when search term changes
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
              <li className="nav-item">
                <a
                  className="navbar-brand text-white"
                  href="/home/category/Primera"
                >
                  Primera
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="navbar-brand text-white"
                  href="/home/category/C20"
                >
                  C 20
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="navbar-brand text-white"
                  href="/home/category/C17"
                >
                  C 17
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="navbar-brand text-white"
                  href="/home/category/C15"
                >
                  C 15
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="navbar-brand text-white"
                  href="/home/category/C13"
                >
                  C 13
                </a>
              </li>
            </ul>
            <div className="d-flex">
              <input
                className="form-control me-2"
                type="text"
                placeholder="Buscar por nombre..."
                onChange={(event) => handleSearch(event)}
              />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
