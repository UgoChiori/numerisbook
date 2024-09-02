// import React from "react";

// const InvoicePaymentInfo: React.FC = () => {
//   return (
//     <div className="mt-6">

//       <div className="bg-gray-100 p-4 rounded-lg">
//         <h2 className="font-semibold text-lg text-gray-600">PAYMENT INFORMATION</h2>
//         <div className="grid grid-cols-4 gap-4 text-gray-500">
//           <p>Account Name</p>
//           <p>Account Number</p>
//           <p>ACH Routing No</p>
//           <p>Bank Name</p>

//           <p className="font-semibold text-black">10239203920</p>
//           <p className="font-semibold text-black">March 30th, 2023</p>
//           <p className="font-semibold text-black">USD ($)</p>
//           <p className="font-semibold text-black">Bank Name</p>
//         </div>
//       </div>

//       <div className="mt-6">
//         <p className="text-gray-500">NOTE</p>
//         <p className="font-semibold text-black">Thank you for your patronage</p>
//       </div>
   
//     </div>
//   );
// };

// export default InvoicePaymentInfo;
import React from "react";

const InvoiceCard: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto bg-pink-100 p-8 rounded-[30px] shadow-md">
      {/* Upper Section: Sender and Customer */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        {/* Sender Information */}
        <div className="flex items-start space-x-4">
          <img
            src="https://via.placeholder.com/50" // Replace with actual image source
            alt="Logo"
            className="w-14 h-14 rounded-lg"
          />
          <div>
            <h2 className="text-sm font-semibold text-gray-500 uppercase mb-1">Sender</h2>
            <h3 className="text-lg font-semibold text-gray-800">Fabulous Enterprise</h3>
            <p className="text-gray-600">+386 989 271 3115</p>
            <p className="text-gray-600">1331 Hart Ridge Road 48436 Gaines, MI</p>
            <p className="text-gray-600">info@fabulousenterise.co</p>
          </div>
        </div>

        {/* Customer Information */}
        <div className="mt-6 md:mt-0">
          <h2 className="text-sm font-semibold text-gray-500 uppercase mb-1">Customer</h2>
          <h3 className="text-lg font-semibold text-gray-800">Olaniyi Ojo Adewale</h3>
          <p className="text-gray-600">+386 989 271 3115</p>
          <p className="text-gray-600">info@fabulousenterise.co</p>
        </div>
      </div>

      {/* Divider Line */}
      <hr className="my-8 border-gray-300" />

      {/* Lower Section: Invoice Details */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <div>
          <h2 className="text-sm font-semibold text-gray-500 uppercase">Invoice No</h2>
          <p className="text-lg font-semibold text-gray-800 mt-2">1023902390</p>
        </div>
        <div>
          <h2 className="text-sm font-semibold text-gray-500 uppercase">Issue Date</h2>
          <p className="text-lg font-semibold text-gray-800 mt-2">March 30th, 2023</p>
        </div>
        <div>
          <h2 className="text-sm font-semibold text-gray-500 uppercase">Due Date</h2>
          <p className="text-lg font-semibold text-gray-800 mt-2">May 19th, 2023</p>
        </div>
        <div>
          <h2 className="text-sm font-semibold text-gray-500 uppercase">Billing Currency</h2>
          <p className="text-lg font-semibold text-gray-800 mt-2">USD ($)</p>
        </div>
      </div>
    </div>
  );
};

export default InvoiceCard;
