import React from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import ozzyfoto from "../assets/ozzy page.jpeg";
import "./LandingPage.css";

export default function LandingPage() {
  return (
    <div>
      <NavBar />
      <main className="pt-5 colorBg mainBg">
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
        </div>
      </main>
      <Footer />
    </div>
  );
}
