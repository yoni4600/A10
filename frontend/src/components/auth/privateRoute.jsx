import { BrowserRouter as Navigate } from 'react-router-dom'; // Import Navigate

export const PrivateRoute = ({ children, isLoggedIn }) => {
    if (!isLoggedIn) {
      return <Navigate to="/login" replace />; // Redirect to login if not logged in
    }
  
    return children;
  };