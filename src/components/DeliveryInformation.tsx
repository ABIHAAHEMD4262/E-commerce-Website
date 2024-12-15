import React from "react";

const DeliveryInformation= () =>{
  return (
    <div className="flex sm:flex-col md:flex-row items-center font-poppins bg-[rgba(250,244,244,1)] md:h-[300px] md:py-11 md:mt-[200px]" >
        <div className=" text-left grid md:grid-cols-3 sm:grid-cols-1  gap-6 w-full mt-8">
        {/* Box 1 */}
        <div className="flex flex-col items-center justify-center p-4 rounded-lg text-gray-500">
          <h1 className="text-4xl font-semibold text-black ">Free Delivery</h1>
          <p className="font-normal text-lg mt-2">For all oders over $50, consectetur adipim scing elit.</p>
        </div>
        
        {/* Box 2 */}
        <div className="flex flex-col items-center justify-center p-4 rounded-lg text-gray-500">
          <h1 className="text-4xl font-semibold text-black" >90 Days Return</h1>
          <p className="font-normal text-lg mt-2">If goods have problems, consectetur adipim scing elit.</p>
        </div>
        
        {/* Box 3 */}
        <div className="flex flex-col items-center justify-center p-4 rounded-lg text-gray-500">
          <h1 className="text-4xl font-semibold text-black" >Secure Payment</h1>
          <p className="font-normal text-lg mt-2">100% secure payment, consectetur adipim scing elit.</p>
        </div>
      </div>
</div>
  )
}
export default DeliveryInformation;