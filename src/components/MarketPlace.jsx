import React from "react";
import { Link } from "react-router-dom";

const MarketPlace = () => {
  return (
    <div className="">
      {" "}
      <div className="bg-white rounded-lg  flex flex-col md:flex-row md:items-center md:justify-between padding">
        <div className="w-full lg:w-1/2 max-lg:pb-5">
          <h2 className="sm:text-2xl font-bold text-[#996633] text-lg mb-4 max-sm:text-center">
            Introducing Our Online Marketplace
          </h2>
          <p className="text-gray-600 mb-4">
            Our marketplace features high-quality African products, providing a
            seamless and trustworthy trading environment for global buyers. We
            offer a diverse range of artisanal crafts, organic agro-commodities,
            minerals, furniture, cosmetics, entertainment, and professional
            services. Each product is meticulously curated to ensure top quality
            and authenticity.
          </p>
          <p className="text-gray-600 mb-4">
            We believe in the power of sustainable and ethical trade. Our
            platform is committed to promoting fair trade practices, supporting
            local communities, and fostering economic growth. By choosing to
            shop with us, you are contributing to a positive impact on the lives
            of many African producers and their communities.
          </p>
          <p className="text-gray-600 mb-4">
            Mark your calendars for our official launch in January 2025. Join us
            in celebrating the beauty and diversity of African products and be a
            part of this incredible journey. Stay tuned for more updates and get
            ready to explore our marketplace soon.
          </p>
          <Link to="/marketplace" className="btnn">
            Visit Our Marketplace
          </Link>
        </div>
        <div className="w-full lg:w-1/2 mb-4 md:mb-0 md:mr-6">
          <img
            src="/assets/images/Ecommerce mock up.png
            "
            alt="Marketplace Preview"
            className=" w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default MarketPlace;
