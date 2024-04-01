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
        // If login successful, redirect or handle as needed
        console.log('Login successful');
        document.cookie = `token=${data.token};`;
        navigate('/Home');
      } else {
        // Handle login failure, e.g., display error message
        console.error('Login failed:', data.error);
        alert('Login failed: ' + data.error);
      }
    } catch (error) {
      console.error('An error occurred while logging in:', error);
      // Handle error, e.g., display error message
      alert('An error occurred while logging in');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Username:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
