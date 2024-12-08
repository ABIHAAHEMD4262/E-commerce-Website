

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
          <h2 className="text-6xl md:text-4xl font-bold text-black mb-2 ">Our Instagram</h2>
          <p className="text-xl text-black mb-6">Follow our store on Instagram</p>
          <a
            href="#"
            className="bg-white border border-white shadow-md  shadow-black text-black pl-[90px] py-5 rounded-full font-medium"
            style={{ width: '255px', height: '64px', borderRadius: '50px'  }}
          >
            Follow Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;
