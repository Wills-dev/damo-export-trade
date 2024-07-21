import React from "react";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <section className="padding">
      <div className="contact-ctn">
        <div className="title-ctn w-full flex items-center justify-center flex-col py-8">
          <p className="text-sm text-primary-color">HAVE QUESTION?</p>
          <h1 className="md:text-4xl text-2xl font-semibold">CONTACT US</h1>
        </div>
        <div className="contactWrapperForm">
          <div className="flex">
            <div className="w-2/5">
              <div className="addressCtn">
                <div>
                  <h5>Address:</h5>
                  <p>184 Main Collins Street</p>
                </div>
                <div>
                  <h5>Phone:</h5>
                  <p>(226) 446 9371</p>
                </div>
                <div>
                  <h5>Email:</h5>
                  <p>confer@gmail.com</p>
                </div>
                <div>
                  <h5>Website:</h5>
                  <p>www.confer.com</p>
                </div>
              </div>
            </div>
            <div className="w-3/5">
              <form className="contactFormCtn bg-green-50">
                <div className="flex max-md:flex-col w-full gap-6">
                  <div className="flex-1">
                    <input type="text" placeholder="First Name" />
                  </div>
                  <div className="flex-1">
                    <input type="text" placeholder="Last Name" />
                  </div>
                </div>
                <div className="flex max-md:flex-col w-full gap-6">
                  <div className="flex-1">
                    <input
                      type="email"
                      placeholder="E-Mail"
                      className="w-full"
                    />
                  </div>
                  <div className="flex-1">
                    <input type="number" placeholder="Your Number" />
                  </div>
                </div>
                <div className="w-full">
                  <div className=" w-full">
                    <textarea type="text" placeholder="Your Message" rows={2} />
                  </div>
                </div>

                <button
                  type="submit"
                  className="flex items-center justify-between p-3"
                >
                  SEND MESSAGE{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
