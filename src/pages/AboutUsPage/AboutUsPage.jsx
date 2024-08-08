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
      <div className="relative ">
        <Nav />
        {/* Company Overview */}
        <div className="container mx-auto padding ">
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
              Damo Export Trade Africa (DETA) connects African producers with
              global markets, facilitating intra-Africa and international trade
              through innovative technology, empowering producers, and enhancing
              production across the continent.
            </p>
            <p className=" text-left py-4">
              <span className="font-bold"> Our mission</span> is to
              revolutionize the agricultural and manufacturing landscape in
              Africa by leveraging technology and strategic partnerships. We aim
              to bridge the trust gaps that inhibit local and international
              trade, ensuring a seamless, inclusive, and sustainable market for
              African products.
            </p>
            <p className=" text-left py-4">
              <span className="font-bold"> Our Vision</span> is to redefine
              African exports by becoming a trusted leader in
              African-international trade, emphasizing reliability, local
              empowerment, and global connectivity.
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
              us to continuously seek new ways to innovate and improve. Join us
              on this journey to transform African exports and create a brighter
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
            <h4 className="text-3xl font-bold pb-16 text-center">Our Team</h4>
            <div className="flex flex-col md:flex-row items-center">
              <motion.img
                src="/assets/images/WhatsApp Image 2024-01-24 at 10.24.34_1459d866.jpg"
                alt="CEO"
                className="w-48 h-48 object-cover rounded-full mb-4 md:mb-0 md:mr-8"
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
                  With expertise in digital and traditional marketing,
                  e-commerce, and partnership management, he's a proven leader
                  driving groth and innovation. Investors seeking a visionary
                  partner in agro-commodities will find a trusted ally in Damo
                  Export Trade Africa Limited.
                </p>
              </div>
            </div>
            <div className="flex gap-4 justify-between flex-wrap py-16 max-sm:justify-center">
              {/* <div className="w-[150px]">
                <img
                  src="/assets/images/empty-user.webp"
                  alt=""
                  className="w-full h-[150px] object-cover"
                />
                <h6 className="pt-2 text-sm">Victor Ejiogu</h6>
                <p className="font-bold text-sm">Tech Lead</p>
              </div> */}
              <div className="w-[150px]">
                <img
                  src="/assets/images/joseph.png"
                  alt=""
                  className="w-full h-[150px] object-cover"
                />
                <h6 className="pt-2 text-sm">Joseph Mathias</h6>
                <p className="font-bold text-sm">Procurement Manager</p>
              </div>
              {/* <div className="w-[150px]">
                <img
                  src="/assets/images/empty-user.webp"
                  alt=""
                  className="w-full h-[150px] object-cover"
                />
                <h6 className="pt-2 text-sm">Mildred Jaja</h6>
                <p className="font-bold text-sm">Legal</p>
              </div> */}
              <div className="w-[150px]">
                <img
                  src="/assets/images/chinedu.png"
                  alt=""
                  className="w-full h-[150px] object-cover"
                />
                <h6 className="pt-2 text-sm">Chinedu Odunukwe</h6>
                <p className="font-bold text-sm">Finance Manager</p>
              </div>
              <div className="w-[150px]">
                <img
                  src="/assets/images/Bam BAM.jpg"
                  alt=""
                  className="w-full h-[150px] object-cover"
                />
                <h6 className="pt-2 text-sm">Ayobamidele Mebude</h6>
                <p className="font-bold text-sm">Programs Manager</p>
              </div>
            </div>
          </motion.section>

          <AnimatePresence>
            <h4 className="text-3xl font-bold pt-16 pb-2 text-center">
              Our Partners
            </h4>
            <div className="flex justify-between flex-wrap pb-16 max-sm:justify-center">
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
      </div>
      <LowerFooter />
    </>
  );
};

export default AboutUsPage;
