import React from "react";

const OurMobileApp = () => {
  return (
    <div className="">
      {" "}
      <div className="bg-white rounded-lg  flex flex-col-reverse md:flex-row md:items-center md:justify-between padding">
        <div className="w-full lg:w-1/2 mb-4 md:mb-0 md:mr-6">
          <img
            src="/assets/images/Mobile app mokup.png
        "
            alt="Marketplace Preview"
            className=" w-full h-auto"
          />
        </div>
        <div className="w-full lg:w-1/2 max-lg:pb-5">
          <h2 className="text-2xl font-bold text-[#996633] mb-4">
            Upcoming Mobile App Launch
          </h2>
          <p className="text-gray-600 mb-4">
            At Damo Export Trade Africa, we are excited to announce that
            alongside the development of our marketplace, we are also working on
            a mobile app to enhance your trading experience. Our mobile app will
            offer the same reliability, transparency, and connectivity that our
            marketplace provides, making it even easier for you to connect with
            global buyers and sellers.
            <p className="text-gray-600 mb-4">
              Stay tuned for updates as we prepare to launch this innovative
              tool to further empower African producers and facilitate seamless
              international trade.
            </p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurMobileApp;
