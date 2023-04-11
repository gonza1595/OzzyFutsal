import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import SectionID from "./Components/SectionID/SectionID";
import SectionCategory from "./Components/Sections/SectionCategory";
import LandingPage from "./Components/LandingPage/LandingPage";
import SectionImagesID from "./Components/SectionID/SectionImagesID";
import SectionVideosID from "./Components/SectionID/SectionVideosID";
import Favorites from "./Components/Favorites/Favorites";
import BestGoals from "./Components/BestGoals/BestGoals";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/landingpage" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route
          path="/landingpage/home/category/:category"
          element={<SectionCategory />}
        />
        <Route path="/home/section/:id" element={<SectionID />} />
        <Route
          exact
          path="/home/section/:id/video/:videoid"
          element={<SectionVideosID />}
        />
        <Route
          exact
          path="/home/media/:id/fotos"
          element={<SectionImagesID />}
        />
        <Route exact path="/landingpage/favorites" element={<Favorites />} />
        <Route exact path="/favorites" element={<Favorites />} />
        <Route exact path="/landingpage/bestgoals" element={<BestGoals />} />
        <Route exact path="/bestgoals" element={<BestGoals />} />
      </Routes>
    </div>
  );
}

export default App;
