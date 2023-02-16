import React, { useEffect, useState } from "react";
import Sections from "../Sections/Sections";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

export default function Home() {
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="bg-white">
      <NavBar setPage={setPage} setSearchTerm={setSearchTerm} />
      <Sections page={page} setPage={setPage} searchTerm={searchTerm} />
      <Footer />
    </div>
  );
}
