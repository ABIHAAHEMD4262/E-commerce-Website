import React from "react";

const Footer = () => {
  return (
    <footer
  aria-label="Footer section"
  className="bg-white w-full py-16 px-6 md:px-20 lg:px-40 font-poppins relative min-h-[300px]"
>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10">
    {/* Column 1 */}
    <div className="flex flex-col text-left justify-center h-full">
      <p className="text-base mb-2 text-gray-600">400 University Drive Suite 200 Coral</p>
      <p className="text-base mb-2 text-gray-600">Gables,</p>
      <p className="text-base text-gray-600">FL 33134 USA</p>
    </div>

    {/* Column 2 */}
    <div className="flex flex-col items-start justify-center h-full">
      <h4 className="text-base font-semibold mb-8 text-gray-600">Links</h4>
      <ul className="space-y-2 text-sm text-black leading-6">
        <li>Home</li>
        <li>Shop</li>
        <li>Contact</li>
        <li>About</li>
      </ul>
    </div>

    {/* Column 3 */}
    <div className="flex flex-col items-start justify-center h-full">
      <h4 className="text-base font-semibold pb-14 text-gray-600">Help</h4>
      <ul className="space-y-2 text-sm text-black leading-6">
        <li>Payment Options</li>
        <li>Returns</li>
        <li>Privacy Policies</li>
      </ul>
    </div>

    {/* Column 4 */}
    <div className="flex flex-col items-start justify-center h-full leading-6">
      <h4 className="text-base font-medium mb-4 text-gray-600">Newsletter</h4>
      <form className="flex items-center gap-4 w-full">
        <label htmlFor="email" className="sr-only">Email Address</label>
        <input
          id="email"
          type="email"
          placeholder="Enter Your Email Address"
          className="outline-none border-b-2 border-gray-400 bg-transparent placeholder-gray-500 text-black px-2 py-1 focus:border-black flex-1 focus:ring-2 focus:ring-black"
        />
        <button
          type="submit"
          className="text-black font-medium underline underline-offset-4 decoration-2 decoration-black hover:text-gray-700"
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  </div>

  <div className="border-t-4 border-gray-300 mt-2"></div>

  <div className="flex justify-center items-end pt-4">
    <p className="text-black text-sm">
      2022 Meubel House. All rights reserved.
    </p>
  </div>
</footer>
  );
};

export default Footer;
