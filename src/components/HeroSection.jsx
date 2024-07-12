import React from "react";

const HeroSection = () => {
  return (
    <div className=" h-[90vh] w-full rounded-b-[5%] hero-pattern bg-center bg-no-repeat bg-cover bg-[url('/assets/images/agro-industry-3158634.jpg')] inset-0">
      <div className="w-full h-full flex items-end padding">
        <div className="rounded-3xl backdrop-blur p-8 max-w-[550px] text-white">
          <h3 className="text-3xl font-medium">
            Redefining African Exports: <br /> Trust, Reliability, and Global
            Connectivity
          </h3>
          <p className="my-6 font-light">
            Join us in empowering African producers and connecting global
            buyers. We bridge the trust gaps that inhibit local and
            international trade, ensuring reliability and fostering local
            empowerment. Discover a new era of African exports with us.
          </p>
          <form
            action=""
            className="flex items-center w-full bg-white rounded-lg py-2 px-3 text-sm"
          >
            <input
              type="search"
              placeholder="Enter your email "
              className="flex-1 text-gray-900 outline-none border-none"
            />{" "}
            <button className="bg-primary-color px-3 py-2 rounded-md">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
