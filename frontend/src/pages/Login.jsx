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
    <div className="bg-gradient-to-r from-blue-200 to-purple-300 min-h-screen flex items-center justify-center px-4">
      <div className="flex justify-between max-w-lg w-full mx-auto">
        <div className="bg-white p-8 rounded-xl shadow-xl w-1/2 mr-4">
          <h2 className="text-center text-3xl font-bold text-gray-700 mb-8">Login To Your Account</h2>
          <div className="flex justify-center">
            <button onClick={handleLogin} className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-3 text-center transition-colors duration-200">Login</button>
          </div>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-xl w-1/2 ml-4">
          <h2 className="text-center text-3xl font-bold text-gray-700 mb-8">Register An Account</h2>
          <div className="flex justify-center">
            <button onClick={handleRegister} className="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-6 py-3 text-center transition-colors duration-200">Register with Email</button>
          </div>
        </div>
      </div>
    </div>
  );
};
