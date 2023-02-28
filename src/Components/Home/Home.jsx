import React, { useEffect, useState } from "react";
import Sections from "../Sections/Sections";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

export default function Home() {
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <div>
        <NavBar setPage={setPage} setSearchTerm={setSearchTerm} />
      </div>
      <main className="colorBg pt-5 pb-5">
        <Sections page={page} setPage={setPage} searchTerm={searchTerm} />
      </main>
      <div>
        <Footer />
      </div>
    </div>
  );
}
