import React from 'react';

const DeliveryInformation: React.FC = () => {
  return (
    <div className="w-full h-[300px] custom-bg p-6 font-poppins mt-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Column 1 */}
        <div className="flex flex-col items-center mt-10 leading-7">
          <h2 className="text-3xl text-center font-medium mb-2">Free Delivery</h2>
          <p className="text-center text-xl text-gray-600">
            For all orders over $50, enjoy free delivery on us.
          </p>
        </div>
        {/* Column 2 */}
        <div className="flex flex-col items-center mt-10 leading-7">
          <h2 className="text-3xl text-center font-medium mb-2">90 Days Return</h2>
          <p className="text-xl text-center text-gray-600">
            If goods have problems, you can return them within 90 days.
          </p>
        </div>
        {/* Column 3 */}
        <div className="flex flex-col items-center mt-10 leading-7">
          <h2 className="text-3xl text-center font-medium mb-2">Secure Payment</h2>
          <p className="text-center text-xl text-gray-600">
            100% secure payment, ensuring your safety and peace of mind.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DeliveryInformation;
