// import React from 'react';

import Hero from "../../components/hero/Hero";

// import Nav from "../../components/navbar/Nav";
import wave from "/images/wave.svg"

const Home = () => {
  return (
    <div className="relative">
      <Hero/>
      <img className="absolute bottom-0 w-full" src={wave} alt="" />
    </div>
  );
};

export default Home;