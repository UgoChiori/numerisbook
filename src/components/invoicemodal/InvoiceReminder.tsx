

import React from "react";

const Reminders: React.FC = () => {
  return (
    <div className="mt-8 mb-8 border border-gray-100 p-4 rounded-lg w-[100%] h-[100px] flex items-center justify-center">
      <div className="flex flex-col sm:flex-row items-center gap-2 overflow-x-auto ml-[-40px]">
        <h2 className="font-semibold text-lg text-gray-600">REMINDERS</h2>
        <div className="flex flex-wrap gap-2">
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
                index === 0 ? "bg-green-100 text-green-600" : "bg-gray-200 text-gray-600"
              } font-medium py-1 px-2 rounded-full border text-xs md:text-sm`}
            >
              {reminder}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reminders;

