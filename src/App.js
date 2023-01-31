import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { AiOutlineMenuUnfold, AiOutlineClose } from "react-icons/ai";
import { Navbar, Error, Footer, Home, Sidebar } from "./components";
//import "./App.scss";
import { AppContext } from "./context/context";

function App() {
  const { openSidebar, toggleMenu } = useContext(AppContext);
  return (
    <>
      <Sidebar />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
