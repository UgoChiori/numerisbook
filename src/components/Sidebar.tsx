// import React, { useState } from "react";
// import { FaHome, FaScroll, FaUsers } from "react-icons/fa";
// import { MdAccountCircle, MdOutlineHelpOutline } from "react-icons/md";
// import { HiOutlineViewGrid } from "react-icons/hi";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { MdSettings } from "react-icons/md";
// import { Link } from "react-router-dom";

// const Sidebar: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="md:flex">
//       <button className="md:hidden p-4" onClick={toggleSidebar}>
//         <GiHamburgerMenu size={24} />
//       </button>

//       {/* Sidebar */}
//       <div
//         className={`bg-white m-2 mb-2 md:mb-8 transition-transform duration-300 ease-in-out ${
//           isOpen ? "translate-x-0" : "-translate-x-full"
//         } md:translate-x-0 md:w-auto w-85 md:w-full rounded-lg`}
//       >
//         <ul className="md:p-4 md:mt-10 md:space-y-8 text-gray-500">
//           <Link to="#" className="flex items-center px-4 py-2 md:px-6 md:py-3">
//             <FaHome className="mr-3 w-[24px] h-[24px]" />
//             Getting Started
//           </Link >
//           <Link to="#" className="flex items-center px-4 py-2 md:px-6 md:py-3">
//           <HiOutlineViewGrid className="w-[24px] h-[24px] text-gray-400 mr-3" style={{ strokeWidth: 0.9 }} />
//             Overview
//           </Link>
//           <Link to="#" className="flex items-center px-4 py-2 md:px-6 md:py-3">
//             <MdAccountCircle className="mr-3 w-[24px] h-[24px]" />
//             Accounts
//           </Link>
//           <Link to="#" className="flex items-center px-4 py-2 md:px-6 md:py-3">
//             <FaScroll className="mr-3 w-[24px] h-[24px]" />
//             Invoice
//           </Link >
//           <Link to="#" className="flex items-center px-4 py-2 md:px-6 md:py-3">
//             <FaUsers className="mr-3 w-[24px] h-[24px]" />
//             Beneficiary Management
//           </Link >
//           <Link to="#" className="flex items-center px-4 py-2 md:px-6 md:py-3">
//             <MdOutlineHelpOutline className="mr-3 w-[24px] h-[24px]" />
//             Help Center
//           </Link>
//           <Link to="#" className="flex items-center px-4 py-2 md:px-6 md:py-3">
//             <MdSettings className="mr-3 w-[24px] h-[24px]" />
//             Settings
//           </Link >
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;
import React, { useState } from "react";
import { FaHome, FaScroll, FaUsers } from "react-icons/fa";
import { MdAccountCircle, MdOutlineHelpOutline } from "react-icons/md";
import { HiOutlineViewGrid } from "react-icons/hi";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdSettings } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { name: "Getting Started", path: "/", icon: FaHome },
    { name: "Overview", path: "/overview", icon: HiOutlineViewGrid },
    { name: "Accounts", path: "/accounts", icon: MdAccountCircle },
    { name: "Invoice", path: "/invoice", icon: FaScroll },
    { name: "Beneficiary Management", path: "/beneficiaries", icon: FaUsers },
    { name: "Help Center", path: "/help", icon: MdOutlineHelpOutline },
    { name: "Settings", path: "/settings", icon: MdSettings },
  ];

  return (
    <div className="md:flex">
      <button className="md:hidden p-4" onClick={toggleSidebar}>
        <GiHamburgerMenu size={24} />
      </button>

      {/* Sidebar */}
      <div
        className={`bg-white m-2 mb-2 md:mb-8 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:w-auto w-85 md:w-full rounded-lg`}
      >
        <ul className="md:p-4 md:mt-10 md:space-y-8 text-gray-500">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;

            return (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center px-4 py-2 md:px-6 md:py-3 ${
                  isActive
                    ? "border-4 border-gray-200 text-gray-500 rounded-full"
                    : "text-gray-500"
                }`}
              >
                <Icon
                  className={`mr-3 w-[24px] h-[24px] ${
                    isActive ? "" : ""
                  }`}
                />
                {item.name}
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
