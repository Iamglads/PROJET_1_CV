import React, { useContext } from "react";
import {
  Realisations,
  Hero,
  Stack,
  Services,
  About,
  Contact,
  Education,
  Blog,
} from "../../components/index";

import { AppContext } from "../../context/context";

const Home = () => {

  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Realisations />
      <Stack />
      <Contact />
    </div>
  );
};

export default Home;
