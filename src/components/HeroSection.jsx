import React, { useEffect, useState } from "react";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % homeImageSlider.length);
    }, 5000);

    return () => clearInterval(slideInterval);
  }, []);

  const homeImageSlider = [
    {
      src: "/assets/images/agro-industry-3158634.jpg",
    },
    {
      src: "/assets/images/cashew-251393_1280.jpg",
    },
    {
      src: "/assets/images/Cashew field.jpg",
    },
  ];

  return (
    <section className=" h-[90vh] w-full  inset-0 relative">
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
            className="w-full h-full object-cover sm:rounded-b-[5%] rounded-b-3xl"
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
      <div className="w-full h-full flex items-end padding">
        <div className="rounded-3xl backdrop-blur p-8 sm:max-w-[550px] max-w-full text-white max-sm:px-4">
          <h3 className="sm:text-3xl text-xl  font-medium">
            Redefining African Exports: <br /> Trust, Reliability, and Global
            Connectivity
          </h3>
          <h6 className="sm:text-xl pt-6">
            Your trusted agro-commodity supplier in and from Africa.
          </h6>
          <p className="my-6 font-light max-sm:text-sm">
            Join us in empowering African producers and connecting global
            buyers. We bridge the trust gaps that inhibit local and
            international trade, ensuring reliability and fostering local
            empowerment. Discover a new era of African exports with us.
          </p>
          <form
            action=""
            className="flex items-center max-w-full w-full sm:bg-white rounded-lg py-2 sm:px-3 text-sm max-sm:flex-col max-sm:items-start gap-2"
          >
            <input
              type="search"
              placeholder="Enter your email "
              className="flex-1 w-full text-gray-900 outline-none border-none max-sm:py-2 rounded-lg bg-white max-sm:px-2"
            />{" "}
            <button className="btnn">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
