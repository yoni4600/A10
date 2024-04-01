import { useState } from 'react';
import { isAuthToGoogle } from '../services/authService';

const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Set initial value to false

  // Method to toggle isLoggedIn state
  const toggleLogin = async () => {
    try {
      const result = await isAuthToGoogle(); // Call isAuthToGoogle function
      setIsLoggedIn(result); // Set isLoggedIn state based on the result
    } catch (error) {
      console.error('Error toggling login:', error);
    }
  };

  return { isLoggedIn, toggleLogin };
};

export default useAuth;
