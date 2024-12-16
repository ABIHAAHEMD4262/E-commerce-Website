"use client";

import Header from "@/components/Header";
import React from "react";
import Image from "next/image";
import DeliveryInformation from "@/components/DeliveryInformation";
import Footer from "@/components/Footer";

function About() {
  return (
    <section className="font-poppins">
      <Header backgroundColor="#f8f9fa" />

      {/* Hero Section */}
      <div
        className="relative w-full h-[316px] bg-cover bg-center"
        style={{ backgroundImage: "url(/images/shop.png)" }}
      >
        <div className="flex flex-col items-center justify-center h-full text-center">
          <Image src="/icons/logo.png" alt="Logo" width={77} height={77} className="mb-0" />
          <h1 className="text-5xl md:text-5xl font-medium text-black mb-2">Blog</h1>
          <p className="text-base font-medium text-black">
            <b>Home &gt;</b> Blog
          </p>
        </div>
      </div>

      {/* Blog Section */}
      <div className="flex flex-col lg:flex-row justify-center m-9 gap-8">
        {/* Left Column (Main Content) */}
        <div className="lg:w-[70%] space-y-8">
          {/* Blog 1 */}
          <div className="md:w-full sm:h-auto">
            <Image
              src="/images/laptop2.png"
              alt="laptop"
              width={817}
              height={500}
              className="h-auto w-full object-contain mb-5"
            />
            <Image src="/icons/blog.png" alt="admin" width={349} height={24} />
            <h1 className="text-3xl font-medium mt-5">Going all-in with millennial design</h1>
            <p className="text-gray-400 text-sm font-normal my-[14px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc...
            </p>
            <a
              href="#"
              className="my--9 text-2xl text-left font-medium text-black underline decoration-2 underline-offset-8 hover:text-gray-600"
            >
              Read more
            </a>
          </div>

          {/* Blog 2 */}
          <div className="md:w-full gap-9 sm:h-auto">
            <Image
              src="/images/pen.png"
              alt="laptop"
              width={817}
              height={500}
              className="h-auto w-full object-contain mb-5"
            />
            <Image src="/icons/blog.png" alt="admin" width={349} height={24} />
            <h1 className="text-3xl font-medium mt-5">Going all-in with millennial design</h1>
            <p className="text-gray-400 text-sm font-normal my-[14px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua...
            </p>
            <a
              href="#"
              className="text-2xl text-left font-medium text-black underline decoration-2 underline-offset-8 hover:text-gray-600"
            >
              Read more
            </a>
          </div>

          {/* Blog 3 */}
          <div className="md:w-full gap-9 sm:h-auto">
            <Image
              src="/images/book.png"
              alt="laptop"
              width={817}
              height={500}
              className="h-auto w-full object-contain mb-5"
            />
            <Image src="/icons/blog.png" alt="admin" width={349} height={24} />
            <h1 className="text-3xl font-medium mt-5">Going all-in with millennial design</h1>
            <p className="text-gray-400 text-sm font-normal my-[14px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua...
            </p>
            <a
              href="#"
              className="text-2xl text-left font-medium text-black underline decoration-2 underline-offset-8 hover:text-gray-600"
            >
              Read more
            </a>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="lg:w-[30%] space-y-8">
  {/* Search Section */}
  <div className="p-4 border border-gray-200 rounded-lg shadow-md">
    <h2 className="text-xl font-medium mb-4">Search</h2>
    <div className="relative">
      <input
        type="text"
        placeholder="Search..."
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black placeholder-gray-500"
      />
      <div className="absolute right-4 top-2.5">
        <Image src="/icons/search.png" alt="Search Icon" width={16} height={16} />
      </div>
    </div>
  </div>

  {/* Categories Section */}
  <div className="p-4 border border-gray-200 rounded-lg shadow-md">
    <h2 className="text-xl font-medium mb-4">Categories</h2>
    <ul className="space-y-4">
      <li>
        <a href="#" className="text-lg text-gray-700 hover:text-black">
          Interior Design
        </a>
      </li>
      <li>
        <a href="#" className="text-lg text-gray-700 hover:text-black">
          Furniture Trends
        </a>
      </li>
      <li>
        <a href="#" className="text-lg text-gray-700 hover:text-black">
          Home Office Ideas
        </a>
      </li>
      <li>
        <a href="#" className="text-lg text-gray-700 hover:text-black">
          DIY Projects
        </a>
      </li>
      <li>
        <a href="#" className="text-lg text-gray-700 hover:text-black">
          Sustainable Living
        </a>
      </li>
    </ul>
  </div>

  {/* Recent Posts Section */}
  <div className="p-4 border border-gray-200 rounded-lg shadow-md">
    <h2 className="text-xl font-medium mb-4">Recent Posts</h2>
    {/* Post 1 */}
    <div className="flex items-start space-x-4 mb-6">
      <Image src="/images/post1.jpg" alt="Post 1" width={60} height={60} className="rounded-md object-cover" />
      <div>
        <h3 className="text-lg font-medium">
          <a href="#" className="text-gray-700 hover:text-black">
            5 Tips for Creating a Minimalist Workspace
          </a>
        </h3>
        <p className="text-sm text-gray-500">Aug 25, 2023</p>
      </div>
    </div>

    {/* Post 2 */}
    <div className="flex items-start space-x-4 mb-6">
      <Image src="/images/post2.jpg" alt="Post 2" width={60} height={60} className="rounded-md object-cover" />
      <div>
        <h3 className="text-lg font-medium">
          <a href="#" className="text-gray-700 hover:text-black">
            How to Style Your Home Office Like a Pro
          </a>
        </h3>
        <p className="text-sm text-gray-500">Jul 12, 2023</p>
      </div>
    </div>

    {/* Post 3 */}
    <div className="flex items-start space-x-4 mb-6">
      <Image src="/images/post3.jpg" alt="Post 3" width={60} height={60} className="rounded-md object-cover" />
      <div>
        <h3 className="text-lg font-medium">
          <a href="#" className="text-gray-700 hover:text-black">
            The Art of Scandinavian Interior Design
          </a>
        </h3>
        <p className="text-sm text-gray-500">Jun 10, 2023</p>
      </div>
    </div>
  </div>
</div>
</div>
      {/* Footer */}
      <DeliveryInformation />
      <Footer />
    </section>
  );
}

export default About;
