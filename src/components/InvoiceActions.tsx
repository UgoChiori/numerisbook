import React from "react";
import { MdSettings } from "react-icons/md";
import { FaUsers } from "react-icons/fa";

const InvoiceActions: React.FC = () => {
  return (
    <div>
      <p className="text-lg md:text-xl font-bold mb-4 md:mb-6">
        Invoice Actions
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 md:mb-10">
        <div className="bg-customBlue p-4 md:p-6 text-white text-center rounded-lg h-40 md:h-48 flex flex-col justify-center items-start gap-2">
          <img src="/images/moneydollar.svg" className="w-[80px] h-[80px] " alt="icon"/>
          <h3 className="text-base md:text-[22px] text-[#FFFFFF] font-[500]">
            Create New Invoice
          </h3>
          <p className="text-sm md:text-[14px] font-[200] text-[#F6F8FA]">
            Create new invoices easily
          </p>
        </div>
        <div className="bg-white p-4 md:p-6 text-black text-center rounded-lg h-40 md:h-48 flex flex-col justify-center items-start gap-2">
        
          <MdSettings className="w-[80px] h-[80px] text-gray-400 " />
         
          <h3 className="font-[500] text-base md:text-[22px] text-[#373B47]">
            Change Invoice Settings
          </h3>
          <p className="text-sm md:text-[14px] text-[#697598] font-[400]">
            Customize your invoices
          </p>
        </div>
        <div className="bg-white p-4 md:p-6 text-black text-center rounded-lg h-40 md:h-48 flex flex-col justify-center items-start gap-2">
          <FaUsers className="w-[80px] h-[80px] text-gray-400" />
          <h3 className="font-[500] text-base md:text-[22px] text-[#373B47]">
            Manage Customer List
          </h3>

          <p className="text-sm md:text-[14px] text-[#697598] font-[400]">
            Add and remove customers
          </p>
        </div>
      </div>
    </div>
  );
};

export default InvoiceActions;



// <div className="bg-white p-4 md:p-6 text-black rounded-lg h-40 md:h-48 flex justify-start items-center gap-4">
//   <MdSettings className="w-[80px] h-[80px] text-gray-400" />
//   <div>
//     <h3 className="font-[500] text-base md:text-[22px] text-[#373B47]">
//       Change Invoice Settings
//     </h3>
//     <p className="text-sm md:text-[14px] text-[#697598] font-[400]">
//       Customize your invoices
//     </p>
//   </div>
// </div>