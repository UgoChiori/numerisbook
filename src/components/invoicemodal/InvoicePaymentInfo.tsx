import React from "react";

const InvoicePaymentInfo: React.FC = () => {
  return (
    <div className="mt-6">

      <div className="bg-gray-100 p-4 rounded-lg">
        <h2 className="font-semibold text-lg text-gray-600">PAYMENT INFORMATION</h2>
        <div className="grid grid-cols-4 gap-4 text-gray-500">
          <p>Account Name</p>
          <p>Account Number</p>
          <p>ACH Routing No</p>
          <p>Bank Name</p>

          <p className="font-semibold text-black">10239203920</p>
          <p className="font-semibold text-black">March 30th, 2023</p>
          <p className="font-semibold text-black">USD ($)</p>
          <p className="font-semibold text-black">Bank Name</p>
        </div>
      </div>

      <div className="mt-6">
        <p className="text-gray-500">NOTE</p>
        <p className="font-semibold text-black">Thank you for your patronage</p>
      </div>
   
    </div>
  );
};

export default InvoicePaymentInfo;
