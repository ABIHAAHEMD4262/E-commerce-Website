import Header from "@/components/Header";
import React from "react";
import Image from "next/image";
import Footer from "@/components/Footer";
import DeliveryInformation from "@/components/DeliveryInformation";

function Account() {
  return (
    <div className="font-poppins min-h-screen flex flex-col overflow-x-hidden">
      {/* Header */}
      <Header backgroundColor="#f8f9fa" />

      {/* Hero Section */}
      <div
        className="relative w-full h-[316px] bg-cover bg-center"
        style={{ backgroundImage: "url(/images/shop.png)" }}
      >
        <div className="container mx-auto flex flex-col items-center justify-center h-full text-center px-4">
          <Image src="/icons/logo.png" alt="Logo" width={77} height={77} loading="eager" className="mb-2" />
          <h1 className="text-2xl sm:text-3xl font-semibold mb-6">Account</h1>
          <p className="text-sm sm:text-base font-medium text-black">Account &gt; Shop</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto flex-grow px-4">
        <div className="flex flex-wrap items-start justify-center gap-6 py-10">
          {/* Login Box */}
          <div className="w-full max-w-md bg-white p-6 rounded-md shadow-lg">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-6">Log In</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="login-username" className="block text-sm sm:text-base font-medium text-black">
                  Username or email address
                </label>
                <input
                  type="text"
                  id="login-username"
                  className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500"
                  aria-label="Username or email for login"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm sm:text-base font-medium text-black">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500"
                  aria-label="Password"
                />
              </div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="remember" className="w-4 h-4" />
                <label htmlFor="remember" className="text-sm sm:text-base font-medium text-black">
                  Remember me
                </label>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
                <button
                  type="submit"
                  className="px-4 py-3 w-full sm:w-auto text-white bg-black border border-black rounded-lg hover:bg-gray-800"
                >
                  Log In
                </button>
                <a href="#" className="text-sm text-blue-500 hover:underline">
                  Lost your password?
                </a>
              </div>
            </form>
          </div>

          {/* Register Box */}
          <div className="w-full max-w-md bg-white p-6 rounded-md shadow-lg">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-6">Register</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="register-username" className="block text-sm sm:text-base font-medium text-black">
                  Email address
                </label>
                <input
                  type="text"
                  id="register-username"
                  className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500"
                  aria-label="Email for registration"
                />
              </div>
              <p className="text-sm sm:text-base text-gray-600">
                A link to set a new password will be sent to your email address.
              </p>
              <p className="text-sm sm:text-base text-gray-600">
                Your personal data will be used to support your experience throughout this website, to manage access to
                your account, and for other purposes described in our{" "}
                <a href="#" className="text-blue-500 font-medium hover:underline">
                  privacy policy
                </a>.
              </p>
              <button
                type="submit"
                className="px-4 py-3 w-full sm:w-auto text-white bg-black border border-black rounded-lg hover:bg-gray-800"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Delivery Information */}
      <DeliveryInformation />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Account;
