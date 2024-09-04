import React from "react";

const Reminders: React.FC = () => {
  return (
    <div className="mt-8 mb-8  border border-gray-100 p-4 rounded-lg flex flex-col md:flex-row md:justify-start md:gap-4  text-center items-center justify-center md:w-[85%] md:h-[96px]">
      <h2 className="font-[300] md:font-[400] md:mr-2  md:text-[12px] text-[#666F77] mb-4 md:mb-0 ">
        REMINDERS
      </h2>
      <div className="flex gap-2 flex-wrap md:flex-nowrap justify-center md:h-[48px]">
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
              index <= 1
                ? "bg-[#E6FFF0] text-[#373B47]"
                : "bg-[#FFFFFF] text-[#373B47]"
            } font-[500] px-2 py-2 rounded-[24px] border text-xs md:text-[12px] whitespace-nowrap flex items-center`}
          >
            {reminder}
            {index <= 1 && (
              <svg
                xmlns="(link unavailable)"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#32de84"
                strokeWidth="2"
                className="w-4 h-4 ml-1 bg-green-100"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            )}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Reminders;
