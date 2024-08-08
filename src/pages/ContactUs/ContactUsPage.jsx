import React, { useEffect } from "react";

import { motion } from "framer-motion";

import ContactUs from "../../components/ContactUs";
import Nav from "../../components/Nav";
import LowerFooter from "../../components/LowerFooter";

const ContactUsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className=" relative ">
        <Nav />
        <div className="container mx-auto padding">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ContactUs />
          </motion.div>
        </div>
      </div>
      <LowerFooter />
    </>
  );
};

export default ContactUsPage;
