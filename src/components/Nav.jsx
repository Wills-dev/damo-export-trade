import React from "react";

const Nav = () => {
  return (
    <div className="fixed w-full top-6 right-0 left-0">
      <div className="bg-white mx-6 p-4 rounded-lg flex items-center justify-between shadow-md">
        <h1 className="font-semibold">Damo Export Trade Africa</h1>
        <div className="flex items-center gap-2 uppercase text-sm">
          <p>Menu</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Nav;
