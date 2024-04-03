import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchLogin } from '../../services/authService';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { response, data } = await fetchLogin(username, password);
      if (response.ok) {
        console.log('Login successful');
        document.cookie = `token=${data.token};`; 
        window.location.href = '/home'; // Redirect to '/home'
      } else {
        console.error('Login failed:', data.error);
        alert('Login failed: ' + data.error);
      }
    } catch (error) {
      console.error('An error occurred while logging in:', error);
      alert('An error occurred while logging in');
    }
  };

  const handleReturn = () => {
    navigate('/'); 
  };

  return (
    <div className="relative bg-customBackground min-h-screen flex flex-col">
      <button onClick={handleReturn} className="absolute top-0 right-0 text-white bg-customSubmmit hover:bg-customSubmmitHover focus:ring-4 focus:ring-customSubmmitHover font-medium rounded-lg text-sm px-6 py-3 text-center transition-colors duration-200">
        Return
      </button>
      <div className="flex justify-center mt-12"> {/* Adjusted margin to account for the button */}
        <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">Login</h2>
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Username:</label>
              <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"/>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Password:</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"/>
            </div>
            <div className="flex justify-center">
              <button type="submit" className="text-white bg-customSubmmit hover:bg-customSubmmitHover focus:ring-4 focus:ring-customSubmmitHover font-medium rounded-lg text-sm px-6 py-3 text-center transition-colors duration-200">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;