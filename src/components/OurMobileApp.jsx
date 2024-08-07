import React from "react";
import { Link } from "react-router-dom";

const OurMobileApp = () => {
  return (
    <div className="">
      <section className=" padding xl:mt-[8rem] mt-0 max-sm:px-2 ">
        <div className="   py-8 rounded-xl  flex-row-reverse flex items-center max-xl:flex-col sm:pb-20 pb-10">
          <div className="flex-1 flex flex-col max-xl:items-center  pl-10 max-xl:w-full max-xl:px-2 max-xl:max-w-[770px]">
            <h2 className="text-2xl font-bold text-[#996633] mb-4">
              Upcoming Mobile App Launch
            </h2>
            <p className="text-gray-600 mb-4">
              At Damo Export Trade Africa, we are excited to announce that
              alongside the development of our marketplace, we are also working
              on a mobile app to enhance your trading experience. Our mobile app
              will offer the same reliability, transparency, and connectivity
              that our marketplace provides, making it even easier for you to
              connect with global buyers and sellers.
            </p>
            <p className="text-gray-600 mb-4">
              Stay tuned for updates as we prepare to launch this innovative
              tool to further empower African producers and facilitate seamless
              international trade.
            </p>

            <div className="xl:hidden flex justify-center">
              <img
                src="/assets/images/iphone.webp"
                alt="lo"
                className="object-cover   w-[350px] rounded-lg h-[372px]"
              />
            </div>
            <h6 className="text-[#fff] text-[18px] leading-[24px] font-[600] mb-3  max-sm:text-[14px] max-sm:leading-[20px] max-sm:font-[500]">
              GET THE APP
            </h6>
            <div className="flex gap-2">
              <Link to="/">
                {" "}
                <img
                  src="/assets/images/Group3.svg"
                  alt="logo"
                  className="object-cover w-[169px] max-md:w-[120px] rounded-lg h-[49px] max-md:h-auto mr-4 max-sm:mr-2"
                />
              </Link>

              <Link to="/">
                <img
                  src="/assets/images/Group4.svg"
                  alt="logo"
                  className="object-cover  w-[169px] max-md:w-[120px] rounded-lg h-[49px] max-md:h-auto"
                />
              </Link>
            </div>
          </div>
          <div className="flex-1 relative max-xl:hidden">
            <img
              src="/assets/images/iphone.webp
        "
              alt="Marketplace Preview"
              className=" w-full h-auto"
            />
          </div>
        </div>
      </section>{" "}
      {/* <div className="bg-white rounded-lg  flex flex-col-reverse md:flex-row md:items-center md:justify-between padding">
        <div className="w-full lg:w-1/3 mb-4 md:mb-0 md:mr-6 ">
          <img
            src="/assets/images/Mobile app mokup.png
        "
            alt="Marketplace Preview"
            className=" w-full h-auto"
          />
        </div>
        <div className="w-full lg:w-2/3 max-lg:pb-5">
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
      </div> */}
    </div>
  );
};

export default OurMobileApp;
