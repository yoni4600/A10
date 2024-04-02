import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HOST, PORT } from "../config/config";
const Navbar = () => {
  const navigate = useNavigate();
  
  async function logoutHandler() {
    try {
      const response = await fetch(`http://${HOST}:${PORT}/user/logout`, {
        method: 'POST',
        credentials: 'include' // Include cookies in the request
      });
      if (response.ok) {
        navigate('/');
      } else {
        // Handle error response
        console.error('Logout failed:', response.statusText);
      }
    } catch (error) {
      // Handle network errors
      console.error('Network error:', error.message);
    }
  }
  
  function deleteCookie(name) {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  }  
  
  function returnHandler() {
    navigate(-1);
  }

  function navigateHome() {
    navigate('/Home');
  }

  return (
    <header className="bg-customBackground shadow py-4 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex justify-start">
          <button onClick={logoutHandler} className="text-white bg-customRed hover:bg-red-700 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
            Logout
          </button>
        </div>
        <h1 className="text-2xl leading-6 font-bold text-gray-700">Pillow Talk</h1>
        <div className="flex justify-end items-center">
          <button onClick={navigateHome} className="text-white bg-cutsomGreen hover:bg-green-700 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
            Home
          </button>
          <button onClick={returnHandler} className="text-white bg-customBlue hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
            Return
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
