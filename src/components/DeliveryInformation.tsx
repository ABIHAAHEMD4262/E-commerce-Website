import React from 'react';
 

const DeliveryInformation: React.FC = () => {
  return (
    <div className="w-full h-[300px] custom-bg p-6 font-poppins mt-[90]">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
        {/* Column 1 */}
        <div className="flex flex-col items-center mt-[70px]  leaing-7">
          <h2 className="text-3xl text-left font-medium mb-2">Free Delivery</h2>
          <p className="text-center text-xl text-gray-600">
          For all oders over $50, consectetur  adipim scing elit
            
          </p>
        </div>
        {/* Column 2 */}
        <div className="flex flex-col items-center mt-[70px] leaing-7">
          <h2 className="text-3xl text-left font-medium mb-2">90 Days Return</h2>
          <p className="text-xl text-center text-gray-600">
          If goods have problems, consectetur adipim scing elit.
          </p>
        </div>
        {/* Column 3 */}
        <div className="flex flex-col items-center mt-[70px] leaing-7">
          <h2 className="text-3xl text-left font-medium mb-2">Secure Payment</h2>
          <p className="text-center text-xl text-gray-600">
          100% secure payment, consectetur adipim scing elit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DeliveryInformation;
