import React from "react";
import { HiOutlineViewGrid } from "react-icons/hi";

const InvoiceStats: React.FC = () => {
  const stats = [
    {
      title: "Total Paid",
      value: "$4,120,102.",
      color: "1,289",
      decimal: "76",
    },
    { title: "Total Overdue", value: "$23,000.", color: "13", decimal: "13" },
    { title: "Total Draft", value: "$12,200.", color: "08", decimal: "00" },
    { title: "Total Unpaid", value: "$87,102.", color: "06", decimal: "00" },
  ];

  const colorMap: { [key: string]: string } = {
    "1,289": "bg-[#B6FDD3]",
    "13": "bg-[#FFB7BD]",
    "08": "bg-[#D9D9E0]",
    "06": "bg-[#F8E39B]",
  };
 
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-8">
      {stats.map((stat) => (
        <div
          key={stat.title}
          className="p-4 bg-white rounded-[24px] h-auto min-h-[12rem] flex flex-col justify-center items-start gap-4 uppercase"
        >
          <HiOutlineViewGrid
            className="w-[35px] h-[35px] text-gray-400"
            style={{ strokeWidth: 0.9 }}
          />
          <h3 className="text-[#697598] font-[400] no-italic text-[14px] flex flex-wrap items-center gap-2">
            <span className="mr-2">{stat.title}</span>
            <span
              className={`px-3 py-1 text-[#373B47] rounded-[24px] ${colorMap[stat.color]} flex-shrink-0`}
            >
              {stat.color}
            </span>
          </h3>
          <p className="font-[400] text-[#1F1F23] no-italic font-haas text-[20px] sm:text-[22px] xl:text-[26px] leading-tight">
            {stat.value}{" "}
            <span className="text-gray-500 text-[12px] sm:text-[14px] font-[500]">
              {stat.decimal}
            </span>{" "}
          </p>
        </div>
      ))}
    </div>
  );
};

export default InvoiceStats;
