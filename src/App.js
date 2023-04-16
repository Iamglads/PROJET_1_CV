import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { AiOutlineMenuUnfold, AiOutlineClose } from "react-icons/ai";
import {
  Navbar,
  Error,
  Footer,
  Home,
  Sidebar,
  ArticleDetails,
} from "./components";
//import "./App.scss";
import { AppContext } from "./context/context";

function App() {
  const { sidebar } = useContext(AppContext);
  return (
    <>
      <Navbar />
      {sidebar && <Sidebar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<ArticleDetails />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
