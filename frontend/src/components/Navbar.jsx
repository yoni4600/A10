import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  function logoutHandler() {
    // Logic to handle logout
    navigate('/');
  }

  function returnHandler() {
    navigate(-1);
  }

  function navigateHome() {
    navigate('/Home');
  }

  return (
    <header className="bg-white shadow py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex justify-start">
          <button onClick={logoutHandler} className="text-white bg-red-500 hover:bg-red-700 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
            Logout
          </button>
        </div>
        <h1 className="text-2xl leading-6 font-bold text-gray-700">Pillow Talk</h1>
        <div className="flex justify-end items-center">
          <button onClick={navigateHome} className="text-white bg-green-500 hover:bg-green-700 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
            Home
          </button>
          <button onClick={returnHandler} className="text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
            Return
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
