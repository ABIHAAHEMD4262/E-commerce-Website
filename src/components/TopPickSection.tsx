import Image from 'next/image';

const TopPicksSection = () => {
  return (
    <div className="relative mt-[850px] h-[777px] flex flex-col items-center gap-8"
    style={{ backgroundColor: 'rgba(255, 255, 255, 1)' }}>

      {/* Heading */}
      <h2 className="text-4xl font-semibold text-gray-800">Top Picks For You</h2>
      
      {/* Paragraph */}
      <p className="text-lg text-gray-600 text-center ">
        Find a bright ideal to suit your taste with our great selection of suspension, floor, and table lights.
      </p>

      {/* Boxes Container */}
      <div className="grid grid-cols-4 gap-6 mt-8">
        {/* Box 1 */}
        <div className="w-[287px] h-[397px] flex flex-col items-center text-center gap-4 p-4">
          <Image
            src="/images/Trenton.png"
            alt="Product 1"
            className="object-cover"
            width={287}
            height={372}
          />
          <p className="text-normal font-normal text-black">Trenton modular sofa_3</p>
          <p className="text-2xl text-black font-medium">Rs. 25,000.00</p>
        </div>

        {/* Box 2 */}
        <div className="w-[287px] h-[397px] flex flex-col items-center text-center gap-4 p-4">
          <Image
            src="/images/dinning table.png"
            alt="Product 2"
            className="object-cover"
            width={287}
            height={397}
          />
          <p className="text-normal font-normal text-black">Granite dining table with dining chair</p>
          
        </div>

        {/* Box 3 */}
        <div className="w-[287px] h-[397px] flex flex-col items-center text-center gap-4 p-4">
          <Image
            src="/images/outdoor table.png"
            alt="Product 3"
            className="object-cover"
            width={287}
            height={397}
          />
          <p className="text-normal font-normal text-black">Outdoor bar table and stool</p>
        
        </div>

        {/* Box 4 */}
        <div className="w-[287px] h-[397px] flex flex-col items-center text-center gap-4 p-4">
          <Image
            src="/images/Plain.png"
            alt="Product 4"
            className="object-cover"
            width={287}
            height={397}
          />
          <p className="text-normal font-normal text-black">Plain console with teak mirror</p>
          
        </div>

      </div>
      <a
            href="#"
            className="text-2xl text-center font-medium text-black underline decoration-2 underline-offset-4 hover:text-gray-600"
          >
            View More
          </a>
    </div>
  );
};

export default TopPicksSection; 