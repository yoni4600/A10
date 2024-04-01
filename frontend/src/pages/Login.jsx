import React from 'react';

export const Login = () => {
  const handleLoginWithGoogle = () => {
    // Redirect to your backend's OAuth route for Google login
    window.location.href = 'http://localhost:4000/auth/google';
  };

  return (
    <div className="bg-customBackground min-h-screen flex flex-col items-center justify-center px-4">
      {/* Added header */}
      <h1 className="text-5xl font-bold text-gray-700 mb-16 text-center">Welcome to PILOK</h1>
      <div className="bg-customDiv p-8 rounded-xl shadow-xl max-w-lg w-full mx-auto">
        <h2 className="text-center text-3xl font-bold text-gray-700 mb-8">Login To Your Account</h2>
        <div className="flex justify-center">
          <button onClick={handleLoginWithGoogle} className="text-white bg-customSubmmit hover:bg-customSubmmitHover focus:ring-4 focus:ring-customSubmmitHover font-medium rounded-lg text-sm px-6 py-3 text-center transition-colors duration-200">Login with Google</button>
        </div>
      </div>
    </div>
  );
};
