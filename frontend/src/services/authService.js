import { HOST, PORT } from "../config/config";

export const validateToken = async (token) => {
  try {
    const response = await fetch('http://localhost:4000/user/validateToken', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}` // Include 'Bearer ' before the token
      },
    });
    const data = await response.json();
    if (response.ok) {
      return true;
    } else {
      console.error('Token validation failed:', data.error);
      return false;
    }
  } catch (error) {
    console.error('Error validating token:', error);
    return false;
  }
};

export const fetchRegister = async (username, password, userType, country, language, description, zoomLink) => {
  try {
    const response = await fetch(`http://${HOST}:${PORT}/user/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password, userType, country, language, description, zoomLink}),
    });

    const data = await response.json();
    return { response, data };
  } catch (error) {
    console.error('Error registering:', error);
    return { error };
  }
};

export const fetchLogin = async (username, password) => {
  try {
    const response = await fetch(`http://${HOST}:${PORT}/user/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();
    return { response, data };
  } catch (error) {
    console.error('Error logging in:', error);
    return { error };
  }
};
