import Header from "@/components/Header";
import React from "react";
import Image from "next/image";
import DeliveryInformation from "@/components/DeliveryInformation";
import Footer from "@/components/Footer";

function about (){
    return (
        <section className="font-poppins">
            <Header backgroundColor="#f8f9fa"/>
        {/*Hero Section */}
        <div className="relative w-full h-[316px] bg-cover bg-center" style={{ backgroundImage: 'url(/images/shop.png)' }}>
          <div className="flex flex-col items-center justify-center h-full text-center">
            <Image src="/icons/logo.png" alt="Logo" width={77} height={77} className="mb-0" />
            <h1 className="text-5xl md:text-5xl font-medium text-black mb-2">Blog</h1>
            <p className="text-base font-medium text-black"><b>Home &gt;</b> Blog</p>
          </div>
        </div>
      
      {/*Blog Section */}
        <div className="flex flex-col justify-center  m-9">
        <div>
            Box 1
        </div>
        {/*Recent Posts*/}
       
            {/*Left Section */}
            
        {/*Blog 1 */}
       <div className="md:w-[750px]  sm:h-[1000px] md:h-[800px]">
        <Image src="/images/laptop2.png" alt="laptop" width={817} height={500} className="h-auto w-full object-contain mb-5"/>
        <Image src="/icons/blog.png" alt="admin" width={349} height={24} />
        <h1 className="text-3xl font-medium mt-5">Going all-in with millennial design</h1>
        <p className="text-gray-400 text-sm font-normal my-[14px] ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
         magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam 
         ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in.
          Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. 
          Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean 
          euismod elementum.
        </p>
        <a
            href="#"
            className="my--9 text-2xl text-left font-medium text-black underline decoration-2 underline-offset-8 hover:text-gray-600"
          >
            Read more
          </a>
       </div>
        {/*Blog 2 */}
       <div className="md:w-[750px] gap-9 sm:h-[1000px] md:h-[800px] ">
        <Image src="/images/pen.png" alt="laptop" width={817} height={500} className="h-auto w-full object-contain mb-5"/>
        <Image src="/icons/blog.png" alt="admin" width={349} height={24} />
        <h1 className="text-3xl font-medium mt-5">Going all-in with millennial design</h1>
        <p className="text-gray-400 text-sm font-normal my-[14px] ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
         magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam 
         ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in.
          Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. 
          Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean 
          euismod elementum.
        </p>
        <a
            href="#"
            className=" text-2xl text-left font-medium text-black underline decoration-2 underline-offset-8 hover:text-gray-600"
          >
            Read more
          </a>
       </div>

        {/*Blog 3 */}
       <div className="md:w-[750px] gap-9 sm:h-[800px] md:[800px]">
        <Image src="/images/book.png" alt="laptop" width={817} height={500} className="h-auto w-full object-contain mb-5"/>
        <Image src="/icons/blog.png" alt="admin" width={349} height={24} />
        <h1 className="text-3xl font-medium mt-5">Going all-in with millennial design</h1>
        <p className="text-gray-400 text-sm font-normal my-[14px] ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
         magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam 
         ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in.
          Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. 
          Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean 
          euismod elementum.
        </p>
        <a
            href="#"
            className=" text-2xl text-left font-medium text-black underline decoration-2 underline-offset-8 hover:text-gray-600"
          >
            Read more
          </a>
       </div>

       
        </div>

        
        <Image src='/icons/group 72.png' alt="123" width={392} height={60} className="md:mx-[500px]  object-contain "/>
       
       <DeliveryInformation/>
       <Footer/>
        </section>
        
    )
}

export default about;