

import React from "react";

const InvoiceActivity: React.FC = () => {
  const activities = [
    {
      time: "Today, 12:20 PM",
      description: "Created invoice 00239434/Olaniyi Ojo Adewale",
      user: "You",
    },
    {
      time: "Today, 12:20 PM",
      description: "Sent invoice 00239434/Olaniyi Ojo Adewale to Olaniyi Ojo Adewale",
      user: "You",
    },
    {
      time: "Today, 12:20 PM",
      description: "You manually confirmed a partial payment of $503,000.00",
      user: "Payment Confirmed",
    },
    {
      time: "Today, 12:20 PM",
      description: "You manually confirmed a full payment of $6,000,000.00",
      user: "Payment Confirmed",
    },
    {
      time: "Today, 12:20 PM",
      description: "Sent invoice 00239434/Olaniyi Ojo Adewale to Olaniyi Ojo Adewale",
      user: "You",
    },
  ];

  return (
    <div className="bg-white p-4 md:p-6 rounded-lg">
      <h2 className="font-semibold text-md md:text-lg text-gray-600 mb-4">Invoice Activity</h2>
      <div className="relative">
        {activities.map((activity, index) => (
          <React.Fragment key={index}>
            <div className="flex flex-col md:flex-row items-start mb-4">
              <img
                src="/images/avatarmi.png"
                alt="User"
                className="rounded-full w-8 h-8 md:w-10 md:h-10 mr-0 md:mr-4 mb-2 md:mb-0"
              />
              <div>
                <p className="font-semibold text-black text-sm md:text-base">{activity.user}</p>
                <p className="text-gray-500 text-xs md:text-sm">{activity.time}</p>
                <p className="text-black text-sm md:text-base">{activity.description}</p>
              </div>
            </div>
            {/* {index < activities.length - 0 && (
              <div className="absolute left-4 md:left-7 top-14 md:top-16 bottom-0 w-px bg-gray-300"></div>
            )} */}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default InvoiceActivity;
