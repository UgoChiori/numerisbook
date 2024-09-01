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
    Paid: 'text-green-500',
    Overdue: 'text-red-500',
    Draft: 'text-gray-500',
    'Pending Payment': 'text-yellow-500',
  };

  return (
    <div className="bg-white p-4 md:p-6 rounded-[30px] shadow mb-8 w-full md:w-[80%]">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 md:mb-6">
        <h3 className="font-bold text-lg md:text-xl">Recent Invoices</h3>
        <button className="text-blue-500 border border-blue-500 rounded-full px-4 py-2 md:px-6 md:py-2 mt-2 md:mt-0">
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
                className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 md:mb-6 p-2 md:p-4 border-b border-gray-200"
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
                  <span className={`uppercase ${statusColorMap[invoice.status]} text-xs md:text-sm`}>
                    {invoice.status}
                  </span>
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
