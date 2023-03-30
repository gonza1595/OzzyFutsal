import React from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import ozzyfoto from "../assets/ozzy page.jpeg";
import primera from "../assets/PRIMERA.jpeg";
import c20 from "../assets/C20.jpeg";
import c17 from "../assets/C17.jpeg";
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
              <h2 className=" text-center display-1 landingPaddingTitle fontStyleTitle">
                Bienvenido...!!!
              </h2>
              <h2 className="display-1 text-center fontStyleTitle">
                Al lugar donde MEJOR te ves
              </h2>
              <p className="fs-3 fontStyleText text-center pt-3">
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
          <section className="row justify-content-lg-center paddingSection mt-5 grid-container">
            <article className="col-12 col-lg-4 paddingTopArticles">
              <a href="/home/category/C17">
                <div className="card text-bg-dark border-0 bg-image hover-overlay ripple shadow-1-strong rounded">
                  <img src={c17} className="card-img" alt="..." />
                  <div className="card-img-overlay mask styleImage fontStyleTitle">
                    <h5 className="card-title">C 17</h5>
                  </div>
                </div>
              </a>
            </article>
            <article className="col-12 col-lg-4 pt-4">
              <a href="/home/category/C15">
                <div className="card text-bg-dark border-0 bg-image hover-overlay ripple shadow-1-strong rounded">
                  <img src={primera} className="card-img w-100" alt="..." />
                  <div className="card-img-overlay mask styleImage fontStyleTitle">
                    <h5 className="card-title">C 15</h5>
                  </div>
                </div>
              </a>
            </article>
            <article className="col-12 col-lg-4 pt-4">
              <a href="/home/category/C13">
                <div className="card text-bg-dark border-0 bg-image hover-overlay ripple shadow-1-strong rounded">
                  <img src={c20} className="card-img" alt="..." />
                  <div className="card-img-overlay mask styleImage fontStyleTitle">
                    <h5 className="card-title">C 13</h5>
                  </div>
                </div>
              </a>
            </article>
            <article className="col-12 col-lg-6 paddingTopArticles">
              <a href="/home/category/Primera">
                <div className="card text-bg-dark border-0 bg-image hover-overlay ripple shadow-1-strong rounded">
                  <img src={primera} className="card-img" alt="..." />
                  <div className="card-img-overlay mask styleImage fontStyleTitle">
                    <h5 className="card-title">Primera</h5>
                  </div>
                </div>
              </a>
            </article>
            <article className="col-12 col-lg-6 paddingTopArticles">
              <a href="/home/category/C20">
                <div className="card text-bg-dark border-0 bg-image hover-overlay ripple shadow-1-strong rounded">
                  <img src={c20} className="card-img " alt="..." />
                  <div className="card-img-overlay mask styleImage fontStyleTitle">
                    <h5 className="card-title">C 20</h5>
                  </div>
                </div>
              </a>
            </article>

            <article className="col-12 col-lg-4 paddingTopArticles">
              <a href="/home/category/C11">
                <div className="card text-bg-dark border-0 bg-image hover-overlay ripple shadow-1-strong rounded">
                  <img src={ozzyfoto} className="card-img" alt="..." />
                  <div className="card-img-overlay mask styleImage fontStyleTitle">
                    <h5 className="card-title">C 11</h5>
                  </div>
                </div>
              </a>
            </article>
            <article className="col-12 col-lg-4 paddingTopArticles">
              <a href="/home/category/C9">
                <div className="card text-bg-dark border-0 bg-image hover-overlay ripple shadow-1-strong rounded">
                  <img src={ozzyfoto} className="card-img" alt="..." />
                  <div className="card-img-overlay mask styleImage fontStyleTitle">
                    <h5 className="card-title">C 9</h5>
                  </div>
                </div>
              </a>
            </article>
            <article className="col-12 col-lg-4 paddingTopArticles pb-4">
              <a href="/home/category/C7">
                <div className="card text-bg-dark border-0 bg-image hover-overlay ripple shadow-1-strong rounded">
                  <img src={ozzyfoto} className="card-img" alt="..." />
                  <div className="card-img-overlay mask styleImage fontStyleTitle">
                    <h5 className="card-title">C 7</h5>
                  </div>
                </div>
              </a>
            </article>
          </section>
          <section className="row landingFavorites-container margin-container">
            <article className="col-12 col-lg-12">
              <h1 className="text-center fontStyleTitle">Favoritos</h1>
              <h2 className="fontStyleText text-center fs-4 pt-3">
                En la seccion de favoritos podras acceder a tu propia galeria de
                imagenes y videos
              </h2>
              <div className="text-center pt-4">
                <Link to={"/landingpage/favorites"}>
                  <button>Entra Aqui</button>
                </Link>
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
