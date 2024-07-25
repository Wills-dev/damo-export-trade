import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage";
import MarketPlace from "./pages/MarketPlace/MarketPlace";
import ContactUsPage from "./pages/ContactUs/ContactUsPage";
import WhatWeDo from "./pages/WhatWeDo/WhatWeDo";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/what-we-do" element={<WhatWeDo />} />
        <Route path="/marketplace" element={<MarketPlace />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
      </Routes>
    </>
  );
}

export default App;
