import React from "react";

import { motion } from "framer-motion";

import ContactUs from "../../components/ContactUs";
import Nav from "../../components/Nav";

const ContactUsPage = () => {
  return (
    <div className="container mx-auto padding space-y-12 relative ">
      <Nav />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <ContactUs />
      </motion.div>
    </div>
  );
};

export default ContactUsPage;
