"use client";
import React from "react";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <div className="flex flex-col h-auto mt-[150px] p-4 lg:p-[80px] gap-y-20  bg-white">
      

      {/* Second Section: Logo and Links */}
      <div className="flex flex-col lg:flex-row justify-between gap-10 items-center lg:items-start mt-0 opacity-100">
        {/* Logo Section */}
        <div className="flex flex-col items-center gap-2 leading-8 lg:items-start pr-0 lg:pr-[10px]">
          <div className="text-base text-gray-500 font-normal leading-8 text-center lg:text-left">
            <p>400 University Drive Suite 200 Coral</p>
            <p> Gables,</p>
            <p>FL 33134 USA</p>
          </div>
        </div>

        {/* Links Section */}
        <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-40 lg:w-2/3 leading-5 text-center lg:text-left">
          <div>
            <h4 className="text-base font-semibold mb-4 text-gray-500">Links</h4>
            <ul className="space-y-5 text-base font-semibold text-black">
              <li>Home</li>
              <li>Shop</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h4 className="text-base font-semibold mb-4 text-gray-500">Help</h4>
            <ul className="space-y-5  text-base font-semibold text-black">
              <li>Payment Options</li>
              <li>Returns</li>
              <li>Privacy Policies</li>
            </ul>
          </div>

          {/* Right Section */}
          {/* Newsletter Subscription */}
          <div className="flex flex-col items-center lg:items-start gap-4 mt-4 lg:mt-0 lg:w-1/2">
            <h3 className="text-lg font-semibold text-gray-500">Newsletter</h3>
            <div className="flex flex-col items-center lg:flex-row lg:items-center gap-4 w-full">
              {/* Input Box */}
              <form className="flex items-center gap-4 w-full">
                <label htmlFor="email" className="sr-only">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter Your Email Address"
                  className="outline-none border-b-2 border-gray-400 bg-transparent placeholder-gray-500 text-black px-2 py-1 focus:border-black flex-1 focus:ring-2 focus:ring-black"
                />
              </form>

              {/* Subscribe Button */}
              <button
                type="submit"
                className="text-black font-medium underline underline-offset-4 decoration-2 decoration-black hover:text-gray-700"
              >
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Divider and Footer Text */}
      <div className="flex flex-col gap-6 mt-10">
        <Image
          src="/icons/Divider.png"
          alt="Divider"
          width={1400}
          height={1}
          className="w-full lg:w-auto"
        />
        <div className="flex flex-col  lg:flex-row  lg:gap-8 mt-5 lg:mt-10 text-black gap-6">
          <h5 className="text-sm text-center">
            2022 Meubel House. All rights reverved
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Footer;