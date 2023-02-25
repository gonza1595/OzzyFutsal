import React from "react";
import NavBar from "../NavBar/NavBar";
import ozzyfoto from "../assets/ozzy page.jpeg";

export default function LandingPage() {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div className="row">
        <section className="container border col">
          <div>
            <h1>Bienvenido al lugar donde te ves mejor</h1>
            <h3>
              En esta pagina podras disfrutar de tus fotos,
              <p>
                vas a poder ver tus jugadas destacadas, goles, polemicas y
                mas...
              </p>
              <p>Todo captado desde el magico celular del Ozzy!!</p>
              Espero que los disfruten
            </h3>
          </div>
          <div>
            <img className="img-fluid" src={ozzyfoto} alt="No image" />
          </div>
        </section>
      </div>
    </div>
  );
}
