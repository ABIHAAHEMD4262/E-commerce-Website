import React from "react";
import Image from "next/image";

function SideTables (){
    return(
      <section className=" grid grid-cols-1 md:grid-row-1 lg:grid-cols-2 font-poppins bg-gray-100 md:h-[700px]">
        <div className="">
       <div className="flex flex-col md:h-[450]">
        <Image src="/images/table.png" alt="table.png" width={600}
          height={853}/>
       <h1 className="text-black text-center text-4xl font-medium md:mb-6">Side table</h1>
       <a
            href="#"
            className="text-2xl text-center font-medium text-black underline decoration-2 underline-offset-8 hover:text-gray-600"
          >
            View More
          </a>
       </div>
        </div>

        <div className="   ">
        <div className="flex flex-col md:h-[450]">
          <Image src="/images/two seaters.png" alt="table.png"  width={600}
          height={853}/>
       <h1 className="text-black text-center text-4xl font-medium md:mb-6">Side table</h1>
       <a
            href="#"
            className="text-2xl text-center font-medium text-black underline decoration-2 underline-offset-8 hover:text-gray-600"
          >
            View More
          </a>
       </div>
        </div>
       
      </section>
    )
}
export default SideTables;