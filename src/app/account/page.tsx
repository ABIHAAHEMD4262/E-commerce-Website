import Header from "@/components/Header";
import React from "react";
import Image from "next/image";
import Footer from "@/components/Footer";
import DeliveryInformation from "@/components/DeliveryInformation";

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
          <h1 className="text-4xl sm:text-5xl font-medium text-black mb-2">Account</h1>
          <p className="text-sm sm:text-base font-medium text-black">Account &gt; Shop</p>
        </div>
      </div>

      <div className="flex flex-col">
        {/* Account Section */}
        <div className="flex flex-wrap items-start justify-center gap-6 px-4 py-10 lg:gap-10 lg:px-16">
          {/* Login Box */}
          <div className="w-full max-w-md bg-white p-6 rounded-md shadow-lg">
            <h2 className="text-3xl sm:text-4xl font-semibold mb-8">Log In</h2>
            <form className="space-y-6">
              {/* Username Input */}
              <div>
                <label htmlFor="username" className="block text-sm sm:text-base font-medium text-black">
                  Username or email address
                </label>
                <input
                  type="text"
                  id="username"
                  className="mt-2 w-full px-3 py-3 border border-gray-700 rounded-xl focus:ring focus:ring-blue-500"
                />
              </div>
              {/* Password Input */}
              <div>
                <label htmlFor="password" className="block text-sm sm:text-base font-medium text-black">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="mt-2 w-full px-3 py-3 border border-gray-700 rounded-xl focus:ring focus:ring-blue-500"
                />
              </div>
              {/* Remember Me */}
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="remember" className="w-4 h-4" />
                <label htmlFor="remember" className="text-sm sm:text-base font-medium text-black">
                  Remember me
                </label>
              </div>
              {/* Actions */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
                <button
                  type="submit"
                  className="px-4 py-3 w-full sm:w-auto text-black border border-black rounded-xl"
                >
                  Log In
                </button>
                <a href="#" className="text-sm text-black hover:underline">
                  Lost your password?
                </a>
              </div>
            </form>
          </div>

          {/* Register Box */}
          <div className="w-full max-w-md bg-white p-6 rounded-md shadow-lg">
            <h2 className="text-3xl sm:text-4xl font-semibold mb-8">Register</h2>
            <form className="space-y-6">
              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-sm sm:text-base font-medium text-black">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-2 w-full px-3 py-3 border border-gray-700 rounded-xl focus:ring focus:ring-blue-500"
                />
              </div>
              {/* Information Paragraph */}
              <p className="text-sm sm:text-base text-black">
                A link to set a new password will be sent to your email address.
              </p>
              <p className="text-sm sm:text-base text-black">
                Your personal data will be used to support your experience throughout this website, to manage access to
                your account, and for other purposes described in our <b>privacy policy.</b>
              </p>
              {/* Register Button */}
              <button
                type="submit"
                className="px-4 py-3 w-full sm:w-auto text-black border border-black rounded-xl"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>

      <DeliveryInformation />
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Account;
