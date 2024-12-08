import Image from 'next/image';

const Hero = () => {
  return (
    <section className="h-screen bg-[rgba(251,235,181,1)] flex flex-col md:flex-row items-center justify-between font-poppins">
      {/* Left Content */}
      <div className="flex flex-col justify-center items-start space-y-4 max-w-md px-6 md:px-20 lg:px-40 md:max-w-[50%]">
      <h1 className="text-4xl sm:text-5xl md:text-7xl font-medium text-black w-full">
          <span className="block">Rocket single</span>
          <span className="block mt-2">seater</span>
        </h1>
        <a
          href="#"
          className="text-xl sm:text-2xl md:text-3xl font-medium text-black underline decoration-2 underline-offset-8 hover:text-gray-600"
        >
          Shop Now
        </a>
      </div>

      {/* Right Image */}
      <div className="flex items-center justify-center max-w-lg mt-8 md:mt-0 ">
        <Image
          src="/images/sofa.png"
          alt="Hero Image"
          className="object-contain transform scale-110"
          width={853} // Keep original width
          height={1000} // Keep original height
        />
      </div>

      {/* Top Pick Section */}
      <div className="absolute top-[800px] w-full flex justify-center bg-[rgba(250, 244, 244, 1)]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-10 w-full ">
          {/* Left Box */}
          <div className="flex flex-col items-center justify-center bg-[rgba(250, 244, 244, 1)]  ">
            <Image
              src="/images/table.png"
              alt="Side Table"
              className="object-contain transform scale-110"
              width={600} // Keep original width
              height={600} // Keep original height
            />
            <h2 className="text-2xl md:text-4xl font-medium text-black mt-[0px]">Side Table</h2>
            <a
              href="#"
              className="text-lg md:text-2xl font-medium text-black underline decoration-2 underline-offset-4 hover:text-gray-600 mt-6"
            >
              View More
            </a>
          </div>

          {/* Right Box */}
          <div className="flex flex-col items-center justify-center bg-[rgba(250, 244, 244, 1)]">
            <Image
              src="/images/three seater.png"
              alt="Right Box Image"
              className="object-contain transform scale-110 "
              width={600} // Keep original width
              height={600} // Keep original height
            />
            <h2 className="text-2xl md:text-4xl font-medium text-black mt-[0px]">Three Seater</h2>
            <a
              href="#"
              className="text-lg md:text-2xl font-medium text-black underline decoration-2 underline-offset-4 hover:text-gray-600 mt-8"
            >
              View More
            </a>
          </div>
          
          </div>
         
        </div>
       
    </section>
  );
};

export default Hero;
