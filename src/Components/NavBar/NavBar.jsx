import React from "react";

import ozzyfoto from "../assets/ozzy page.jpeg";

export default function NavBar() {
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
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a
                  class="navbar-brand text-white"
                  href="/home/category/Primera"
                >
                  Primera
                </a>
              </li>
              <li class="nav-item">
                <a class="navbar-brand text-white" href="/home/category/C20">
                  C 20
                </a>
              </li>
              <li class="nav-item">
                <a class="navbar-brand text-white" href="/home/category/C17">
                  C 17
                </a>
              </li>
              <li class="nav-item">
                <a class="navbar-brand text-white" href="/home/category/C15">
                  C 15
                </a>
              </li>
              <li class="nav-item">
                <a class="navbar-brand text-white" href="/home/category/C13">
                  C 13
                </a>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
