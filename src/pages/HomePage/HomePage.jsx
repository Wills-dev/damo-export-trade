import React, { useEffect } from "react";

import HeroSection from "../../components/HeroSection";
import Nav from "../../components/Nav";
import OurMission from "../../components/OurMission";
import OurObjectives from "../../components/OurObjectives";
import OurPurpose from "../../components/OurPurpose";
import Footer from "../../components/Footer";
import ContactUs from "../../components/ContactUs";
import OurProducts from "../../components/OurProducts";
import MarketPlace from "../../components/MarketPlace";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative w-full min-h-screen bgg">
      <Nav />
      <HeroSection />
      <OurMission />
      <OurObjectives />
      <OurPurpose />
      <OurProducts />
      <MarketPlace />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default HomePage;
