import React, { useEffect, useState } from "react";
import Sections from "../Sections/Sections";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

export default function Home() {
  const [title, setTitle] = useState("");
  const [page, setPage] = useState(1);

  return (
    <div className="bg-secondary">
      <NavBar setTitle={setTitle} page={page} setPage={setPage} />
      <Sections title={title} page={page} setPage={setPage} />
      <Footer />
    </div>
  );
}
