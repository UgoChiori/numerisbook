import React from "react";

const Reminders: React.FC = () => {
  return (
    <div className="mt-8 mb-8 border border-gray-100 p-4 rounded-lg flex flex-col md:flex-row items-center justify-center">
      <h2 className="font-[300] md:font-[400] md:mr-2  md:text-[12px] text-[#666F77] mb-4 md:mb-0 ">
        REMINDERS
      </h2>
      <div className="flex gap-2 flex-wrap md:flex-nowrap justify-center">
        {[
          "14 days before due date",
          "7 days before due date",
          "3 days before due date",
          "24 hrs before due date",
          "On the due date",
        ].map((reminder, index) => (
          <span
            key={index}
            className={`${
              index === 0 ? "bg-green-100 text-green-600" : "bg-[#FFFFFF] text-black"
            } font-[400] px-3 py-2 rounded-full border text-xs md:text-sm whitespace-nowrap`}
          >
            {reminder}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Reminders;