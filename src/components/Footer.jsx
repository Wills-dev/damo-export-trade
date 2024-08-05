import React from "react";
import LowerFooter from "./LowerFooter";

const Footer = () => {
  return (
    <div className="">
      <div className="padding bg-green-50">
        <div className="bg-center bg-no-repeat bg-cover bg-[url('/assets/images/agro-industry-3158634.jpg')] inset-0 rounded-3xl h-[60vh] py-2 my-6">
          <div className="w-full h-full flex items-end padding px-2">
            <div className="rounded-3xl backdrop-blur p-8 sm:max-w-[550px] max-w-full text-white max-sm:px-4">
              <h3 className="sm:text-3xl text-xl font-medium">
                Redefining African Exports: <br /> Global Connectivity
              </h3>
              <p className="my-6 font-light">
                Follow along as we shape the next generation of work force
                technology.
              </p>
              <form
                action=""
                className="flex items-center max-w-full w-full bg-white rounded-lg py-2 px-3 text-sm  max-sm:flex-col max-sm:items-start"
              >
                <input
                  type="search"
                  placeholder="Enter your email "
                  className="flex-1 text-gray-900 outline-none border-none max-sm:py-2"
                />{" "}
                <button className="btnn">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <LowerFooter />
    </div>
  );
};

export default Footer;
