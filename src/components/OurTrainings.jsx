import React, { useEffect, useState } from "react";

const OurTrainings = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % homeImageSlider.length);
    }, 5000);

    return () => clearInterval(slideInterval);
  }, []);

  const homeImageSlider = [
    {
      src: "/assets/images/IMG-20240413-WA0005.jpg",
    },
    {
      src: "/assets/images/IMG-20240413-WA0008.jpg",
    },
    {
      src: "/assets/images/IMG-20240413-WA0003.jpg",
    },
  ];

  return (
    <div className="">
      {" "}
      <div className="bg-white rounded-lg  flex flex-col md:flex-row md:items-center md:justify-between padding">
        <div className="w-full lg:w-1/2 mb-4 md:mb-0 md:mr-6 sm:h-96 h-64 relative">
          {homeImageSlider.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={image.src}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {homeImageSlider.map((_, index) => (
              <span
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-4 h-4 rounded-full border-1 cursor-pointer ${
                  index === currentSlide
                    ? "bg-[#FFcc00] border-[#FFcc00]"
                    : "border-gray-300"
                }`}
              />
            ))}
          </div>
          {/* <img
            src="/assets/images/IMG-20240413-WA0005.jpg
    "
            alt="Marketplace Preview"
            className=" w-full h-96 object-cover "
          /> */}
        </div>
        <div className="w-full lg:w-1/2 max-lg:pb-5">
          <h2 className="sm:text-2xl font-bold text-[#996633] text-lg mb-4 max-sm:text-center">
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
