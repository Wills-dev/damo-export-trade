import React from "react";
import { Link } from "react-router-dom";

const LowerFooter = () => {
  return (
    <div className="py-6 bg-[#996633] padding">
      <div className="flex item-center gap-4 py-4">
        <a
          href="https://www.facebook.com/profile.php?id=61555330317619
"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/assets/icons/facebook-app-round-icon.svg"
            alt=""
            className="w-6 h-6 object-contain"
          />
        </a>
        <a
          href="https://x.com/Damoexporttrade"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="assets/icons/x-social-media-logo-icon.svg"
            alt=""
            className="w-6 h-6 object-contain"
          />
        </a>
        <a
          href=" https://www.linkedin.com/company/101430554/admin/dashboard/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="assets/icons/linkedin-square-icon.svg"
            alt=""
            className="w-6 h-6 object-contain"
          />
        </a>
        <a
          href="https://www.instagram.com/damoexporttradeafrica/
"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="assets/icons/black-instagram-icon.svg"
            alt=""
            className="w-6 h-6 object-contain"
          />
        </a>
      </div>
      <div className="flex sm:items-center justify-between text-sm  text-white max-sm:flex-col-reverse">
        <p>© 2024 Damo Export Trade Africa. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <Link to="/" className="underline">
            Privacy policy
          </Link>{" "}
          <Link to="/" className="underline">
            Terms of use
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LowerFooter;
