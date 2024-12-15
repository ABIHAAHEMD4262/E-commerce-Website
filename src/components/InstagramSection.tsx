

const InstagramSection = () => {
  return (
    <section className="w-full py-16 font-poppins">
      <div
        className="flex flex-col items-center justify-center bg-cover bg-center rounded-lg shadow-md "
        style={{
          backgroundImage: "url('/images/bg.png')",
          backgroundSize: 'full',
          backgroundPosition: 'center',
          width: '100%',
          height: '450px',
        }}
      >
        <div className="w-full h-full flex flex-col items-center justify-center">
          <h2 className="text-4xl md:text-6xl font-bold text-black mb-4 ">Our Instagram</h2>
          <p className="text-xl text-black mb-6">Follow our store on Instagram</p>
          <button className=" rounded-full border-solid shadow-lg shadow-gray-500   my-4 w-[255px] h-[64px]">
          Follow Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;
