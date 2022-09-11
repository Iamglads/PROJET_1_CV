import { Routes, Route } from "react-router-dom";
import {
  Sidebar,
  Realisations,
  Education,
  Apropos,
  Experiences,
  Error,
} from "./components";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <div className="app__wrappe">
        <Sidebar />
        <div className="app__content">
          <Routes>
            <Route index path="/" element={<Apropos />} />
            <Route path="/realisations" element={<Realisations />} />
            <Route path="/education" element={<Education />} />
            <Route path="/experiences" element={<Experiences />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
