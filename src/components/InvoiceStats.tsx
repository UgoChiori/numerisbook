import React from 'react';
import { HiOutlineViewGrid } from 'react-icons/hi';

const InvoiceStats: React.FC = () => {
  const stats = [
    { title: 'Total Paid', value: '$4,120,102.76', color: 'green-500' },
    { title: 'Total Overdue', value: '$23,000.13', color: 'red-500'},
    { title: 'Total Draft', value: '$12,200.00', color: 'gray-400'},
    { title: 'Total Unpaid', value: '$87,102.00', color: 'yellow-500' },
  ];

  return (
    
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
      {stats.map((stat) => (
        <div
          key={stat.title}
          className={`p-4 bg-white rounded-lg border  h-48  flex flex-col justify-center items-start gap-4`}
        >
          <HiOutlineViewGrid className="w-12 h-12  " />
          <h3 className="text-gray-600">{stat.title}</h3>
          <p className="text-xl font-normal">{stat.value}</p>
          
          {/* {`text-${stat.color} text-4xl`} */}
      
        </div>
      ))}
    </div>
  );
};

export default InvoiceStats;

// key={stat.title}
// className={`p-4 bg-white shadow rounded-lg border-t-4 border-${stat.color} h-48 w-48 flex flex-col justify-center items-center`}
// >
