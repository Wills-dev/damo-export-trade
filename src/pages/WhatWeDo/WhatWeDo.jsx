import React from "react";
import { motion } from "framer-motion";

import Nav from "../../components/Nav";

const WhatWeDo = () => {
  return (
    <div className="container mx-auto padding space-y-12 relative ">
      <Nav />
      <div className="pt-8" />
      <motion.div
        className="text-center py-16 bg-green-50 w-full "
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold mb-6 text-gray-800">What we do</h1>
      </motion.div>
    </div>
  );
};

export default WhatWeDo;
