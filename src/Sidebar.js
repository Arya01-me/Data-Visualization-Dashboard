import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpenIcon, ChatIcon, ChevronDownIcon, ChevronUpIcon, CurrencyRupeeIcon, ShoppingBagIcon, UserCircleIcon, UserIcon, UserGroupIcon } from '@heroicons/react/solid';
import { AppWindowIcon, Circle, } from 'lucide-react';

function Sidebar({ isOpen, toggleSidebar }) {
  const navigate = useNavigate();
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);
  const [dropdownHeight, setDropdownHeight] = useState('0px');
  const dropdownRef = useRef(null);

  const handleNavigation = (path) => {
    navigate(path);
    toggleSidebar();
  };

  const toggleDashboard = () => {
    setIsDashboardOpen(!isDashboardOpen);
  };

  useEffect(() => {
    if (dropdownRef.current) {
      setDropdownHeight(isDashboardOpen ? `${dropdownRef.current.scrollHeight}px` : '0px');
    }
  }, [isDashboardOpen]);

  return (
    <div className={`bg-white text-black h-full fixed border-l-0 border-r-4 border-r-gray transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <h2 className="border-white rounded-lg rounded-r-md bg-orange-200 flex text-3xl text-center text-gray-600 font-semibold p-4">
        <AppWindowIcon className="text-gray-600 m-3 h-6 w-6 flex" />
        APP❤️‍🔥
      </h2>
      <ul>
        <li className="p-4 font-light hover:text-lg hover:bg-gray-50 cursor-pointer flex items-center transition-all duration-300" onClick={toggleDashboard}>
          <span className="flex items-center">
            <UserCircleIcon className="text-gray-600 h-6 w-6 mr-2" />
            Dashboard
          </span>
          {isDashboardOpen ? <ChevronUpIcon className="h-6 w-6" /> : <ChevronDownIcon className="h-6 w-6" />}
        </li>
        <ul ref={dropdownRef} className="overflow-hidden transition-all duration-300 ease-in-out" style={{ height: dropdownHeight }}>
          {isDashboardOpen && (
            <ul className="ml-4">
              <li className="p-4 font-light text-black hover:text-lg hover:bg-gray-50 cursor-pointer flex items-center transition-all duration-300" onClick={() => handleNavigation('/main')}>
                <Circle className="h-2 w-2 mr-2" />
                Analytics
              </li>
              <li className="p-4 font-light text-black hover:text-lg hover:bg-gray-50 cursor-pointer flex items-center transition-all duration-300" onClick={() => handleNavigation('/main')}>
                <Circle className="h-2 w-2 mr-2" />
                User
              </li>
              <li className="p-4 font-light text-black hover:text-lg hover:bg-gray-50 cursor-pointer flex items-center transition-all duration-300" onClick={() => handleNavigation('/main')}>
                <Circle className="h-2 w-2 mr-2" />
                Ecommerce
              </li>
              <li className="p-4 font-light text-black hover:text-lg hover:bg-gray-50 cursor-pointer flex items-center transition-all duration-300" onClick={() => handleNavigation('/main')}>
                <Circle className="h-2 w-2 mr-2" />
                Logistics
              </li>
              <li className="p-4 font-light text-black hover:text-lg hover:bg-gray-50 cursor-pointer flex items-center transition-all duration-300" onClick={() => handleNavigation('/')}>
                <Circle className="h-2 w-2 mr-2" />
                Academy
              </li>
            </ul>
          )}
        </ul>
        <li className="p-4 font-light text-black hover:text-lg hover:bg-gray-50 cursor-pointer flex items-center transition-all duration-300" onClick={() => handleNavigation('/')}>
          <CurrencyRupeeIcon className="text-gray-600 h-6 w-6 mr-2" />
          Source
        </li>
        <li className="p-4 font-light text-black hover:text-lg hover:bg-gray-50 cursor-pointer flex items-center transition-all duration-300" onClick={() => handleNavigation('/')}>
          <BookOpenIcon className="text-gray-600 h-6 w-6 mr-2" />
          SWOT
        </li>
        <li className="p-4 font-light text-black hover:text-lg hover:bg-gray-50 cursor-pointer flex items-center transition-all duration-300" onClick={() => handleNavigation('/')}>
          <ShoppingBagIcon className="text-gray-600 h-6 w-6 mr-2" />
          Country
        </li>
        <li className="p-4 font-light text-black hover:text-lg hover:bg-gray-50 cursor-pointer flex items-center transition-all duration-300" onClick={() => handleNavigation('/')}>
          <ChatIcon className="text-gray-600 h-6 w-6 mr-2" />
          City
        </li>
        <li className="p-4 font-light text-black hover:text-lg hover:bg-gray-50 cursor-pointer flex items-center transition-all duration-300" onClick={() => handleNavigation('/')}>
          <ShoppingBagIcon className="text-gray-600 h-6 w-6 mr-2" />
          Invoice
        </li>
        <li className="p-4 font-light text-black hover:text-lg hover:bg-gray-50 cursor-pointer flex items-center transition-all duration-300" onClick={() => handleNavigation('/')}>
          <UserIcon className="text-gray-600 h-6 w-6 mr-2" />
          User
        </li>
        <li className="p-4 font-light text-black hover:text-lg hover:bg-gray-50 cursor-pointer flex items-center transition-all duration-300" onClick={() => handleNavigation('/')}>
          <UserGroupIcon className="text-gray-600 h-6 w-6 mr-2" />
          Roles & Permissions
        </li>
        <li className="p-4 font-light text-black hover:text-lg hover:bg-gray-50 cursor-pointer flex items-center transition-all duration-300" onClick={() => handleNavigation('/')}>
          <BookOpenIcon className="text-gray-600 h-6 w-6 mr-2" />
          Pages
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
