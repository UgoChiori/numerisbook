
import React from "react";
import InvoiceHeader from "./InvoiceHeader";
import InvoiceDetails from "./InvoiceDetails";
import InvoiceActivity from "./InvoiceActivity";
import InvoiceReminder from "./InvoiceReminder";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const InvoicePage: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className=" inset-0 bg-black bg-opacity-[0.09] flex justify-center items-center z-50 p-4 sm:p-6 ">
      <div className="relative max-w-6xl mx-auto bg-white p-6 rounded-[40px] shadow-lg w-full">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl sm:text-2xl"
          onClick={onClose}
        >
          &times;
        </button>
        <InvoiceHeader />
        <div className="mt-4">
          <InvoiceReminder />
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="sm:w-2/3 w-full">
              <InvoiceDetails />
            </div>
            <div className="sm:w-1/3 w-full">
              <InvoiceActivity />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoicePage;
