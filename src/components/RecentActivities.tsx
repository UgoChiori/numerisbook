import React from 'react';

interface Activity {
  description: string;
  time: string;
  user: string;
  invoiceId: string;
  avatar: string;
}

const activities: Activity[] = [
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

const ActivityItem: React.FC<Activity> = ({ description, time, user, invoiceId, avatar }) => (
  <li className="flex flex-col md:flex-row items-start md:items-center mb-4 md:mb-6 p-2 md:p-0">
    <img
      src={avatar}
      alt={user}
      className="w-10 h-10 md:w-12 md:h-12 rounded-full mr-2 md:mr-4 mb-2"
    />
    <div className="flex flex-col justify-center items-start gap-2">
      <p className="font-medium text-sm md:text-lg text-black">{description}</p>
      <p className="text-gray-500 text-xs md:text-sm">{time}</p>
      <div className="bg-gray-100 rounded-xl p-4 mt-2">
        <p className="text-xs md:text-sm">
          <span className="text-gray-500">Created invoice</span>
          <span className="font-medium text-base"> {invoiceId}</span> / {user}
        </p>
      </div>
    </div>
  </li>
);

const RecentActivities: React.FC = () => (
  <div className="bg-white p-4 md:p-6 rounded-2xl shadow w-full md:w-3/5 mb-8">
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
      <h3 className="font-medium text-lg md:text-xl">Recent Activities</h3>
      <button className="text-customBlue border border-gray-300 rounded-[30px] uppercase w-28 h-12 px-4 py-2 mt-2 md:mt-0 text-xs font-medium">
        View All
      </button>
    </div>
    <ul>
      {activities.map((activity, index) => (
        <ActivityItem key={`${activity.invoiceId}-${index}`} {...activity} />
      ))}
    </ul>
  </div>
);

export default RecentActivities;

