import Image from 'next/image';

const TopPicksSection = () => {
  return (
     <section className='mt-[80px] md:mt-[200px] flex flex-col justify-center items-center text-center font-poppins'>
          <div>
            <h1 className='text-4xl font-medium mb-5 '>Top Picks For You</h1>
            <p className='text-gray-500 text-base font-medium mb-5'>Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.</p>
          </div>
          {/*Box Section */}
          <div className='grid md:grid-cols-4 lg:grid-cols-4 grid-cols-2 mt-[50px]'>
            {/*Box 1 */}
            <div className='h-[397px]'>
              <Image src="/images/Trenton.png" alt="sofa" height={287} width={287}  />
              <p className='font-normal text-base '>Trenton modular sofa_3</p>
              <h1 className='font-medium text-2xl align-text-bottom'>Rs. 25,000.00</h1>
            </div>
            {/*Box 2 */}
            <div className=' h-[397px]'>
            <Image src="/images/dinning table.png" alt="sofa" height={397} width={287}  className='mb-[80px]'/>
            <p className='font-normal text-base'>Granite dining table with dining chair</p>
              <h1 className='font-medium text-2xl align-text-bottom'>Rs. 25,000.00</h1>
            </div>
            {/*Box 3 */}
            <div className=' h-[397px]  '>
            <Image src="/images/outdoor table.png" alt="sofa" height={397} width={287} />
            <p className='font-normal text-base'>Outdoor bar table and stool</p>
              <h1 className='font-medium text-2xl align-text-bottom'>Rs. 25,000.00</h1>
            </div>
            {/*Box 4 */}
            <div className=' h-[397px]  '>
            <Image src="/images/Plain.png" alt="sofa" height={397} width={287} className='mb-[80px]'/>
            <p className='font-normal text-base'>Plain console with teak mirror</p>
              <h1 className='font-medium text-2xl align-text-bottom'>Rs. 25,000.00</h1>
            </div>
          </div>
          <a
            href="#"
            className="text-2xl text-center font-medium text-black underline decoration-2 underline-offset-8 hover:text-gray-600"
          >
            View More
          </a>
     </section>
  );
};

export default TopPicksSection; 