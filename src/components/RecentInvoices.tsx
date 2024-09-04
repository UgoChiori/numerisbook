import React from 'react';

const RecentInvoices: React.FC = () => {
  const invoices = [
    {
      date: 'Today - 27th November, 2022',
      items: [
        {
          id: '1023494-2304',
          dueDate: 'May 19th, 2023',
          amount: '$1,311,750.12',
          status: 'Paid',
        },
        {
          id: '1023494-2304',
          dueDate: 'May 19th, 2023',
          amount: '$1,311,750.12',
          status: 'Overdue',
        },
      ],
    },
    {
      date: '8th December, 2022',
      items: [
        {
          id: '1023494-2304',
          dueDate: 'May 19th, 2023',
          amount: '$1,311,750.12',
          status: 'Draft',
        },
        {
          id: '1023494-2304',
          dueDate: 'May 19th, 2023',
          amount: '$1,311,750.12',
          status: 'Pending Payment',
        },
        {
          id: '1023494-2304',
          dueDate: 'May 19th, 2023',
          amount: '$1,311,750.12',
          status: 'Paid',
        },
      ],
    },
  ];

  const statusColorMap: { [key: string]: string } = {
    Paid: 'bg-green-100 text-green-500',
    Overdue: 'bg-red-100 text-red-500',
    Draft: 'bg-gray-100 text-gray-500',
    'Pending Payment': 'bg-yellow-100 text-yellow-500',
  };

  return (
    <div className="bg-white p-4 sm:p-5 lg:p-6 rounded-[30px] shadow mb-8 w-full lg:w-[90%] xl:w-[80%]">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-5 lg:mb-6">
        <h3 className="font-[500] text-[18px] sm:text-[20px] lg:text-xl">Recent Invoices</h3>
        <button className="uppercase font-[500] text-[14px] text-customBlue border border-gray-200 rounded-[30px] px-4 py-2 sm:px-5 lg:px-6 sm:py-2 mt-2 sm:mt-0 w-full sm:w-auto h-[50px] sm:h-[60px]">
          View All Invoices
        </button>
      </div>

      {invoices.map((invoiceGroup, groupIndex) => (
        <div key={groupIndex} className="mb-5 sm:mb-6 lg:mb-8">
        <h4 className="text-black mb-2 sm:mb-3 lg:mb-4 uppercase font-semibold text-xs sm:text-sm">
          {invoiceGroup.date}
        </h4>
        <ul>
          {invoiceGroup.items.map((invoice, index) => (
            <li
              key={index}
              className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-5 lg:mb-6 p-2 sm:p-3 lg:p-4  border-gray-200 last:border-b-0"
            >
              <div className="flex flex-col mb-2 sm:mb-0 sm:mr-8">
                <span className="font-bold text-sm sm:text-base">Invoice -</span>
                <span className="font-semibold text-sm sm:text-base">{invoice.id}</span>
              </div>
              
              <div className="flex flex-col mb-2 sm:mb-0 sm:mx-8 flex-grow">
                <span className="font-normal text-gray-500 uppercase text-xs sm:text-sm">Due Date</span>
                <span className="font-semibold text-gray-500 text-xs sm:text-sm">{invoice.dueDate}</span>
              </div>
              
              <div className="flex flex-col items-start sm:items-end sm:ml-auto">
                <span className="text-black font-bold text-sm sm:text-base">{invoice.amount}</span>
                <button className={`uppercase ${statusColorMap[invoice.status]} text-xs sm:text-sm px-4 sm:px-5 lg:px-6 py-2 sm:py-3 rounded-[24px] mt-2 sm:mt-2`}>
                  {invoice.status}
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      

      ))}
    </div>
  );
};

export default RecentInvoices;  

