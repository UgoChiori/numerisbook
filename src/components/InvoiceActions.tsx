import React from "react";

const InvoiceActions: React.FC = () => {
  return (
    <div>
      <p className="text-lg md:text-xl font-bold mb-4 md:mb-6">
        Invoice Actions
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 md:mb-10">
        <div className="bg-customBlue p-4 md:p-6 text-white text-center rounded-lg h-40 md:h-48 flex flex-col justify-center items-center">
          <h3 className="font-bold text-base md:text-lg">Create New Invoice</h3>
          <p className="text-sm md:text-base">Create new invoices easily</p>
        </div>
        <div className="bg-white p-4 md:p-6 text-black text-center rounded-lg h-40 md:h-48 flex flex-col justify-center items-center">
          <h3 className="font-bold text-base md:text-lg">
            Change Invoice Settings
          </h3>
          <p className="text-sm md:text-base">Customize your invoices</p>
        </div>
        <div className="bg-white p-4 md:p-6 text-center rounded-lg h-40 md:h-48 flex flex-col justify-center items-center">
          <h3 className="font-bold text-base md:text-lg">
            Manage Customer List
          </h3>
          <p className="text-sm md:text-base">Add and remove customers</p>
        </div>
      </div>
    </div>
  );
};

export default InvoiceActions;
