import React, { useState } from "react";
// import { BellIcon } from '@heroicons/react/16/solid';
import InvoicePage from "./invoicemodal/InvoicePage";
import { ChevronDownIcon } from "@heroicons/react/16/solid";

const Header: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <header className="mb-8">
        {/* Top Title Section */}
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-[20px] md:text-[26px] text-[#373B47] font-[500] tracking-wide ">
            INVOICE
          </h1>
          <div className="flex items-center gap-[16px]">
            <div className="flex flex-col  justify-center items-center w-[64px] h-[64px] rounded-full bg-[#FFFFFF]">
            <img
              src="/images/bell.svg "
              alt="bell"
              className="w-6 h-6 text-gray-400 cursor-pointer "
            />
</div>
            <div className="flex flex-row items-center justify-between w-[88px] h-[64px] bg-[#FFFFFF] rounded-full">
              <span className="flex items-center justify-center border border-customBlue rounded-full text-[#ffff] bg-customBlue text-center font-semibold md:text-[16px] md:text-base uppercase w-[40px] h-[40px] ml-2">
                KO
              </span>
              <ChevronDownIcon className="w-6 h-6 text-gray-400 mr-1 cursor-pointer" />
            </div>

           
          </div>
        </div>

        <div className="border-b border-gray-200 mb-4"></div>

        {/* Secondary Title and Buttons */}
        <div className="flex flex-col items-center md:flex-row md:justify-between md:items-center mb-2">
          <h2 className="text-[18px] md:text-[32px] text-[#1F1F23] font-[500]">Invoice</h2>
          <div className="flex flex-col items-center md:flex-row">
            <button className="w-[75vw] md:w-[240px] h-[45px] md:h-[60px] text-[#697598] border rounded-full px-2 md:px-4 py-1 md:py-2 mr-2 md:mr-4 bg-white text-[14px] md:text-base">
              SEE WHAT'S NEW
            </button>
            <button
              onClick={handleOpenModal}
              className="bg-customBlue w-[75vw] md:w-[240px] h-[45px] md:h-[60px] text-white rounded-full px-2 md:px-4 py-1 md:py-2 hover:bg-blue-600 text-[12px] md:text-base mt-2 md:mt-0"
            >
              CREATE
            </button>
          </div>
        </div>
      </header>
      {isModalOpen && (
        <InvoicePage isOpen={isModalOpen} onClose={handleCloseModal} />
      )}
    </>
  );
};

export default Header;
