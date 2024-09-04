import React from "react";


const InvoiceActions: React.FC = () => {
  return (
    <div>
      <p className="text-lg sm:text-xl xl:text-[20px] font-[500] mb-4 sm:mb-6">
        Invoice Actions
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 mb-6 sm:mb-8 xl:mb-10">
        <div className="bg-customBlue p-4 sm:p-5 xl:p-6 text-white text-center rounded-[24px] h-auto min-h-[10rem] sm:min-h-[12rem] flex flex-col justify-center items-start gap-2">
          <img
            src="/images/moneydollar.svg"
            className="w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] xl:w-[80px] xl:h-[80px]"
            alt="icon"
          />
          <h3 className="text-base sm:text-lg xl:text-[22px] text-[#FFFFFF] font-[500]">
            Create New Invoice
          </h3>
          <p className="text-sm xl:text-[14px] font-[200] text-[#F6F8FA]">
            Create new invoices easily
          </p>
        </div>
        <div className="bg-white p-4 sm:p-5 xl:p-6 text-black text-center rounded-[24px] h-auto min-h-[10rem] sm:min-h-[12rem] flex flex-col justify-center items-start gap-2">
          <img
            src="/images/setting.png"
            alt="icon"
            className="w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] xl:w-[80px] xl:h-[80px] text-gray-400"
            style={{
              filter: "invert(53%) sepia(0%) saturate(0%) hue-rotate(182deg) brightness(94%) contrast(89%)",
            }}
          />
          <h3 className="font-[500] text-base sm:text-lg xl:text-[22px] text-[#373B47]">
            Change Invoice Settings
          </h3>
          <p className="text-sm xl:text-[14px] text-[#697598] font-[400]">
            Customize your invoices
          </p>
        </div>
        <div className="bg-white p-4 sm:p-5 xl:p-6 text-black text-center rounded-[24px] h-auto min-h-[10rem] sm:min-h-[12rem] flex flex-col justify-center items-start gap-2">
          <img src="/images/user.png" alt="icon"
           className="w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] xl:w-[80px] xl:h-[80px] text-gray-400" 
           style={{
            filter: "invert(53%) sepia(0%) saturate(0%) hue-rotate(182deg) brightness(94%) contrast(89%)",
          }}
           />
          <h3 className="font-[500] text-base sm:text-lg xl:text-[22px] text-[#373B47]">
            Manage Customer List
          </h3>
          <p className="text-sm xl:text-[14px] text-[#697598] font-[400]">
            Add and remove customers
          </p>
        </div>
      </div>
    </div>
  );
};

export default InvoiceActions;
