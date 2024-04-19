import { HOST, PORT } from "../config/config";

/**
 * Validates the token by sending it to the server for verification.
 * @param {string} token - The token to be validated.
 * @returns {Promise<boolean>} A promise that resolves to true if the token is valid, false otherwise.
 */
export const validateToken = async (token) => {
  try {
    const response = await fetch(`http://${HOST}:${PORT}/user/validateToken`, {
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

/**
 * Sends a registration request to the server.
 * @param {string} username - The username for registration.
 * @param {string} password - The password for registration.
 * @param {string} userType - The type of user for registration.
 * @param {string} country - The country for registration.
 * @param {string} language - The language for registration.
 * @param {string} description - The description for registration.
 * @param {string} zoomLink - The Zoom link for registration.
 * @returns {Promise<{ response: Response, data: any }>} A promise that resolves to an object containing the server response and data.
 */
export const fetchRegister = async (username, password, userType, country, language, description, zoomLink) => {
  try {
    const response = await fetch(`https://${HOST}:${PORT}/user/register`, {
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
