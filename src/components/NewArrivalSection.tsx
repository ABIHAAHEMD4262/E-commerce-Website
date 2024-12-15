import Image from 'next/image';

const NewArrivalsSection = () => {
  return (
    <section className='grid md:grid-cols-2 lg:grid-col-1 sm:grid-col-1 justify-center items-center font-poppins mt-[100px]'
    style={{ backgroundColor: 'rgba(255, 249, 229, 1)' }}>
        <div className='flex md:w-[983px] md:h-[799px]'>
          <Image src="/images/Asgaard.png" alt="Sofa" width={983} height={799} className='w-full h-auto object-cover'/>
          </div>
        <div className='md:w-[331px] md:h-[205px] md:mx-[300px] text-center '>
          <h1 className='text-2xl font-medium '>New Arrivals</h1>
          <h1 className='font-bold text-5xl mt-5'>Asgaard sofa</h1>
          <button className='text-xl font-normal w-[255px] h-[64px] border border-black mt-9'>
          Order Now
          </button>
        </div>
    </section>
    );
};

export default NewArrivalsSection;
