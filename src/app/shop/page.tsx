import Header from "@/components/Header";
import React from "react";
import Image from "next/image";
import DeliveryInformation from "@/components/DeliveryInformation";
import Footer from "@/components/Footer";

function shop () {
    return (
       <section className="font-poppins">
        <Header backgroundColor="#f8f9fa"/>
        
    <div className="relative w-full h-[316px] bg-cover bg-center" style={{ backgroundImage: 'url(/images/shop.png)' }}>
      <div className="flex flex-col items-center justify-center h-full text-center">
        <Image src="/icons/logo.png" alt="Logo" width={77} height={77} className="mb-0" />
        <h1 className="text-5xl md:text-5xl font-medium text-black mb-2">Shop</h1>
        <p className="text-base font-medium text-black">Home &gt; Shop</p>
      </div>
    </div>

    {/* Shop Info Box */}
    <div className="bg-[rgba(250, 244, 244, 1)] h-[100px] flex items-center justify-between px-6 md:px-16">
        {/* Left side with icons and separator */}
        <div className="flex items-center gap-4">
          <Image src="/icons/filter.png" alt="Icon 1" width={85} height={30} />
          <Image src="/icons/dots.png" alt="Icon 2" width={24} height={24} />
          <Image src="/icons/burger.png" alt="Icon 3" width={24} height={24} />
          <span className="mx-2">|</span>
          <p className="text-sm text-black">Showing 1–16 of 32 results</p>
        </div>

        {/* Right side with small boxes */}
        <div className="flex items-center gap-4 font-normal text-xl">
          <div className="px-3 py-1  rounded-md ">Show</div>
          <div className="px-3 py-1 bg-white rounded-md text-[rgba(159, 159, 159, 1)]" >16</div>
          <div className="px-3 py-1  rounded-md">Sort by</div>
          <div className="px-3 py-1 bg-white rounded-md text-[rgba(159, 159, 159, 1)]">Default</div>
        </div>
      </div>
      

      {/* Product Rows with 16 individual boxes */}
<div className="px-6 md:px-16 py-6">
  {/* Adjusting grid to change columns based on screen size */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-6">
    {/* Box 1 */}
    <div className="w-full max-w-[287px] h-[397px] border bg-[rgba(250, 244, 244, 1)] p-4 flex flex-col items-center">
      <Image src="/images/Trenton.png" alt="Product 1" width={287} height={200} className="mb-4" />
      <p className="text-[rgba(159, 159, 159, 1)] text-center mb-2">Trenton modular sofa_3</p>
      <p className="text-black font-medium text-2xl">Rs. 25,000.00</p>
    </div>

    {/* Box 2 */}
    <div className="w-full max-w-[287px] h-[397px] border bg-[rgba(250, 244, 244, 1)] p-4 flex flex-col items-center">
      <Image src="/images/dinning table.png" alt="Product 2" width={287} height={200} className="mb-4" />
      <p className="text-[rgba(159, 159, 159, 1)] text-center mb-2">Granite dining table with</p>
      <p className="text-[rgba(159, 159, 159, 1)] text-center mb-2"> dining chair</p>
      <p className="text-black font-medium text-2xl">Rs. 25,000.00</p>
    </div>

    {/* Box 3 */}
    <div className="w-full max-w-[287px] h-[397px] border bg-[rgba(250, 244, 244, 1)] p-4 flex flex-col items-center">
      <Image src="/images/outdoor table.png" alt="Product 3" width={287} height={200} className="mb-4" />
      <p className="text-[rgba(159, 159, 159, 1)] text-center mb-2">Outdoor bar table and </p>
      <p className="text-[rgba(159, 159, 159, 1)] text-center mb-2">stool</p>
      <p className="text-black font-medium text-2xl">Rs. 25,000.00</p>
    </div>

    {/* Box 4 */}
    <div className="w-full max-w-[287px] h-[397px] border bg-[rgba(250, 244, 244, 1)] p-4 flex flex-col items-center">
      <Image src="/images/Plain.png" alt="Product 4" width={287} height={200} className="mb-4" />
      <p className="text-[rgba(159, 159, 159, 1)] text-center mb-2">Plain console with teak </p>
      <p className="text-[rgba(159, 159, 159, 1)] text-center mb-2">mirror</p>
      <p className="text-black font-medium text-2xl">Rs. 25,000.00</p>
    </div>
  </div>

  {/* Repeat similar responsive structure for other product rows */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-6">
    {/* Box 5 */}
    <div className="w-full max-w-[287px] h-[397px] border bg-[rgba(250, 244, 244, 1)] p-4 flex flex-col items-center">
      <Image src="/images/Grain.png" alt="Product 5" width={287} height={200} className="mb-4" />
      <p className="text-[rgba(159, 159, 159, 1)] text-center mb-2">Grain coffee table</p>
      <p className="text-black font-medium text-2xl">Rs. 15,000.00</p>
    </div>

    {/* Box 6 */}
    <div className="w-full max-w-[287px] h-[397px] border bg-[rgba(250, 244, 244, 1)] p-4 flex flex-col items-center">
      <Image src="/images/Kent.png" alt="Product 6" width={287} height={200} className="mb-4" />
      <p className="text-[rgba(159, 159, 159, 1)] text-center mb-2">Kent coffee table</p>
      <p className="text-black font-medium text-2xl">Rs. 225,000.00</p>
    </div>

    {/* Box 7 */}
    <div className="w-full max-w-[287px] h-[397px] border bg-[rgba(250, 244, 244, 1)] p-4 flex flex-col items-center">
      <Image src="/images/Round.png" alt="Product 7" width={287} height={200} className="mb-4" />
      <p className="text-[rgba(159, 159, 159, 1)] text-center mb-2">Round coffee table_color </p>
      <p className="text-[rgba(159, 159, 159, 1)] text-center mb-2"> 2</p>
      <p className="text-black font-medium text-2xl">Rs. 251,000.00</p>
    </div>

    {/* Box 8 */}
    <div className="w-full max-w-[287px] h-[397px] border bg-[rgba(250, 244, 244, 1)] p-4 flex flex-col items-center">
      <Image src="/images/teak.png" alt="Product 8" width={287} height={200} className="mb-4" />
      <p className="text-[rgba(159, 159, 159, 1)] text-center mb-2">Reclaimed teak coffee</p>
      <p className="text-[rgba(159, 159, 159, 1)] text-center mb-2"> table</p>
      <p className="text-black font-medium text-2xl">Rs. 25,200.00</p>
    </div>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-6">
  {/* Box 9 */}
  <div className="w-full md:w-[287px] h-[397px] border bg-[rgba(250, 244, 244, 1)] p-4 flex flex-col items-center">
    <Image src="/images/Plain console_ 1.png" alt="Product 9" width={287} height={200} className="mb-4" />
    <p className="text-[rgba(159, 159, 159, 1)] text-center mb-2">Plain console_</p>
    <p className="text-black font-medium text-2xl">$129.99</p>
  </div>

  {/* Box 10 */}
  <div className="w-full md:w-[287px] h-[397px] border bg-[rgba(250, 244, 244, 1)] p-4 flex flex-col items-center">
    <Image src="/images/Reclaimed teak Sideboard 1.png" alt="Product 10" width={287} height={200} className="mb-4" />
    <p className="text-[rgba(159, 159, 159, 1)] text-center mb-2">Product description line 1</p>
    <p className="text-black font-medium text-2xl">Rs. 258,200.00</p>
  </div>

  {/* Box 11 */}
  <div className="w-full md:w-[287px] h-[397px] border bg-[rgba(250, 244, 244, 1)] p-4 flex flex-col items-center">
    <Image src="/images/four chairs.png" alt="Product 11" width={287} height={200} className="mb-4" />
    <p className="text-[rgba(159, 159, 159, 1)] text-center mb-2">Reclaimed teak Sideboard</p>
    <p className="text-black font-medium text-2xl">Rs. 20,000.00</p>
  </div>

  {/* Box 12 */}
  <div className="w-full md:w-[287px] h-[397px] border bg-[rgba(250, 244, 244, 1)] p-4 flex flex-col items-center">
    <Image src="/images/chairs.png" alt="Product 12" width={287} height={200} className="mb-4" />
    <p className="text-[rgba(159, 159, 159, 1)] text-center mb-2">SJP_0825</p>
    <p className="text-black font-medium text-2xl">SJP_0825</p>
  </div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-6">
  {/* Box 13 */}
  <div className="w-full md:w-[287px] h-[397px] border bg-[rgba(250, 244, 244, 1)] p-4 flex flex-col items-center">
    <Image src="/images/Granite square side table 1.png" alt="Product 13" width={287} height={200} className="mb-4" />
    <p className="text-[rgba(159, 159, 159, 1)] text-center mb-2">Granite square side table</p>
    <p className="text-black font-medium text-2xl">Rs. 258,800.00</p>
  </div>

  {/* Box 14 */}
  <div className="w-full md:w-[287px] h-[397px] border bg-[rgba(250, 244, 244, 1)] p-4 flex flex-col items-center">
    <Image src="/images/Asgaard.png" alt="Product 14" width={287} height={200} className="mb-4" />
    <p className="text-[rgba(159, 159, 159, 1)] text-center mb-2">Asgaard sofa</p>
    <p className="text-black font-medium text-2xl">Rs. 250,000.00</p>
  </div>

  {/* Box 15 */}
  <div className="w-full md:w-[287px] h-[397px] border bg-[rgba(250, 244, 244, 1)] p-4 flex flex-col items-center">
    <Image src="/images/big sofa.png" alt="Product 15" width={287} height={200} className="mb-4" />
    <p className="text-[rgba(159, 159, 159, 1)] text-center mb-2">Maya sofa three seater</p>
    <p className="text-black font-medium text-2xl">Rs. 115,000.00</p>
  </div>

  {/* Box 16 */}
  <div className="w-full md:w-[287px] h-[397px] border bg-[rgba(250, 244, 244, 1)] p-4 flex flex-col items-center">
    <Image src="/images/reverse sofa.png" alt="Product 16" width={287} height={200} className="mb-4" />
    <p className="text-[rgba(159, 159, 159, 1)] text-center mb-2">Sofa_16</p>
    <p className="text-black font-medium text-2xl">Rs. 89,000.00</p>
  </div>
</div>

</div>

  <Image src="/icons/Group 72.png" alt="123" width={392} height={60} className=" mt-[50pxpx] ml-[500px] "/>
       
   <DeliveryInformation/>
   <Footer/>
    </section>
    )
}

export default shop;