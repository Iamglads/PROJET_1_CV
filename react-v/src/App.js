import { Routes, Route } from "react-router-dom";
import {
  Sidebar,
  Realisations,
  Education,
  Apropos,
  Experiences,
} from "./components";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <div className="app__wrappe">
        <Sidebar />
        <div className="app__content">
          <Routes>
            <Route path="/realisations" element={<Realisations />} />
          </Routes>
          <Routes>
            <Route path="/a-propos" element={<Apropos />} />
          </Routes>
          <Routes>
            <Route path="/education" element={<Education />} />
          </Routes>
          <Routes>
            <Route path="/experiences" element={<Experiences />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
