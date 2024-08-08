import React from "react";
import { motion } from "framer-motion";

import Nav from "../../components/Nav";
import LowerFooter from "../../components/LowerFooter";

const WhatWeDo = () => {
  const services = [
    {
      title: "Expanding Market Reach",
      caption: "Enhance Market Access for African Agro Commodities",
      description:
        "We connect African agro producers with global buyers, broadening market access and maximizing potential. By creating efficient and reliable channels, we ensure that local producers can reach a wider audience and foster mutually beneficial trade relationships.",
    },
    {
      title: "Building Trust and Ensuring Transparency",
      caption: "Foster Trust and Transparency in Trade",
      description:
        "Trust and transparency are at the core of our operations. We foster an environment where both buyers and sellers feel secure and informed by implementing rigorous standards and clear communication, eliminating uncertainties and building lasting trust in international trade.",
    },
    {
      title: "Championing Sustainable Agriculture",
      caption: "Promote Sustainable and Innovative Agriculture",
      description:
        "Sustainability and innovation are key to the future of agriculture. We promote practices that increase productivity and ensure long-term environmental health. By supporting innovative solutions, we help farmers adopt sustainable methods that benefit both their livelihoods and the planet.",
    },
    {
      title: "Empowering Local Communities",
      caption: "Support Local Community Empowerment",
      description:
        "We believe in the power of local communities. Our efforts are focused on empowering these communities through education, resources, and opportunities. By supporting local empowerment, we contribute to the social and economic development of the regions we work with.",
    },
    {
      title: "Driving Growth and Profit",
      caption: "Drive Consistent Growth and Profitability",
      description:
        "Consistent growth and profitability are essential for sustainable development. We are committed to driving these through strategic initiatives and robust support systems, creating a thriving business environment that ensures long-term success for all stakeholders.",
    },
    {
      title: "Empowering Farmers Through Expert Training",
      caption: "Training Farmers for Success",
      description:
        "Our expert-led training programs cover the best agricultural products and practices. We teach farmers how to select high-quality seeds and crops, use effective testing methods, and apply optimal growing techniques. By equipping farmers with this critical knowledge, we help them maximize yields and profitability.",
    },
  ];
  return (
    <>
      <div className="relative ">
        <Nav />
        <div className="container mx-auto padding ">
          <div className="pt-8" />
          <motion.div
            className="text-center py-16 bg-green-50 w-full "
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl font-bold mb-6 text-gray-800">
              Our Services
            </h1>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-16">
            <div className="flex gap-3">
              <img
                src="/assets/images/WhatsApp Image 2024-04-13 at 08.53.28_48f5362d.jpg"
                alt=""
                className="w-44 h-44 max-sm:hidden rounded-full object-cover "
              />
              <div className="flex-1">
                <h6 className="font-semibold text py-2">
                  SUPPLY QUALITY CONTROL (SQC)
                </h6>
                <p>
                  our Supply Quality Control (SQC) division handles the offline
                  part of the business (product sourcing, aggregating, quality
                  control and logistics)
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <img
                src="/assets/images/IMG-20240413-WA0005.jpg"
                alt=""
                className="w-44 h-44 max-sm:hidden rounded-full object-cover"
              />
              <div className="flex-1">
                <h6 className="font-semibold text py-2">DETA AGRIHEALTH</h6>
                <p>
                  DETA AgriHealth is dedicated to the well-being and empowerment
                  of producers, aggregators, through training and subsidized
                  healthcare service.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <img
                src="/assets/images/IMG-20240413-WA0008.jpg"
                alt=""
                className="w-44 h-44 max-sm:hidden rounded-full object-cover"
              />
              <div className="flex-1">
                <h6 className="font-semibold text py-2">DETA-WIAB</h6>
                <p>
                  The Women Inclusivity in Agribusiness (WIAB) division focuses
                  on poverty alleviation and job creation for women by
                  empowering them with agro-processing training.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <img
                src="/assets/images/market.webp"
                alt=""
                className="w-44 h-44 max-sm:hidden rounded-full object-contain"
              />
              <div className="flex-1">
                <h6 className="font-semibold text py-2">ONLINE MARKETPLACE</h6>
                <p className="text-sm">
                  Our online marketplace connects global buyers with African
                  producers, bridging trust gaps and fostering sustainable
                  economic growth. It empowers African talents, boosts
                  production to meet demand, and ensures a reliable platform for
                  quality products and services across Africa, promoting
                  long-term trust and collaboration.
                </p>
              </div>
            </div>
          </div>
          <h6 className="text-primary-color  font-medium text-xl text-center pt-16">
            OUR IMPACT
          </h6>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-sm hover:shadow transition-shadow duration-300"
              >
                <h2 className="sm:text-xl text-lg font-semibold mb-4 text-gray-800">
                  {service.title}
                </h2>
                <h3 className="sm:text-lg font-medium mb-2 text-gray-600">
                  {service.caption}
                </h3>
                <p className="text-gray-700 max-sm:text-sm">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <LowerFooter />
    </>
  );
};

export default WhatWeDo;
