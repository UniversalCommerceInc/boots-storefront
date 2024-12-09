import React from 'react';

const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white z-99 p-4 rounded shadow-lg flex flow-col items-center justify-center space-x-2">
       <div> <p className="text-gray-700">Please wait...</p> </div>
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-indigo-900 rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-indigo-900 rounded-full animate-bounce delay-200"></div>
          <div className="w-3 h-3 bg-indigo-900 rounded-full animate-bounce delay-400"></div>
          <div className="w-3 h-3 bg-indigo-900 rounded-full animate-bounce delay-600"></div>
          <div className="w-3 h-3 bg-indigo-900 rounded-full animate-bounce delay-800"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
