import React from "react";
import Sections from "../Sections/Sections";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

export default function Home() {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <main className="colorBgSection pt-5 pb-5">
        <Sections />
      </main>
      <div>
        <Footer />
      </div>
    </div>
  );
}
