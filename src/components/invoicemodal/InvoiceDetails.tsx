import React from "react";

const senderDetails = {
  title: "SENDER",
  items: [
    { label: "Company", value: "Fabulous Enterprise" },
    { label: "Phone", value: "+336 899 271 315" },
    { label: "Address", value: "1334 Briar Ridge Road, 46346 Gaines, MI" },
    { label: "Email", value: "info@fabulousenterprise.co", type: "email" },
  ],
};

const customerDetails = {
  title: "CUSTOMER",
  items: [
    { label: "Name", value: "Olaniyi Ojo Adewale" },
    { label: "Phone", value: "+386 899 271 315" },
    { label: "Email", value: "info@fabulousenterprise.co", type: "email" },
  ],
};

const invoiceDetails = [
  { label: "Invoice No:", value: "10239203920" },
  { label: "Issue Date", value: "March 30th, 2023" },
  { label: "Due Date", value: "May 19th, 2023" },
  { label: "Billing Currency", value: "USD ($)" },
];

const items = [
  {
    description: "Email Marketing",
    extraDescription:
      "Sed ut perspiciatis undes omnis iste natus error sit voluptatem accusantium",
    quantity: "10",
    unitPrice: "$1,500",
    total: "$15,000.00",
  },
  {
    description: "Video Looping Effect",
    quantity: "6",
    unitPrice: "$1,110,500",
    total: "$6,663,000.00",
  },
  {
    description: "Graphic Design for Emails",
    extraDescription: "Tsit voluptatem accusantium",
    quantity: "7",
    unitPrice: "$2,750",
    total: "$19,250.00",
  },
  {
    description: "Video Looping Effect",
    quantity: "6",
    unitPrice: "$1,110,500",
    total: "$6,663,000.00",
  },
];

const paymentInfo = [
  { label: "Account Name", value: "Fabulous Enterprise" },
  { label: "Account Number", value: "10239203920" },
  { label: "ACH Routing No", value: "1032456" },
  { label: "Bank Name", value: "USD($)" },
  { label: "Bank address", value: "Lagos" },
];

const InvoiceDetails: React.FC = () => {
  return (
    
    <div className="p-4 md:p-8 border rounded-[20px] md:rounded-[50px] shadow-md w-full md:w-[100%] mt-6 mb-6 mx-auto">
      <section className="bg-pink-100 p-4 md:p-6 rounded-[20px] md:rounded-[40px] mb-8 mx-auto max-w-full md:max-w-4xl">
        <div className="flex flex-col sm:flex-row justify-between items-start gap-4 sm:gap-6">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-[300px]">
            <div className="flex-shrink-0 mb-4">
              <h2 className="font-semibold text-sm text-gray-500 mb-2">
                {senderDetails.title}
              </h2>
              <img
                src="https://media.istockphoto.com/id/469302456/vector/hot-red-chili-jalapeno-pepper-icon-set-isolated-white-flat.jpg?s=612x612&w=0&k=20&c=JD9xEZr4gL1rmT9npGE6qDJGv28PvlPbnAzBZJocUvs="
                alt="Logo"
                className="w-14 h-14 rounded-[16px] mb-4"
              />
            </div>
            <div className="space-y-1 md:mt-6">
              <p className="text-[15px] text-[#1F1F23] font-[500]">
                {senderDetails.items[0].value}
              </p>
              <p className="text-[11px] font-[400] text-[#697598]">
                {senderDetails.items[1].value}
              </p>
              <p className="text-[11px] font-[400] text-[#697598]">
                {senderDetails.items[2].value}
              </p>
              <p className="text-[11px] font-[400] text-[#697598]">
                <a
                  href={`mailto:${senderDetails.items[3].value}`}
                  className="text-[#697598]"
                >
                  {senderDetails.items[3].value}
                </a>
              </p>
            </div>
          </div>

          <div className="flex flex-col w-full sm:w-[300px] text-left items-end">
            <h2 className="font-semibold text-[12px] text-[#697598] mb-2">
              {customerDetails.title}
            </h2>
            <div className="space-y-1">
              <p className="text-[15px] text-[#1F1F23] font-[500]">
                {customerDetails.items[0].value}
              </p>
              <p className="text-[11px] font-[400] text-[#697598]">
                {customerDetails.items[1].value}
              </p>
              <p className="text-[11px] font-[400] text-[#697598]">
                <a
                  href={`mailto:${customerDetails.items[2].value}`}
                  className="text-gray-500"
                >
                  {customerDetails.items[2].value}
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="font-[500] text-[12px] text-[#697598] mb-4">
            INVOICE DETAILS
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-[80px] text-gray-500">
            {invoiceDetails.map((detail, index) => (
              <div key={index} className="flex flex-col items-start gap-3">
                <p className="text-[10px] font-[400] text-[#666F77] uppercase">
                  {detail.label}
                </p>
                <p className="font-[500] text-[#1F1F23] text-[12px]">
                  {detail.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Items Section */}
      <section className="flex items-center mb-4 mt-4 gap-4">
        <h2 className="font-semibold text-[30px] text-gray-600 mr-4">Items</h2>
        <span className="border-b border-gray-300 flex-grow"></span>
      </section>
      <section className="mb-6">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 text-gray-500">
          {items.map((item, index) => (
            <React.Fragment key={index}>
              <div className="col-span-1 md:col-span-3 flex flex-col justify-center">
                <p className="font-[400] text-sm md:text-[16px] text-[#1F1F23]">
                  {item.description}
                </p>
                {item.extraDescription && (
                  <p className="text-xs md:text-sm text-gray-400 font-normal">
                    {item.extraDescription}
                  </p>
                )}
              </div>
              <div className="col-span-1 text-left md:text-right flex items-center justify-start md:justify-center text-sm md:text-base">
                {item.quantity}
              </div>
              <div className="col-span-1 text-left md:text-right flex items-center justify-start md:justify-center text-sm md:text-base">
                {item.unitPrice}
              </div>
              <div className="col-span-1 text-left md:text-right flex items-center justify-start md:justify-end text-sm md:text-base">
                {item.total}
              </div>
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* Summary */}
      <section className="mb-6">
        {[
          { label: "Subtotal", value: "$6,697,200.00", isBold: false },
          { label: "Discount (2.5%)", value: "-$167,430.00", isBold: false },
          { label: "Total Amount Due", value: "$6,529,770.00", isBold: true },
        ].map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-6 gap-4 mb-6"
          >
            <div className="col-span-1 md:col-span-4 md:text-right md:mr-2">
              <p
                className={`uppercase ${
                  item.isBold
                    ? "text-black font-bold"
                    : "text-gray-300 font-normal"
                } text-sm md:text-base`}
              >
                {item.label}
              </p>
            </div>
            <div className="col-span-1 md:col-span-2 md:text-right">
              <p
                className={`${
                  item.isBold ? "text-black font-bold" : "text-gray-500"
                } text-sm md:text-base`}
              >
                {item.value}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* Payment Information Section */}
      <section className="border p-4 rounded-[20px] md:rounded-[30px]">
        <h2 className="font-[500] text-[14px] text-[#697598] mb-4">
          PAYMENT INFORMATION
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-gray-500 uppercase">
          {paymentInfo.map((info, index) => (
            <div key={index} className="flex flex-col">
              <p className="text-[12px] font-[400] text-[#697598] ">
                {info.label}
              </p>
              <p className="font-[500] text-[12px] text-black">{info.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Note Section */}
      <section className="mt-6 bg-gray-100 border p-6 rounded-[20px] md:rounded-[30px]">
        <p className="text-gray-400">NOTE</p>
        <p className="font-normal text-[20px] text-gray-500">
          Thank you for your patronage
        </p>
      </section>
    </div>
  );
};

export default InvoiceDetails;
