
import React from 'react';

const RecentActivities: React.FC = () => {
  const activities = [
    {
      description: 'Invoice creation',
      time: 'Yesterday, 12:05 PM',
      user: 'Olaniyi Ojo Adewale',
      invoiceId: '00239434',
      avatar: '/images/avatarmi.png', // Replace with actual avatar URL
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
    <div className="bg-white p-4 md:p-6 rounded-[30px] shadow w-full md:w-[460px] mb-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
        <h3 className="font-bold text-lg md:text-xl">Recent Activities</h3>
        <button className="text-blue-500 border border-blue-500 rounded-full px-4 py-2 md:px-6 md:py-2 mt-2 md:mt-0">
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
              className="w-10 h-10 md:w-12 md:h-12 rounded-full mr-2 md:mr-4 mb-2 md:mb-10"
            />
            <div className="flex flex-col">
              <p className="font-bold text-sm md:text-base">{activity.description}</p>
              <p className="text-gray-500 text-xs md:text-sm">{activity.time}</p>
              <div className="bg-gray-100 rounded-[20px] p-2 mt-2 md:mt-2 w-full md:w-[85%]">
                <p className="text-xs md:text-sm">
                  Created invoice <span className="font-bold">{activity.invoiceId}</span> /{' '}
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
