import React from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import ozzyfoto from "../assets/ozzy page.jpeg";
import primera from "../assets/PRIMERA-opacity.jpeg";
import c20 from "../assets/C20-opacity.jpeg";
import c17 from "../assets/C17-opacity.jpeg";
import "./LandingPage.css";
import { Link } from "react-router-dom";

export default function LandingPage() {
  localStorage.getItem("currentPageCategory");
  localStorage.removeItem("currentPageCategory");

  return (
    <div>
      <NavBar />
      <main className="pt-5 colorBg pb-5">
        <div className="container">
          <section className="row text-white">
            <article className="col-12 col-lg-12">
              <h2 className=" text-center display-1 landingPaddingTitle fontStyleTitle text-dark">
                Bienvenido...!!!
              </h2>
              <h2 className="display-1 text-center fontStyleTitle text-dark">
                Al lugar donde MEJOR te ves
              </h2>
              <p className="fs-3 fontStyleText text-center pt-3 text-dark">
                {" "}
                En esta pagina podras disfrutar de tus fotos, vas a poder ver
                tus jugadas destacadas, tus goles, las polemicas y mucho mas...
                <p className="fontStyleText">
                  Todo captado desde el magico celular del Ozzy!! Espero que los
                  disfruten
                </p>
              </p>
            </article>
          </section>
          <section className="row justify-content-center pt-5">
            <article className="col-12 col-lg-5 pt-5">
              <img
                className="img-fluid"
                style={{ width: "100%", height: "350px" }}
                src={ozzyfoto}
                alt="Bienvenido al lugar donde te ves mejor"
              />
            </article>
            <article className="col-12 col-lg-5 pt-5">
              <img
                className="img-fluid"
                style={{ width: "100%", height: "350px" }}
                src={ozzyfoto}
                alt="Bienvenido al lugar donde te ves mejor"
              />
            </article>
          </section>
          <section className="row margin-container">
            <article className="col-12 col-lg-12">
              <div className="">
                <h1 className="fontStyleTitle text-center text-dark pb-4 text-bold">
                  Buscar por categoria
                </h1>
              </div>
              <div
                id="carouselExampleControls"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <a href="/home/category/Primera">
                      <div className="card border-0 bg-image hover-overlay ripple shadow-1-strong rounded">
                        <img
                          src={primera}
                          className="card-img imagesHeight"
                          alt="..."
                        />
                        <div className="card-img-overlay mask styleImage fontStyleTitle">
                          <h5 className="card-title display-5 text-white">
                            Primera
                          </h5>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="carousel-item">
                    <a href="/home/category/C20">
                      <div className="card text-bg-dark border-0 bg-image hover-overlay ripple shadow-1-strong rounded">
                        <img
                          src={c20}
                          className="card-img imagesHeight"
                          alt="..."
                        />
                        <div className="card-img-overlay mask styleImage fontStyleTitle">
                          <h5 className="card-title display-5">C20</h5>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="carousel-item">
                    <a href="/home/category/C17">
                      <div className="card text-bg-dark border-0 bg-image hover-overlay ripple shadow-1-strong rounded">
                        <img
                          src={c17}
                          className="card-img imagesHeight"
                          alt="..."
                        />
                        <div className="card-img-overlay mask styleImage fontStyleTitle">
                          <h5 className="card-title display-5">C17</h5>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="carousel-item">
                    <a href="/home/category/C15">
                      <div className="card text-bg-dark border-0 bg-image hover-overlay ripple shadow-1-strong rounded">
                        <img
                          src={primera}
                          className="card-img w-100 imagesHeight"
                          alt="..."
                        />
                        <div className="card-img-overlay mask styleImage fontStyleTitle">
                          <h5 className="card-title display-5">C15</h5>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="carousel-item">
                    <a href="/home/category/C13">
                      <div className="card text-bg-dark border-0 bg-image hover-overlay ripple shadow-1-strong rounded">
                        <img
                          src={c20}
                          className="card-img imagesHeight"
                          alt="..."
                        />
                        <div className="card-img-overlay mask styleImage fontStyleTitle">
                          <h5 className="card-title display-5">C13</h5>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="carousel-item">
                    <a href="/home/category/C11">
                      <div className="card text-bg-dark border-0 bg-image hover-overlay ripple shadow-1-strong rounded">
                        <img
                          src={ozzyfoto}
                          className="card-img imagesHeight"
                          alt="..."
                        />
                        <div className="card-img-overlay mask styleImage fontStyleTitle">
                          <h5 className="card-title display-5">C11</h5>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="carousel-item">
                    <a href="/home/category/C9">
                      <div className="card text-bg-dark border-0 bg-image hover-overlay ripple shadow-1-strong rounded">
                        <img
                          src={ozzyfoto}
                          className="card-img imagesHeight"
                          alt="..."
                        />
                        <div className="card-img-overlay mask styleImage fontStyleTitle">
                          <h5 className="card-title display-5">C9</h5>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="carousel-item">
                    <a href="/home/category/C7">
                      <div className="card text-bg-dark border-0 bg-image hover-overlay ripple shadow-1-strong rounded">
                        <img
                          src={ozzyfoto}
                          className="card-img imagesHeight"
                          alt="..."
                        />
                        <div className="card-img-overlay mask styleImage fontStyleTitle">
                          <h5 className="card-title display-5">C7</h5>
                        </div>
                      </div>
                    </a>
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </article>
          </section>
          <section className="row">
            <article className="col-12 col-lg-12">
              <div className="backgroundImage landingFavorites-container margin-container">
                <div>
                  <h1 className="text-center fontStyleTitle text-white">
                    Favoritos
                  </h1>
                  <h2 className="fontStyleText text-center fs-4 pt-3 text-white">
                    En la seccion de favoritos podras acceder a tu propia
                    galeria de imagenes y videos, tendras las fotos
                  </h2>
                  <h2 className="fontStyleText text-center fs-4 text-white">
                    y los videos que mas te gusten y los podras ver las veces
                    que quieras!!!
                  </h2>
                </div>
                <div className="text-center pt-4">
                  <Link to={"/landingpage/favorites"}>
                    <button className="btn btn-light fw-bold">
                      Presiona Aqui
                    </button>
                  </Link>
                </div>
              </div>
            </article>
          </section>
          <section className="row pb-5">
            <article className="col-12 col-lg-12">
              <div className="backgroundImage landingFavorites-container margin-container">
                <div>
                  <h1 className="text-center fontStyleTitle text-white">
                    Mejores Goles
                  </h1>
                  <h2 className="fontStyleText text-center fs-4 pt-3 text-white">
                    En esta seccion podras ver los mejores goles de todas las
                    categorias
                  </h2>
                  <h2 className="fontStyleText text-center fs-4 text-white">
                    seleccionados por el Ozzy
                  </h2>
                </div>
                <div className="text-center pt-4">
                  <Link to={"/landingpage/bestgoals"}>
                    <button className="btn btn-light fw-bold">
                      Presiona Aqui
                    </button>
                  </Link>
                </div>
              </div>
            </article>
          </section>
        </div>
      </main>
      <div>
        <Footer />
      </div>
    </div>
  );
}
