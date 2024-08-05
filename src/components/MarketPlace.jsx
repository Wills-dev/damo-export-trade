import React from "react";
import { Link } from "react-router-dom";

const MarketPlace = () => {
  return (
    <div className="">
      {" "}
      <div className="bg-white rounded-lg  flex flex-col md:flex-row md:items-center md:justify-between padding">
        <div className="w-full lg:w-1/2 max-lg:pb-5">
          <h2 className="text-2xl font-bold text-[#996633] mb-4">
            Introducing Our Online Marketplace
          </h2>
          <p className="text-gray-600 mb-4">
            We are thrilled to announce the upcoming launch of our online
            marketplace, a dedicated platform to showcase and promote authentic
            African products. Our marketplace is designed to bridge the gap
            between African producers and global buyers, creating a seamless and
            trustworthy environment for trade.
          </p>
          <p className="text-gray-600 mb-4">
            The marketplace will offer a wide variety of products, from
            artisanal crafts and textiles to organic agro-commodities and
            innovative goods. Each product is carefully curated to ensure the
            highest standards of quality and authenticity.
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
