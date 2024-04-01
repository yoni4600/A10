import React, { useState } from 'react';
import { fetchRegister } from '../../services/authService';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const { response, data } = await fetchRegister(username, password, userType);
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
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
