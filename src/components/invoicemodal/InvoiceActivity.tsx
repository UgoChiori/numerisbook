import React from "react";

const InvoiceActivity: React.FC = () => {
  const activities = [
    {
      time: "Today, 12:20 PM",
      description: "Created invoice ",
      extraDescription: " 00239434/Olaniyi Ojo Adewale",
      user: "You",
    },
    {
      time: "Today, 12:20 PM",
      description: "Sent invoice ",
      extraDescription: "00239434/Olaniyi Ojo Adewale to Olaniyi Ojo Adewale",
      user: "You",
    },
    {
      time: "Today, 12:20 PM",
      description: "You manually confirmed a partial payment of ",
      extraDescription: "$503,000.00",
      user: "Payment Confirmed",
    },
    {
      time: "Today, 12:20 PM",
      description: "You manually confirmed a full payment of ",
      extraDescription: "$6,000,000.00",
      user: "Payment Confirmed",
    },
    {
      time: "Today, 12:20 PM",
      description: "Sent invoice ",
      extraDescription: "00239434/Olaniyi Ojo Adewale to Olaniyi Ojo Adewale",
      user: "You",
    },
  ];

  return (
    <div className="bg-white p-4 md:mr-4 md:p-6 md:w-[100%]">
      <h2 className="font-[500] text-md md:text-[20px] text-gray-[1F1F23] mb-4">Invoice Activity</h2>
      <div className="relative">
        {activities.map((activity, index) => (
          <React.Fragment key={index}>
            <div className="flex flex-col md:flex-row items-start mb-4 overflow-hidden">
  <img
    src="/images/avatarmi.png"
    alt="User"
    className="relative z-10 rounded-full w-8 h-8 md:w-10 md:h-10 mr-0 md:mr-4 mt-2 md:mb-0"
  />
  <div className="p-2 space-y-2 overflow-hidden">
    <p className="font-500 text-black text-sm md:text-[15px] whitespace-nowrap overflow-ellipsis overflow-hidden">
      {activity.user}
    </p>
    <p className="text-[#697598] text-xs md:text-[14px] whitespace-nowrap  overflow-hidden">
      {activity.time}
    </p>
 
    <div className="rounded-[16px] bg-[#F6F8FA] w-full  py-4 p-2 h-full">
      <p className="font-[400] text-[grey] text-sm md:text-[12px]">
        {activity.description}
        <span className="font-[500] text-[#1F1F23] text-[12px]">
          {activity.extraDescription}
        </span>
      </p>
    </div>
  </div>
</div>

            {index < activities.length - 0 && (
              <div className="absolute left-4 md:left-5 top-14 md:top-12 md:bottom-[94px] w-px bg-gray-200"></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default InvoiceActivity;
