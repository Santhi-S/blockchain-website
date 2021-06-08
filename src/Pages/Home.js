import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import HeroSection from "../Components/HeroSection";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Navbar toggle={toggle} />
      <HeroSection />
    </>
  );
};

export default Home;
