import React from "react";
import HeroSection from "../components/HeroSection";
import Nav from "../components/Nav";
import OurMission from "../components/OurMission";

const HomePage = () => {
  return (
    <div className="relative w-full min-h-screen">
      <Nav />
      <HeroSection />
      <OurMission />
    </div>
  );
};

export default HomePage;
