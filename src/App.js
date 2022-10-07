import { Routes, Route } from "react-router-dom";
import {
  Sidebar,
  Realisations,
  Education,
  Apropos,
  Experiences,
  Contact,
  Error,
} from "./components";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <p
        style={{
          with: "100%",
          marginTop: "60px",
          padding: "40px",
          fontSize: "20px",
          textJustify: "center",
        }}
      >
        J'apporte des modifications sur cette page actuellement.
      </p>
      {/* <div className="app__wrappe">
        <Sidebar />
        <div className="app__content">
          <Routes>
            <Route index path="/" element={<Apropos />} />
            <Route path="/realisations" element={<Realisations />} />
            <Route path="/education" element={<Education />} />
            <Route path="/experiences" element={<Experiences />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
      </div> */}
    </div>
  );
}

export default App;
