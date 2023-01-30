import logo from "./logo.svg";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import SectionID from "./Components/SectionID/SectionID";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/home/:id" element={<SectionID />} />
      </Routes>
    </div>
  );
}

export default App;
