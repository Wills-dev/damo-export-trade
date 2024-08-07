import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const products = [
  {
    name: "Dried Chili",
    imageUrl: "/assets/images/red-chili-4928393_1280.jpg",
  },

  {
    name: "Raw Cashew Nuts",
    imageUrl: "/assets/images/cashew-52064_1280.jpg",
  },
  { name: "Paddy Rice", imageUrl: "/assets/images/paddy rice (2).jpg" },
  { name: "Soya", imageUrl: "/assets/images/soybeans-2039642_1280.jpg" },

  {
    name: "Sesame Seeds",
    imageUrl: "/assets/images/sesame-1155935_1280.jpg",
  },
  { name: "Ginger", imageUrl: "/assets/images/ginger-3444086_1280.jpg" },
  { name: "Corn", imageUrl: "/assets/images/maize (2).jpg" },
  {
    name: "Sheanut",
    imageUrl: "/assets/images/hazelnuts-73939_1280.jpg",
  },
];

const OurProducts = () => {
  return (
    <div className="padding">
      <div className="title-ctn w-full flex items-center justify-center flex-col py-8">
        <h1 className="md:text-4xl text-2xl font-semibold">OUR PRODUCTS</h1>
      </div>
      {/* <section className="grid grid-cols-10 grid-rows-6 gap-2 w-full h-[50vh]">
        <div className="col-span-3 row-span-6 bg-blue-200 h-full w-full"></div>
        <div className="col-span-2 row-span-1 bg-blue-400"></div>
      </section> */}
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-6 grid-rows-2 gap-2 ">
          <motion.div
            key={products[0].name}
            className="relative overflow-hidden max-sm:col-span-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <img
              src={products[0].imageUrl}
              alt={products[0].name}
              className="w-full h-full object-cover"
            />
            <motion.div
              className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            >
              <motion.p
                className="text-white text-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {products[0].name}
              </motion.p>
            </motion.div>
          </motion.div>
          <motion.div
            className="relative  col-span-2  max-sm:col-span-6 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <img
              src={products[1].imageUrl}
              alt={products[1].name}
              className="w-full h-full object-cover"
            />
            <motion.div
              className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            >
              <motion.p
                className="text-white text-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {products[1].name}
              </motion.p>
            </motion.div>
          </motion.div>
          <motion.div
            className="relative col-start-2 col-end-4 row-start-1 row-end-3  max-sm:col-span-6 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <img
              src={products[2].imageUrl}
              alt={products[2].name}
              className="w-full h-full object-cover"
            />
            <motion.div
              className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            >
              <motion.p
                className="text-white text-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {products[2].name}
              </motion.p>
            </motion.div>
          </motion.div>
          {products.slice(3).map((product) => (
            <motion.div
              key={product.name}
              className="relative overflow-hidden max-sm:col-span-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <motion.div
                className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                <motion.p
                  className="text-white text-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {product.name}
                </motion.p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurProducts;
