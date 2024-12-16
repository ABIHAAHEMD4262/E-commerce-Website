import React from "react";
import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center text-black bg-[rgba(251,235,181,1)] font-roboto gap-8 px-6 lg:px-16 py-12">
      {/* Left Section */}
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6">
        <h1 className="font-medium text-4xl sm:text-5xl lg:text-6xl max-w-[440px] leading-tight">
          Rocket single seater
        </h1>
        <a
          href="#"
          className="text-2xl font-medium text-black underline decoration-2 underline-offset-4 hover:text-gray-600 transition duration-300"
        >
          Shop Now
        </a>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-auto">
        <Image
          src="/images/sofa.png"
          alt="Rocket single seater"
          width={853}
          height={1000}
          className="object-cover"
          layout="responsive" // Ensures the image is responsive
        />
      </div>
    </div>
  );
};

export default Hero;
