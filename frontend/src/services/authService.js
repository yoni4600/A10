// authService.js
export const checkAuthStatus = async () => {
    const response = await fetch('http://localhost:4000/auth/session');
    const data = await response.json();
    return data;
  };
  