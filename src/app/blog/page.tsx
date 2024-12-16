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
      <div className="relative w-full h-[316px] bg-cover bg-center" style={{ backgroundImage: 'url(/images/shop.png)' }}>
        <div className="flex flex-col items-center justify-center h-full text-center">
          <Image src="/icons/logo.png" alt="Logo" width={77} height={77} className="mb-0" />
          <h1 className="text-5xl md:text-5xl font-medium text-black mb-2">Blog</h1>
          <p className="text-base font-medium text-black"><b>Home &gt;</b> Blog</p>
        </div>
      </div>

      {/* Blog Section */}
      <div className="flex flex-col lg:flex-row justify-center m-9">
        {/* Left Column (Main Content) */}
        <div className="lg:w-[70%] space-y-8">
          {/* Blog 1 */}
          <div className="md:w-[750px] sm:h-[1000px] md:h-[800px]">
            <Image src="/images/laptop2.png" alt="laptop" width={817} height={500} className="h-auto w-full object-contain mb-5" />
            <Image src="/icons/blog.png" alt="admin" width={349} height={24} />
            <h1 className="text-3xl font-medium mt-5">Going all-in with millennial design</h1>
            <p className="text-gray-400 text-sm font-normal my-[14px] ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc...
            </p>
            <a href="#" className="my--9 text-2xl text-left font-medium text-black underline decoration-2 underline-offset-8 hover:text-gray-600">Read more</a>
          </div>

          {/* Blog 2 */}
          <div className="md:w-[750px] gap-9 sm:h-[1000px] md:h-[800px]">
            <Image src="/images/pen.png" alt="laptop" width={817} height={500} className="h-auto w-full object-contain mb-5" />
            <Image src="/icons/blog.png" alt="admin" width={349} height={24} />
            <h1 className="text-3xl font-medium mt-5">Going all-in with millennial design</h1>
            <p className="text-gray-400 text-sm font-normal my-[14px] ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
            </p>
            <a href="#" className="text-2xl text-left font-medium text-black underline decoration-2 underline-offset-8 hover:text-gray-600">Read more</a>
          </div>

          {/* Blog 3 */}
          <div className="md:w-[750px] gap-9 sm:h-[800px] md:h-[800px]">
            <Image src="/images/book.png" alt="laptop" width={817} height={500} className="h-auto w-full object-contain mb-5" />
            <Image src="/icons/blog.png" alt="admin" width={349} height={24} />
            <h1 className="text-3xl font-medium mt-5">Going all-in with millennial design</h1>
            <p className="text-gray-400 text-sm font-normal my-[14px] ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
            </p>
            <a href="#" className="text-2xl text-left font-medium text-black underline decoration-2 underline-offset-8 hover:text-gray-600">Read more</a>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="sm:block lg:w-[30%] bg-gray-100 p-6 rounded-md shadow-lg ">
        <div className="flex ">
        
                <input
                  type="text"
                  id="login-username"
                  className="mt-2 w-full  px-4 py-3 border border-black rounded-xl focus:ring focus:ring-blue-500"
                  aria-label="Username or email for login"
                  
                />
                <Image src="/icons/search.png" alt="search" width={10} height={20}/>
              </div>
              <h1 className="text-2xl font-medium m-5">Categories</h1>
              <ul className="text-gray-400 text-base leading-10">
                <li>Crafts <b className="pl-[250px]">1</b></li>
                <li>Design <b className="pl-[245px]">2</b></li>
                <li>Handmade <b className="pl-[215px]">3</b></li>
                <li>Interior <b className="pl-[245px]">4</b></li>
                <li>Wood <b className="pl-[255px]">5</b></li>
              </ul>
              <h1>Recent Posts</h1>
        <ul>
          <li >
            <Image src="/images/Rectangle 69.png" alt="Notebook" width={80} height={80}/>
            <p>Going all-in with </p>
            <p>millennial design</p>
           <h1>03 Aug 2022</h1>
          </li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>

        </ul>
      </div>
        </div>

       

      {/* Footer */}
      <DeliveryInformation />
      <Footer />
    </section>
  );
}

export default About;
