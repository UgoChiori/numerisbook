import React from 'react';
import { HiOutlineViewGrid } from 'react-icons/hi';

const InvoiceStats: React.FC = () => {
  const stats = [
    { title: 'Total Paid', value: '$4,120,102.', color: '1,289', decimal: '76' },
    { title: 'Total Overdue', value: '$23,000.', color: '13', decimal: '13' },
    { title: 'Total Draft', value: '$12,200.', color: '08', decimal: '00'},
    { title: 'Total Unpaid', value: '$87,102.', color: '06', decimal: '00' },
  ];

  return (
    
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
      {stats.map((stat) => (
        <div
          key={stat.title}
          className={`p-4 bg-white rounded-lg border  h-48  flex flex-col justify-center items-start gap-4 uppercase `}
        >
          <HiOutlineViewGrid className="w-[35px] h-[35px] " />
          <h3 className="text-[#697598] font-[400] no-italic text-[14px] ">{stat.title}  <span className={`text-xl font-semibold text-[30px] border-border-black ${stat.color}`}></span></h3>
          <p className=" font-normal no-italic font-haas text-[28px]">{stat.value} <span className="text-[#697598] text-[14px] font-normal">{stat.decimal}</span> </p>
          
          
    
      
        </div>
      ))}
    </div>
  );
};

export default InvoiceStats;

// key={stat.title}
// className={`p-4 bg-white shadow rounded-lg border-t-4 border-${stat.color} h-48 w-48 flex flex-col justify-center items-center`}
// >
      {/* {`text-${stat.color} text-4xl`} */}




