import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { AnimatePresence, motion } from "framer-motion";

import { fadeIn, textVariant } from "../motion";

const Nav = () => {
  const navLinks = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "About Us",
      url: "/about-us",
    },
    {
      title: "Our services",
      url: "/our-services",
    },
    {
      title: "Our Marketplace",
      url: "/marketplace",
    },
    {
      title: "Contact Us",
      url: "/contact-us",
    },
  ];

  const [openNavbar, setOpenNavbar] = useState(false);

  const toggleMenu = () => {
    setOpenNavbar((prev) => !prev);
  };

  return (
    <div className="fixed w-full sm:pt-8  pt-5 top-0 right-0 left-0 z-10 backdrop-blur">
      <div className="bg-white sm:mx-6 px-4 py-6 rounded-lg flex items-center justify-between shadow-md relative">
        <h1 className="font-semibold">
          <Link to="/">
            {" "}
            <img src="/assets/images/logoo.png" alt="" className="w-32 " />
          </Link>
        </h1>
        <div className="flex items-center gap-2 uppercase text-sm">
          <p>Menu</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 cursor-pointer"
            onClick={toggleMenu}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
        <AnimatePresence>
          {openNavbar && (
            <motion.div
              variants={textVariant()}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="absolute h-16 w-full top-24 left-0 bg-white rounded-lg shadow-md"
            >
              <div className="flex md:justify-end justify-between md:gap-6 gap-4 items-center h-full md:px-6 px-2 overflow-x-auto max-w-full w-full max-sm:text-sm">
                {navLinks.map((links, index) => (
                  <motion.div
                    variants={fadeIn("right", "spring", index * 0.5, 0.75)}
                    initial="hidden"
                    animate="show"
                    key={index}
                    className="whitespace-nowrap"
                  >
                    <NavLink
                      to={links.url}
                      className={({ isActive }) =>
                        isActive
                          ? "text-primary-color "
                          : "hover:text-green-400 transition-all"
                      }
                    >
                      {links.title}
                    </NavLink>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Nav;
