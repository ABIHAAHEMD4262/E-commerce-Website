import React from "react";
import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <div className="flex  text-black bg-[rgba(251,235,181,1)] font-roboto gap-6 items-center ">
      {/* Left Section */}
      <div className="flex flex-col md:pr-[60px] pl-[80px] justify-center items-start m-2 gap-2  lg:text-left sm:text-center ">
        <h1 className=" font-medium md:text-left text-6xl md:text-5xl sm:h-[200px] lg:text-6xl sm:text-4xl ">
          Rocket single seater
        </h1>
        <a
          href="#"
          className="text-2xl sm:text-center md:text-left font-medium text-black underline decoration-2 underline-offset-8 border hover:text-gray-600"
        >
          Shop Now
        </a>
      </div>

      <div className="flex justify-center lg:justify-end  ">
        <Image
          src="/images/sofa.png"
          alt="hero image"
          width={853}
          height={1000}
          className=" "
        />
      </div>
    </div>
  );
};
export default Hero;
