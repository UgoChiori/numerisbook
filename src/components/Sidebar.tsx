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
    <div className="lg:flex">
      <button className="lg:hidden p-4 text-[#697598]" onClick={toggleSidebar}>
        <GiHamburgerMenu size={26} />
      </button>

      {/* Sidebar Component*/}
      <div
        className={`absolute lg:relative lg:h-screen bg-gray-200 lg:bg-white mb-2 lg:mb-8 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:w-auto w-full h-full overflow-y-auto z-40 rounded-lg`}
      >
        <div className="flex items-center p-4">
          <img
            src="/images/logoonetwo.jpeg"
            alt="Logo"
            className="lg:h-6 lg:object-cover hidden lg:block"
          />
        </div>
        <ul className="lg:p-4 p-6 lg:space-y-8 space-y-4 text-gray-500">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;

            return (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center px-4 py-2 lg:px-6 lg:py-3 ${
                  isActive
                    ? "border-4 border-gray-200 text-gray-500 rounded-full"
                    : "text-gray-500"
                }`}
                onClick={() => setIsOpen(false)} 
              >
                <Icon
                  className={`mr-3 w-[24px] h-[24px] ${isActive ? "" : ""}`}
                />
                {item.name}
              </Link>
            );
          })}
        </ul>
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default Sidebar;
