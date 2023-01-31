import React from "react";
import {
  Realisations,
  Hero,
  Stack,
  Services,
  About,
  Contact,
} from "../../components/index";

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
