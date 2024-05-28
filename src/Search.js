import { LogoutIcon, MenuIcon } from '@heroicons/react/solid';
import { ArrowBigLeft, User2Icon } from 'lucide-react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Search({ toggleSidebar, onSignOut }) {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSignOut = () => {
  
    onSignOut();
    
    navigate('/login');
  };

  return (
    <div className="flex items-center justify-center bg-white shadow-lg p-5">
      <button 
        onClick={toggleSidebar}
        className="p-4 rounded-lg text-black focus:outline-none"
      >
        <MenuIcon className="h-6 w-6" />
      </button>
      
      <div className="flex-1 mx-4">
        <div className="relative flex items-center">
          <input
            className="flex-1 rounded-lg p-4 text-gray-600 border border-gray-600 bg-white font-bold font-mono w-full"
            placeholder="Search..."
            type="text"
          />
          <div className="relative">
            <User2Icon className="-ml-10 text-gray-600 cursor-pointer" onClick={() => setIsDropdownOpen(!isDropdownOpen)} />
            {isDropdownOpen && (
              <div className="absolute top-10 right-0  flex-2 w-48  mt-2 bg-white border border-gray-200 shadow-md rounded-md z-10">
                <ul>
                  <div className='flex hover:bg-gray-200'>
                  <LogoutIcon className=' m-3 h-6 w-6  text-gray-600' />
                  <li className="px-4 py-2 p-5  text-gray-600 font-mono font-bold cursor-pointer" onClick={handleSignOut}>Sign Out</li>
                  </div>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
