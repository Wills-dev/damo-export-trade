import React from "react";

const OurTrainings = () => {
  return (
    <div className="">
      {" "}
      <div className="bg-white rounded-lg  flex flex-col md:flex-row md:items-center md:justify-between padding">
        <div className="w-full lg:w-1/2 mb-4 md:mb-0 md:mr-6">
          <img
            src="/assets/images/IMG-20240413-WA0005.jpg
    "
            alt="Marketplace Preview"
            className=" w-full h-96 object-cover "
          />
        </div>
        <div className="w-full lg:w-1/2 max-lg:pb-5">
          <h2 className="text-2xl font-bold text-[#996633] mb-4">
            Empowering Farmers Through Expert Training
          </h2>
          <p className="text-gray-600 mb-4">
            Our comprehensive training programs cover essential agricultural
            practices, including selecting high-quality seeds, effective testing
            methods, and optimal growing techniques. These practical and
            accessible programs ensure farmers can achieve higher yields and
            profitability.
          </p>
          <p className="text-gray-600 mb-4">
            Education is the cornerstone of sustainable agriculture and economic
            growth. Our initiatives elevate farming standards across Africa,
            enabling farmers to produce top-quality products that meet
            international standards, maximizing their potential and contributing
            to community development.
          </p>
          <p className="text-gray-600 mb-4">
            We also offer specialized training in agro-processing and product
            manufacturing, helping entrepreneurs in sectors like food,
            cosmetics, and fashion gain practical insights and hands-on
            experience.
          </p>
          <p className="text-gray-600 mb-4">
            Through these diverse training initiatives, we aim to empower
            farmers and entrepreneurs, fostering sustainable growth and economic
            development across Africa. Join us in cultivating not just crops but
            prosperous futures.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurTrainings;
