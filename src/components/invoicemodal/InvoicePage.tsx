
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
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50 p-4 sm:p-6 overflow-hidden">
        <button
          className="absolute top-1 right-4 text-gray-400 bg-white w-[25px] h-[25px] md:w-[50px] md:h-[50px] rounded-full hover:text-gray-700 text-sm sm:text-4xl border border-white"
          onClick={onClose}
        >
          &times;
        </button>
      <div className="relative max-w-6xl mx-auto bg-white p-6 rounded-[40px] shadow-lg w-full max-h-[90vh] overflow-y-auto">
      
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
