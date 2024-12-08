import Image from "next/image";
import InstagramSection from "./InstagramSection"; // Adjust the path as necessary

const BlogSection = () => {
  return (
    <section className="bg-white py-16 md:px-20 lg:px-40 font-poppins">
      {/* Heading and Subheading */}
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-medium text-black">Our Blogs</h2>
        <p
          className="text-base md:text-xl mt-4"
          style={{ color: "rgba(159, 159, 159, 1)" }}
        >
          Find a bright idea to suit your taste with our great selection
        </p>
      </div>

      {/* Blog Boxes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Blog Box 1 */}
        <div className="flex flex-col items-center bg-white shadow-md p-6 rounded-lg">
          <Image
            src="/images/key.png" // Replace with the actual image path
            alt="Blog 1"
            className="object-cover rounded-md"
            width={393}
            height={393}
          />
          <h3 className="text-xl md:text-2xl font-normal text-black mt-4 text-center">
            Going all-in with millennial design
          </h3>
          <a
            href="#"
            className="text-lg font-medium text-black underline decoration-2 underline-offset-4 hover:text-gray-600 mt-2"
          >
            Read More
          </a>
          <Image src='/images/time.png' alt="Date and time" width={223} height={24} className="pt-[20px]"/>
        </div>

        {/* Blog Box 2 */}
        <div className="flex flex-col items-center bg-white shadow-md p-6 rounded-lg">
          <Image
            src="/images/laptop.png" // Replace with the actual image path
            alt="Blog 2"
            className="object-cover rounded-md"
            width={393}
            height={393}
          />
          <h3 className="text-xl md:text-2xl font-normal text-black mt-4 text-center">
            Going all-in with millennial design
          </h3>
          <a
            href="#"
            className="text-lg font-medium text-black underline decoration-2 underline-offset-4 hover:text-gray-600 mt-2"
          >
            Read More
          </a>
          <Image src='/images/time.png' alt="Date and time" width={223} height={24} className="pt-[20px]"/>
        </div>

        {/* Blog Box 3 */}
        <div className="flex flex-col items-center bg-white shadow-md p-6 rounded-lg">
          <Image
            src="/images/mouse.png" // Replace with the actual image path
            alt="Blog 3"
            className="object-cover rounded-md"
            width={393}
            height={393}
          />
          <h3 className="text-xl md:text-2xl font-normal text-black mt-4 text-center">
            Going all-in with millennial design
          </h3>
          <a
            href="#"
            className="text-lg font-medium text-black underline decoration-2 underline-offset-4 hover:text-gray-600 mt-2"
          >
            Read More
          </a>
          <Image src='/images/time.png' alt="Date and time" width={223} height={24} className="pt-[20px]"/>
        </div>
      </div>

      {/* View All Posts Button */}
      <div className="text-center mt-10">
        <a
          href="#"
          className="text-xl md:text-2xl font-medium text-black underline decoration-2 underline-offset-4 hover:text-gray-600"
        >
          View All Posts
        </a>
      </div>

      {/* Add Instagram Section */}
      <InstagramSection />
    </section>
  );
};

export default BlogSection;
