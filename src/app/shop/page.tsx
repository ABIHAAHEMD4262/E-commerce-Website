import Header from "@/components/Header";
import React from "react";
import Image from "next/image";
import DeliveryInformation from "@/components/DeliveryInformation";
import Footer from "@/components/Footer";

// Sample Product Data
const products = [
  {
    image: "/images/Trenton.png",
    name: "Trenton modular sofa_3",
    price: "Rs. 25,000.00",
  },
  {
    image: "/images/dinning table.png",
    name: "Granite dining table with dining chair",
    price: "Rs. 25,000.00",
  },
  {
    image: "/images/outdoor table.png",
    name: "Outdoor bar table and stool",
    price: "Rs. 25,000.00",
  },
  {
    image: "/images/Plain.png",
    name: "Plain console with teak mirror",
    price: "Rs. 25,000.00",
  },
  {
    image: "/images/Grain.png",
    name: "Grain coffee table",
    price: "Rs. 15,000.00",
  },
  // Add remaining product data here...
];

function Shop() {
  return (
    <section className="font-poppins">
      {/* Header */}
      <Header backgroundColor="#f8f9fa" />

      {/* Hero Section */}
      <div className="relative w-full h-[316px] bg-cover bg-center bg-[url('/images/shop.png')]">
        <div className="flex flex-col items-center justify-center h-full text-center">
          <Image src="/icons/logo.png" alt="Logo" width={77} height={77} className="mb-0" />
          <h1 className="text-5xl font-medium text-black mb-2">Shop</h1>
          <p className="text-base font-medium text-black">
            <b>Home &gt;</b> Shop
          </p>
        </div>
      </div>

      {/* Filter and Sort Section */}
      <section className="bg-[rgba(250, 244, 244, 1)] flex flex-wrap items-center justify-between px-6 md:px-16 py-4">
        {/* Left Section: Filters */}
        <div className="flex items-center gap-4 flex-wrap">
          <Image src="/icons/filter.png" alt="Filter" width={85} height={30} />
          <Image src="/icons/dots.png" alt="Dots" width={24} height={24} />
          <Image src="/icons/burger.png" alt="Burger" width={24} height={24} />
          <span className="mx-2 hidden sm:inline-block">|</span>
          <p className="text-sm text-black">Showing 1–16 of 32 results</p>
        </div>

        {/* Right Section: Sort */}
        <div className="flex items-center gap-4 flex-wrap">
          <button className="px-3 py-1 border rounded-md">Show</button>
          <button className="px-3 py-1 border bg-white rounded-md text-gray-500">16</button>
          <button className="px-3 py-1 border rounded-md">Sort by</button>
          <button className="px-3 py-1 border bg-white rounded-md text-gray-500">Default</button>
        </div>
      </section>

      {/* Product Grid */}
      <section className="px-6 md:px-16 py-6">
        <div className="grid  sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="w-full max-w-[287px] border bg-[rgba(250, 244, 244, 1)] p-4 flex flex-col items-center mx-auto"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={287}
                height={200}
                className="object-cover mb-4"
                layout="responsive"
              />
              <p className="text-gray-500 text-center mb-2">{product.name}</p>
              <p className="text-black font-medium text-2xl">{product.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Group Icon */}
      <div className="flex justify-center mt-10">
        <Image src="/icons/Group 72.png" alt="Group Icon" width={392} height={60} />
      </div>

      {/* Footer */}
      <DeliveryInformation />
      <Footer />
    </section>
  );
}

export default Shop;
