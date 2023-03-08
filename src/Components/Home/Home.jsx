import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Sections from "../Sections/Sections";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { changePage } from "../../Redux/Actions";

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
