import React from "react";
import { MDBFooter, MDBContainer, MDBIcon, MDBBtn } from "mdb-react-ui-kit";

export default function Footer() {
  return (
    <MDBFooter className="bg-dark text-center text-white">
      <MDBContainer className="p-4 pb-0">
        <section className="mb-4">
          <MDBBtn
            outline
            color="light"
            floating
            className="m-1"
            href="https://www.youtube.com/@ozzytio"
            role="button"
          >
            <MDBIcon fab icon="youtube" />
          </MDBBtn>

          <MDBBtn
            outline
            color="light"
            floating
            className="m-1"
            href="https://www.instagram.com/ozzytio/"
            role="button"
          >
            <MDBIcon fab icon="instagram" />
          </MDBBtn>

          <MDBBtn
            outline
            color="light"
            floating
            className="m-1"
            href="https://wa.me/5492613894469?text=Hola%20Ozzy%20!!%20Como%20estas%20?%20Me%20gustar%C3%ADa%20que%20me%20pasaras%20las%20fotos%20y%20los%20videos%20personalmente.%20Gracias%20!!"
            role="button"
          >
            <MDBIcon fab icon="whatsapp" />
          </MDBBtn>
        </section>
      </MDBContainer>

      <div
        className="text-center p-3 fontStyleTitle"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2023 Copyright:
        <a className="text-white text-decoration-none fontStyleTitle">
          {" "}
          OzzyTioFutsal
        </a>
      </div>
    </MDBFooter>
  );
}
