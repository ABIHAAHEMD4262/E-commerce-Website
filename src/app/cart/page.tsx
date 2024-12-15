import Header from "@/components/Header";
import React from "react";
import Image from "next/image";
import DeliveryInformation from "@/components/DeliveryInformation";
import Footer from "@/components/Footer";
function cart() {
  return (
    <div className="font-poppins">
  {/* Header */}
  <Header backgroundColor="#f8f9fa" />

  {/* Hero Section */}
  <div
    className="relative w-full h-[316px] bg-cover bg-center"
    style={{ backgroundImage: "url(/images/shop.png)" }}
  >
    <div className="flex flex-col items-center justify-center h-full text-center">
      <Image
        src="/icons/logo.png"
        alt="Logo"
        width={77}
        height={77}
        className="mb-0"
      />
      <h1 className="text-5xl font-medium text-black mb-2">Cart</h1>
      <p className="text-base font-medium text-black">
        <b>Home &gt;</b> Cart
      </p>
    </div>
  </div>

  {/* Main Content */}
  <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-6 mt-[50px] px-4 md:px-8 lg:px-16">
    {/* Products List Section */}
    <div>
      {/* Header Bar */}
      <div
        className="hidden sm:flex justify-between items-center p-4 border-b border-gray-300"
        style={{ backgroundColor: "rgba(255, 249, 229, 1)" }}
      >
        <h3 className="w-1/3 text-center font-semibold text-black">Product</h3>
        <h3 className="w-1/3 text-center font-semibold text-black">Price</h3>
        <h3 className="w-1/5 text-center font-semibold text-black">Quantity</h3>
        <h3 className="w-1/5 text-center font-semibold text-black">Subtotal</h3>
      </div>

      {/* Products */}
      <div className="p-4">
        <div className="flex flex-wrap sm:flex-nowrap justify-between items-center mt-[39px] py-4 border-b border-gray-200">
          <Image
            src="/images/Asgaard.png"
            alt="Sofa"
            width={106}
            height={106}
            style={{ backgroundColor: "rgba(255, 249, 229, 1)" }}
          />
          <p className="w-full sm:w-1/3 text-center text-gray-500 mt-2 sm:mt-0">
            Asgaard sofa
          </p>
          <p className="w-full sm:w-1/3 text-center text-gray-500 mt-2 sm:mt-0">
            Rs. 250,000.00
          </p>
          <div className="w-full sm:w-1/5 text-center mt-2 sm:mt-0">
            <input
              type="number"
              className="w-16 text-center border border-gray-300 rounded-md text-gray-500"
              min="1"
              defaultValue="1"
            />
          </div>
          <p className="w-full sm:w-1/4 text-center text-black mt-2 sm:mt-0">
            Rs. 250,000.00
          </p>
        </div>
      </div>
    </div>

    {/* Cart Totals Section */}
    <div
      className="p-4 rounded-lg shadow-md"
      style={{ backgroundColor: "rgba(255, 249, 229, 1)" }}
    >
      {/* Heading */}
      <h3 className="text-2xl sm:text-4xl font-semibold text-black text-center mb-14">
        Cart Totals
      </h3>

      {/* Subtotal */}
      <div className="flex justify-between items-center  my-9">
        <p className="text-base font-semibold text-black">Subtotal</p>
        <p className="text-base font-normal text-gray-500">Rs. 250,000.00</p>
      </div>

      {/* Total */}
      <div className="flex justify-between items-center  my-9">
        <p className="text-sm sm:text-base font-semibold text-black">Total</p>
        <p className="text-xl font-normal text-amber-500">Rs. 250,000.00</p>
      </div>

      {/* Checkout Button */}
      <button className="my-9 w-full h-[59px] text-black text-xl sm:text-2xl font-normal border border-black py-2 rounded-2xl hover:bg-blue-600 transition duration-200">
        Checkout
      </button>
    </div>
  </div>

  <DeliveryInformation />
  <Footer />
</div>
  );
}
export default cart;
