import React from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import ozzyfoto from "../assets/ozzy page.jpeg";
import primera from "../assets/PRIMERA.jpeg";
import c20 from "../assets/C20.jpeg";
import c17 from "../assets/C17.jpeg";
import "./LandingPage.css";

export default function LandingPage() {
  return (
    <div>
      <NavBar />
      <main className="pt-5 colorBg pb-5">
        <div className="container">
          <section className="row text-white align-items-lg-center justify-content-lg-center">
            <article className="col-12 col-lg-6 pe-lg-4">
              <h2>Bienvenido al lugar donde te ves mejor</h2>
              <p className="fs-5">
                {" "}
                En esta pagina podras disfrutar de tus fotos, vas a poder ver
                tus jugadas destacadas, tus goles, las polemicas y mucho mas...
                Todo captado desde el magico celular del Ozzy!! Espero que los
                disfruten
              </p>
            </article>
            <article className="col-12 col-lg-6">
              <img
                className="img-fluid"
                style={{ width: "100%", height: "350px" }}
                src={ozzyfoto}
                alt="Bienvenido al lugar donde te ves mejor"
              />
            </article>
          </section>
          <section className="row justify-content-lg-center paddingSection ">
            <article className="col-12 col-lg-6 pt-4 pe-lg-4">
              <a href="/home/category/Primera">
                <div className="card text-bg-dark border-0 bg-image hover-overlay ripple shadow-1-strong rounded">
                  <img
                    src={primera}
                    style={{ width: "auto", height: "618px" }}
                    className="card-img w-100"
                    alt="..."
                  />
                  <div className="card-img-overlay mask styleImage">
                    <h5 className="card-title">Primera</h5>
                  </div>
                </div>
              </a>
            </article>
            <article className="col-12 col-lg-5 pt-4">
              <a href="/home/category/C20">
                <div className="card text-bg-dark border-0 bg-image hover-overlay ripple shadow-1-strong rounded">
                  <img
                    src={c20}
                    style={{ width: "auto", height: "350px" }}
                    className="card-img"
                    alt="..."
                  />
                  <div className="card-img-overlay mask styleImage">
                    <h5 className="card-title">C 20</h5>
                  </div>
                </div>
              </a>
              <article className="col-12 col-lg-12 paddingTopArticles">
                <a href="/home/category/C17">
                  <div className="card text-bg-dark border-0 bg-image hover-overlay ripple shadow-1-strong rounded">
                    <img
                      src={c17}
                      style={{ width: "auto", height: "295px" }}
                      className="card-img"
                      alt="..."
                    />
                    <div className="card-img-overlay mask styleImage">
                      <h5 className="card-title">C 17</h5>
                    </div>
                  </div>
                </a>
              </article>
            </article>
            <article className="col-12 col-lg-6 paddingTopArticles pe-lg-4 pb-5">
              <a href="/home/category/C15">
                <div className="card text-bg-dark border-0 bg-image hover-overlay ripple shadow-1-strong rounded">
                  <img
                    src={ozzyfoto}
                    style={{ width: "auto", height: "295px" }}
                    className="card-img "
                    alt="..."
                  />
                  <div className="card-img-overlay mask styleImage">
                    <h5 className="card-title">C 15</h5>
                  </div>
                </div>
              </a>
            </article>
            <article className="col-12 col-lg-5 paddingTopArticles">
              <a href="/home/category/C13">
                <div className="card text-bg-dark border-0 bg-image hover-overlay ripple shadow-1-strong rounded">
                  <img
                    src={ozzyfoto}
                    style={{ width: "auto", height: "295px" }}
                    className="card-img"
                    alt="..."
                  />
                  <div className="card-img-overlay mask styleImage">
                    <h5 className="card-title">C 13</h5>
                  </div>
                </div>
              </a>
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
