import React, { useEffect, useState } from "react";
import { changePage } from "../../Redux/Actions";
import { useDispatch, useSelector } from "react-redux";
import Sections from "../Sections/Sections";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

export default function Home() {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changePage(page));
  }, [page]);

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
