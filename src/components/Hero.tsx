import Image from 'next/image';

const Hero = () => {
  return (
    <section className="h-screen bg-[rgba(251,235,181,1)] flex flex-col md:flex-row items-center justify-between font-poppins relative pb-16">
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
      <div className="flex items-center justify-center max-w-lg mt-8 md:mt-0">
        <Image
          src="/images/sofa.png"
          alt="Hero Image"
          className="object-contain transform scale-110"
          width={853}
          height={1000}
          priority
        />
      </div>

      {/* Top Pick Section */}
      <div className="absolute top-[70vh] md:top-[80vh] w-full flex justify-center bg-[rgba(250, 244, 244, 1)] py-8 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 w-full px-4 md:px-20 lg:px-40">
          {/* Left Box */}
          <div className="flex flex-col items-center justify-center bg-[rgba(250, 244, 244, 1)]">
            <Image
              src="/images/table.png"
              alt="Side Table"
              className="object-contain transform scale-100"
              width={600}
              height={600}
            />
            <h2 className="text-2xl md:text-4xl font-medium text-black mt-4">Side Table</h2>
            <a
              href="#"
              className="text-lg md:text-2xl font-medium text-black underline decoration-2 underline-offset-4 hover:text-gray-600 mt-4"
            >
              View More
            </a>
          </div>

          {/* Right Box */}
          <div className="flex flex-col items-center justify-center bg-[rgba(250, 244, 244, 1)]">
            <Image
              src="/images/three seater.png"
              alt="Three Seater"
              className="object-contain transform scale-100"
              width={600}
              height={600}
            />
            <h2 className="text-2xl md:text-4xl font-medium text-black mt-4">Three Seater</h2>
            <a
              href="#"
              className="text-lg md:text-2xl font-medium text-black underline decoration-2 underline-offset-4 hover:text-gray-600 mt-4"
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
