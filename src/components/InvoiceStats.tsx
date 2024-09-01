import React from 'react';
import { HiOutlineViewGrid } from 'react-icons/hi';

const InvoiceStats: React.FC = () => {
  const stats = [
    { title: 'Total Paid', value: '$4,120,102.', color: 'bg-green-500', decimal: '76' },
    { title: 'Total Overdue', value: '$23,000.', color: 'red-500', decimal: '13' },
    { title: 'Total Draft', value: '$12,200.', color: 'gray-400', decimal: '00'},
    { title: 'Total Unpaid', value: '$87,102.', color: 'text-yellow-500', decimal: '00' },
  ];

  return (
    
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
      {stats.map((stat) => (
        <div
          key={stat.title}
          className={`p-4 bg-white rounded-lg border  h-48  flex flex-col justify-center items-start gap-4 uppercase `}
        >
          <HiOutlineViewGrid className="w-[35px] h-[35px] " />
          <h3 className="text-gray-500 font-normal">{stat.title}  <span className={`text-xl font-semibold text-[30px] border-border-black ${stat.color}`}></span></h3>
          <p className="text-xl font-semibold text-[30px]">{stat.value} <span className="text-customGray text-[14px] font-normal">{stat.decimal}</span> </p>
          
          
    
      
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