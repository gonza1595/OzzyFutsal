import logo from "./logo.svg";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import SectionID from "./Components/SectionID/SectionID";
import SectionCategory from "./Components/Sections/SectionCategory";
import LandingPage from "./Components/LandingPage/LandingPage";
import SectionImagesID from "./Components/SectionID/SectionImagesID";
import SectionVideosID from "./Components/SectionID/SectionVideosID";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/landingpage" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/category/:category" element={<SectionCategory />} />
        <Route path="/home/media/:id" element={<SectionID />} />
        <Route
          exact
          path="/home/media/:id/fotos"
          element={<SectionImagesID />}
        />
        <Route
          exact
          path="/home/media/:id/videos"
          element={<SectionVideosID />}
        />
      </Routes>
    </div>
  );
}

export default App;
