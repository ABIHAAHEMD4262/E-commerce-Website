import Header from "@/components/Header";
import React from "react";
import Image from "next/image";
import Footer from "@/components/Footer";

function Account() {
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
          <Image src="/icons/logo.png" alt="Logo" width={77} height={77} className="mb-0" />
          <h1 className="text-5xl font-medium text-black mb-2">Account</h1>
          <p className="text-base font-medium text-black">Account &gt; Shop</p>
        </div>
      </div>

      {/* Account Section */}
      <div className="flex flex-wrap items-start justify-center gap-6 px-4 py-10 lg:gap-10 lg:px-16">
        {/* Login Box */}
        <div className="w-full max-w-md bg-white p-6 rounded-md shadow-lg lg:w-1/2">
          <h2 className="text-4xl font-semibold mb-[30px]">Log In</h2>
          <form className="space-y-4">
            {/* Username Input */}
            <div >
              <label htmlFor="username" className=" mt-[50px] block text-base font-medium text-black">
              Username or email address
              </label>
              <input
                type="text"
                id="username"
                className="mt-[30px] w-[423px] h-[75px] px-3 py-[9px] border border-gray-700 rounded-xl focus:ring focus:ring-blue-500"
              />
            </div>
            {/* Password Input */}
            <div>
              <label htmlFor="password" className="mt-[50px] block text-base font-medium text-black">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-[423px] h-[75px] mt-[30px] px-3 py-2  border border-gray-700 rounded-xl focus:ring focus:ring-blue-500"
                
              />
            </div>
            {/* Remember Me */}
            <div className="flex items-center space-x-2 mt-[30px]">
              <input type="checkbox" id="remember" className="w-[30] h-[27px]" />
              <label htmlFor="remember" className="text-bse font-medium text-black">
                Remember me
              </label>
            </div>
            {/* Actions */}
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="px-4 w-[215px] h-[64px] py-2 text-black border border-black rounded-xl  mt-[50px]"
              >
                Log In
              </button>
              <a href="#" className="text-sm mt-[40px] text-black hover:underline">
                Lost your password?
              </a>
            </div>
          </form>
        </div>

        {/* Register Box */}
        <div className="w-full max-w-md bg-white p-6 rounded-md shadow-lg lg:w-1/2">
        <h2 className="text-4xl font-semibold mb-[30px]">Register</h2>
          <form className="space-y-4">
            {/* Email Input */}
            <div >
              <label htmlFor="username" className=" mt-[50px] block text-base font-medium text-black">
              Email address
              </label>
              <input
                type="text"
                id="username"
                className="mt-[30px] w-[423px] h-[75px] px-3 py-[9px] border border-gray-700 rounded-xl focus:ring focus:ring-blue-500"
              />
            </div>
            {/* Information Paragraph */}
            <p className="text-black text-black space-y-8">
              A link to set a new password will be sent to your email address.
            </p>
            <p className="text-black text-black">
              Your personal data will be used to support your experience throughout this website, to
              manage access to your account, and for other purposes described in our <b>privacy policy.</b> 
            </p>
            {/* Register Button */}
            <div>
            <button
                type="submit"
                className="px-4 w-[215px] h-[64px] py-2 text-black border border-black rounded-xl  mt-[50px]"
              >
                Log In
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Account;
