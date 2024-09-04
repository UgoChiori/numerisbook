import React, { useState } from "react";
import jsPDF from "jspdf";

const InvoiceHeader: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.text("Invoice -  1023494 - 2304", 20, 20);
    doc.text("View the details and activity of this invoice", 20, 30);
    doc.save("invoice-1023494-2304.pdf");
  };

  return (
    <header className="flex flex-col md:flex-row gap-6 md:gap-10 justify-between items-center ">
      <div className="flex flex-col items-start w-full md:w-auto gap-2">
        <h1 className="text-xl md:text-[32px] font-haas font-[700]no-italic">
          Invoice - 1023494 - 2304
        </h1>
        <p className="text-[#697598] mt-1 mb-2 font-[400]">
          View the details and activity of this invoice
        </p>
        <button className="bg-blue-50 text-customBlue px-3 py-1 rounded-[24px] font-[500] mt-4 mb-4 text-[8px] md:text-[10px] uppercase w-[135px] h-[36px]">
          Partial Payment
        </button>
      </div>
      <div className="flex flex-col md:flex-row items-start md:items-end w-full md:w-auto space-y-2 md:space-y-0 md:space-x-2">
        <button
          onClick={downloadPDF}
          className="w-full md:w-[240px] md:h-[68px] bg-white border text-customBlue uppercase px-3 py-1 rounded-full font-medium text-sm md:text-base"
        >
          Download as PDF
        </button>
        <button className="w-full md:w-[240px] md:h-[68px] bg-customBlue text-white px-3 py-1 rounded-full font-medium text-sm md:text-base uppercase">
          Send Invoice
        </button>
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="w-full md:w-[101px] md:h-[68px] bg-white border uppercase text-gray-600 px-2 py-1 rounded-[40px] font-[500] text-[12px] md:text-[16px]"
          >
            More
          </button>
          {isOpen && (
            <div className="flex flex-col justify-center items-start  absolute right-0 mt-2 w-full md:w-[262px] md:h-[130px] bg-white border shadow-lg rounded-[24px] p-[16px]">
              <ul>
                <li className="px-2 py-1 text-[#697598] font-[500] uppercase hover:bg-gray-100 cursor-pointer text-sm md:text-base mb-4">
                  Duplicate Invoice
                </li>
                <li className="px-2 py-1 text-[#697598] font-[500] uppercase hover:bg-gray-100 cursor-pointer text-sm md:text-base">
                  Get Sharable Link
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default InvoiceHeader;
