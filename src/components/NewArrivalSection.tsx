import Image from 'next/image';

const NewArrivalsSection = () => {
  return (
    <div
      className="relative flex flex-col lg:flex-row items-center justify-center gap-8  p-4 font-poppins"
      style={{ backgroundColor: 'rgba(255, 249, 229, 1)' }}
    >
      {/* Box 1: Image */}
      <div className="w-full lg:w-[987px] flex justify-center items-center">
        <Image
          src="/images/Asgaard.png"
          alt="Asgaard Sofa"
          width={987}
          height={800}
          className="object-cover w-full h-auto max-w-full"
        />
      </div>

      {/* Box 2: Text Content */}
      <div className="w-full lg:w-[500px] flex flex-col justify-center items-center space-y-6">
        {/* Small Heading */}
        <h3 className="text-2xl lg:text-3xl font-medium text-black">New Arrivals</h3>

        {/* Main Heading */}
        <h2 className="text-3xl lg:text-5xl font-bold text-black">Asgaard Sofa</h2>

        {/* Button Link */}
        <button className="text-lg lg:text-xl font-medium text-black w-full lg:w-[255px] h-[64px] border border-black hover:text-gray-700 transition">
          Order Now
        </button>
      </div>
    </div>
  );
};

export default NewArrivalsSection;
