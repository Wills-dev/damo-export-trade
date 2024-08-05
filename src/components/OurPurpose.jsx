import React from "react";
import { Link } from "react-router-dom";

const OurPurpose = () => {
  return (
    <section className="padding flex items-center max-lg:flex-col py-12">
      <div className="flex-1">
        <h6 className="small-title ">Our Purpose</h6>
        <h5 className="big-title text-4xl">
          We foster global connections, empower local producers, ensure
          sustainable practices while leveraging innovative technology.
        </h5>
      </div>
      <div className="flex-1">
        <p className="text-slate-600">
          At Damo Export Trade Africa, our mission is to empower African
          producers by connecting them with global buyers, bridging the trust
          gaps that hinder local and international trade. We strive to redefine
          African exports by becoming a trusted leader in international trade,
          emphasizing reliability, local empowerment, and global connectivity.
          Our commitment extends to enhancing market access for African
          producers, fostering trust and transparency in trade, promoting
          sustainable and innovative agricultural practices, leveraging
          technology, supporting local community empowerment, and driving
          consistent growth and profitability. Join us as we transform the
          landscape of African exports, creating a thriving, interconnected
          global market that benefits all stakeholders.
        </p>
        <Link to="/about-us">
          <button className="btnn my-4">More about us</button>
        </Link>
      </div>
    </section>
  );
};

export default OurPurpose;
