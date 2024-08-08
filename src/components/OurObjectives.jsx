import React from "react";

const OurObjectives = () => {
  return (
    <div className="padding flex item-center sm:gap-14 gap-8">
      <div className="flex-1 w-full flex justify-center items-center max-lg:hidden">
        <img
          src="/assets/images/for the page.jpg"
          alt="cashew"
          className="rounded-lg"
        />
      </div>
      <div className="flex-1 w-full flex gap-8 flex-wrap ">
        <div className="max-w-[46%]  max-sm:max-w-full max-sm:flex max-sm:items-center flex-col">
          <img
            src="/assets/icons/globe-line-icon.svg"
            alt="icon"
            className="w-14 h-14 mb-4"
          />
          <h6 className="font-semibold max-sm:text-center">
            Expanding Market Reach
          </h6>
          <p className="text-slate-600 max-sm:text-center">
            We connect African agro producers with global buyers, broadening
            market access and maximizing potential.
          </p>
        </div>
        <div className="max-w-[46%]  max-sm:max-w-full max-sm:flex max-sm:items-center flex-col ">
          <img
            src="/assets/icons/save-plant-icon.svg"
            alt="icon"
            className="w-14 h-14 mb-4"
          />
          <h6 className="font-semibold max-sm:text-center">
            Driving Growth and Profit
          </h6>
          <p className="text-slate-600 max-sm:text-center">
            We ensure consistent growth and profitability with strategic
            initiatives and robust support systems.
          </p>
        </div>
        {/* <div className="max-w-[46%]  max-sm:max-w-full max-sm:flex max-sm:items-center flex-col">
          <img
            src="/assets/icons/announcement-icon.svg"
            alt="icon"
            className="w-14 h-14 mb-4"
          />
          <h6 className="font-semibold max-sm:text-center">
            Championing Sustainable Agriculture
          </h6>
          <p className="text-slate-600 max-sm:text-center">
            We promote sustainable and innovative agricultural practices to
            enhance productivity and environmental health.
          </p>
        </div> */}
        <div className="max-w-[46%]  max-sm:max-w-full max-sm:flex max-sm:items-center flex-col">
          <img
            src="/assets/icons/trade-icon.svg"
            alt="icon"
            className="w-14 h-14 mb-4"
          />
          <h6 className="font-semibold max-sm:text-center">
            Building Trust, Ensuring Transparency
          </h6>
          <p className="text-slate-600 max-sm:text-center">
            We foster trust and transparency in trade by implementing rigorous
            standards and clear communication.
          </p>
        </div>
        <div className="max-w-[46%] max-sm:max-w-full max-sm:flex max-sm:items-center flex-col">
          <img
            src="/assets/icons/boy-services-support-icon.svg"
            alt="icon"
            className="w-14 h-14 mb-4"
          />
          <h6 className="font-semibold max-sm:text-center">
            Empowering Local Communities
          </h6>
          <p className="text-slate-600 max-sm:text-center">
            We empower local communities through education, resources, and
            opportunities, driving social and economic growth
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurObjectives;
