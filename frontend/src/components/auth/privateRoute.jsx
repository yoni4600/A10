import { Navigate } from 'react-router-dom'; // Import Navigate

/**
 * PrivateRoute component for handling private routes.
 * @param {object} children - The child components to be rendered.
 * @param {boolean} isLoggedIn - Indicates if the user is logged in.
 * @returns {object} The child components if the user is logged in, otherwise redirects to the login page.
 */
export const PrivateRoute = ({ children, isLoggedIn }) => {
    if (!isLoggedIn) {
      return <Navigate to="/login" replace />; // Redirect to login if not logged in
    }
    return children;
  };