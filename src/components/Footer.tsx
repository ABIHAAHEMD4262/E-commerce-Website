"use client";

import React from "react";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-black font-roboto mt-20 px-6 lg:px-16 py-12">
      {/* Second Section: Logo and Links */}
      <div className="flex flex-col lg:flex-row justify-between gap-12">
        {/* Logo Section */}
        <div className="flex flex-col items-center lg:items-start gap-2 text-gray-500 leading-6">
          <p>400 University Drive Suite 200 Coral</p>
          <p>Gables, FL 33134 USA</p>
        </div>

        {/* Links Section */}
        <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-24 w-full lg:w-2/3">
          {/* Links Column */}
          <div>
            <h4 className="text-lg font-semibold text-gray-500 mb-4">Links</h4>
            <ul className="space-y-3 text-base font-medium text-black">
              <li>Home</li>
              <li>Shop</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Help Column */}
          <div>
            <h4 className="text-lg font-semibold text-gray-500 mb-4">Help</h4>
            <ul className="space-y-3 text-base font-medium text-black">
              <li>Payment Options</li>
              <li>Returns</li>
              <li>Privacy Policies</li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div className="flex flex-col items-center lg:items-start gap-4">
            <h3 className="text-lg font-semibold text-gray-500">Newsletter</h3>
            <div className="flex flex-col lg:flex-row gap-4 w-full">
              {/* Input Box */}
              <form className="flex items-center gap-4 w-full">
                <label htmlFor="email" className="sr-only">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter Your Email Address"
                  className="flex-1 px-4 py-2 border-b-2 border-gray-400 focus:outline-none focus:border-black focus:ring-2 focus:ring-black placeholder-gray-500"
                />
              </form>

              {/* Subscribe Button */}
              <button
                type="submit"
                className="px-4 py-2 text-black font-medium underline underline-offset-4 decoration-2 decoration-black hover:text-gray-700"
              >
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Divider and Footer Text */}
      <div className="mt-16">
        <Image
          src="/icons/Divider.png"
          alt="Divider"
          width={1400}
          height={1}
          className="w-full"
        />
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mt-6 text-sm text-gray-600">
          <h5>2022 Meubel House. All rights reserved</h5>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
