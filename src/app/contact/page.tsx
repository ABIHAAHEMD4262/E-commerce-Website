import Header from "@/components/Header";
import React from "react";
import Image from "next/image";
import Footer from "@/components/Footer";
import DeliveryInformation from "@/components/DeliveryInformation";

function contact() {
  return (
    <section className="font-poppins">
      <Header backgroundColor="#f8f9fa" />

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
          <h1 className="text-5xl md:text-5xl font-medium text-black mb-2">
            Contact
          </h1>
          <p className="text-base font-medium text-black">Contact &gt; Shop</p>
        </div>
      </div>
      {/* Main Section */}
      <div className="flex flex-col items-center px-4 mt-[100px]  leading-7">
        {/* Heading Section */}
        <h2 className="text-4xl font-semibold text-center mb-6">
          Get In Touch With Us
        </h2>

        {/* Information Box */}
        <div className="w-[644px] h-[48px] text-center mb-10">
          <p className="text-lg text-gray-600">
            For more information about our product & services, please feel free
            to drop us an email. Our staff will always be there to help you
            out. Do not hesitate!
          </p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row justify-between gap-8 w-full max-w-[1144px] mt-[50px]">
          {/* Left Box */}
          <div
            className="bg-gray-100 w-[393px] h-[537px] p-6 shadow-lg rounded-lg flex flex-col gap-8"
            style={{ opacity: 1 }}
          >
            {/* Address */}
            <div className="flex items-start">
              <Image
                src="/icons/address.png"
                alt="Location Icon"
                width={24}
                height={24}
                className="mr-4"
              />
              <div>
                <h3 className="font-medium text-2xl mb-2">Address</h3>
                <p className="text-base text-gray-600">
                  236 5th SE Avenue, New York NY10000, United States
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start">
              <Image
                src="/icons/phone.png"
                alt="Phone Icon"
                width={24}
                height={24}
                className="mr-4"
              />
              <div>
                <h3 className="font-medium text-2xl mb-2">Phone</h3>
                <p className="text-base text-gray-600">+Mobile: +(84) 546-6789</p>
                <p className="text-base text-gray-600">Hotline: +(84) 456-6789</p>
              </div>
            </div>

            {/* Working Time */}
            <div className="flex items-start">
              <Image
                src="/icons/clock.png"
                alt="Clock Icon"
                width={24}
                height={24}
                className="mr-4"
              />
              <div>
                <h3 className="font-medium text-2xl mb-2">Working Time</h3>
                <p className="text-base text-gray-600">Monday-Friday: 9:00 - 22:00</p>
                <p className="text-base text-gray-600">Saturday-Sunday: 9:00 - 21:00</p>
       
              </div>
            </div>
          </div>

          {/* Right Form Box */}
          <form
            className="bg-gray-50  w-full lg:w-[635px] h-auto lg:h-[923px] p-6 shadow-lg rounded-lg"
            style={{ opacity: 1 }}
          >

            {/* Name Input */}
            <div className="mb-4">
              <label
                htmlFor="Abc"
                className="block text-base font-medium text-gray-700 mb-2 mt-[20px]"
              >
                Your name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Abc"
              />
            </div>

            {/* Email Input */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-base font-medium text-gray-700 mb-2"
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Abc@def.com"
              />
            </div>

            {/* Subject */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-base font-medium text-gray-700 mb-2"
              >
               Subject
              </label>
              <input
                type="Subject"
                id="Subject"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="This is an optional"
              />
            </div>

            {/* Message Input */}
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-base font-medium text-gray-700 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Hi! i’d like to ask about"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-[247px] h-[48px] py-3 border border-black text-black bofont-medium rounded-2xl hover:bg-white "
            >
             Submit
            </button>
          </form>
        </div>
        <DeliveryInformation/>
        <Footer/>
      </div>
          
  
    </section>
  );
}

export default contact;
