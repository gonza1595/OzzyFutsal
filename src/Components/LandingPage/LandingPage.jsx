import React from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import ozzyfoto from "../assets/ozzy page.jpeg";
import "./LandingPage.css";

export default function LandingPage() {
  return (
    <div>
      <NavBar />
      <main className="pt-5 colorBg ">
        <div className="container">
          <section className="row text-white align-items-lg-center justify-content-lg-center">
            <article className="col-12 col-lg-5">
              <h2>Bienvenido al lugar donde te ves mejor</h2>
              <p className="fs-5">
                {" "}
                En esta pagina podras disfrutar de tus fotos, vas a poder ver
                tus jugadas destacadas, goles, polemicas y mas... Todo captado
                desde el magico celular del Ozzy!! Espero que los disfruten
              </p>
            </article>
            <article className="col-12 col-lg-5">
              <img
                className="img-fluid"
                style={{ width: "auto", height: "350px" }}
                src={ozzyfoto}
                alt="Bienvenido al lugar donde te ves mejor"
              />
            </article>
          </section>
          <section className="row">
            <article className="col-12 col-lg-6 paddingSection">
              <a href="/home/category/Primera">
                <div className="card text-bg-dark">
                  <img
                    src={ozzyfoto}
                    style={{ width: "auto", height: "515px" }}
                    className="card-img"
                    alt="..."
                  />
                  <div className="card-img-overlay">
                    <h5 className="card-title">Primera</h5>
                  </div>
                </div>
              </a>
            </article>
            <article className="col-12 col-lg-6 paddingSection ">
              <a href="/home/category/C20">
                <div className="card text-bg-dark">
                  <img
                    src={ozzyfoto}
                    style={{ width: "auto", height: "245px" }}
                    className="card-img"
                    alt="..."
                  />
                  <div className="card-img-overlay">
                    <h5 className="card-title">C 20</h5>
                  </div>
                </div>
              </a>
              <article className="col-12 col-lg-12 pt-4">
                <a href="/home/category/C17">
                  <div className="card text-bg-dark">
                    <img
                      src={ozzyfoto}
                      style={{ width: "auto", height: "245px" }}
                      className="card-img"
                      alt="..."
                    />
                    <div className="card-img-overlay">
                      <h5 className="card-title">C 17</h5>
                    </div>
                  </div>
                </a>
              </article>
            </article>
            <article className="col-12 col-lg-6 pt-4">
              <a href="/home/category/C15">
                <div className="card text-bg-dark">
                  <img
                    src={ozzyfoto}
                    style={{ width: "auto", height: "245px" }}
                    className="card-img"
                    alt="..."
                  />
                  <div className="card-img-overlay">
                    <h5 className="card-title">C 15</h5>
                  </div>
                </div>
              </a>
            </article>
            <article className="col-12 col-lg-6 pt-4">
              <a href="/home/category/C13">
                <div className="card text-bg-dark">
                  <img
                    src={ozzyfoto}
                    style={{ width: "auto", height: "245px" }}
                    className="card-img"
                    alt="..."
                  />
                  <div className="card-img-overlay">
                    <h5 className="card-title">C 13</h5>
                  </div>
                </div>
              </a>
            </article>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
