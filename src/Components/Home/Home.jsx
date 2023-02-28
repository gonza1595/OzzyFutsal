import React, { useEffect, useState } from "react";
import Sections from "../Sections/Sections";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

export default function Home() {
  const [page, setPage] = useState(1);

  return (
    <div>
      <div>
        <NavBar />
      </div>
      <main className="colorBgSection pt-5 pb-5">
        <Sections page={page} setPage={setPage} />
      </main>
      <div>
        <Footer />
      </div>
    </div>
  );
}
