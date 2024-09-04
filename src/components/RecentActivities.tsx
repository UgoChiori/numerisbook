import React from 'react';

const RecentActivities: React.FC = () => {
  const activities = [
    {
      description: 'Invoice creation',
      time: 'Yesterday, 12:05 PM',
      user: 'Olaniyi Ojo Adewale',
      invoiceId: '00239434',
      avatar: '/images/avatarmi.png', 
    },
    {
      description: 'Invoice creation',
      time: 'Yesterday, 12:05 PM',
      user: 'Olaniyi Ojo Adewale',
      invoiceId: '00239434',
      avatar: '/images/avatarmi.png',
    },
    {
      description: 'Invoice creation',
      time: 'Yesterday, 12:05 PM',
      user: 'Olaniyi Ojo Adewale',
      invoiceId: '00239434',
      avatar: '/images/avatarmi.png',
    },
    {
      description: 'Invoice creation',
      time: 'Yesterday, 12:05 PM',
      user: 'Olaniyi Ojo Adewale',
      invoiceId: '00239434',
      avatar: '/images/avatarmi.png',
    },
  ];

  return (
    <div className="bg-white p-4 md:p-6 rounded-[30px] shadow w-full md:w-[60%] mb-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
        <h3 className="font-[500] text-lg md:text-[20px]">Recent Activities</h3>
        <button className="text-customBlue border border-gray-300 rounded-[30px] uppercase w-[112px] h-[60px] px-4 py-2 md:px-6 md:py-2 mt-2 md:mt-0 text-[13px] font-[500]">
          View All
        </button>
      </div>
      <ul>
        {activities.map((activity, index) => (
          <li
            key={index}
            className="flex flex-col md:flex-row items-start md:items-center mb-4 md:mb-6 p-2 md:p-0"
          >
            <img
              src={activity.avatar}
              alt={activity.user}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full mr-2 md:mr-4 mb-2 md:mt-[-78px]"
            />
            <div className="flex flex-col justify-center items-start gap-2">
              <p className="font-[500] text-sm md:text-[18px] text-[#000000]">{activity.description}</p>
              <p className="text-[#697598] text-xs md:text-[14px] font-[400]">{activity.time}</p>
              <div className="bg-[#F6F8FA] rounded-[16px] p-[16px]  mt-2  ">
                <p className="text-xs md:text-sm ">
                  <span className="text-[#697598]">Created invoice</span>
                  <span className="font-[500] text-[14px]"> {activity.invoiceId}</span> /{' '}
                  {activity.user}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentActivities;
