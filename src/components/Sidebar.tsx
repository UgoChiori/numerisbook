import React, { useState } from "react";
import { FaHome, FaScroll, FaUsers } from "react-icons/fa";
import { MdAccountCircle, MdOutlineHelpOutline } from "react-icons/md";
import { HiOutlineViewGrid } from "react-icons/hi";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdSettings } from "react-icons/md";

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

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
          <li className="flex items-center px-4 py-2 md:px-6 md:py-3">
            <FaHome className="mr-3 w-[24px] h-[24px]" />
            Getting Started
          </li>
          <li className="flex items-center px-4 py-2 md:px-6 md:py-3">
            <HiOutlineViewGrid className="mr-3 w-[24px] h-[24px]" />
            Overview
          </li>
          <li className="flex items-center px-4 py-2 md:px-6 md:py-3">
            <MdAccountCircle className="mr-3 w-[24px] h-[24px]" />
            Accounts
          </li>
          <li className="flex items-center font-bold text-customGray px-4 py-2 md:px-6 md:py-3">
            <FaScroll className="mr-3 w-[24px] h-[24px]" />
            Invoice
          </li>
          <li className="flex items-center px-4 py-2 md:px-6 md:py-3">
            <FaUsers className="mr-3 w-[24px] h-[24px]" />
            Beneficiary Management
          </li>
          <li className="flex items-center px-4 py-2 md:px-6 md:py-3">
            <MdOutlineHelpOutline className="mr-3 w-[24px] h-[24px]" />
            Help Center
          </li>
          <li className="flex items-center px-4 py-2 md:px-6 md:py-3">
            <MdSettings className="mr-3 w-[24px] h-[24px]" />
            Settings
          </li>
        </ul>
      </div>
      {/* <div className={`bg-white m-2 mb-8 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:w-auto w-64`}>
        <ul className="mt-10 p-4 space-y-8 text-gray-500">
          <li className="flex items-center">
            <FaHome className="mr-3" />
            Getting Started
          </li>
          <li className="flex items-center">
            <HiOutlineViewGrid className="mr-3" />
            Overview
          </li>
          <li className="flex items-center">
            <MdAccountCircle className="mr-3" />
            Accounts
          </li>
          <li className="flex items-center font-bold text-gray-800">
            <FaFileInvoice className="mr-3" />
            Invoice
          </li>
          <li className="flex items-center">
            <FaUser className="mr-3" />
            Beneficiary Management
          </li>
          <li className="flex items-center">
            <MdOutlineHelpOutline className="mr-3" />
            Help Center
          </li>
          <li className="flex items-center">
            <FaCog className="mr-3" />
            Settings
          </li>
        </ul>
      </div> */}
    </div>
  );
};

export default Sidebar;
