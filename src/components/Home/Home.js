import React, { useContext } from "react";
import {
  Realisations,
  Hero,
  Stack,
  Services,
  About,
  Contact,
  Education,
} from "../../components/index";

import { AppContext } from "../../context/context";

const Home = () => {
  const { popup } = useContext(AppContext);
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Realisations />
      <Stack />
      <Contact />
      {popup && <Education />}
    </div>
  );
};

export default Home;
