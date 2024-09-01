import React, { useState } from 'react';
import { BellIcon } from '@heroicons/react/16/solid';
import InvoicePage from './invoicemodal/InvoicePage';

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
          <h1 className="text-[20px] md:text-[26px] font-semibold tracking-wide text-gray-600">INVOICE</h1>
          <div className="flex items-center">
            <BellIcon className="w-5 h-5 md:w-6 md:h-6" />
            <div className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 bg-gray-200 rounded-full">
              <span className="text-customBlue font-semibold text-[14px] md:text-base">KD</span>
            </div>
          </div>
        </div>

        <div className="border-b border-gray-300 mb-4"></div>

        {/* Secondary Title and Buttons */}
        <div className="flex flex-col items-center md:flex-row md:justify-between md:items-center mb-2">
          <h2 className="text-[18px] md:text-[24px] font-normal">Invoice</h2>
          <div className="flex flex-col items-center md:flex-row">
            <button className="w-[75vw] md:w-[240px] h-[45px] md:h-[60px] text-gray-500 border rounded-full px-2 md:px-4 py-1 md:py-2 mr-2 md:mr-4 bg-white text-[12px] md:text-base">
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
      {isModalOpen && <InvoicePage isOpen={isModalOpen} onClose={handleCloseModal} />}
    </>
  );
};

export default Header;
