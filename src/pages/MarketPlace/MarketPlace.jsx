import React from "react";
import Countdown from "react-countdown";
import Nav from "../../components/Nav";

const MarketPlace = () => {
  const launchDate = new Date("2025-01-01T00:00:00");

  const countdownRenderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <span>Marketplace is now live!</span>;
    } else {
      return (
        <div className=" text-center bg-green-50 p-14 rounded-2xl">
          <h1 className="sm:text-2xl font-bold mb-4 text-[#996633]">
            Marketplace Coming Soon
          </h1>
          <div className="md:text-4xl text-xl font-bold mb-2">
            {days}d : {hours}h : {minutes}m : {seconds}s
          </div>
          <div className=" text-primary-color max-sm:text-sm">
            Countdown to January 1st, 2025
          </div>
        </div>
      );
    }
  };
  return (
    <div className="relative w-full h-screen padding">
      <Nav />
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/images/ecommerce-3640321_1280.jpg')",
        }}
      />
      <div className="relative flex flex-col justify-center items-center w-full h-full  backdrop-blur-sm">
        <Countdown date={launchDate} renderer={countdownRenderer} />
      </div>
    </div>
  );
};

export default MarketPlace;
