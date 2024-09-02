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
    <div className="bg-white p-4 md:p-6 rounded-[30px] shadow mb-8 w-full md:w-[80%]">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 md:mb-6">
        <h3 className="font-[500] text-[20px] md:text-xl">Recent Invoices</h3>
        <button className="uppercase font-[500] text-[14px] text-customBlue border border-gray-200 rounded-[30px] px-4 py-2 md:px-6 md:py-2 mt-2 md:mt-0 w-[240px] h-[60px]">
          View All Invoices
        </button>
      </div>

      {invoices.map((invoiceGroup, groupIndex) => (
        <div key={groupIndex} className="mb-6 md:mb-8">
          <h4 className="text-black mb-2 md:mb-4 uppercase font-semibold text-xs md:text-sm">{invoiceGroup.date}</h4>
          <ul>
            {invoiceGroup.items.map((invoice, index) => (
              <li
                key={index}
                className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 md:mb-6 p-2 md:p-4  border-gray-200"
              >
                <div className="flex flex-col mb-2 md:mb-0">
                  <span className="font-bold text-sm md:text-base">Invoice -</span>
                  <span className="font-semibold text-sm md:text-base">{invoice.id}</span>
                </div>
                <div className="flex flex-col mb-2 md:mb-0">
                  <span className="font-normal text-gray-500 uppercase text-xs md:text-sm">Due Date</span>
                  <span className="font-semibold text-gray-500 text-xs md:text-sm">{invoice.dueDate}</span>
                </div>
                <div className="flex flex-col items-start md:items-end">
                  <span className="text-black font-bold text-sm md:text-base">{invoice.amount}</span>
                  <button className={` uppercase ${statusColorMap[invoice.status]} text-xs md:text-sm px-6 py-3 rounded-[24px] mb-2 mt-2`}>
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
