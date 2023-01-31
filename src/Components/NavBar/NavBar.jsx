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
      <nav class="navbar navbar-expand-lg bg-dark">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a class="navbar-brand text-white" href="/home">
              Home
            </a>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a
                  class="nav-link active text-white"
                  aria-current="page"
                  href="#"
                >
                  Primera
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="#">
                  C 20
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="#">
                  C 17
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="#">
                  C 15
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="#">
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
