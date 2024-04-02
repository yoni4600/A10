import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchRegister } from '../../services/authService';

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
        navigate('/login');
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

  const additionalOptions = userType === 'NativeSpeaker' && (
    <div>
      <div>
        <label>Country:</label>
        <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} />
      </div>
      <div>
        <label>Language:</label>
        <input type="text" value={language} onChange={(e) => setLanguage(e.target.value)} />
      </div>
      <div>
        <label>Description:</label>
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>
      <div>
        <label>Zoom Link:</label>
        <input type="text" value={zoomLink} onChange={(e) => setZoomLink(e.target.value)} />
      </div>
    </div>
  );

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <div>
          <label>Username:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div>
          <label>User Type:</label>
          <select value={userType} onChange={(e) => setUserType(e.target.value)}>
            <option value="Regular">Regular</option>
            <option value="NativeSpeaker">NativeSpeaker</option>
            {/* Add more user types if needed */}
          </select>
        </div>
        {additionalOptions}
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
