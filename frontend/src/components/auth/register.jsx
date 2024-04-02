import React, { useState } from 'react';
import { fetchRegister } from '../../services/authService';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('');
  const [country, setCountry] = useState('');
  const [language, setLanguage] = useState('');
  const [description, setDescription] = useState('');
  const [zoomLink, setZoomLink] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const { response, data } = await fetchRegister(username, password, userType, country, language, description, zoomLink);
      if (response.ok) {
        console.log('Registration successful');
        // Handle success as needed, e.g., redirect
      } else {
        console.error('Registration failed:', data.error);
        alert('Registration failed: ' + data.error);
      }
    } catch (error) {
      console.error('An error occurred while registering:', error);
      alert('An error occurred while registering');
    }
  };

  const handleReturn = () => {
    navigate('/'); 
  };

  const additionalOptions = userType === 'NativeSpeaker' && (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Country:</label>
        <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"/>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Language:</label>
        <input type="text" value={language} onChange={(e) => setLanguage(e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"/>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Description:</label>
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"/>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Zoom Link:</label>
        <input type="text" value={zoomLink} onChange={(e) => setZoomLink(e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"/>
      </div>
    </div>
  );

  return (
    <div className="relative bg-customBackground min-h-screen flex flex-col">
      <button onClick={handleReturn} className="absolute top-0 right-0 text-white bg-customSubmmit hover:bg-customSubmmitHover focus:ring-4 focus:ring-customSubmmitHover font-medium rounded-lg text-sm px-6 py-3 text-center transition-colors duration-200">
        Return
      </button>
      <div className="max-w-md mx-auto my-10 bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">Register</h2>
        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Username:</label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"/>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"/>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">User Type:</label>
            <select value={userType} onChange={(e) => setUserType(e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
              <option value="Regular">Regular</option>
              <option value="NativeSpeaker">Native Speaker</option>
            </select>
          </div>
          {additionalOptions}
          <div className="flex justify-center">
            <button type="submit" className="text-white bg-customSubmmit hover:bg-customSubmmitHover focus:ring-4 focus:ring-customSubmmitHover font-medium rounded-lg text-sm px-6 py-3 text-center transition-colors duration-200">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
