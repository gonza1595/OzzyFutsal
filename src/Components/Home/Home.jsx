import React, { useEffect, useState } from "react";
import Sections from "../Sections/Sections";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

export default function Home() {
  return (
    <div className="bg-secondary">
      <NavBar />
      <Sections />
      <Footer />
    </div>
  );
}
