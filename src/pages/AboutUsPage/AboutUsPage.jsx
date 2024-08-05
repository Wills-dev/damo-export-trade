import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { AnimatePresence, motion } from "framer-motion";

import Nav from "../../components/Nav";
import LowerFooter from "../../components/LowerFooter";
import { fadeIn } from "../../motion";

const AboutUsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const partners = [
    "/assets/images/images.png",
    "/assets/images/download.jpeg",
    "/assets/images/rom oil.jpeg",
    "/assets/images/olam.png",
    "/assets/images/download.png",
  ];

  return (
    <>
      <div className="container mx-auto padding space-y-12 relative ">
        <Nav />
        {/* Company Overview */}

        <div className="pt-8" />
        <motion.div
          className="text-center py-16 bg-green-50 w-full "
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold mb-6 text-gray-800">About Us</h1>
        </motion.div>
        <motion.section
          className="py-16 ld:max-w-[70%] max-w-full "
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-medium pb-4">
            Damo Export Trade Africa
          </h1>
          <p className="text-left">
            We empower African producers and connect them with global buyers. By
            bridging the trust gaps that inhibit local and international trade,
            we aim to foster a more inclusive and accessible market for all
            stakeholders involved. Our commitment to this mission is rooted in
            our belief in the vast potential of African agriculture and the
            crucial role it plays in the global economy.
          </p>
          <p className=" text-left py-4">
            We envision a future where African exports are redefined and our
            company stands as a trusted leader in international trade. Our
            vision emphasizes reliability, local empowerment, and global
            connectivity. We are dedicated to ensuring that African producers
            can compete on a global stage with confidence and integrity. By
            fostering strong partnerships and building a robust network, we aim
            to enhance the reputation of African products in the global market.
          </p>
          <p className="text-left py-4">
            Our objectives are multifaceted and focused on driving substantial
            and sustainable growth in the African agro-commodities sector:
          </p>

          <p className="text-left py-4">
            At Damo Export Trade Africa, we are more than just a trading
            company; we are a catalyst for positive change in the African
            agricultural sector. Our comprehensive approach to trade,
            sustainability, and community empowerment sets us apart and drives
            us to continuously seek new ways to innovate and improve. Join us on
            this journey to transform African exports and create a brighter
            future for all.
          </p>
        </motion.section>

        {/* CEO Section */}
        <motion.section
          className=" bg-white p-8 rounded shadow"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex flex-col md:flex-row items-center">
            <motion.img
              src="https://via.placeholder.com/200"
              alt="CEO"
              className="w-48 h-48 object-cover rounded-full mb-4 md:mb-0 md:mr-8 border-4 border-gray-300"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
            />
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-semibold mb-2 text-gray-800">
                Damilola Anifowoshe
              </h2>
              <p className="text-md mb-4 text-gray-500">
                Chief Executive Officer
              </p>
              <p className=" text-gray-600">
                8+ years of sales & marketing prowess and 6 years in
                agribusiness. <br />
                With expertise in digital and traditional marketing, e-commerce,
                and partnership management, he's a proven leader driving groth
                and innovation. Investors seeking a visionary partner in
                agro-commodities will find a trusted ally in Damo Export Trade
                Africa Limited.
              </p>
            </div>
          </div>
          <div className="flex gap-4 justify-between flex-wrap py-16 max-sm:justify-center">
            <div className="w-[200px]">
              <img src="" alt="" className="w-full h-[200px] object-cover" />
              <h6 className="pt-2">Joseph Mathias</h6>
              <p className="font-bold">Procurement Manager</p>
            </div>
            <div className="w-[200px]">
              <img src="" alt="" className="w-full h-[200px] object-cover" />
              <h6 className="pt-2">Chinedu Odunukwe</h6>
              <p className="font-bold">Finance Manager</p>
            </div>
            <div className="w-[200px]">
              <img src="" alt="" className="w-full h-[200px] object-cover" />
              <h6 className="pt-2">Ayobamidele Mebude</h6>
              <p className="font-bold">Programs Manager</p>
            </div>
          </div>
        </motion.section>

        <AnimatePresence>
          <div className="flex justify-between flex-wrap py-16 max-sm:justify-center">
            {partners.map((partner, index) => (
              <motion.div
                variants={fadeIn("right", "spring", index * 0.5, 0.75)}
                initial="hidden"
                animate="show"
                key={index}
                className="p-6 "
              >
                <img src={partner} alt="" className="w-[150px] h-[150px]" />
              </motion.div>
            ))}
          </div>
        </AnimatePresence>

        <div className="border-gray-400 padding flex items-center gap-10 border-y-1 max-md:flex-col ">
          <div className="">
            <h4 className="text-2xl font-medium">
              Need more details? Contact us
            </h4>
            <p className=" font-light">
              We are here to assist. Contact us by phone, email or via our
              social media channels.
            </p>
          </div>
          <Link
            to="/contact-us"
            className="bg-[#20ad04] hover:bg-yellow-800 transition-all text-white w-48 h-12 flex items-center justify-center"
          >
            Contact us
          </Link>
        </div>
      </div>

      <LowerFooter />
    </>
  );
};

export default AboutUsPage;
