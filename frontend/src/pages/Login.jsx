import React from 'react';
import { useNavigate} from 'react-router-dom';

export const Login = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate('/login');
  };

  const handleRegister = () => {
    navigate('/register');
  };

  return (
    <div className="bg-customBackground min-h-screen flex flex-col px-4">
       <header className="w-full py-10 text-center">
        <h1 className="text-black text-4xl font-bold">Welcome To Pilok!</h1>
      </header>
      <div className="flex justify-between max-w-lg w-full mx-auto">
        <div className="bg-customDiv p-8 rounded-xl shadow-xl w-1/2 mr-4">
          <h2 className="text-center text-3xl font-bold text-gray-700 mb-8">Login To An Account</h2>
          <div className="flex justify-center">
            <button onClick={handleLogin} className="text-white bg-customSubmmit hover:bg-customSubmmitHover focus:ring-4 focus:ring-customSubmmitHover font-medium rounded-lg text-sm px-6 py-3 text-center transition-colors duration-200">Login</button>
          </div>
        </div >
        <div className="bg-customDiv p-8 rounded-xl shadow-xl w-1/2 ml-4">
          <h2 className="text-center text-3xl font-bold text-gray-700 mb-8">Register An Account</h2>
          <div className="flex justify-center">
            <button onClick={handleRegister} className="text-white bg-customSubmmit hover:bg-customSubmmitHover focus:ring-4 focus:ring-customSubmmitHover font-medium rounded-lg text-sm px-6 py-3 text-center transition-colors duration-200">Register</button>
          </div>
        </div>
      </div>
    </div>
  );
};
