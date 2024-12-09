import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const PaymentSuccessfull = () => {
  const navigate = useNavigate()
  const [animationPlayed, setAnimationPlayed] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimationPlayed(true);
    }, 2000); // Set the duration for the animation

    return () => clearTimeout(timeout);
  }, []);

  const handleNewOrder = () => {
    navigate('/');
    // Redirect to a new order page or homepage
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r ">
      <div className={`bg-white p-10 rounded-lg shadow-xl text-center transform transition-all duration-700 ease-out ${animationPlayed ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}>
        {!animationPlayed && (
          <img
            src="https://i.gifer.com/7efs.gif"
            alt="Payment Animation"
            className="mb-4 w-36 h-36 mx-auto"
          />
        )}
        {animationPlayed && (
          <div className="flex flex-col items-center">
            <img src="https://cdn-icons-png.flaticon.com/512/11433/11433360.png" className="h-36 w-36" alt="Success Icon" />
            <h2 className="text-3xl font-bold mt-6 text-gray-800">Payment Successful!</h2>
            <p className="mt-4 text-gray-600 text-lg">Thank you for your purchase. Your payment has been successfully processed.</p>
            <button
              onClick={handleNewOrder}
              className="mt-8 bg-green-500 text-white py-3 px-6 rounded-full shadow-md hover:bg-green-600 transition-colors duration-300"
            >
              Go Back for New Order
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentSuccessfull;
