import Image from "next/image";
import InstagramSection from "./InstagramSection"; // Adjust the path as necessary

const BlogSection = () => {
  return (
    <section className="mt-[80px] md:mt-[200px] flex flex-col justify-center items-center text-center font-poppins">
      <div>
        <h1 className="text-4xl font-bold mb-5 ">Our Blogs</h1>
        <p className="text-gray-500 text-base font-medium mb-5">
          Find a bright ideal to suit your taste with our great selection
        </p>
      </div>
      {/*Box Section */}
      <div className="grid md:grid-cols-3 lg:grid-cols-3 sm:grid-cols-1 mt-[50px] gap-7">
        {/*Box 1 */}
        <div>
          <Image
            src="/images/key.png"
            alt="sofa"
            height={555}
            width={393}
            className="h-auto object-coverw-full "
          />
          <p className="font-normal text-xl my-[20px] ">
            Going all-in with millennial design
          </p>
          <a
            href="#"
            className="text-2xl text-center font-medium text-black underline decoration-2 underline-offset-8 hover:text-gray-600"
          >
            Read More
          </a>
          <Image
            src="/images/time.png"
            alt="date and time"
            width={233}
            height={24}
            className="mx-[75px] my-8"
          />
        </div>
        {/*Box 2 */}
        <div>
          <Image
            src="/images/laptop.png"
            alt="sofa"
            height={555}
            width={393}
            className="h-auto object-coverw-full"
          />
          <p className="font-normal text-xl my-[20px]">
            Going all-in with millennial design
          </p>
          <a
            href="#"
            className="text-2xl text-center font-medium text-black underline decoration-2 underline-offset-8 hover:text-gray-600"
          >
            Read More
          </a>
          <Image
            src="/images/time.png"
            alt="date and time"
            width={233}
            height={24}
            className="mx-[75px] my-8"
          />
        </div>
        {/*Box 3 */}
        <div>
          <Image
            src="/images/mouse.png"
            alt="sofa"
            height={555}
            width={393}
            className="h-auto object-coverw-full"
          />
          <p className="font-normal text-xl my-[20px]">
            Going all-in with millennial design
          </p>
          <a
            href="#"
            className="text-2xl text-center font-medium text-black underline decoration-2 underline-offset-8 hover:text-gray-600"
          >
            Read More
          </a>
          <Image
            src="/images/time.png"
            alt="date and time"
            width={233}
            height={24}
            className="mx-[75px] my-8"
          />
        </div>
      </div>
      <a
        href="/blog"
        className="my-9 text-2xl text-center font-medium text-black underline decoration-2 underline-offset-8 hover:text-gray-600"
      >
        View All Post
      </a>
      <InstagramSection/>
    </section>
  );
};

export default BlogSection;
